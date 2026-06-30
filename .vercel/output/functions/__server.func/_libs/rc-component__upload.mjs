import { r as reactExports, R as React } from "./react.mjs";
import { J as warningOnce, p as pickAttrs } from "./rc-component__util.mjs";
import "./is-mobile.mjs";
import "./react-dom.mjs";
import { c as clsx } from "./clsx.mjs";
const attrAccept = ((file, acceptedFiles) => {
  if (file && acceptedFiles) {
    const acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
    const fileName = file.name || "";
    const mimeType = file.type || "";
    const baseMimeType = mimeType.replace(/\/.*$/, "");
    return acceptedFilesArray.some((type) => {
      const validType = type.trim();
      if (/^\*(\/\*)?$/.test(type)) {
        return true;
      }
      if (validType.charAt(0) === ".") {
        const lowerFileName = fileName.toLowerCase();
        const lowerType = validType.toLowerCase();
        let affixList = [lowerType];
        if (lowerType === ".jpg" || lowerType === ".jpeg") {
          affixList = [".jpg", ".jpeg"];
        }
        return affixList.some((affix) => lowerFileName.endsWith(affix));
      }
      if (/\/\*$/.test(validType)) {
        return baseMimeType === validType.replace(/\/.*$/, "");
      }
      if (mimeType === validType) {
        return true;
      }
      if (/^\w+$/.test(validType)) {
        warningOnce(false, `Upload takes an invalidate 'accept' type '${validType}'.Skip for check.`);
        return true;
      }
      return false;
    });
  }
  return true;
});
function getError(option, xhr) {
  const msg = `cannot ${option.method} ${option.action} ${xhr.status}'`;
  const err = new Error(msg);
  err.status = xhr.status;
  err.method = option.method;
  err.url = option.action;
  return err;
}
function getBody(xhr) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }
  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}
