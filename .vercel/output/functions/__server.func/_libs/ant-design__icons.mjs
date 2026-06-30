import { r as reactExports, R as React } from "./react.mjs";
import { C as CheckCircleFilledSvg, a as CloseCircleFilledSvg, b as CloseOutlinedSvg, E as ExclamationCircleFilledSvg, I as InfoCircleFilledSvg, L as LoadingOutlinedSvg, c as CheckOutlinedSvg, D as DownOutlinedSvg, S as SearchOutlinedSvg, Q as QuestionCircleOutlinedSvg, d as EyeInvisibleOutlinedSvg, e as EyeOutlinedSvg, F as FileOutlinedSvg, f as DeleteOutlinedSvg, P as PaperClipOutlinedSvg, g as PictureOutlinedSvg, h as DownloadOutlinedSvg } from "./ant-design__icons-svg.mjs";
import { c as clsx } from "./clsx.mjs";
const IconContext = /* @__PURE__ */ reactExports.createContext({});
const APPEND_ORDER = "data-rc-order";
const APPEND_PRIORITY = "data-rc-priority";
const MARK_KEY = "rc-util-key";
const containerCache = /* @__PURE__ */ new Map();
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
function contains(root, node) {
  if (!root || !node) {
    return false;
  }
  if (root.contains) {
    return root.contains(node);
  }
  let current = node;
  while (current) {
    if (current === root) {
      return true;
    }
    current = current.parentNode;
  }
  return false;
}
function getMark({
  mark
} = {}) {
  if (mark) {
    return mark.startsWith("data-") ? mark : `data-${mark}`;
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  const head = document.querySelector("head");
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === "queue") {
    return "prependQueue";
  }
  return prepend ? "prepend" : "append";
}
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter((node) => node.tagName === "STYLE");
}
function injectCSS(css, option = {}) {
  if (!canUseDom()) {
    return null;
  }
  const {
    csp,
    prepend,
    priority = 0
  } = option;
  const mergedOrder = getOrder(prepend);
  const isPrependQueue = mergedOrder === "prependQueue";
  const styleNode = document.createElement("style");
  styleNode.setAttribute(APPEND_ORDER, mergedOrder);
  if (isPrependQueue && priority) {
    styleNode.setAttribute(APPEND_PRIORITY, `${priority}`);
  }
  if (csp?.nonce) {
    styleNode.nonce = csp.nonce;
  }
  styleNode.innerHTML = css;
  const container = getContainer(option);
  const {
    firstChild
  } = container;
  if (prepend) {
    if (isPrependQueue) {
      const existStyle = (option.styles || findStyles(container)).filter((node) => {
        if (!["prepend", "prependQueue"].includes(node.getAttribute(APPEND_ORDER))) {
          return false;
        }
        const nodePriority = Number(node.getAttribute(APPEND_PRIORITY) || 0);
        return priority >= nodePriority;
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key, option = {}) {
  let {
    styles
  } = option;
  styles ||= findStyles(getContainer(option));
  return styles.find((node) => node.getAttribute(getMark(option)) === key);
}
function syncRealContainer(container, option) {
  const cachedRealContainer = containerCache.get(container);
  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    const placeholderStyle = injectCSS("", option);
    if (!placeholderStyle) {
      return;
    }
    const {
      parentNode
    } = placeholderStyle;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
function updateCSS(css, key, originOption = {}) {
  if (!canUseDom()) {
    return null;
  }
  const container = getContainer(originOption);
  const styles = findStyles(container);
  const option = {
    ...originOption,
    styles
  };
  syncRealContainer(container, option);
  const existNode = findExistNode(key, option);
  if (existNode) {
    if (option.csp?.nonce && existNode.nonce !== option.csp.nonce) {
      existNode.nonce = option.csp.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  const newNode = injectCSS(css, option);
  newNode?.setAttribute(getMark(option), key);
  return newNode;
}
function getRoot(ele) {
  return ele?.getRootNode?.();
}
function getShadowRoot(ele) {
  const root = getRoot(ele);
  return typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot ? root : null;
}
const warned = {};
function warningOnce(valid, message) {
  if (valid || warned[message]) {
    return;
  }
  warned[message] = true;
}
function camelCase(input) {
  return input.replace(/-(.)/g, (match, g) => g.toUpperCase());
}
function warning(valid, message) {
  warningOnce(valid, `[@ant-design/icons] ${message}`);
}
function isIconDefinition(target) {
  return typeof target === "object" && typeof target.name === "string" && typeof target.theme === "string" && (typeof target.icon === "object" || typeof target.icon === "function");
}
function normalizeAttrs(attrs = {}) {
  return Object.keys(attrs).reduce((acc, key) => {
    const val = attrs[key];
    switch (key) {
      case "class":
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase(key)] = val;
    }
    return acc;
  }, {});
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return /* @__PURE__ */ React.createElement(node.tag, {
      key,
      ...normalizeAttrs(node.attrs)
    }, (node.children || []).map((child, index) => generate(child, `${key}-${node.tag}-${index}`)));
  }
  return /* @__PURE__ */ React.createElement(node.tag, {
    key,
    ...normalizeAttrs(node.attrs),
    ...rootProps
  }, (node.children || []).map((child, index) => generate(child, `${key}-${node.tag}-${index}`)));
}
const iconStyles = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
  vertical-align: inherit;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin {
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
const useInsertStyles = (eleRef) => {
  const {
    csp,
    prefixCls,
    layer,
    zeroRuntime
  } = reactExports.useContext(IconContext);
  let mergedStyleStr = iconStyles;
  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
  }
  if (layer) {
    mergedStyleStr = `@layer ${layer} {
${mergedStyleStr}
}`;
  }
  reactExports.useEffect(() => {
    if (zeroRuntime) {
      return;
    }
    const ele = eleRef.current;
    const shadowRoot = getShadowRoot(ele);
    updateCSS(mergedStyleStr, "@ant-design-icons", {
      prepend: !layer,
      csp,
      attachTo: shadowRoot
    });
  }, []);
};
const IconBase = (props) => {
  const {
    icon,
    className,
    onClick,
    style,
    primaryColor: _primaryColor,
    secondaryColor: _secondaryColor,
    ...restProps
  } = props;
  const svgRef = reactExports.useRef(null);
  useInsertStyles(svgRef);
  warning(isIconDefinition(icon), `icon should be icon definiton, but got ${icon}`);
  if (!isIconDefinition(icon)) {
    return null;
  }
  const target = icon;
  return generate(target.icon, `svg-${target.name}`, {
    className,
    onClick,
    style,
    "data-icon": target.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    ...restProps,
    ref: svgRef
  });
};
IconBase.displayName = "IconReact";
function _extends$h() {
  _extends$h = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$h.apply(this, arguments);
}
const Icon = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    // affect outter <i>...</i>
    className,
    // affect inner <svg>...</svg>
    icon,
    spin,
    rotate,
    tabIndex,
    onClick,
    twoToneColor: _twoToneColor,
    // other
    ...restProps
  } = props;
  const {
    prefixCls = "anticon",
    rootClassName
  } = reactExports.useContext(IconContext);
  const classString = clsx(rootClassName, prefixCls, {
    [`${prefixCls}-${icon.name}`]: !!icon.name,
    [`${prefixCls}-spin`]: !!spin || icon.name === "loading"
  }, className);
  let iconTabIndex = tabIndex;
  if (iconTabIndex === void 0 && onClick) {
    iconTabIndex = -1;
  }
  const svgStyle = rotate ? {
    msTransform: `rotate(${rotate}deg)`,
    transform: `rotate(${rotate}deg)`
  } : void 0;
  return /* @__PURE__ */ reactExports.createElement("span", _extends$h({
    role: "img",
    "aria-label": icon.name
  }, restProps, {
    ref,
    tabIndex: iconTabIndex,
    onClick,
    className: classString
  }), /* @__PURE__ */ reactExports.createElement(IconBase, {
    icon,
    style: svgStyle
  }));
});
function _extends$g() {
  _extends$g = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$g.apply(this, arguments);
}
const CheckCircleFilled = (props, ref) => /* @__PURE__ */ reactExports.createElement(Icon, _extends$g({}, props, {
  ref,
  icon: CheckCircleFilledSvg
}));
const RefIcon$g = /* @__PURE__ */ reactExports.forwardRef(CheckCircleFilled);
function _extends$f() {
  _extends$f = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$f.apply(this, arguments);
}
const CloseCircleFilled = (props, ref) => /* @__PURE__ */ reactExports.createElement(Icon, _extends$f({}, props, {
  ref,
  icon: CloseCircleFilledSvg
}));
const RefIcon$f = /* @__PURE__ */ reactExports.forwardRef(CloseCircleFilled);
function _extends$e() {
  _extends$e = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$e.apply(this, arguments);
}
const CloseOutlined = (props, ref) => /* @__PURE__ */ reactExports.createElement(Icon, _extends$e({}, props, {
  ref,
  icon: CloseOutlinedSvg
}));
const RefIcon$e = /* @__PURE__ */ reactExports.forwardRef(CloseOutlined);
function _extends$d() {
  _extends$d = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$d.apply(this, arguments);
}
const ExclamationCircleFilled = (props, ref) => /* @__PURE__ */ reactExports.createElement(Icon, _extends$d({}, props, {
  ref,
  icon: ExclamationCircleFilledSvg
}));
const RefIcon$d = /* @__PURE__ */ reactExports.forwardRef(ExclamationCircleFilled);
function _extends$c() {
  _extends$c = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$c.apply(this, arguments);
}
const InfoCircleFilled = (props, ref) => /* @__PURE__ */ reactExports.createElement(Icon, _extends$c({}, props, {
  ref,
  icon: InfoCircleFilledSvg
}));
const RefIcon$c = /* @__PURE__ */ reactExports.forwardRef(InfoCircleFilled);
function _extends$b() {
  _extends$b = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$b.apply(this, arguments);
}
const LoadingOutlined = (props, ref) => /* @__PURE__ */ reactExports.createElement(Icon, _extends$b({}, props, {
  ref,
  icon: LoadingOutlinedSvg
}));
const RefIcon$b = /* @__PURE__ */ reactExports.forwardRef(LoadingOutlined);
function _extends$a() {
  _extends$a = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$a.apply(this, arguments);
}
const CheckOutlined = (props, ref) => /* @__PURE__ */ reactExports.createElement(Icon, _extends$a({}, props, {
  ref,
  icon: CheckOutlinedSvg
}));
const RefIcon$a = /* @__PURE__ */ reactExports.forwardRef(CheckOutlined);
function _extends$9() {
  _extends$9 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$9.apply(this, arguments);
}
const DownOutlined = (props, ref) => /* @__PURE__ */ reactExports.createElement(Icon, _extends$9({}, props, {
  ref,
  icon: DownOutlinedSvg
}));
const RefIcon$9 = /* @__PURE__ */ reactExports.forwardRef(DownOutlined);
function _extends$8() {
  _extends$8 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$8.apply(this, arguments);
}
const SearchOutlined = (props, ref) => /* @__PURE__ */ reactExports.createElement(Icon, _extends$8({}, props, {
  ref,
  icon: SearchOutlinedSvg
}));
const RefIcon$8 = /* @__PURE__ */ reactExports.forwardRef(SearchOutlined);
function _extends$7() {
  _extends$7 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$7.apply(this, arguments);
}
const QuestionCircleOutlined = (props, ref) => /* @__PURE__ */ reactExports.createElement(Icon, _extends$7({}, props, {
  ref,
  icon: QuestionCircleOutlinedSvg
}));
const RefIcon$7 = /* @__PURE__ */ reactExports.forwardRef(QuestionCircleOutlined);
function _extends$6() {
  _extends$6 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$6.apply(this, arguments);
}
const EyeInvisibleOutlined = (props, ref) => /* @__PURE__ */ reactExports.createElement(Icon, _extends$6({}, props, {
  ref,
  icon: EyeInvisibleOutlinedSvg
}));
const RefIcon$6 = /* @__PURE__ */ reactExports.forwardRef(EyeInvisibleOutlined);
function _extends$5() {
  _extends$5 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$5.apply(this, arguments);
}
const EyeOutlined = (props, ref) => /* @__PURE__ */ reactExports.createElement(Icon, _extends$5({}, props, {
  ref,
  icon: EyeOutlinedSvg
}));
const RefIcon$5 = /* @__PURE__ */ reactExports.forwardRef(EyeOutlined);
function _extends$4() {
  _extends$4 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
const FileOutlined = (props, ref) => /* @__PURE__ */ reactExports.createElement(Icon, _extends$4({}, props, {
  ref,
  icon: FileOutlinedSvg
}));
const RefIcon$4 = /* @__PURE__ */ reactExports.forwardRef(FileOutlined);
function _extends$3() {
  _extends$3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
const DeleteOutlined = (props, ref) => /* @__PURE__ */ reactExports.createElement(Icon, _extends$3({}, props, {
  ref,
  icon: DeleteOutlinedSvg
}));
const RefIcon$3 = /* @__PURE__ */ reactExports.forwardRef(DeleteOutlined);
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
const PaperClipOutlined = (props, ref) => /* @__PURE__ */ reactExports.createElement(Icon, _extends$2({}, props, {
  ref,
  icon: PaperClipOutlinedSvg
}));
const RefIcon$2 = /* @__PURE__ */ reactExports.forwardRef(PaperClipOutlined);
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
const PictureOutlined = (props, ref) => /* @__PURE__ */ reactExports.createElement(Icon, _extends$1({}, props, {
  ref,
  icon: PictureOutlinedSvg
}));
const RefIcon$1 = /* @__PURE__ */ reactExports.forwardRef(PictureOutlined);
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
const DownloadOutlined = (props, ref) => /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
  ref,
  icon: DownloadOutlinedSvg
}));
const RefIcon = /* @__PURE__ */ reactExports.forwardRef(DownloadOutlined);
export {
  IconContext as I,
  RefIcon$f as R,
  RefIcon$e as a,
  RefIcon$b as b,
  RefIcon$d as c,
  RefIcon$g as d,
  RefIcon$c as e,
  RefIcon$a as f,
  RefIcon$8 as g,
  RefIcon$9 as h,
  RefIcon$7 as i,
  RefIcon$5 as j,
  RefIcon$6 as k,
  RefIcon$3 as l,
  RefIcon as m,
  RefIcon$1 as n,
  RefIcon$4 as o,
  RefIcon$2 as p
};
