import { r as reactExports, R as React } from "./react.mjs";
import { c as clsx } from "./clsx.mjs";
import { q as useId } from "./rc-component__util.mjs";
const defaultProps = {
  percent: 0,
  prefixCls: "rc-progress",
  strokeColor: "#2db7f5",
  strokeLinecap: "round",
  strokeWidth: 1,
  railColor: "#D9D9D9",
  railWidth: 1,
  gapPosition: "bottom",
  loading: false
};
const useTransitionDuration = () => {
  const pathsRef = reactExports.useRef([]);
  const prevTimeStamp = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const now = Date.now();
    let updated = false;
    pathsRef.current.forEach((path) => {
      if (!path) {
        return;
      }
      updated = true;
      const pathStyle = path.style;
      pathStyle.transitionDuration = ".3s, .3s, .3s, .06s";
      if (prevTimeStamp.current && now - prevTimeStamp.current < 100) {
        pathStyle.transitionDuration = "0s, 0s";
      }
    });
    if (updated) {
      prevTimeStamp.current = Date.now();
    }
  });
  return pathsRef.current;
};
const Block = ({
  bg,
  children
}) => /* @__PURE__ */ reactExports.createElement("div", {
  style: {
    width: "100%",
    height: "100%",
    background: bg
  }
}, children);
function getPtgColors(color, scale) {
  return Object.keys(color).map((key) => {
    const parsedKey = parseFloat(key);
    const ptgKey = `${Math.floor(parsedKey * scale)}%`;
    return `${color[key]} ${ptgKey}`;
  });
}
const PtgCircle = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    prefixCls,
    color,
    gradientId,
    radius,
    className,
    style: circleStyleForStack,
    ptg,
    strokeLinecap,
    strokeWidth,
    size,
    gapDegree
  } = props;
  const isGradient = color && typeof color === "object";
  const stroke = isGradient ? `#FFF` : void 0;
  const halfSize = size / 2;
  const circleNode = /* @__PURE__ */ reactExports.createElement("circle", {
    className: clsx(`${prefixCls}-circle-path`, className),
    r: radius,
    cx: halfSize,
    cy: halfSize,
    stroke,
    strokeLinecap,
    strokeWidth,
    opacity: ptg === 0 ? 0 : 1,
    style: circleStyleForStack,
    ref
  });
  if (!isGradient) {
    return circleNode;
  }
  const maskId = `${gradientId}-conic`;
  const fromDeg = gapDegree ? `${180 + gapDegree / 2}deg` : "0deg";
  const conicColors = getPtgColors(color, (360 - gapDegree) / 360);
  const linearColors = getPtgColors(color, 1);
  const conicColorBg = `conic-gradient(from ${fromDeg}, ${conicColors.join(", ")})`;
  const linearColorBg = `linear-gradient(to ${gapDegree ? "bottom" : "top"}, ${linearColors.join(", ")})`;
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("mask", {
    id: maskId
  }, circleNode), /* @__PURE__ */ reactExports.createElement("foreignObject", {
    x: 0,
    y: 0,
    width: size,
    height: size,
    mask: `url(#${maskId})`
  }, /* @__PURE__ */ reactExports.createElement(Block, {
    bg: linearColorBg
  }, /* @__PURE__ */ reactExports.createElement(Block, {
    bg: conicColorBg
  }))));
});
const VIEW_BOX_SIZE = 100;
const getCircleStyle = (perimeter, perimeterWithoutGap, offset, percent, rotateDeg, gapDegree, gapPosition, strokeColor, strokeLinecap, strokeWidth, stepSpace = 0) => {
  const offsetDeg = offset / 100 * 360 * ((360 - gapDegree) / 360);
  const positionDeg = gapDegree === 0 ? 0 : {
    bottom: 0,
    top: 180,
    left: 90,
    right: -90
  }[gapPosition];
  let strokeDashoffset = (100 - percent) / 100 * perimeterWithoutGap;
  if (strokeLinecap === "round" && percent !== 100) {
    strokeDashoffset += strokeWidth / 2;
    if (strokeDashoffset >= perimeterWithoutGap) {
      strokeDashoffset = perimeterWithoutGap - 0.01;
    }
  }
  const halfSize = VIEW_BOX_SIZE / 2;
  return {
    stroke: typeof strokeColor === "string" ? strokeColor : void 0,
    strokeDasharray: `${perimeterWithoutGap}px ${perimeter}`,
    strokeDashoffset: strokeDashoffset + stepSpace,
    transform: `rotate(${rotateDeg + offsetDeg + positionDeg}deg)`,
    transformOrigin: `${halfSize}px ${halfSize}px`,
    transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",
    fillOpacity: 0
  };
};
const getIndeterminateCircle = (({
  id,
  loading
}) => {
  if (!loading) {
    return {
      indeterminateStyleProps: {},
      indeterminateStyleAnimation: null
    };
  }
  const animationName = `${id}-indeterminate-animate`;
  return {
    indeterminateStyleProps: {
      transform: "rotate(0deg)",
      animation: `${animationName} 1s linear infinite`
    },
    indeterminateStyleAnimation: /* @__PURE__ */ React.createElement("style", null, `@keyframes ${animationName} {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }`)
  };
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
function toArray(value) {
  const mergedValue = value ?? [];
  return Array.isArray(mergedValue) ? mergedValue : [mergedValue];
}
const Circle = (props) => {
  const {
    id,
    prefixCls,
    classNames = {},
    styles = {},
    steps,
    strokeWidth,
    railWidth,
    gapDegree = 0,
    gapPosition,
    railColor,
    strokeLinecap,
    style,
    className,
    strokeColor,
    percent,
    loading,
    ...restProps
  } = {
    ...defaultProps,
    ...props
  };
  const halfSize = VIEW_BOX_SIZE / 2;
  const mergedId = useId(id);
  const gradientId = `${mergedId}-gradient`;
  const radius = halfSize - strokeWidth / 2;
  const perimeter = Math.PI * 2 * radius;
  const rotateDeg = gapDegree > 0 ? 90 + gapDegree / 2 : -90;
  const perimeterWithoutGap = perimeter * ((360 - gapDegree) / 360);
  const {
    count: stepCount,
    gap: stepGap
  } = typeof steps === "object" ? steps : {
    count: steps,
    gap: 2
  };
  const percentList = toArray(percent);
  const strokeColorList = toArray(strokeColor);
  const gradient = strokeColorList.find((color) => color && typeof color === "object");
  const isConicGradient = gradient && typeof gradient === "object";
  const mergedStrokeLinecap = isConicGradient ? "butt" : strokeLinecap;
  const {
    indeterminateStyleProps,
    indeterminateStyleAnimation
  } = getIndeterminateCircle({
    id: mergedId,
    loading
  });
  const circleStyle = getCircleStyle(perimeter, perimeterWithoutGap, 0, 100, rotateDeg, gapDegree, gapPosition, railColor, mergedStrokeLinecap, strokeWidth);
  const paths = useTransitionDuration();
  const getStokeList = () => {
    let stackPtg = 0;
    return percentList.map((ptg, index) => {
      const color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
      const circleStyleForStack = getCircleStyle(perimeter, perimeterWithoutGap, stackPtg, ptg, rotateDeg, gapDegree, gapPosition, color, mergedStrokeLinecap, strokeWidth);
      stackPtg += ptg;
      return /* @__PURE__ */ reactExports.createElement(PtgCircle, {
        key: index,
        color,
        ptg,
        radius,
        prefixCls,
        gradientId,
        className: classNames.track,
        style: {
          ...circleStyleForStack,
          ...indeterminateStyleProps,
          ...styles.track
        },
        strokeLinecap: mergedStrokeLinecap,
        strokeWidth,
        gapDegree,
        ref: (elem) => {
          paths[index] = elem;
        },
        size: VIEW_BOX_SIZE
      });
    }).reverse();
  };
  const getStepStokeList = () => {
    const current = Math.round(stepCount * (percentList[0] / 100));
    const stepPtg = 100 / stepCount;
    let stackPtg = 0;
    return new Array(stepCount).fill(null).map((_, index) => {
      const color = index <= current - 1 ? strokeColorList[0] : railColor;
      const stroke = color && typeof color === "object" ? `url(#${gradientId})` : void 0;
      const circleStyleForStack = getCircleStyle(perimeter, perimeterWithoutGap, stackPtg, stepPtg, rotateDeg, gapDegree, gapPosition, color, "butt", strokeWidth, stepGap);
      stackPtg += (perimeterWithoutGap - circleStyleForStack.strokeDashoffset + stepGap) * 100 / perimeterWithoutGap;
      return /* @__PURE__ */ reactExports.createElement("circle", {
        key: index,
        className: clsx(`${prefixCls}-circle-path`, classNames.track),
        r: radius,
        cx: halfSize,
        cy: halfSize,
        stroke,
        strokeWidth,
        opacity: 1,
        style: {
          ...circleStyleForStack,
          ...styles.track
        },
        ref: (elem) => {
          paths[index] = elem;
        }
      });
    });
  };
  return /* @__PURE__ */ reactExports.createElement("svg", _extends({
    className: clsx(`${prefixCls}-circle`, classNames.root, className),
    viewBox: `0 0 ${VIEW_BOX_SIZE} ${VIEW_BOX_SIZE}`,
    style: {
      ...styles.root,
      ...style
    },
    id,
    role: "presentation"
  }, restProps), !stepCount && /* @__PURE__ */ reactExports.createElement("circle", {
    className: clsx(`${prefixCls}-circle-rail`, classNames.rail),
    r: radius,
    cx: halfSize,
    cy: halfSize,
    stroke: railColor,
    strokeLinecap: mergedStrokeLinecap,
    strokeWidth: railWidth || strokeWidth,
    style: {
      ...circleStyle,
      ...styles.rail
    }
  }), stepCount ? getStepStokeList() : getStokeList(), indeterminateStyleAnimation);
};
export {
  Circle as C
};