function upload(option) {
  const xhr = new XMLHttpRequest();
  if (option.onProgress && xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }
      option.onProgress(e);
    };
  }
  const formData = new FormData();
  if (option.data) {
    Object.keys(option.data).forEach((key) => {
      const value = option.data[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          formData.append(`${key}[]`, item);
        });
        return;
      }
      formData.append(key, value);
    });
  }
  if (option.file instanceof Blob) {
    formData.append(option.filename, option.file, option.file.name);
  } else {
    formData.append(option.filename, option.file);
  }
  xhr.onerror = function error(e) {
    option.onError(e);
  };
  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(option, xhr), getBody(xhr));
    }
    return option.onSuccess(getBody(xhr), xhr);
  };
  xhr.open(option.method, option.action, true);
  if (option.withCredentials && "withCredentials" in xhr) {
    xhr.withCredentials = true;
  }
  const headers = option.headers || {};
  if (headers["X-Requested-With"] !== null) {
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  }
  Object.keys(headers).forEach((h) => {
    if (headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h]);
    }
  });
  xhr.send(formData);
  return {
    abort() {
      xhr.abort();
    }
  };
}
const traverseFileTree = async (files, isAccepted) => {
  const flattenFileList = [];
  const progressFileList = [];
  files.forEach((file) => progressFileList.push(file.webkitGetAsEntry()));
  async function readDirectory(directory) {
    const dirReader = directory.createReader();
    const entries = [];
    while (true) {
      const results = await new Promise((resolve) => {
        dirReader.readEntries(resolve, () => resolve([]));
      });
      const n = results.length;
      if (!n) {
        break;
      }
      for (let i = 0; i < n; i++) {
        entries.push(results[i]);
      }
    }
    return entries;
  }
  async function readFile(item) {
    return new Promise((reslove) => {
      item.file((file) => {
        if (isAccepted(file)) {
          if (item.fullPath && !file.webkitRelativePath) {
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: true
              }
            });
            file.webkitRelativePath = item.fullPath.replace(/^\//, "");
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: false
              }
            });
          }
          reslove(file);
        } else {
          reslove(null);
        }
      });
    });
  }
  const _traverseFileTree = async (item, path) => {
    if (!item) {
      return;
    }
    item.path = "";
    if (item.isFile) {
      const file = await readFile(item);
      if (file) {
        flattenFileList.push(file);
      }
    } else if (item.isDirectory) {
      const entries = await readDirectory(item);
      progressFileList.push(...entries);
    }
  };
  let wipIndex = 0;
  while (wipIndex < progressFileList.length) {
    await _traverseFileTree(progressFileList[wipIndex]);
    wipIndex++;
  }
  return flattenFileList;
};
const now = +/* @__PURE__ */ new Date();
let index = 0;
function uid() {
  return `rc-upload-${now}-${++index}`;
}
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
class AjaxUploader extends reactExports.Component {
  state = {
    uid: uid()
  };
  reqs = {};
  fileInput;
  _isMounted;
  filterFile = (file, force = false) => {
    const {
      accept,
      directory
    } = this.props;
    let filterFn;
    let acceptFormat;
    if (typeof accept === "string") {
      acceptFormat = accept;
    } else {
      const {
        filter,
        format
      } = accept || {};
      acceptFormat = format;
      if (filter === "native") {
        filterFn = () => true;
      } else {
        filterFn = filter;
      }
    }
    const mergedFilter = filterFn || (directory || force ? (currentFile) => attrAccept(currentFile, acceptFormat) : () => true);
    return mergedFilter(file);
  };
  onChange = (e) => {
    const {
      files
    } = e.target;
    const acceptedFiles = [...files].filter((file) => this.filterFile(file));
    this.uploadFiles(acceptedFiles);
    this.reset();
  };
  onClick = (event) => {
    const el = this.fileInput;
    if (!el) {
      return;
    }
    const target = event.target;
    const {
      onClick
    } = this.props;
    if (target && target.tagName === "BUTTON") {
      const parent = el.parentNode;
      parent.focus();
      target.blur();
    }
    el.click();
    if (onClick) {
      onClick(event);
    }
  };
  onKeyDown = (e) => {
    if (e.key === "Enter") {
      this.onClick(e);
    }
  };
  onDataTransferFiles = async (dataTransfer, existFileCallback) => {
    const {
      multiple,
      directory
    } = this.props;
    const items = [...dataTransfer.items || []];
    let files = [...dataTransfer.files || []];
    if (files.length > 0 || items.some((item) => item.kind === "file")) {
      existFileCallback?.();
    }
    if (directory) {
      files = await traverseFileTree(Array.prototype.slice.call(items), this.filterFile);
      this.uploadFiles(files);
    } else {
      let acceptFiles = [...files].filter((file) => this.filterFile(file, true));
      if (multiple === false) {
        acceptFiles = files.slice(0, 1);
      }
      this.uploadFiles(acceptFiles);
    }
  };
  onFilePaste = async (e) => {
    const {
      pastable
    } = this.props;
    if (!pastable) {
      return;
    }
    if (e.type === "paste") {
      const clipboardData = e.clipboardData;
      return this.onDataTransferFiles(clipboardData, () => {
        e.preventDefault();
      });
    }
  };
  onFileDragOver = (e) => {
    e.preventDefault();
  };
  onFileDrop = async (e) => {
    e.preventDefault();
    if (e.type === "drop") {
      const dataTransfer = e.dataTransfer;
      return this.onDataTransferFiles(dataTransfer);
    }
  };
  componentDidMount() {
    this._isMounted = true;
    const {
      pastable
    } = this.props;
    if (pastable) {
      document.addEventListener("paste", this.onFilePaste);
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
    this.abort();
    document.removeEventListener("paste", this.onFilePaste);
  }
  componentDidUpdate(prevProps) {
    const {
      pastable
    } = this.props;
    if (pastable && !prevProps.pastable) {
      document.addEventListener("paste", this.onFilePaste);
    } else if (!pastable && prevProps.pastable) {
      document.removeEventListener("paste", this.onFilePaste);
    }
  }
  uploadFiles = (files) => {
    const originFiles = [...files];
    const postFiles = originFiles.map((file) => {
      file.uid = uid();
      return this.processFile(file, originFiles);
    });
    Promise.all(postFiles).then((fileList) => {
      const {
        onBatchStart
      } = this.props;
      onBatchStart?.(fileList.map(({
        origin,
        parsedFile
      }) => ({
        file: origin,
        parsedFile
      })));
      fileList.filter((file) => file.parsedFile !== null).forEach((file) => {
        this.post(file);
      });
    });
  };
  /**
   * Process file before upload. When all the file is ready, we start upload.
   */
  processFile = async (file, fileList) => {
    const {
      beforeUpload
    } = this.props;
    let transformedFile = file;
    if (beforeUpload) {
      try {
        transformedFile = await beforeUpload(file, fileList);
      } catch (e) {
        transformedFile = false;
      }
      if (transformedFile === false) {
        return {
          origin: file,
          parsedFile: null,
          action: null,
          data: null
        };
      }
    }
    const {
      action
    } = this.props;
    let mergedAction;
    if (typeof action === "function") {
      mergedAction = await action(file);
    } else {
      mergedAction = action;
    }
    const {
      data
    } = this.props;
    let mergedData;
    if (typeof data === "function") {
      mergedData = await data(file);
    } else {
      mergedData = data;
    }
    const parsedData = (
      // string type is from legacy `transformFile`.
      // Not sure if this will work since no related test case works with it
      (typeof transformedFile === "object" || typeof transformedFile === "string") && transformedFile ? transformedFile : file
    );
    let parsedFile;
    if (parsedData instanceof File) {
      parsedFile = parsedData;
    } else {
      parsedFile = new File([parsedData], file.name, {
        type: file.type
      });
    }
    const mergedParsedFile = parsedFile;
    mergedParsedFile.uid = file.uid;
    return {
      origin: file,
      data: mergedData,
      parsedFile: mergedParsedFile,
      action: mergedAction
    };
  };
  post({
    data,
    origin,
    action,
    parsedFile
  }) {
    if (!this._isMounted) {
      return;
    }
    const {
      onStart,
      customRequest,
      name,
      headers,
      withCredentials,
      method
    } = this.props;
    const {
      uid: uid2
    } = origin;
    const request = customRequest || upload;
    const requestOption = {
      action,
      filename: name,
      data,
      file: parsedFile,
      headers,
      withCredentials,
      method: method || "post",
      onProgress: (e) => {
        const {
          onProgress
        } = this.props;
        onProgress?.(e, parsedFile);
      },
      onSuccess: (ret, xhr) => {
        const {
          onSuccess
        } = this.props;
        onSuccess?.(ret, parsedFile, xhr);
        delete this.reqs[uid2];
      },
      onError: (err, ret) => {
        const {
          onError
        } = this.props;
        onError?.(err, ret, parsedFile);
        delete this.reqs[uid2];
      }
    };
    onStart(origin);
    this.reqs[uid2] = request(requestOption, {
      defaultRequest: upload
    });
  }
  reset() {
    this.setState({
      uid: uid()
    });
  }
  abort(file) {
    const {
      reqs
    } = this;
    if (file) {
      const uid2 = file.uid ? file.uid : file;
      if (reqs[uid2] && reqs[uid2].abort) {
        reqs[uid2].abort();
      }
      delete reqs[uid2];
    } else {
      Object.keys(reqs).forEach((uid2) => {
        if (reqs[uid2] && reqs[uid2].abort) {
          reqs[uid2].abort();
        }
        delete reqs[uid2];
      });
    }
  }
  saveFileInput = (node) => {
    this.fileInput = node;
  };
  render() {
    const {
      component: Tag,
      prefixCls,
      className,
      classNames = {},
      disabled,
      id,
      name,
      style,
      styles = {},
      multiple,
      accept,
      capture,
      children,
      directory,
      openFileDialogOnClick,
      onMouseEnter,
      onMouseLeave,
      hasControlInside,
      ...otherProps
    } = this.props;
    const acceptFormat = typeof accept === "string" ? accept : accept?.format;
    const cls = clsx(prefixCls, {
      [`${prefixCls}-disabled`]: disabled,
      [className]: className
    });
    const dirProps = directory ? {
      directory: "directory",
      webkitdirectory: "webkitdirectory"
    } : {};
    const events = disabled ? {} : {
      onClick: openFileDialogOnClick ? this.onClick : () => {
      },
      onKeyDown: openFileDialogOnClick ? this.onKeyDown : () => {
      },
      onMouseEnter,
      onMouseLeave,
      onDrop: this.onFileDrop,
      onDragOver: this.onFileDragOver,
      tabIndex: hasControlInside ? void 0 : "0"
    };
    return /* @__PURE__ */ React.createElement(Tag, _extends$1({}, events, {
      className: cls,
      role: hasControlInside ? void 0 : "button",
      style
    }), /* @__PURE__ */ React.createElement("input", _extends$1({}, pickAttrs(otherProps, {
      aria: true,
      data: true
    }), {
      id,
      name,
      disabled,
      type: "file",
      ref: this.saveFileInput,
      onClick: (e) => e.stopPropagation(),
      key: this.state.uid,
      style: {
        display: "none",
        ...styles.input
      },
      className: classNames.input,
      accept: acceptFormat
    }, dirProps, {
      multiple,
      onChange: this.onChange
    }, capture != null ? {
      capture
    } : {})), children);
  }
}
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
function empty() {
}
class Upload extends reactExports.Component {
  static defaultProps = {
    component: "span",
    prefixCls: "rc-upload",
    data: {},
    headers: {},
    name: "file",
    multipart: false,
    onStart: empty,
    onError: empty,
    onSuccess: empty,
    multiple: false,
    beforeUpload: null,
    customRequest: null,
    withCredentials: false,
    openFileDialogOnClick: true,
    hasControlInside: false
  };
  uploader;
  abort(file) {
    this.uploader.abort(file);
  }
  saveUploader = (node) => {
    this.uploader = node;
  };
  render() {
    return /* @__PURE__ */ React.createElement(AjaxUploader, _extends({}, this.props, {
      ref: this.saveUploader
    }));
  }
}
export {
  Upload as U
};
