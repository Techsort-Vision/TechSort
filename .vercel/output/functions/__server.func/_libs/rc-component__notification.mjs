import { d as useEvent, w as wrapperRaf, p as pickAttrs, f as useComposeRef } from "./rc-component__util.mjs";
import { r as reactExports } from "./react.mjs";
import "./is-mobile.mjs";
import { r as reactDomExports } from "./react-dom.mjs";
import { a as CSSMotionList } from "./rc-component__motion.mjs";
import { c as clsx } from "./clsx.mjs";
function useSizes() {
  const [sizeMap, setSizeMap] = reactExports.useState({});
  const setNodeSize = reactExports.useCallback((key, node) => {
    if (!node) {
      setSizeMap((prevSizeMap) => {
        if (!(key in prevSizeMap)) {
          return prevSizeMap;
        }
        const nextSizeMap = {
          ...prevSizeMap
        };
        delete nextSizeMap[key];
        return nextSizeMap;
      });
      return;
    }
    const nextSize = {
      width: node.offsetWidth,
      height: node.offsetHeight
    };
    setSizeMap((prevSizeMap) => {
      const prevSize = prevSizeMap[key];
      if (prevSize && prevSize.width === nextSize.width && prevSize.height === nextSize.height) {
        return prevSizeMap;
      }
      return {
        ...prevSizeMap,
        [key]: nextSize
      };
    });
  }, []);
  return [sizeMap, setNodeSize];
}
function useListPosition(configList, stack, gap = 0) {
  const [sizeMap, setNodeSize] = useSizes();
  const [notificationPosition, totalHeight, topNoticeHeight, topNoticeWidth] = reactExports.useMemo(() => {
    let offsetY = 0;
    let nextTotalHeight = 0;
    const stackThreshold = stack?.threshold ?? 0;
    const nextNotificationPosition = /* @__PURE__ */ new Map();
    let nextTopNoticeHeight;
    let nextTopNoticeWidth;
    configList.slice().reverse().forEach((config, index) => {
      const key = String(config.key);
      const height = sizeMap[key]?.height ?? 0;
      const y = stack && index > 0 ? offsetY + (stack.offset ?? 0) - height : offsetY;
      nextNotificationPosition.set(key, y);
      if (index === 0) {
        nextTopNoticeHeight = height;
        nextTopNoticeWidth = sizeMap[key]?.width ?? 0;
      }
      if (!stack || index < stackThreshold) {
        nextTotalHeight = Math.max(nextTotalHeight, y + height);
      }
      if (stack) {
        offsetY = y + height;
      } else {
        offsetY += height + gap;
      }
    });
    return [nextNotificationPosition, nextTotalHeight, nextTopNoticeHeight, nextTopNoticeWidth];
  }, [configList, gap, sizeMap, stack]);
  return [notificationPosition, setNodeSize, totalHeight, topNoticeHeight, topNoticeWidth];
}
const DEFAULT_OFFSET = 8;
const DEFAULT_THRESHOLD = 3;
const useStack = (config) => {
  const result = {
    offset: DEFAULT_OFFSET,
    threshold: DEFAULT_THRESHOLD
  };
  if (config && typeof config === "object") {
    result.offset = config.offset ?? DEFAULT_OFFSET;
    result.threshold = config.threshold ?? DEFAULT_THRESHOLD;
  }
  return [!!config, result];
};
function useNoticeTimer(duration, onClose, onUpdate) {
  const mergedDuration = typeof duration === "number" ? duration : 0;
  const durationMs = Math.max(mergedDuration, 0) * 1e3;
  const onEventClose = useEvent(onClose);
  const onEventUpdate = useEvent(onUpdate);
  const [walking, setWalking] = reactExports.useState(durationMs > 0);
  const passTimeRef = reactExports.useRef(0);
  const lastRafTimeRef = reactExports.useRef(null);
  function syncPassTime() {
    const now = Date.now();
    const lastRafTime = lastRafTimeRef.current;
    if (lastRafTime !== null) {
      passTimeRef.current += now - lastRafTime;
    }
    lastRafTimeRef.current = now;
  }
  const onPause = reactExports.useCallback(() => {
    syncPassTime();
    setWalking(false);
  }, []);
  const onResume = reactExports.useCallback(() => {
    if (durationMs > 0) {
      lastRafTimeRef.current = Date.now();
      setWalking(true);
    } else {
      onEventUpdate(0);
    }
  }, [durationMs]);
  reactExports.useEffect(() => {
    passTimeRef.current = 0;
    setWalking(durationMs > 0);
  }, [durationMs]);
  reactExports.useEffect(() => {
    if (!walking) {
      return;
    }
    let rafId = null;
    function step() {
      syncPassTime();
      if (passTimeRef.current >= durationMs) {
        onEventUpdate(1);
        onEventClose();
      } else {
        onEventUpdate(Math.min(passTimeRef.current / durationMs, 1));
        rafId = wrapperRaf(step);
      }
    }
    step();
    return () => {
      wrapperRaf.cancel(rafId);
    };
  }, [durationMs, walking]);
  return [onResume, onPause];
}
function useClosable(closable) {
  const closableObj = reactExports.useMemo(() => {
    if (closable === false) {
      return {
        closeIcon: null,
        disabled: true
      };
    }
    if (typeof closable === "object" && closable !== null) {
      return closable;
    }
    return {};
  }, [closable]);
  const closableConfig = reactExports.useMemo(() => ({
    ...closableObj,
    closeIcon: "closeIcon" in closableObj ? closableObj.closeIcon : "×",
    disabled: closableObj.disabled ?? false
  }), [closableObj]);
  const closableAriaProps = reactExports.useMemo(() => pickAttrs(closableConfig, true), [closableConfig]);
  return [!!closable, closableConfig, closableAriaProps];
}
const Progress = ({
  className,
  style,
  percent
}) => /* @__PURE__ */ reactExports.createElement("progress", {
  className,
  max: "100",
  value: percent,
  style
});
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
const Notification = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    // Style
    prefixCls,
    className,
    style,
    classNames,
    styles,
    components,
    // UI
    title,
    description,
    icon,
    actions,
    role,
    closable,
    offset,
    notificationIndex,
    stackInThreshold,
    props: rootProps,
    // Behavior
    duration = 4.5,
    showProgress,
    hovering: forcedHovering,
    pauseOnHover = true,
    // Function
    onClick,
    onMouseEnter,
    onMouseLeave,
    onClose
  } = props;
  const [percent, setPercent] = reactExports.useState(0);
  const noticePrefixCls = `${prefixCls}-notice`;
  const [mergedClosable, closableConfig, closeBtnAriaProps] = useClosable(closable);
  const onInternalClose = useEvent(() => {
    closableConfig.onClose?.();
    onClose?.();
  });
  const [hovering, setHovering] = reactExports.useState(false);
  const [onResume, onPause] = useNoticeTimer(duration, onInternalClose, setPercent);
  const validPercent = 100 - Math.min(Math.max(percent * 100, 0), 100);
  const Progress$1 = components?.progress || Progress;
  reactExports.useEffect(() => {
    if (!pauseOnHover) {
      return;
    }
    if (forcedHovering) {
      onPause();
    } else if (!hovering) {
      onResume();
    }
  }, [forcedHovering, hovering, onPause, onResume, pauseOnHover]);
  function onInternalMouseEnter(event) {
    setHovering(true);
    if (pauseOnHover) {
      onPause();
    }
    onMouseEnter?.(event);
  }
  function onInternalMouseLeave(event) {
    setHovering(false);
    if (pauseOnHover && !forcedHovering) {
      onResume();
    }
    onMouseLeave?.(event);
  }
  function onInternalCloseClick(event) {
    event.preventDefault();
    event.stopPropagation();
    onInternalClose();
  }
  const offsetRef = reactExports.useRef(offset);
  if (offset !== void 0) {
    offsetRef.current = offset;
  }
  const notificationIndexRef = reactExports.useRef(notificationIndex);
  if (notificationIndex !== void 0) {
    notificationIndexRef.current = notificationIndex;
  }
  const mergedOffset = offset ?? offsetRef.current;
  const mergedNotificationIndex = notificationIndex ?? notificationIndexRef.current ?? 0;
  const titleNode = title !== void 0 && title !== null ? /* @__PURE__ */ reactExports.createElement("div", {
    className: clsx(`${noticePrefixCls}-title`, classNames?.title),
    style: styles?.title
  }, title) : null;
  const descNode = description !== void 0 && description !== null ? /* @__PURE__ */ reactExports.createElement("div", {
    className: clsx(`${noticePrefixCls}-description`, classNames?.description),
    style: styles?.description
  }, description) : null;
  const hasTitle = titleNode !== null;
  const hasDescription = descNode !== null;
  let contentNode = null;
  if (hasTitle && hasDescription) {
    contentNode = /* @__PURE__ */ reactExports.createElement("div", {
      className: clsx(`${noticePrefixCls}-section`, classNames?.section),
      style: styles?.section
    }, titleNode, descNode);
  } else {
    contentNode = titleNode || descNode;
  }
  if (icon !== void 0 && icon !== null) {
    contentNode = /* @__PURE__ */ reactExports.createElement("div", {
      className: clsx(`${noticePrefixCls}-wrapper`, classNames?.wrapper),
      style: styles?.wrapper
    }, /* @__PURE__ */ reactExports.createElement("div", {
      className: clsx(`${noticePrefixCls}-icon`, classNames?.icon),
      style: styles?.icon
    }, icon), contentNode);
  }
  const actionsNode = actions ? /* @__PURE__ */ reactExports.createElement("div", {
    className: clsx(`${noticePrefixCls}-actions`, classNames?.actions),
    style: styles?.actions
  }, actions) : null;
  const mergedStyle = {
    "--notification-index": mergedNotificationIndex,
    ...styles?.root,
    ...style
  };
  if (mergedOffset !== void 0) {
    mergedStyle["--notification-y"] = `${mergedOffset}px`;
  }
  const mergedRole = role ?? rootProps?.role ?? "alert";
  return /* @__PURE__ */ reactExports.createElement("div", _extends$2({}, rootProps, {
    ref,
    role: mergedRole,
    "data-notification-index": mergedNotificationIndex,
    className: clsx(noticePrefixCls, className, classNames?.root, {
      [`${noticePrefixCls}-closable`]: mergedClosable,
      [`${noticePrefixCls}-stack-in-threshold`]: stackInThreshold
    }),
    style: mergedStyle,
    onClick,
    onMouseEnter: onInternalMouseEnter,
    onMouseLeave: onInternalMouseLeave
  }), contentNode, actionsNode, mergedClosable && /* @__PURE__ */ reactExports.createElement("button", _extends$2({
    className: clsx(`${noticePrefixCls}-close`, classNames?.close),
    "aria-label": "Close"
  }, closeBtnAriaProps, {
    style: styles?.close,
    onClick: onInternalCloseClick
  }), closableConfig.closeIcon), showProgress && typeof duration === "number" && duration > 0 && /* @__PURE__ */ reactExports.createElement(Progress$1, {
    className: clsx(`${noticePrefixCls}-progress`, classNames?.progress),
    percent: validPercent,
    style: styles?.progress
  }));
});
const NotificationContext = /* @__PURE__ */ reactExports.createContext({});
const NotificationProvider = ({
  children,
  classNames
}) => {
  const context = reactExports.useMemo(() => ({
    classNames
  }), [classNames]);
  return /* @__PURE__ */ reactExports.createElement(NotificationContext.Provider, {
    value: context
  }, children);
};
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
const Content = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    listPrefixCls,
    height,
    topNoticeHeight = 0,
    topNoticeWidth = 0,
    className,
    style,
    ...restProps
  } = props;
  const contentPrefixCls = `${listPrefixCls}-content`;
  const prevHeightRef = reactExports.useRef(height);
  const prevHeight = prevHeightRef.current;
  const heightStatus = height < prevHeight ? "decrease" : "increase";
  prevHeightRef.current = height;
  const contentStyle = {
    ...style,
    height,
    "--top-notificiation-height": `${topNoticeHeight}px`,
    "--top-notificiation-width": `${topNoticeWidth}px`
  };
  return /* @__PURE__ */ reactExports.createElement("div", _extends$1({}, restProps, {
    className: clsx(contentPrefixCls, `${contentPrefixCls}-${heightStatus}`, className),
    style: contentStyle,
    ref
  }));
});
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
const noticeSlotKeys = ["wrapper", "root", "icon", "section", "title", "description", "actions", "close", "progress"];
function fillClassNames(classNamesList) {
  return noticeSlotKeys.reduce((mergedClassNames, key) => {
    mergedClassNames[key] = clsx(...classNamesList.map((classNames) => classNames?.[key]));
    return mergedClassNames;
  }, {});
}
function fillStyles(stylesList) {
  return noticeSlotKeys.reduce((mergedStyles, key) => {
    mergedStyles[key] = Object.assign({}, ...stylesList.map((styles) => styles?.[key]));
    return mergedStyles;
  }, {});
}
function getIndex(keys, key) {
  const strKey = String(key);
  const index = keys.findIndex((item) => item.key === strKey);
  if (index === -1) {
    return void 0;
  }
  return keys.length - index - 1;
}
const NotificationListItem = (props) => {
  const {
    config,
    components,
    contextClassNames,
    classNames,
    styles,
    className,
    style,
    nodeRef,
    listHovering,
    stackEnabled,
    pauseOnHover,
    setNodeSize,
    onNoticeClose,
    ...restProps
  } = props;
  const {
    key,
    placement: itemPlacement,
    ...notificationConfig
  } = config;
  const strKey = String(key);
  const setItemRef = reactExports.useCallback((node) => {
    setNodeSize(strKey, node);
  }, [setNodeSize, strKey]);
  const ref = useComposeRef(nodeRef, setItemRef);
  return /* @__PURE__ */ reactExports.createElement(Notification, _extends({}, notificationConfig, restProps, {
    ref,
    className: clsx(contextClassNames?.notice, config.className, className),
    style: {
      ...style,
      ...config.style
    },
    classNames: fillClassNames([classNames, config.classNames]),
    styles: fillStyles([styles, config.styles]),
    components: {
      ...components,
      ...config.components
    },
    hovering: stackEnabled && listHovering,
    pauseOnHover: config.pauseOnHover ?? pauseOnHover,
    onClose: () => {
      config.onClose?.();
      onNoticeClose?.(key);
    }
  }));
};
const NotificationList = (props) => {
  const {
    configList = [],
    prefixCls = "rc-notification",
    pauseOnHover,
    classNames,
    styles,
    components,
    stack: stackConfig,
    motion,
    placement,
    className,
    style,
    onNoticeClose,
    onAllRemoved
  } = props;
  const {
    classNames: contextClassNames
  } = reactExports.useContext(NotificationContext);
  const keys = reactExports.useMemo(() => configList.map((config) => ({
    config,
    key: String(config.key)
  })), [configList]);
  const placementMotion = typeof motion === "function" ? motion(placement) : motion;
  const [stackEnabled, {
    offset,
    threshold
  }] = useStack(stackConfig);
  const [listHovering, setListHovering] = reactExports.useState(false);
  const expanded = stackEnabled && (listHovering || keys.length <= threshold);
  const stackPosition = reactExports.useMemo(() => {
    if (!stackEnabled || expanded) {
      return void 0;
    }
    return {
      offset,
      threshold
    };
  }, [expanded, offset, stackEnabled, threshold]);
  const [gap, setGap] = reactExports.useState(0);
  const contentRef = reactExports.useRef(null);
  const [notificationPosition, setNodeSize, totalHeight, topNoticeHeight, topNoticeWidth] = useListPosition(configList, stackPosition, gap);
  const hasConfigList = !!configList.length;
  reactExports.useEffect(() => {
    const listNode = contentRef.current;
    if (!listNode) {
      return;
    }
    const {
      gap: cssGap,
      rowGap
    } = window.getComputedStyle(listNode);
    const nextGap = parseFloat(rowGap || cssGap) || 0;
    setGap((prevGap) => prevGap === nextGap ? prevGap : nextGap);
  }, [hasConfigList]);
  const listPrefixCls = `${prefixCls}-list`;
  return /* @__PURE__ */ reactExports.createElement("div", {
    className: clsx(prefixCls, listPrefixCls, `${prefixCls}-${placement}`, contextClassNames?.list, className, classNames?.list, {
      [`${prefixCls}-stack`]: stackEnabled,
      [`${prefixCls}-stack-expanded`]: expanded,
      [`${listPrefixCls}-hovered`]: listHovering
    }),
    onMouseEnter: () => {
      setListHovering(true);
    },
    onMouseLeave: () => {
      setListHovering(false);
    },
    style: {
      ...styles?.list,
      ...style
    }
  }, /* @__PURE__ */ reactExports.createElement(Content, {
    listPrefixCls,
    height: totalHeight,
    topNoticeHeight,
    topNoticeWidth,
    className: classNames?.listContent,
    style: styles?.listContent,
    ref: contentRef
  }, /* @__PURE__ */ reactExports.createElement(CSSMotionList, _extends({
    component: false,
    keys,
    motionAppear: true
  }, placementMotion, {
    onAllRemoved: () => {
      if (placement) {
        onAllRemoved?.(placement);
      }
    }
  }), ({
    config,
    className: motionClassName,
    style: motionStyle
  }, nodeRef) => {
    const {
      key
    } = config;
    const strKey = String(key);
    const notificationIndex = getIndex(keys, key);
    const stackInThreshold = stackEnabled && notificationIndex !== void 0 && notificationIndex < threshold;
    return /* @__PURE__ */ reactExports.createElement(NotificationListItem, {
      key,
      config,
      components,
      contextClassNames,
      classNames,
      styles,
      className: motionClassName,
      style: motionStyle,
      nodeRef,
      prefixCls,
      offset: notificationPosition.get(strKey),
      notificationIndex,
      stackInThreshold,
      listHovering,
      stackEnabled,
      pauseOnHover,
      setNodeSize,
      onNoticeClose
    });
  })));
};
const Notifications = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    prefixCls = "rc-notification",
    container,
    motion,
    maxCount,
    pauseOnHover,
    classNames,
    styles,
    components,
    className,
    style,
    onAllRemoved,
    stack,
    renderNotifications
  } = props;
  const [configList, setConfigList] = reactExports.useState([]);
  const [placements, setPlacements] = reactExports.useState({});
  const emptyRef = reactExports.useRef(false);
  reactExports.useImperativeHandle(ref, () => ({
    open: (config) => {
      setConfigList((list) => {
        let clone = [...list];
        const index = clone.findIndex((item) => item.key === config.key);
        const innerConfig = {
          ...config
        };
        if (index >= 0) {
          innerConfig.times = (list[index]?.times ?? 0) + 1;
          clone[index] = innerConfig;
        } else {
          innerConfig.times = 0;
          clone.push(innerConfig);
        }
        if (maxCount && maxCount > 0 && clone.length > maxCount) {
          clone = clone.slice(-maxCount);
        }
        return clone;
      });
    },
    close: (key) => {
      setConfigList((list) => list.filter((item) => item.key !== key));
    },
    destroy: () => {
      setConfigList([]);
    }
  }));
  reactExports.useEffect(() => {
    const nextPlacements = {};
    configList.forEach((config) => {
      const placement = config.placement ?? "topRight";
      nextPlacements[placement] = nextPlacements[placement] || [];
      nextPlacements[placement].push(config);
    });
    Object.keys(placements).forEach((placement) => {
      nextPlacements[placement] = nextPlacements[placement] || [];
    });
    setPlacements(nextPlacements);
  }, [configList]);
  const onAllNoticeRemoved = useEvent((placement) => {
    setPlacements((originPlacements) => {
      const clone = {
        ...originPlacements
      };
      if (!(clone[placement] || []).length) {
        delete clone[placement];
      }
      return clone;
    });
  });
  reactExports.useEffect(() => {
    if (Object.keys(placements).length > 0) {
      emptyRef.current = true;
    } else if (emptyRef.current) {
      onAllRemoved?.();
      emptyRef.current = false;
    }
  }, [placements, onAllRemoved]);
  if (!container) {
    return null;
  }
  const placementList = Object.keys(placements);
  return /* @__PURE__ */ reactDomExports.createPortal(/* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, placementList.map((placement) => {
    const list = /* @__PURE__ */ reactExports.createElement(NotificationList, {
      key: placement,
      configList: placements[placement],
      placement,
      prefixCls,
      pauseOnHover,
      classNames,
      styles,
      components,
      className: className?.(placement),
      style: style?.(placement),
      motion,
      stack,
      onNoticeClose: (key) => {
        setConfigList((oriList) => oriList.filter((item) => item.key !== key));
      },
      onAllRemoved: onAllNoticeRemoved
    });
    return renderNotifications ? /* @__PURE__ */ reactExports.cloneElement(renderNotifications(list, {
      prefixCls,
      key: placement
    }), {
      key: placement
    }) : list;
  })), container);
});
const defaultGetContainer = () => document.body;
let uniqueKey = 0;
function mergeConfig(...objList) {
  const clone = {};
  objList.forEach((obj) => {
    if (obj) {
      Object.keys(obj).forEach((key) => {
        const value = obj[key];
        if (value !== void 0) {
          clone[key] = value;
        }
      });
    }
  });
  return clone;
}
function useNotification(rootConfig = {}) {
  const {
    getContainer = defaultGetContainer,
    motion,
    prefixCls,
    placement,
    closable,
    duration,
    showProgress,
    pauseOnHover,
    classNames,
    styles,
    components,
    maxCount,
    className,
    style,
    onAllRemoved,
    stack,
    renderNotifications
  } = rootConfig;
  const shareConfig = {
    placement,
    closable,
    duration,
    showProgress
  };
  const [container, setContainer] = reactExports.useState();
  const notificationsRef = reactExports.useRef(null);
  const [taskQueue, setTaskQueue] = reactExports.useState([]);
  const contextHolder = /* @__PURE__ */ reactExports.createElement(Notifications, {
    container,
    ref: notificationsRef,
    prefixCls,
    motion,
    maxCount,
    pauseOnHover,
    classNames,
    styles,
    components,
    className,
    style,
    onAllRemoved,
    stack,
    renderNotifications
  });
  const open = useEvent((config) => {
    const mergedConfig = mergeConfig(shareConfig, config);
    if (mergedConfig.key === null || mergedConfig.key === void 0) {
      mergedConfig.key = `rc-notification-${uniqueKey}`;
      uniqueKey += 1;
    }
    setTaskQueue((queue) => [...queue, {
      type: "open",
      config: mergedConfig
    }]);
  });
  const api = reactExports.useMemo(() => ({
    open,
    close: (key) => {
      setTaskQueue((queue) => [...queue, {
        type: "close",
        key
      }]);
    },
    destroy: () => {
      setTaskQueue((queue) => [...queue, {
        type: "destroy"
      }]);
    }
  }), []);
  reactExports.useEffect(() => {
    setContainer(getContainer());
  });
  reactExports.useEffect(() => {
    if (notificationsRef.current && taskQueue.length) {
      taskQueue.forEach((task) => {
        switch (task.type) {
          case "open":
            notificationsRef.current?.open(task.config);
            break;
          case "close":
            notificationsRef.current?.close(task.key);
            break;
          case "destroy":
            notificationsRef.current?.destroy();
            break;
        }
      });
      setTaskQueue((originQueue) => {
        const targetTaskQueue = originQueue.filter((task) => !taskQueue.includes(task));
        return targetTaskQueue.length === originQueue.length ? originQueue : targetTaskQueue;
      });
    }
  }, [taskQueue]);
  return [api, contextHolder];
}
export {
  Notification as N,
  NotificationProvider as a,
  NotificationList as b,
  useNotification as u
};
