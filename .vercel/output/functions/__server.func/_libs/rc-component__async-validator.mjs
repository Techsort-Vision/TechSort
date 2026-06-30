function newMessages() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      tel: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone() {
      const cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
const messages = newMessages();
const formatRegExp = /%[sdj%]/g;
let warning = () => {
};
if (typeof process !== "undefined" && process.env && false) ;
function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  const fields = {};
  errors.forEach((error) => {
    const field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template, ...args) {
  let i = 0;
  const len = args.length;
  if (typeof template === "function") {
    return template.apply(null, args);
  }
  if (typeof template === "string") {
    const str = template.replace(formatRegExp, (x) => {
      if (x === "%%") {
        return "%";
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case "%s":
          return String(args[i++]);
        case "%d":
          return Number(args[i++]);
        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return "[Circular]";
          }
          break;
        default:
          return x;
      }
    });
    return str;
  }
  return template;
}
function isNativeStringType(type2) {
  return type2 === "string" || type2 === "url" || type2 === "hex" || type2 === "email" || type2 === "date" || type2 === "pattern" || type2 === "tel";
}
function isEmptyValue(value, type2) {
  if (value === void 0 || value === null) {
    return true;
  }
  if (type2 === "array" && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type2) && typeof value === "string" && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  const results = [];
  let total = 0;
  const arrLength = arr.length;
  function count(errors) {
    results.push(...errors || []);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach((a) => {
    func(a, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  let index = 0;
  const arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    const original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  const ret = [];
  Object.keys(objArr).forEach((k) => {
    ret.push(...objArr[k] || []);
  });
  return ret;
}
class AsyncValidationError extends Error {
  errors;
  fields;
  constructor(errors, fields) {
    super("Async Validation Error");
    this.errors = errors;
    this.fields = fields;
  }
}
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    const pending2 = new Promise((resolve, reject) => {
      const next = (errors) => {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };
      const flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    pending2.catch((e) => e);
    return pending2;
  }
  const firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  const objArrKeys = Object.keys(objArr);
  const objArrLength = objArrKeys.length;
  let total = 0;
  const results = [];
  const pending = new Promise((resolve, reject) => {
    const next = (errors) => {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }
    objArrKeys.forEach((key) => {
      const arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending.catch((e) => e);
  return pending;
}
function isErrorObj(obj) {
  return !!(obj && obj.message !== void 0);
}
function getValue(value, path) {
  let v = value;
  for (let i = 0; i < path.length; i++) {
    if (v == void 0) {
      return v;
    }
    v = v[path[i]];
  }
  return v;
}
function complementError(rule, source) {
  return (oe) => {
    let fieldValue;
    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }
    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }
    return {
      message: typeof oe === "function" ? oe() : oe,
      fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (const s in source) {
      if (source.hasOwnProperty(s)) {
        const value = source[s];
        if (typeof value === "object" && typeof target[s] === "object") {
          target[s] = {
            ...target[s],
            ...value
          };
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}
const ENUM$1 = "enum";
const enumerable$1 = (rule, value, source, errors, options) => {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
  if (rule[ENUM$1].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(", ")));
  }
};
const pattern$2 = (rule, value, source, errors, options) => {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === "string") {
      const _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};
const range = (rule, value, source, errors, options) => {
  const len = typeof rule.len === "number";
  const min = typeof rule.min === "number";
  const max = typeof rule.max === "number";
  const spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  let val = value;
  let key = null;
  const num = typeof value === "number";
  const str = typeof value === "string";
  const arr = Array.isArray(value);
  if (num) {
    key = "number";
  } else if (str) {
    key = "string";
  } else if (arr) {
    key = "array";
  }
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    val = value.replace(spRegexp, "_").length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};
const required$1 = (rule, value, source, errors, options, type2) => {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type2 || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};
let urlReg;
const getUrlRegex = (() => {
  if (urlReg) {
    return urlReg;
  }
  const word = "[a-fA-F\\d:]";
  const b = (options) => options && options.includeBoundaries ? `(?:(?<=\\s|^)(?=${word})|(?<=${word})(?=\\s|$))` : "";
  const v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
  const v6seg = "[a-fA-F\\d]{1,4}";
  const v6List = [
    `(?:${v6seg}:){7}(?:${v6seg}|:)`,
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    `(?:${v6seg}:){6}(?:${v4}|:${v6seg}|:)`,
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    `(?:${v6seg}:){5}(?::${v4}|(?::${v6seg}){1,2}|:)`,
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    `(?:${v6seg}:){4}(?:(?::${v6seg}){0,1}:${v4}|(?::${v6seg}){1,3}|:)`,
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    `(?:${v6seg}:){3}(?:(?::${v6seg}){0,2}:${v4}|(?::${v6seg}){1,4}|:)`,
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    `(?:${v6seg}:){2}(?:(?::${v6seg}){0,3}:${v4}|(?::${v6seg}){1,5}|:)`,
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    `(?:${v6seg}:){1}(?:(?::${v6seg}){0,4}:${v4}|(?::${v6seg}){1,6}|:)`,
    // 1::              1::3:4:5:6:7:8   1::8            1::
    `(?::(?:(?::${v6seg}){0,5}:${v4}|(?::${v6seg}){1,7}|:))`
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ];
  const v6Eth0 = `(?:%[0-9a-zA-Z]{1,})?`;
  const v6 = `(?:${v6List.join("|")})${v6Eth0}`;
  const v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);
  const v4exact = new RegExp(`^${v4}$`);
  const v6exact = new RegExp(`^${v6}$`);
  const ip = (options) => options && options.exact ? v46Exact : new RegExp(`(?:${b(options)}${v4}${b(options)})|(?:${b(options)}${v6}${b(options)})`, "g");
  ip.v4 = (options) => options && options.exact ? v4exact : new RegExp(`${b(options)}${v4}${b(options)}`, "g");
  ip.v6 = (options) => options && options.exact ? v6exact : new RegExp(`${b(options)}${v6}${b(options)}`, "g");
  const protocol = `(?:(?:[a-z]+:)?//)`;
  const auth = "(?:\\S+(?::\\S*)?@)?";
  const ipv4 = ip.v4().source;
  const ipv6 = ip.v6().source;
  const host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
  const domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
  const tld = `(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))`;
  const port = "(?::\\d{2,5})?";
  const path = '(?:[/?#][^\\s"]*)?';
  const regex = `(?:${protocol}|www\\.)${auth}(?:localhost|${ipv4}|${ipv6}|${host}${domain}${tld})${port}${path}`;
  urlReg = new RegExp(`(?:^${regex}$)`, "i");
  return urlReg;
});
const pattern$1 = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  /**
   * Phone number regex, support country code, brackets, spaces, and dashes (or non-breaking hyphen \u2011).
   * @see https://regexr.com/3c53v
   * @see https://ihateregex.io/expr/phone/
   * @see https://developers.google.com/style/phone-numbers using non-breaking hyphen \u2011
   */
  tel: /^(\+[0-9]{1,3}[-\s\u2011]?)?(\([0-9]{1,4}\)[-\s\u2011]?)?([0-9]+[-\s\u2011]?)*[0-9]+$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
const types = {
  integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  float(value) {
    return types.number(value) && !types.integer(value);
  },
  array(value) {
    return Array.isArray(value);
  },
  regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date(value) {
    return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
  },
  number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === "number";
  },
  object(value) {
    return typeof value === "object" && !types.array(value);
  },
  method(value) {
    return typeof value === "function";
  },
  email(value) {
    return typeof value === "string" && value.length <= 320 && !!value.match(pattern$1.email);
  },
  tel(value) {
    return typeof value === "string" && value.length <= 32 && !!value.match(pattern$1.tel);
  },
  url(value) {
    return typeof value === "string" && value.length <= 2048 && !!value.match(getUrlRegex());
  },
  hex(value) {
    return typeof value === "string" && !!value.match(pattern$1.hex);
  }
};
const type$1 = (rule, value, source, errors, options) => {
  if (rule.required && value === void 0) {
    required$1(rule, value, source, errors, options);
    return;
  }
  const custom = ["integer", "float", "array", "regexp", "object", "method", "email", "tel", "number", "date", "url", "hex"];
  const ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};
const whitespace = (rule, value, source, errors, options) => {
  if (/^\s+$/.test(value) || value === "") {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};
const rules = {
  required: required$1,
  whitespace,
  type: type$1,
  range,
  enum: enumerable$1,
  pattern: pattern$2
};
const any = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
  }
  callback(errors);
};
const array = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((value === void 0 || value === null) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, "array");
    if (value !== void 0 && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
const boolean = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
const date = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "date") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "date")) {
      let dateObject;
      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }
      rules.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
};
const ENUM = "enum";
const enumerable = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules[ENUM](rule, value, source, errors, options);
    }
  }
  callback(errors);
};
const floatFn = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
const integer = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
const method = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
const number = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === "") {
      value = void 0;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
const object = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
const pattern = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "string")) {
      rules.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
const regexp = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
const required = (rule, value, callback, source, options) => {
  const errors = [];
  const type2 = Array.isArray(value) ? "array" : typeof value;
  rules.required(rule, value, source, errors, options, type2);
  callback(errors);
};
const string = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, "string");
    if (!isEmptyValue(value, "string")) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
};
const type = (rule, value, callback, source, options) => {
  const ruleType = rule.type;
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
const validators = {
  string,
  method,
  number,
  boolean,
  regexp,
  integer,
  float: floatFn,
  array,
  object,
  enum: enumerable,
  pattern,
  date,
  url: type,
  hex: type,
  email: type,
  tel: type,
  required,
  any
};
class Schema {
  // ========================= Static =========================
  static register = function register(type2, validator) {
    if (typeof validator !== "function") {
      throw new Error("Cannot register a validator by type, validator is not a function");
    }
    validators[type2] = validator;
  };
  static warning = warning;
  static messages = messages;
  static validators = validators;
  // ======================== Instance ========================
  rules = null;
  _messages = messages;
  constructor(descriptor) {
    this.define(descriptor);
  }
  define(rules2) {
    if (!rules2) {
      throw new Error("Cannot configure a schema with no rules");
    }
    if (typeof rules2 !== "object" || Array.isArray(rules2)) {
      throw new Error("Rules must be an object");
    }
    this.rules = {};
    Object.keys(rules2).forEach((name) => {
      const item = rules2[name];
      this.rules[name] = Array.isArray(item) ? item : [item];
    });
  }
  messages(messages2) {
    if (messages2) {
      this._messages = deepMerge(newMessages(), messages2);
    }
    return this._messages;
  }
  // eslint-disable-next-line @typescript-eslint/unified-signatures
  validate(source_, o = {}, oc = () => {
  }) {
    let source = source_;
    let options = o;
    let callback = oc;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }
      return Promise.resolve(source);
    }
    function complete(results) {
      let errors = [];
      let fields = {};
      function add(e) {
        if (Array.isArray(e)) {
          errors = errors.concat(...e);
        } else {
          errors.push(e);
        }
      }
      for (let i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors);
        callback(errors, fields);
      }
    }
    if (options.messages) {
      let messages$1 = this.messages();
      if (messages$1 === messages) {
        messages$1 = newMessages();
      }
      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }
    const series = {};
    const keys = options.keys || Object.keys(this.rules);
    keys.forEach((z) => {
      const arr = this.rules[z];
      let value = source[z];
      arr.forEach((r) => {
        let rule = r;
        if (typeof rule.transform === "function") {
          if (source === source_) {
            source = {
              ...source
            };
          }
          value = source[z] = rule.transform(value);
          if (value !== void 0 && value !== null) {
            rule.type = rule.type || (Array.isArray(value) ? "array" : typeof value);
          }
        }
        if (typeof rule === "function") {
          rule = {
            validator: rule
          };
        } else {
          rule = {
            ...rule
          };
        }
        rule.validator = this.getValidationMethod(rule);
        if (!rule.validator) {
          return;
        }
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = this.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule,
          value,
          source,
          field: z
        });
      });
    });
    const errorFields = {};
    return asyncMap(series, options, (data, doIt) => {
      const rule = data.rule;
      let deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullField(key, schema) {
        return {
          ...schema,
          fullField: `${rule.fullField}.${key}`,
          fullFields: rule.fullFields ? [...rule.fullFields, key] : [key]
        };
      }
      function cb(e = []) {
        let errorList = Array.isArray(e) ? e : [e];
        if (!options.suppressWarning && errorList.length) {
          Schema.warning("async-validator:", errorList);
        }
        if (errorList.length && rule.message !== void 0 && rule.message !== null) {
          errorList = [].concat(rule.message);
        }
        let filledErrors = errorList.map(complementError(rule, source));
        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }
        if (!deep) {
          doIt(filledErrors);
        } else {
          if (rule.required && !data.value) {
            if (rule.message !== void 0) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options.error) {
              filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
            }
            return doIt(filledErrors);
          }
          let fieldsSchema = {};
          if (rule.defaultField) {
            Object.keys(data.value).map((key) => {
              fieldsSchema[key] = rule.defaultField;
            });
          }
          fieldsSchema = {
            ...fieldsSchema,
            ...data.rule.fields
          };
          const paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach((field) => {
            const fieldSchema = fieldsSchema[field];
            const fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          const schema = new Schema(paredFieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, (errs) => {
            const finalErrors = [];
            if (filledErrors && filledErrors.length) {
              finalErrors.push(...filledErrors);
            }
            if (errs && errs.length) {
              finalErrors.push(...errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }
      let res;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        try {
          res = rule.validator(rule, data.value, cb, data.source, options);
        } catch (error) {
          console.error?.(error);
          if (!options.suppressValidatorError) {
            setTimeout(() => {
              throw error;
            }, 0);
          }
          cb(error.message);
        }
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || `${rule.fullField || rule.field} fails`);
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(() => cb(), (e) => cb(e));
      }
    }, (results) => {
      complete(results);
    }, source);
  }
  getType(rule) {
    if (rule.type === void 0 && rule.pattern instanceof RegExp) {
      rule.type = "pattern";
    }
    if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format("Unknown rule type %s", rule.type));
    }
    return rule.type || "string";
  }
  getValidationMethod(rule) {
    if (typeof rule.validator === "function") {
      return rule.validator;
    }
    const keys = Object.keys(rule);
    const messageIndex = keys.indexOf("message");
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === "required") {
      return validators.required;
    }
    return validators[this.getType(rule)] || void 0;
  }
}
export {
  Schema as S
};
