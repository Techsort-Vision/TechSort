import { r as reactExports, R as React } from "./react.mjs";
import { u as useMemo, i as isEqual, m as merge, a as mergeProps, p as pickAttrs, r as render, w as wrapperRaf, b as unmount, c as composeRef, d as useEvent, s as supportRef, g as getNodeRef, e as isVisible, t as toArray$1, f as useComposeRef, h as useLayoutEffect, o as omit, j as useSafeState, k as canUseDom, l as useControlledState, n as getDOM, q as useId, v as get, x as set, y as triggerFocus } from "./rc-component__util.mjs";
import "./is-mobile.mjs";
import { r as reactDomExports } from "./react-dom.mjs";
import { c as createTheme, u as useCacheToken, a as unit, K as Keyframe, b as useStyleRegister, S as StyleContext } from "./ant-design__cssinjs.mjs";
import { g as genStyleUtils, m as merge$1 } from "./ant-design__cssinjs-utils.mjs";
import "./rc-component__resize-observer.mjs";
import { C as CSSMotion, M as MotionProvider, a as CSSMotionList } from "./rc-component__motion.mjs";
import { T as TypedSelect, O as Option, a as OptGroup } from "./rc-component__select.mjs";
import { c as clsx } from "./clsx.mjs";
import "./rc-component__overflow.mjs";
import { F as FastColor } from "./ant-design__fast-color.mjs";
import { I as IconContext, R as RefIcon, a as RefIcon$1, b as RefIcon$2, c as RefIcon$3, d as RefIcon$4, e as RefIcon$5, f as RefIcon$6, g as RefIcon$7, h as RefIcon$8, i as RefIcon$9, j as RefIcon$a, k as RefIcon$b, l as RefIcon$c, m as RefIcon$d, n as RefIcon$e, o as RefIcon$f, p as RefIcon$g } from "./ant-design__icons.mjs";
import { C as Checkbox } from "./rc-component__checkbox.mjs";
import "./rc-component__virtual-list.mjs";
import { C as Color } from "./rc-component__color-picker.mjs";
import { _ as _toConsumableArray, a as _createClass, b as _classCallCheck } from "./babel__runtime.mjs";
import { F as FormProvider$1, u as useForm$1, R as RefForm, C as Context, L as ListContext, W as WrapperField, a as List, b as useWatch } from "./rc-component__form.mjs";
import { e } from "./scroll-into-view-if-needed.mjs";
import { I as Input$2, T as TextArea$1 } from "./rc-component__input.mjs";
import { D as DialogWrap, P as Panel } from "./rc-component__dialog.mjs";
import { g as generate, p as presetPrimaryColors, a as presetPalettes } from "./ant-design__colors.mjs";
import { U as Upload$2 } from "./rc-component__upload.mjs";
import { l as locale$3 } from "./rc-component__pagination.mjs";
import { l as locale$2 } from "./rc-component__picker.mjs";
import { U as UniqueProvider$1 } from "./rc-component__trigger.mjs";
import { C as Circle$1 } from "./rc-component__progress.mjs";
import { P as Popup, T as Tooltip$1 } from "./rc-component__tooltip.mjs";
const WarningContext = /* @__PURE__ */ reactExports.createContext({});
const defaultPrefixCls = "ant";
const defaultIconPrefixCls = "anticon";
const Variants = ["outlined", "borderless", "filled", "underlined"];
const defaultGetPrefixCls = (suffixCls, customizePrefixCls) => {
  if (customizePrefixCls) {
    return customizePrefixCls;
  }
  return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls;
};
const ConfigContext = /* @__PURE__ */ reactExports.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  iconPrefixCls: defaultIconPrefixCls
});
const {
  Consumer: ConfigConsumer
} = ConfigContext;
const EMPTY_OBJECT = {};
function useComponentConfig(propName) {
  const context = reactExports.useContext(ConfigContext);
  const {
    getPrefixCls,
    direction,
    getPopupContainer,
    renderEmpty
  } = context;
  const propValue = context[propName];
  return {
    classNames: EMPTY_OBJECT,
    styles: EMPTY_OBJECT,
    ...propValue,
    getPrefixCls,
    direction,
    getPopupContainer,
    renderEmpty
  };
}
const PresetColors = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
function getLineHeight(fontSize) {
  return (fontSize + 8) / fontSize;
}
function getFontSizes(base) {
  const fontSizes = Array.from({
    length: 10
  }).map((_, index) => {
    const i = index - 1;
    const baseSize = base * Math.E ** (i / 5);
    const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
    return Math.floor(intSize / 2) * 2;
  });
  fontSizes[1] = base;
  return fontSizes.map((size) => ({
    size,
    lineHeight: getLineHeight(size)
  }));
}
const version = "6.5.0";
const defaultPresetColors = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
};
const seedToken = {
  // preset color palettes
  ...defaultPresetColors,
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: false,
  // Motion
  motion: true
};
function genColorMapToken(seed, {
  generateColorPalettes: generateColorPalettes2,
  generateNeutralColorPalettes: generateNeutralColorPalettes2
}) {
  const {
    colorSuccess: colorSuccessBase,
    colorWarning: colorWarningBase,
    colorError: colorErrorBase,
    colorInfo: colorInfoBase,
    colorPrimary: colorPrimaryBase,
    colorBgBase,
    colorTextBase
  } = seed;
  const primaryColors = generateColorPalettes2(colorPrimaryBase);
  const successColors = generateColorPalettes2(colorSuccessBase);
  const warningColors = generateColorPalettes2(colorWarningBase);
  const errorColors = generateColorPalettes2(colorErrorBase);
  const infoColors = generateColorPalettes2(colorInfoBase);
  const neutralColors = generateNeutralColorPalettes2(colorBgBase, colorTextBase);
  const colorLink = seed.colorLink || seed.colorInfo;
  const linkColors = generateColorPalettes2(colorLink);
  const colorErrorBgFilledHover = new FastColor(errorColors[1]).mix(new FastColor(errorColors[3]), 50).toHexString();
  const presetColorTokens = {};
  PresetColors.forEach((colorKey) => {
    const colorBase = seed[colorKey];
    if (colorBase) {
      const colorPalette = generateColorPalettes2(colorBase);
      presetColorTokens[`${colorKey}Hover`] = colorPalette[5];
      presetColorTokens[`${colorKey}Active`] = colorPalette[7];
    }
  });
  return {
    ...neutralColors,
    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],
    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[4],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],
    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBgFilledHover,
    colorErrorBgActive: errorColors[3],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],
    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[4],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],
    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[4],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],
    colorLinkHover: linkColors[4],
    colorLink: linkColors[6],
    colorLinkActive: linkColors[7],
    ...presetColorTokens,
    colorBgMask: new FastColor("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  };
}
const genRadius = (radiusBase) => {
  let radiusLG = radiusBase;
  let radiusSM = radiusBase;
  let radiusXS = radiusBase;
  let radiusOuter = radiusBase;
  if (radiusBase < 6 && radiusBase >= 5) {
    radiusLG = radiusBase + 1;
  } else if (radiusBase < 16 && radiusBase >= 6) {
    radiusLG = radiusBase + 2;
  } else if (radiusBase >= 16) {
    radiusLG = 16;
  }
  if (radiusBase < 7 && radiusBase >= 5) {
    radiusSM = 4;
  } else if (radiusBase < 8 && radiusBase >= 7) {
    radiusSM = 5;
  } else if (radiusBase < 14 && radiusBase >= 8) {
    radiusSM = 6;
  } else if (radiusBase < 16 && radiusBase >= 14) {
    radiusSM = 7;
  } else if (radiusBase >= 16) {
    radiusSM = 8;
  }
  if (radiusBase < 6 && radiusBase >= 2) {
    radiusXS = 1;
  } else if (radiusBase >= 6) {
    radiusXS = 2;
  }
  if (radiusBase > 4 && radiusBase < 8) {
    radiusOuter = 4;
  } else if (radiusBase >= 8) {
    radiusOuter = 6;
  }
  return {
    borderRadius: radiusBase,
    borderRadiusXS: radiusXS,
    borderRadiusSM: radiusSM,
    borderRadiusLG: radiusLG,
    borderRadiusOuter: radiusOuter
  };
};
function genCommonMapToken(token) {
  const {
    motionUnit,
    motionBase,
    borderRadius,
    lineWidth
  } = token;
  return {
    // motion
    motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
    motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
    motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
    // line
    lineWidthBold: lineWidth + 1,
    // radius
    ...genRadius(borderRadius)
  };
}
const genControlHeight = (token) => {
  const {
    controlHeight
  } = token;
  return {
    controlHeightSM: controlHeight * 0.75,
    controlHeightXS: controlHeight * 0.5,
    controlHeightLG: controlHeight * 1.25
  };
};
const genFontMapToken = (fontSize) => {
  const fontSizePairs = getFontSizes(fontSize);
  const fontSizes = fontSizePairs.map((pair) => pair.size);
  const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);
  const fontSizeMD = fontSizes[1];
  const fontSizeSM = fontSizes[0];
  const fontSizeLG = fontSizes[2];
  const lineHeight = lineHeights[1];
  const lineHeightSM = lineHeights[0];
  const lineHeightLG = lineHeights[2];
  return {
    fontSizeSM,
    fontSize: fontSizeMD,
    fontSizeLG,
    fontSizeXL: fontSizes[3],
    fontSizeHeading1: fontSizes[6],
    fontSizeHeading2: fontSizes[5],
    fontSizeHeading3: fontSizes[4],
    fontSizeHeading4: fontSizes[3],
    fontSizeHeading5: fontSizes[2],
    lineHeight,
    lineHeightLG,
    lineHeightSM,
    fontHeight: Math.round(lineHeight * fontSizeMD),
    fontHeightLG: Math.round(lineHeightLG * fontSizeLG),
    fontHeightSM: Math.round(lineHeightSM * fontSizeSM),
    lineHeightHeading1: lineHeights[6],
    lineHeightHeading2: lineHeights[5],
    lineHeightHeading3: lineHeights[4],
    lineHeightHeading4: lineHeights[3],
    lineHeightHeading5: lineHeights[2]
  };
};
function genSizeMapToken(token) {
  const {
    sizeUnit,
    sizeStep
  } = token;
  return {
    sizeXXL: sizeUnit * (sizeStep + 8),
    // 48
    sizeXL: sizeUnit * (sizeStep + 4),
    // 32
    sizeLG: sizeUnit * (sizeStep + 2),
    // 24
    sizeMD: sizeUnit * (sizeStep + 1),
    // 20
    sizeMS: sizeUnit * sizeStep,
    // 16
    size: sizeUnit * sizeStep,
    // 16
    sizeSM: sizeUnit * (sizeStep - 1),
    // 12
    sizeXS: sizeUnit * (sizeStep - 2),
    // 8
    sizeXXS: sizeUnit * (sizeStep - 3)
    // 4
  };
}
const getAlphaColor$1 = (baseColor, alpha) => new FastColor(baseColor).setA(alpha).toRgbString();
const getSolidColor = (baseColor, brightness) => {
  const instance = new FastColor(baseColor);
  return instance.darken(brightness).toHexString();
};
const generateColorPalettes = (baseColor) => {
  const colors = generate(baseColor);
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[4],
    9: colors[5],
    10: colors[6]
  };
};
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor, shadowColor) => {
  const colorBgBase = bgBaseColor || "#fff";
  const colorTextBase = textBaseColor || "#000";
  const colorShadow = shadowColor || "#000";
  return {
    colorBgBase,
    colorTextBase,
    colorShadow,
    colorText: getAlphaColor$1(colorTextBase, 0.88),
    colorTextSecondary: getAlphaColor$1(colorTextBase, 0.65),
    colorTextTertiary: getAlphaColor$1(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor$1(colorTextBase, 0.25),
    colorFill: getAlphaColor$1(colorTextBase, 0.15),
    colorFillSecondary: getAlphaColor$1(colorTextBase, 0.06),
    colorFillTertiary: getAlphaColor$1(colorTextBase, 0.04),
    colorFillQuaternary: getAlphaColor$1(colorTextBase, 0.02),
    colorBgSolid: getAlphaColor$1(colorTextBase, 1),
    colorBgSolidHover: getAlphaColor$1(colorTextBase, 0.75),
    colorBgSolidActive: getAlphaColor$1(colorTextBase, 0.95),
    colorBgLayout: getSolidColor(colorBgBase, 4),
    colorBgContainer: getSolidColor(colorBgBase, 0),
    colorBgElevated: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getAlphaColor$1(colorTextBase, 0.85),
    colorBgBlur: "transparent",
    colorBorder: getSolidColor(colorBgBase, 15),
    colorBorderDisabled: getSolidColor(colorBgBase, 15),
    colorBorderSecondary: getSolidColor(colorBgBase, 6)
  };
};
function derivative(token) {
  presetPrimaryColors.pink = presetPrimaryColors.magenta;
  presetPalettes.pink = presetPalettes.magenta;
  const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
    const colors = token[colorKey] === presetPrimaryColors[colorKey] ? presetPalettes[colorKey] : generate(token[colorKey]);
    return Array.from({
      length: 10
    }, () => 1).reduce((prev, _, i) => {
      prev[`${colorKey}-${i + 1}`] = colors[i];
      prev[`${colorKey}${i + 1}`] = colors[i];
      return prev;
    }, {});
  }).reduce((prev, cur) => {
    prev = {
      ...prev,
      ...cur
    };
    return prev;
  }, {});
  return {
    ...token,
    ...colorPalettes,
    // Colors
    ...genColorMapToken(token, {
      generateColorPalettes,
      generateNeutralColorPalettes
    }),
    // Font
    ...genFontMapToken(token.fontSize),
    // Size
    ...genSizeMapToken(token),
    // Height
    ...genControlHeight(token),
    // Others
    ...genCommonMapToken(token)
  };
}
const defaultTheme = createTheme(derivative);
const defaultConfig = {
  token: seedToken,
  override: {
    override: seedToken
  },
  hashed: true
};
const DesignTokenContext = /* @__PURE__ */ React.createContext(defaultConfig);
function isStableColor(color) {
  return color >= 0 && color <= 255;
}
function getAlphaColor(frontColor, backgroundColor) {
  const {
    r: fR,
    g: fG,
    b: fB,
    a: originAlpha
  } = new FastColor(frontColor).toRgb();
  if (originAlpha < 1) {
    return frontColor;
  }
  const {
    r: bR,
    g: bG,
    b: bB
  } = new FastColor(backgroundColor).toRgb();
  for (let fA = 0.01; fA <= 1; fA += 0.01) {
    const r = Math.round((fR - bR * (1 - fA)) / fA);
    const g = Math.round((fG - bG * (1 - fA)) / fA);
    const b = Math.round((fB - bB * (1 - fA)) / fA);
    if (isStableColor(r) && isStableColor(g) && isStableColor(b)) {
      return new FastColor({
        r,
        g,
        b,
        a: Math.round(fA * 100) / 100
      }).toRgbString();
    }
  }
  return new FastColor({
    r: fR,
    g: fG,
    b: fB,
    a: 1
  }).toRgbString();
}
function formatToken(derivativeToken) {
  const {
    override,
    ...restToken
  } = derivativeToken;
  const overrideTokens = {
    ...override
  };
  Object.keys(seedToken).forEach((token) => {
    delete overrideTokens[token];
  });
  const mergedToken = {
    ...restToken,
    ...overrideTokens
  };
  const shadowBaseColor = new FastColor(mergedToken.colorShadow);
  const shadowBaseAlpha = shadowBaseColor.a;
  const getShadowColor = (alpha) => shadowBaseColor.clone().setA(shadowBaseAlpha * alpha).toRgbString();
  const screenXS = 480;
  const screenSM = 576;
  const screenMD = 768;
  const screenLG = 992;
  const screenXL = 1200;
  const screenXXL = 1600;
  const screenXXXL = 1920;
  if (mergedToken.motion === false) {
    const fastDuration = "0s";
    mergedToken.motionDurationFast = fastDuration;
    mergedToken.motionDurationMid = fastDuration;
    mergedToken.motionDurationSlow = fastDuration;
  }
  const aliasToken = {
    ...mergedToken,
    // ============== Background ============== //
    colorFillContent: mergedToken.colorFillSecondary,
    colorFillContentHover: mergedToken.colorFill,
    colorFillAlter: mergedToken.colorFillQuaternary,
    colorBgContainerDisabled: mergedToken.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: mergedToken.colorBgContainer,
    colorSplit: getAlphaColor(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: mergedToken.colorTextQuaternary,
    colorTextDisabled: mergedToken.colorTextQuaternary,
    colorTextHeading: mergedToken.colorText,
    colorTextLabel: mergedToken.colorTextSecondary,
    colorTextDescription: mergedToken.colorTextTertiary,
    colorTextLightSolid: mergedToken.colorWhite,
    colorHighlight: mergedToken.colorError,
    colorBgTextHover: mergedToken.colorFillSecondary,
    colorBgTextActive: mergedToken.colorFill,
    colorIcon: mergedToken.colorTextTertiary,
    colorIconHover: mergedToken.colorText,
    colorErrorOutline: getAlphaColor(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
    colorWarningOutline: getAlphaColor(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
    colorErrorAffix: mergedToken.colorError,
    colorWarningAffix: mergedToken.colorWarning,
    // Font
    fontSizeIcon: mergedToken.fontSizeSM,
    // Line
    lineWidthFocus: mergedToken.lineWidth * 3,
    // Control
    lineWidth: mergedToken.lineWidth,
    controlOutlineWidth: mergedToken.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: mergedToken.controlHeight / 2,
    controlItemBgHover: mergedToken.colorFillTertiary,
    controlItemBgActive: mergedToken.colorPrimaryBg,
    controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
    controlItemBgActiveDisabled: mergedToken.colorFill,
    controlTmpOutline: mergedToken.colorFillQuaternary,
    controlOutline: getAlphaColor(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
    lineType: mergedToken.lineType,
    borderRadius: mergedToken.borderRadius,
    borderRadiusXS: mergedToken.borderRadiusXS,
    borderRadiusSM: mergedToken.borderRadiusSM,
    borderRadiusLG: mergedToken.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: mergedToken.sizeXXS,
    paddingXS: mergedToken.sizeXS,
    paddingSM: mergedToken.sizeSM,
    padding: mergedToken.size,
    paddingMD: mergedToken.sizeMD,
    paddingLG: mergedToken.sizeLG,
    paddingXL: mergedToken.sizeXL,
    paddingContentHorizontalLG: mergedToken.sizeLG,
    paddingContentVerticalLG: mergedToken.sizeMS,
    paddingContentHorizontal: mergedToken.sizeMS,
    paddingContentVertical: mergedToken.sizeSM,
    paddingContentHorizontalSM: mergedToken.size,
    paddingContentVerticalSM: mergedToken.sizeXS,
    marginXXS: mergedToken.sizeXXS,
    marginXS: mergedToken.sizeXS,
    marginSM: mergedToken.sizeSM,
    margin: mergedToken.size,
    marginMD: mergedToken.sizeMD,
    marginLG: mergedToken.sizeLG,
    marginXL: mergedToken.sizeXL,
    marginXXL: mergedToken.sizeXXL,
    boxShadow: `
      0 6px 16px 0 ${getShadowColor(0.08)},
      0 3px 6px -4px ${getShadowColor(0.12)},
      0 9px 28px 8px ${getShadowColor(0.05)}
    `,
    boxShadowSecondary: `
      0 6px 16px 0 ${getShadowColor(0.08)},
      0 3px 6px -4px ${getShadowColor(0.12)},
      0 9px 28px 8px ${getShadowColor(0.05)}
    `,
    boxShadowTertiary: `
      0 1px 2px 0 ${getShadowColor(0.05)},
      0 1px 6px -1px ${getShadowColor(0.03)},
      0 2px 4px 0 ${getShadowColor(0.03)}
    `,
    screenXS,
    screenXSMin: screenXS,
    screenXSMax: screenSM - 1,
    screenSM,
    screenSMMin: screenSM,
    screenSMMax: screenMD - 1,
    screenMD,
    screenMDMin: screenMD,
    screenMDMax: screenLG - 1,
    screenLG,
    screenLGMin: screenLG,
    screenLGMax: screenXL - 1,
    screenXL,
    screenXLMin: screenXL,
    screenXLMax: screenXXL - 1,
    screenXXL,
    screenXXLMin: screenXXL,
    screenXXLMax: screenXXXL - 1,
    screenXXXL,
    screenXXXLMin: screenXXXL,
    boxShadowPopoverArrow: `2px 2px 5px ${getShadowColor(0.05)}`,
    dropShadowPopover: `drop-shadow(0 6px 16px ${getShadowColor(0.08)}) drop-shadow(0 3px 6px ${getShadowColor(0.12)}) drop-shadow(0 9px 28px ${getShadowColor(0.05)})`,
    boxShadowCard: `
      0 1px 2px -2px ${getShadowColor(0.16)},
      0 3px 6px 0 ${getShadowColor(0.12)},
      0 5px 12px 4px ${getShadowColor(0.09)}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 ${getShadowColor(0.08)},
      -3px 0 6px -4px ${getShadowColor(0.12)},
      -9px 0 28px 8px ${getShadowColor(0.05)}
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 ${getShadowColor(0.08)},
      3px 0 6px -4px ${getShadowColor(0.12)},
      9px 0 28px 8px ${getShadowColor(0.05)}
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 ${getShadowColor(0.08)},
      0 3px 6px -4px ${getShadowColor(0.12)},
      0 9px 28px 8px ${getShadowColor(0.05)}
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 ${getShadowColor(0.08)},
      0 -3px 6px -4px ${getShadowColor(0.12)},
      0 -9px 28px 8px ${getShadowColor(0.05)}
    `,
    boxShadowTabsOverflowLeft: `inset 10px 0 8px -8px ${getShadowColor(0.08)}`,
    boxShadowTabsOverflowRight: `inset -10px 0 8px -8px ${getShadowColor(0.08)}`,
    boxShadowTabsOverflowTop: `inset 0 10px 8px -8px ${getShadowColor(0.08)}`,
    boxShadowTabsOverflowBottom: `inset 0 -10px 8px -8px ${getShadowColor(0.08)}`,
    // Override AliasToken
    ...overrideTokens
  };
  return aliasToken;
}
const unitless = {
  lineHeight: true,
  lineHeightSM: true,
  lineHeightLG: true,
  lineHeightHeading1: true,
  lineHeightHeading2: true,
  lineHeightHeading3: true,
  lineHeightHeading4: true,
  lineHeightHeading5: true,
  opacityLoading: true,
  fontWeightStrong: true,
  zIndexPopupBase: true,
  zIndexBase: true,
  opacityImage: true
};
const ignore = {
  motionBase: true,
  motionUnit: true
};
const preserve = {
  screenXS: true,
  screenXSMin: true,
  screenXSMax: true,
  screenSM: true,
  screenSMMin: true,
  screenSMMax: true,
  screenMD: true,
  screenMDMin: true,
  screenMDMax: true,
  screenLG: true,
  screenLGMin: true,
  screenLGMax: true,
  screenXL: true,
  screenXLMin: true,
  screenXLMax: true,
  screenXXL: true,
  screenXXLMin: true,
  screenXXLMax: true,
  screenXXXL: true,
  screenXXXLMin: true
};
const getComputedToken = (originToken, overrideToken, theme) => {
  const derivativeToken = theme.getDerivativeToken(originToken);
  const {
    override,
    ...components
  } = overrideToken;
  let mergedDerivativeToken = {
    ...derivativeToken,
    override
  };
  mergedDerivativeToken = formatToken(mergedDerivativeToken);
  if (components) {
    Object.entries(components).forEach(([key, value]) => {
      const {
        theme: componentTheme,
        ...componentTokens
      } = value;
      let mergedComponentToken = componentTokens;
      if (componentTheme) {
        mergedComponentToken = getComputedToken({
          ...mergedDerivativeToken,
          ...componentTokens
        }, {
          override: componentTokens
        }, componentTheme);
      }
      mergedDerivativeToken[key] = mergedComponentToken;
    });
  }
  return mergedDerivativeToken;
};
function useToken() {
  const {
    token: rootDesignToken,
    hashed,
    theme,
    override,
    cssVar: ctxCssVar,
    zeroRuntime
  } = React.useContext(DesignTokenContext);
  const {
    csp,
    getPrefixCls
  } = React.useContext(ConfigContext);
  const cssVar = {
    prefix: ctxCssVar?.prefix ?? getPrefixCls(),
    key: ctxCssVar?.key ?? "css-var-root"
  };
  const salt = `${version}-${hashed || ""}`;
  const mergedTheme = theme || defaultTheme;
  const [token, hashId, realToken] = useCacheToken(mergedTheme, [seedToken, rootDesignToken], {
    salt,
    override,
    getComputedToken,
    cssVar: {
      ...cssVar,
      unitless,
      ignore,
      preserve
    },
    nonce: csp?.nonce
  });
  return [mergedTheme, realToken, hashed ? hashId : "", token, cssVar, !!zeroRuntime];
}
const textEllipsis = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
};
const resetComponent = (token, needInheritFontFamily = false) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: token.colorText,
  fontSize: token.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: token.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: needInheritFontFamily ? "inherit" : token.fontFamily
});
const resetIcon = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
});
const loadingCircle = new Keyframe("loadingCircle", {
  "100%": {
    transform: "rotate(360deg)"
  }
});
const clearFix = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
});
const genFocusOutline = (token, offset) => ({
  outline: `${unit(token.lineWidthFocus)} solid ${token.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: [`outline-offset`, `outline`].map((prop) => `${prop} 0s`).join(", ")
});
const genFocusStyle = (token, offset) => ({
  "&:focus-visible": genFocusOutline(token)
});
const genLinkStyle = (token) => ({
  a: {
    color: token.colorLink,
    textDecoration: token.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${token.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: token.colorLinkHover
    },
    "&:active": {
      color: token.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: token.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: token.linkFocusDecoration,
      outline: 0
    },
    ...genFocusStyle(token),
    "&[disabled]": {
      color: token.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
});
const genCommonStyle = (token, componentPrefixCls, rootCls, resetFont) => {
  const prefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
  const rootPrefixSelector = rootCls ? `.${rootCls}` : prefixSelector;
  const resetStyle = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let resetFontStyle = {};
  if (resetFont !== false) {
    resetFontStyle = {
      fontFamily: token.fontFamily,
      fontSize: token.fontSize
    };
  }
  return {
    [rootPrefixSelector]: {
      ...resetFontStyle,
      ...resetStyle,
      [prefixSelector]: resetStyle
    }
  };
};
const genIconStyle = (iconPrefixCls) => ({
  [`.${iconPrefixCls}`]: {
    ...resetIcon(),
    [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
      display: "block"
    }
  },
  [`.${iconPrefixCls}-spin`]: {
    animationName: loadingCircle,
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear"
  }
});
const {
  genStyleHooks,
  genComponentStyleHook,
  genSubStyleComponent
} = genStyleUtils({
  usePrefix: () => {
    const {
      getPrefixCls,
      iconPrefixCls
    } = reactExports.useContext(ConfigContext);
    const rootPrefixCls = getPrefixCls();
    return {
      rootPrefixCls,
      iconPrefixCls
    };
  },
  useToken: () => {
    const [theme, realToken, hashId, token, cssVar, zeroRuntime] = useToken();
    return {
      theme,
      realToken,
      hashId,
      token,
      cssVar,
      zeroRuntime
    };
  },
  useCSP: () => {
    const {
      csp
    } = reactExports.useContext(ConfigContext);
    return csp ?? {};
  },
  getResetStyles: (token, config) => {
    const linkStyle = genLinkStyle(token);
    return [linkStyle, {
      "&": linkStyle
    }, genIconStyle(config?.prefix.iconPrefixCls ?? defaultIconPrefixCls)];
  },
  getCommonStyle: genCommonStyle,
  getCompUnitless: () => unitless
});
const genCssVar = (antCls, component) => {
  const cssPrefix = `--${antCls.replace(/\./g, "")}-${component}-`;
  const varName = (name) => {
    return `${cssPrefix}${name}`;
  };
  const varRef = (name, fallback) => {
    return fallback ? `var(${cssPrefix}${name}, ${fallback})` : `var(${cssPrefix}${name})`;
  };
  return [varName, varRef];
};
function genPresetColor(token, genCss) {
  return PresetColors.reduce((prev, colorKey) => {
    const lightColor = token[`${colorKey}1`];
    const lightBorderColor = token[`${colorKey}3`];
    const darkColor = token[`${colorKey}6`];
    const textColor = token[`${colorKey}7`];
    return {
      ...prev,
      ...genCss(colorKey, {
        lightColor,
        lightBorderColor,
        darkColor,
        textColor
      })
    };
  }, {});
}
const useResetIconStyle = (iconPrefixCls, csp) => {
  useToken();
  return useStyleRegister({
    hashId: "",
    path: ["ant-design-icons", iconPrefixCls],
    nonce: () => csp?.nonce,
    layer: {
      name: "antd"
    }
  }, () => genIconStyle(iconPrefixCls));
};
const isNonNullable = (val) => {
  return val !== void 0 && val !== null;
};
const isReactRenderable = (val) => {
  return isNonNullable(val) && val !== false && val !== "";
};
const isNumber = (val) => {
  return typeof val === "number" && !Number.isNaN(val);
};
const isString = (val) => {
  return typeof val === "string";
};
const isPlainObject = (val) => {
  return val !== null && typeof val === "object";
};
const isFunction = (val) => {
  return typeof val === "function";
};
const isThenable = (val) => {
  return isNonNullable(val) && isFunction(val.then);
};
const isTransitionEvent = (event) => {
  return isPlainObject(event) && "propertyName" in event && isString(event.propertyName);
};
const fillObjectBySchema = (obj, schema) => {
  const newObj = {
    ...obj
  };
  Object.keys(schema).forEach((key) => {
    if (schema[key]._default) {
      newObj[key] || (newObj[key] = {});
    } else {
      newObj[key] = fillObjectBySchema(newObj[key], schema[key]);
    }
  });
  return newObj;
};
const mergeClassNames = (schema = {}, ...classNames) => {
  return classNames.filter((item) => Boolean(item)).reduce((acc, cur) => {
    Object.keys(cur).forEach((key) => {
      const keySchema = schema[key];
      const curVal = cur[key];
      if (keySchema) {
        if (isPlainObject(curVal)) {
          acc[key] = mergeClassNames(keySchema, acc[key], curVal);
        } else {
          const {
            _default: defaultField
          } = keySchema;
          if (defaultField) {
            acc[key] = acc[key] || {};
            acc[key][defaultField] = clsx(acc[key][defaultField], curVal);
          }
        }
      } else {
        acc[key] = clsx(acc[key], curVal);
      }
    });
    return acc;
  }, {});
};
const useSemanticClassNames = (schema, ...classNames) => {
  return reactExports.useMemo(() => mergeClassNames.apply(void 0, [schema].concat(classNames)), [schema].concat(classNames));
};
const mergeStyles = (...styles) => {
  return styles.filter((item) => Boolean(item)).reduce((acc, cur = {}) => {
    Object.keys(cur).forEach((key) => {
      acc[key] = {
        ...acc[key],
        ...cur[key]
      };
    });
    return acc;
  }, {});
};
const useSemanticStyles = (...styles) => {
  return reactExports.useMemo(() => mergeStyles.apply(void 0, styles), [].concat(styles));
};
const useSemanticRootStyle = (style) => {
  return reactExports.useMemo(() => style ? {
    root: style
  } : void 0, [style]);
};
const resolveStyleOrClass = (value, info) => {
  return isFunction(value) ? value(info) : value;
};
const useMergeSemantic = (classNamesList, stylesList, info, schema) => {
  const resolvedClassNamesList = classNamesList.map((classNames) => classNames ? resolveStyleOrClass(classNames, info) : void 0);
  const resolvedStylesList = stylesList.map((styles) => styles ? resolveStyleOrClass(styles, info) : void 0);
  const mergedClassNames = useSemanticClassNames.apply(void 0, [schema].concat(_toConsumableArray(resolvedClassNamesList)));
  const mergedStyles = useSemanticStyles.apply(void 0, _toConsumableArray(resolvedStylesList));
  return reactExports.useMemo(() => {
    if (!schema) {
      return [mergedClassNames, mergedStyles];
    }
    return [fillObjectBySchema(mergedClassNames, schema), fillObjectBySchema(mergedStyles, schema)];
  }, [mergedClassNames, mergedStyles, schema]);
};
const useCSSVarCls = (prefixCls) => `${prefixCls}-css-var`;
const ValidateMessagesContext = /* @__PURE__ */ reactExports.createContext(void 0);
const locale$1 = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
const locale = {
  lang: {
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"],
    ...locale$2
  },
  timePickerLocale: {
    ...locale$1
  }
};
const typeTemplate = "${label} is not a valid ${type}";
const localeValues = {
  locale: "en",
  Pagination: locale$3,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  global: {
    placeholder: "Please select",
    close: "Close",
    sortable: "sortable",
    show: "Show",
    hide: "Hide"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckAll: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    deselectAll: "Deselect all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty",
    transparent: "Transparent",
    singleColor: "Single",
    gradientColor: "Gradient"
  }
};
let runtimeLocale = {
  ...localeValues.Modal
};
let localeList = [];
const generateLocale = () => localeList.reduce((merged, locale2) => ({
  ...merged,
  ...locale2
}), localeValues.Modal);
function changeConfirmLocale(newLocale) {
  if (newLocale) {
    const cloneLocale = {
      ...newLocale
    };
    localeList.push(cloneLocale);
    runtimeLocale = generateLocale();
    return () => {
      localeList = localeList.filter((locale2) => locale2 !== cloneLocale);
      runtimeLocale = generateLocale();
    };
  }
  runtimeLocale = {
    ...localeValues.Modal
  };
}
function getConfirmLocale() {
  return runtimeLocale;
}
const LocaleContext = /* @__PURE__ */ reactExports.createContext(void 0);
const useLocale = (componentName, defaultLocale) => {
  const fullLocale = reactExports.useContext(LocaleContext);
  const getLocale = reactExports.useMemo(() => {
    const locale2 = defaultLocale || localeValues[componentName];
    const localeFromContext = fullLocale?.[componentName] ?? {};
    return {
      ...isFunction(locale2) ? locale2() : locale2,
      ...localeFromContext || {}
    };
  }, [componentName, defaultLocale, fullLocale]);
  const getLocaleCode = reactExports.useMemo(() => {
    const localeCode = fullLocale?.locale;
    if (fullLocale?.exist && !localeCode) {
      return localeValues.locale;
    }
    return localeCode;
  }, [fullLocale]);
  return [getLocale, getLocaleCode];
};
const ANT_MARK = "internalMark";
const LocaleProvider = (props) => {
  const {
    locale: locale2 = {},
    children,
    _ANT_MARK__
  } = props;
  reactExports.useEffect(() => {
    const clearLocale = changeConfirmLocale(locale2?.Modal);
    return clearLocale;
  }, [locale2]);
  const getMemoizedContextValue = reactExports.useMemo(() => ({
    ...locale2,
    exist: true
  }), [locale2]);
  return /* @__PURE__ */ reactExports.createElement(LocaleContext.Provider, {
    value: getMemoizedContextValue
  }, children);
};
function isFragment(child) {
  return child && /* @__PURE__ */ React.isValidElement(child) && child.type === React.Fragment;
}
const replaceElement = (element, replacement, props) => {
  if (!/* @__PURE__ */ React.isValidElement(element)) {
    return replacement;
  }
  return /* @__PURE__ */ React.cloneElement(element, isFunction(props) ? props(element.props || {}) : props);
};
function cloneElement(element, props) {
  return replaceElement(element, element, props);
}
const MotionContent = ({
  children
}) => {
  const {
    getPrefixCls
  } = React.useContext(ConfigContext);
  const rootPrefixCls = getPrefixCls();
  if (!/* @__PURE__ */ React.isValidElement(children)) {
    return children;
  }
  return /* @__PURE__ */ React.createElement(CSSMotion, {
    visible: true,
    motionName: `${rootPrefixCls}-fade`,
    motionAppear: true,
    motionEnter: true,
    motionLeave: false,
    removeOnLeave: false
  }, ({
    style: motionStyle,
    className: motionClassName
  }) => {
    return cloneElement(children, (oriProps) => ({
      className: clsx(oriProps.className, motionClassName),
      style: {
        ...oriProps.style,
        ...motionStyle
      }
    }));
  });
};
const cachedPlacements = [null, null];
function uniqueBuiltinPlacements(ori) {
  if (cachedPlacements[0] !== ori) {
    const target = {};
    Object.keys(ori).forEach((placement) => {
      target[placement] = {
        ...ori[placement],
        dynamicInset: false
      };
    });
    cachedPlacements[0] = ori;
    cachedPlacements[1] = target;
  }
  return cachedPlacements[1];
}
const UniqueProvider = ({
  children
}) => {
  const renderPopup = (options) => {
    const {
      id,
      builtinPlacements,
      popup
    } = options;
    const popupEle = isFunction(popup) ? popup() : popup;
    const parsedPlacements = uniqueBuiltinPlacements(builtinPlacements);
    return {
      ...options,
      getPopupContainer: null,
      arrow: false,
      popup: /* @__PURE__ */ React.createElement(MotionContent, {
        key: id
      }, popupEle),
      builtinPlacements: parsedPlacements
    };
  };
  return /* @__PURE__ */ React.createElement(UniqueProvider$1, {
    postTriggerProps: renderPopup
  }, children);
};
const DisabledContext = /* @__PURE__ */ reactExports.createContext(false);
const DisabledContextProvider = ({
  children,
  disabled
}) => {
  const originDisabled = reactExports.useContext(DisabledContext);
  return /* @__PURE__ */ reactExports.createElement(DisabledContext.Provider, {
    value: disabled ?? originDisabled
  }, children);
};
const SizeContext = /* @__PURE__ */ reactExports.createContext(void 0);
const SizeContextProvider = ({
  children,
  size
}) => {
  const originSize = reactExports.useContext(SizeContext);
  return /* @__PURE__ */ reactExports.createElement(SizeContext.Provider, {
    value: size || originSize
  }, children);
};
function useConfig() {
  const componentDisabled = reactExports.useContext(DisabledContext);
  const componentSize = reactExports.useContext(SizeContext);
  return {
    componentDisabled,
    componentSize
  };
}
function useTheme(theme, parentTheme, config) {
  const themeConfig = theme || {};
  const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? {
    ...defaultConfig,
    hashed: parentTheme?.hashed ?? defaultConfig.hashed,
    cssVar: parentTheme?.cssVar
  } : parentTheme;
  const themeKey = reactExports.useId();
  return useMemo(() => {
    if (!theme) {
      return parentTheme;
    }
    const mergedComponents = {
      ...parentThemeConfig.components
    };
    Object.keys(theme.components || {}).forEach((componentName) => {
      mergedComponents[componentName] = {
        ...mergedComponents[componentName],
        ...theme.components[componentName]
      };
    });
    const cssVarKey = `css-var-${themeKey.replace(/:/g, "")}`;
    const mergedCssVar = {
      prefix: config?.prefixCls,
      // Same as prefixCls by default
      ...parentThemeConfig.cssVar,
      ...themeConfig.cssVar,
      key: themeConfig.cssVar?.key || cssVarKey
    };
    return {
      ...parentThemeConfig,
      ...themeConfig,
      token: {
        ...parentThemeConfig.token,
        ...themeConfig.token
      },
      components: mergedComponents,
      cssVar: mergedCssVar
    };
  }, [themeConfig, parentThemeConfig], (prev, next) => prev.some((prevTheme, index) => {
    const nextTheme = next[index];
    return !isEqual(prevTheme, nextTheme, true);
  }));
}
const MotionCacheContext = /* @__PURE__ */ reactExports.createContext(true);
function MotionWrapper(props) {
  const parentMotion = reactExports.useContext(MotionCacheContext);
  const {
    children
  } = props;
  const [, token] = useToken();
  const {
    motion
  } = token;
  const needWrapMotionProviderRef = reactExports.useRef(false);
  needWrapMotionProviderRef.current || (needWrapMotionProviderRef.current = parentMotion !== motion);
  if (needWrapMotionProviderRef.current) {
    return /* @__PURE__ */ reactExports.createElement(MotionCacheContext.Provider, {
      value: motion
    }, /* @__PURE__ */ reactExports.createElement(MotionProvider, {
      motion
    }, children));
  }
  return children;
}
const PropWarning = () => null;
const IconStyle = ({
  iconPrefixCls,
  csp
}) => {
  useResetIconStyle(iconPrefixCls, csp);
  return null;
};
const PASSED_PROPS = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let globalPrefixCls;
let globalIconPrefixCls;
let globalTheme;
let globalHolderRender;
function getGlobalPrefixCls() {
  return globalPrefixCls || defaultPrefixCls;
}
function getGlobalIconPrefixCls() {
  return globalIconPrefixCls || defaultIconPrefixCls;
}
const setGlobalConfig = (props) => {
  const {
    prefixCls,
    iconPrefixCls,
    theme,
    holderRender
  } = props;
  if (prefixCls !== void 0) {
    globalPrefixCls = prefixCls;
  }
  if (iconPrefixCls !== void 0) {
    globalIconPrefixCls = iconPrefixCls;
  }
  if ("holderRender" in props) {
    globalHolderRender = holderRender;
  }
  if (theme) {
    globalTheme = theme;
  }
};
const globalConfig = () => ({
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
  },
  getIconPrefixCls: getGlobalIconPrefixCls,
  getRootPrefixCls: () => {
    if (globalPrefixCls) {
      return globalPrefixCls;
    }
    return getGlobalPrefixCls();
  },
  getTheme: () => globalTheme,
  holderRender: globalHolderRender
});
const ProviderChildren = (props) => {
  const {
    children,
    csp: customCsp,
    autoInsertSpaceInButton,
    alert,
    affix,
    anchor,
    app,
    form,
    locale: rawLocale,
    componentSize,
    direction,
    space,
    splitter,
    virtual,
    dropdownMatchSelectWidth,
    popupMatchSelectWidth,
    popupOverflow,
    legacyLocale,
    parentContext,
    iconPrefixCls: customIconPrefixCls,
    theme,
    componentDisabled,
    segmented,
    statistic,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    masonry,
    menu,
    pagination,
    input,
    inputPassword,
    inputSearch,
    textArea,
    otp,
    empty,
    badge,
    borderBeam,
    radio,
    rate,
    ribbon,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    cardMeta,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig,
    tour,
    tooltip,
    popover,
    popconfirm,
    qrcode,
    floatButton,
    floatButtonGroup,
    variant,
    inputNumber,
    treeSelect,
    watermark
  } = props;
  const locale2 = reactExports.useMemo(() => {
    if (isPlainObject(rawLocale) && Object.prototype.hasOwnProperty.call(rawLocale, "default") && rawLocale.default?.locale) {
      return rawLocale.default;
    }
    return rawLocale;
  }, [rawLocale]);
  const getPrefixCls = reactExports.useCallback((suffixCls, customizePrefixCls) => {
    const {
      prefixCls
    } = props;
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    const mergedPrefixCls = prefixCls || parentContext.getPrefixCls("");
    return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
  }, [parentContext.getPrefixCls, props.prefixCls]);
  const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || defaultIconPrefixCls;
  const csp = customCsp || parentContext.csp;
  const mergedTheme = useTheme(theme, parentContext.theme, {
    prefixCls: getPrefixCls("")
  });
  const baseConfig = {
    csp,
    autoInsertSpaceInButton,
    alert,
    affix,
    anchor,
    app,
    locale: locale2 || legacyLocale,
    direction,
    space,
    splitter,
    virtual,
    popupMatchSelectWidth: popupMatchSelectWidth ?? dropdownMatchSelectWidth,
    popupOverflow,
    getPrefixCls,
    iconPrefixCls,
    theme: mergedTheme,
    segmented,
    statistic,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    input,
    inputPassword,
    inputSearch,
    textArea,
    otp,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    masonry,
    menu,
    pagination,
    empty,
    badge,
    borderBeam,
    radio,
    rate,
    ribbon,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    cardMeta,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig,
    tour,
    tooltip,
    popover,
    popconfirm,
    qrcode,
    floatButton,
    floatButtonGroup,
    variant,
    inputNumber,
    treeSelect,
    watermark
  };
  const config = {
    ...parentContext
  };
  Object.keys(baseConfig).forEach((key) => {
    if (baseConfig[key] !== void 0) {
      config[key] = baseConfig[key];
    }
  });
  PASSED_PROPS.forEach((propName) => {
    const propValue = props[propName];
    if (propValue) {
      config[propName] = propValue;
    }
  });
  if (typeof autoInsertSpaceInButton !== "undefined") {
    config.button = {
      autoInsertSpace: autoInsertSpaceInButton,
      ...config.button
    };
  }
  const memoedConfig = useMemo(() => config, config, (prevConfig, currentConfig) => {
    const prevKeys = Object.keys(prevConfig);
    const currentKeys = Object.keys(currentConfig);
    return prevKeys.length !== currentKeys.length || prevKeys.some((key) => prevConfig[key] !== currentConfig[key]);
  });
  const {
    layer
  } = reactExports.useContext(StyleContext);
  const memoIconContextValue = reactExports.useMemo(() => ({
    prefixCls: iconPrefixCls,
    csp,
    layer: layer ? "antd" : void 0,
    zeroRuntime: mergedTheme?.zeroRuntime
  }), [iconPrefixCls, csp, layer, mergedTheme?.zeroRuntime]);
  let childNode = /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(IconStyle, {
    iconPrefixCls,
    csp
  }), /* @__PURE__ */ reactExports.createElement(PropWarning, {
    dropdownMatchSelectWidth
  }), children);
  const validateMessages = reactExports.useMemo(() => merge(localeValues.Form?.defaultValidateMessages || {}, memoedConfig.locale?.Form?.defaultValidateMessages || {}, memoedConfig.form?.validateMessages || {}, form?.validateMessages || {}), [memoedConfig, form?.validateMessages]);
  if (Object.keys(validateMessages).length > 0) {
    childNode = /* @__PURE__ */ reactExports.createElement(ValidateMessagesContext.Provider, {
      value: validateMessages
    }, childNode);
  }
  if (locale2) {
    childNode = /* @__PURE__ */ reactExports.createElement(LocaleProvider, {
      locale: locale2,
      _ANT_MARK__: ANT_MARK
    }, childNode);
  }
  {
    childNode = /* @__PURE__ */ reactExports.createElement(IconContext.Provider, {
      value: memoIconContextValue
    }, childNode);
  }
  if (componentSize) {
    childNode = /* @__PURE__ */ reactExports.createElement(SizeContextProvider, {
      size: componentSize
    }, childNode);
  }
  childNode = /* @__PURE__ */ reactExports.createElement(MotionWrapper, null, childNode);
  if (tooltip?.unique) {
    childNode = /* @__PURE__ */ reactExports.createElement(UniqueProvider, null, childNode);
  }
  const memoTheme = reactExports.useMemo(() => {
    const {
      algorithm,
      token,
      components,
      cssVar,
      ...rest
    } = mergedTheme || {};
    const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? createTheme(algorithm) : defaultTheme;
    const parsedComponents = {};
    Object.entries(components || {}).forEach(([componentName, componentToken]) => {
      const parsedToken = {
        ...componentToken
      };
      if ("algorithm" in parsedToken) {
        if (parsedToken.algorithm === true) {
          parsedToken.theme = themeObj;
        } else if (Array.isArray(parsedToken.algorithm) || isFunction(parsedToken.algorithm)) {
          parsedToken.theme = createTheme(parsedToken.algorithm);
        }
        delete parsedToken.algorithm;
      }
      parsedComponents[componentName] = parsedToken;
    });
    const mergedToken = {
      ...seedToken,
      ...token
    };
    return {
      ...rest,
      theme: themeObj,
      token: mergedToken,
      components: parsedComponents,
      override: {
        override: mergedToken,
        ...parsedComponents
      },
      cssVar
    };
  }, [mergedTheme]);
  if (theme) {
    childNode = /* @__PURE__ */ reactExports.createElement(DesignTokenContext.Provider, {
      value: memoTheme
    }, childNode);
  }
  if (memoedConfig.warning) {
    childNode = /* @__PURE__ */ reactExports.createElement(WarningContext.Provider, {
      value: memoedConfig.warning
    }, childNode);
  }
  if (componentDisabled !== void 0) {
    childNode = /* @__PURE__ */ reactExports.createElement(DisabledContextProvider, {
      disabled: componentDisabled
    }, childNode);
  }
  return /* @__PURE__ */ reactExports.createElement(ConfigContext.Provider, {
    value: memoedConfig
  }, childNode);
};
const ConfigProvider = (props) => {
  const context = reactExports.useContext(ConfigContext);
  const antLocale = reactExports.useContext(LocaleContext);
  return /* @__PURE__ */ reactExports.createElement(ProviderChildren, {
    parentContext: context,
    legacyLocale: antLocale,
    ...props
  });
};
ConfigProvider.ConfigContext = ConfigContext;
ConfigProvider.SizeContext = SizeContext;
ConfigProvider.config = setGlobalConfig;
ConfigProvider.useConfig = useConfig;
Object.defineProperty(ConfigProvider, "SizeContext", {
  get: () => {
    return SizeContext;
  }
});
function fallbackProp(...args) {
  return args.find((arg) => arg !== void 0);
}
const useAllowClear = (options) => {
  const {
    allowClear,
    clearIcon,
    contextAllowClear,
    contextClearIcon,
    defaultAllowClear,
    componentName
  } = options;
  return reactExports.useMemo(() => {
    const mergedAllowClear = allowClear ?? contextAllowClear ?? defaultAllowClear;
    if (!mergedAllowClear) {
      return false;
    }
    return {
      clearIcon: fallbackProp(isPlainObject(allowClear) ? allowClear?.clearIcon : clearIcon, isPlainObject(contextAllowClear) ? contextAllowClear?.clearIcon : contextClearIcon, /* @__PURE__ */ React.createElement(RefIcon, null)),
      disabled: (isPlainObject(allowClear) ? allowClear?.disabled : void 0) ?? (isPlainObject(contextAllowClear) ? contextAllowClear?.disabled : void 0)
    };
  }, [allowClear, clearIcon, contextAllowClear, contextClearIcon, defaultAllowClear]);
};
const pickClosable = (context) => {
  if (!context) {
    return void 0;
  }
  const {
    closable,
    closeIcon
  } = context;
  return {
    closable,
    closeIcon
  };
};
const EmptyFallbackCloseCollection = {};
const computeClosableConfig = (closable, closeIcon) => {
  if (!closable && (closable === false || closeIcon === false || closeIcon === null)) {
    return false;
  }
  if (!isNonNullable(closable) && !isNonNullable(closeIcon)) {
    return null;
  }
  let closableConfig = {
    closeIcon: typeof closeIcon !== "boolean" && isNonNullable(closeIcon) ? closeIcon : void 0
  };
  if (isPlainObject(closable)) {
    closableConfig = {
      ...closableConfig,
      ...closable
    };
  }
  return closableConfig;
};
const mergeClosableConfigs = (propConfig, contextConfig, fallbackConfig) => {
  if (propConfig === false) {
    return false;
  }
  if (propConfig) {
    return mergeProps(fallbackConfig, contextConfig, propConfig);
  }
  if (contextConfig === false) {
    return false;
  }
  if (contextConfig) {
    return mergeProps(fallbackConfig, contextConfig);
  }
  return fallbackConfig.closable ? fallbackConfig : false;
};
const computeCloseIcon = (mergedConfig, fallbackCloseCollection, closeLabel) => {
  const {
    closeIconRender
  } = fallbackCloseCollection;
  const {
    closeIcon,
    ...restConfig
  } = mergedConfig;
  let finalCloseIcon = closeIcon;
  const ariaOrDataProps = pickAttrs(restConfig, true);
  if (isNonNullable(finalCloseIcon)) {
    if (closeIconRender) {
      finalCloseIcon = closeIconRender(finalCloseIcon);
    }
    finalCloseIcon = /* @__PURE__ */ React.isValidElement(finalCloseIcon) ? /* @__PURE__ */ React.cloneElement(finalCloseIcon, {
      "aria-label": closeLabel,
      ...finalCloseIcon.props,
      ...ariaOrDataProps
    }) : /* @__PURE__ */ React.createElement("span", {
      "aria-label": closeLabel,
      ...ariaOrDataProps
    }, finalCloseIcon);
  }
  return [finalCloseIcon, ariaOrDataProps];
};
const computeClosable = (propCloseCollection, contextCloseCollection, fallbackCloseCollection = EmptyFallbackCloseCollection, closeLabel = "Close") => {
  const propConfig = computeClosableConfig(propCloseCollection?.closable, propCloseCollection?.closeIcon);
  const contextConfig = computeClosableConfig(contextCloseCollection?.closable, contextCloseCollection?.closeIcon);
  const mergedFallback = {
    closeIcon: /* @__PURE__ */ React.createElement(RefIcon$1, null),
    ...fallbackCloseCollection
  };
  const mergedConfig = mergeClosableConfigs(propConfig, contextConfig, mergedFallback);
  const closeBtnIsDisabled = typeof mergedConfig !== "boolean" ? !!mergedConfig?.disabled : false;
  if (mergedConfig === false) {
    return [false, null, closeBtnIsDisabled, {}];
  }
  const [closeIcon, ariaProps] = computeCloseIcon(mergedConfig, mergedFallback, closeLabel);
  return [true, closeIcon, closeBtnIsDisabled, ariaProps];
};
const useClosable = (propCloseCollection, contextCloseCollection, fallbackCloseCollection = EmptyFallbackCloseCollection) => {
  const [contextLocale] = useLocale("global", localeValues.global);
  return React.useMemo(() => {
    return computeClosable(propCloseCollection, contextCloseCollection, {
      closeIcon: /* @__PURE__ */ React.createElement(RefIcon$1, null),
      ...fallbackCloseCollection
    }, contextLocale.close);
  }, [propCloseCollection, contextCloseCollection, fallbackCloseCollection, contextLocale.close]);
};
const useForceUpdate = () => {
  return React.useReducer((ori) => ori + 1, 0);
};
const normalizeMaskConfig = (mask, maskClosable) => {
  let maskConfig = {};
  if (isPlainObject(mask)) {
    maskConfig = mask;
  }
  if (typeof mask === "boolean") {
    maskConfig = {
      enabled: mask
    };
  }
  if (maskConfig.closable === void 0 && maskClosable !== void 0) {
    maskConfig.closable = maskClosable;
  }
  return maskConfig;
};
const useMergedMask = (mask, contextMask, prefixCls, maskClosable) => {
  return reactExports.useMemo(() => {
    const maskConfig = normalizeMaskConfig(mask, maskClosable);
    const contextMaskConfig = normalizeMaskConfig(contextMask);
    const mergedConfig = {
      blur: false,
      ...contextMaskConfig,
      ...maskConfig,
      closable: maskConfig.closable ?? maskClosable ?? contextMaskConfig.closable ?? true
    };
    const className = mergedConfig.blur ? `${prefixCls}-mask-blur` : void 0;
    return [mergedConfig.enabled !== false, {
      mask: className
    }, !!mergedConfig.closable];
  }, [mask, contextMask, prefixCls, maskClosable]);
};
const isValidOrientation = (orientation) => {
  return orientation === "horizontal" || orientation === "vertical";
};
const useOrientation = (orientation, vertical, legacyDirection) => {
  return reactExports.useMemo(() => {
    const validOrientation = isValidOrientation(orientation);
    let mergedOrientation;
    if (validOrientation) {
      mergedOrientation = orientation;
    } else if (typeof vertical === "boolean") {
      mergedOrientation = vertical ? "vertical" : "horizontal";
    } else {
      const validLegacyDirection = isValidOrientation(legacyDirection);
      mergedOrientation = validLegacyDirection ? legacyDirection : "horizontal";
    }
    return [mergedOrientation, mergedOrientation === "vertical"];
  }, [legacyDirection, orientation, vertical]);
};
const usePatchElement = () => {
  const [elements, setElements] = reactExports.useState([]);
  const patchElement = reactExports.useCallback((element) => {
    setElements((originElements) => [].concat(_toConsumableArray(originElements), [element]));
    return () => {
      setElements((originElements) => originElements.filter((ele) => ele !== element));
    };
  }, []);
  return [elements, patchElement];
};
const ZIndexContext = /* @__PURE__ */ React.createContext(void 0);
const CONTAINER_OFFSET = 100;
const CONTAINER_OFFSET_MAX_COUNT = 10;
const CONTAINER_MAX_OFFSET = CONTAINER_OFFSET * CONTAINER_OFFSET_MAX_COUNT;
const containerBaseZIndexOffset = {
  Modal: CONTAINER_OFFSET,
  Drawer: CONTAINER_OFFSET,
  Popover: CONTAINER_OFFSET,
  Popconfirm: CONTAINER_OFFSET,
  Tooltip: CONTAINER_OFFSET,
  Tour: CONTAINER_OFFSET,
  FloatButton: CONTAINER_OFFSET
};
const consumerBaseZIndexOffset = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
const isContainerType = (type) => {
  return type in containerBaseZIndexOffset;
};
const useZIndex = (componentType, customZIndex) => {
  const [, token] = useToken();
  const parentZIndex = React.useContext(ZIndexContext);
  const isContainer = isContainerType(componentType);
  let result;
  if (customZIndex !== void 0) {
    result = [customZIndex, customZIndex];
  } else {
    let zIndex = parentZIndex ?? 0;
    if (isContainer) {
      zIndex += // Use preset token zIndex by default but not stack when has parent container
      (parentZIndex ? 0 : token.zIndexPopupBase) + // Container offset
      containerBaseZIndexOffset[componentType];
    } else {
      zIndex += consumerBaseZIndexOffset[componentType];
    }
    result = [parentZIndex === void 0 ? customZIndex : zIndex, zIndex];
  }
  return result;
};
const getCollapsedHeight = () => ({
  height: 0,
  opacity: 0
});
const getRealHeight = (node) => ({
  height: node?.scrollHeight ?? 0,
  opacity: node ? 1 : 0
});
const getCurrentHeight = (node) => ({
  height: node?.offsetHeight ?? 0
});
const skipOpacityTransition = (_, event) => {
  return event?.deadline === true || isTransitionEvent(event) && event.propertyName === "height";
};
const initCollapseMotion = (rootCls = defaultPrefixCls) => ({
  motionName: `${rootCls}-motion-collapse`,
  onAppearStart: getCollapsedHeight,
  onEnterStart: getCollapsedHeight,
  onAppearActive: getRealHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  onAppearEnd: skipOpacityTransition,
  onEnterEnd: skipOpacityTransition,
  onLeaveEnd: skipOpacityTransition,
  motionDeadline: 500
});
const getTransitionName = (rootPrefixCls, motion, transitionName) => {
  if (transitionName !== void 0) {
    return transitionName;
  }
  return `${rootPrefixCls}-${motion}`;
};
const genWaveStyle = (token) => {
  const {
    componentCls,
    colorPrimary,
    motionDurationSlow,
    motionEaseInOut,
    motionEaseOutCirc,
    antCls
  } = token;
  const [, varRef] = genCssVar(antCls, "wave");
  return {
    [componentCls]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: varRef("color", colorPrimary),
      boxShadow: `0 0 0 0 currentcolor`,
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s`, `opacity 2s`].map((prop) => `${prop} ${motionEaseOutCirc}`).join(","),
        "&-active": {
          boxShadow: `0 0 0 6px currentcolor`,
          opacity: 0
        },
        "&.wave-quick": {
          transition: [`box-shadow`, `opacity`].map((prop) => `${prop} ${motionDurationSlow} ${motionEaseInOut}`).join(",")
        }
      }
    }
  };
};
const useStyle$g = genComponentStyleHook("Wave", genWaveStyle);
const TARGET_CLS = `${defaultPrefixCls}-wave-target`;
const isValidWaveColor = (color) => {
  if (!color) {
    return false;
  }
  return isString(color) && color !== "#fff" && color !== "#ffffff" && color !== "rgb(255, 255, 255)" && color !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/i.test(color) && // any transparent rgba color
  !/^#(?:[0-9a-f]{3}0|[0-9a-f]{6}00)$/i.test(color) && // any transparent hex color
  color !== "transparent" && color !== "canvastext";
};
function getTargetWaveColor(node, colorSource = null) {
  const style = getComputedStyle(node);
  const {
    borderTopColor,
    borderColor,
    backgroundColor
  } = style;
  if (colorSource && isValidWaveColor(style[colorSource])) {
    return style[colorSource];
  }
  return [borderTopColor, borderColor, backgroundColor].find(isValidWaveColor) ?? null;
}
function validateNum(value) {
  return Number.isNaN(value) ? 0 : value;
}
const WaveEffect = (props) => {
  const {
    className,
    target,
    component,
    colorSource
  } = props;
  const divRef = reactExports.useRef(null);
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const [varName] = genCssVar(rootPrefixCls, "wave");
  const [waveColor, setWaveColor] = reactExports.useState(null);
  const [borderRadius, setBorderRadius] = reactExports.useState([]);
  const [left, setLeft] = reactExports.useState(0);
  const [top, setTop] = reactExports.useState(0);
  const [width, setWidth] = reactExports.useState(0);
  const [height, setHeight] = reactExports.useState(0);
  const [enabled, setEnabled] = reactExports.useState(false);
  const waveStyle = {
    left,
    top,
    width,
    height,
    borderRadius: borderRadius.map((radius) => `${radius}px`).join(" ")
  };
  if (waveColor) {
    waveStyle[varName("color")] = waveColor;
  }
  function syncPos() {
    const nodeStyle = getComputedStyle(target);
    setWaveColor(getTargetWaveColor(target, colorSource));
    const isStatic = nodeStyle.position === "static";
    const {
      borderLeftWidth,
      borderTopWidth
    } = nodeStyle;
    setLeft(isStatic ? target.offsetLeft : validateNum(-Number.parseFloat(borderLeftWidth)));
    setTop(isStatic ? target.offsetTop : validateNum(-Number.parseFloat(borderTopWidth)));
    setWidth(target.offsetWidth);
    setHeight(target.offsetHeight);
    const {
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius
    } = nodeStyle;
    setBorderRadius([borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius].map((radius) => validateNum(Number.parseFloat(radius))));
  }
  reactExports.useEffect(() => {
    if (target) {
      const id = wrapperRaf(() => {
        syncPos();
        setEnabled(true);
      });
      let resizeObserver;
      if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(syncPos);
        resizeObserver.observe(target);
      }
      return () => {
        wrapperRaf.cancel(id);
        resizeObserver?.disconnect();
      };
    }
  }, [target]);
  if (!enabled) {
    return null;
  }
  const isSmallComponent = (component === "Checkbox" || component === "Radio") && target?.classList.contains(TARGET_CLS);
  return /* @__PURE__ */ reactExports.createElement(CSSMotion, {
    visible: true,
    motionAppear: true,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (_, event) => {
      if (event.deadline || isTransitionEvent(event) && event.propertyName === "opacity") {
        const holder = divRef.current?.parentElement;
        unmount(holder).then(() => {
          holder?.remove();
        });
      }
      return false;
    }
  }, ({
    className: motionClassName
  }, ref) => /* @__PURE__ */ reactExports.createElement("div", {
    ref: composeRef(divRef, ref),
    className: clsx(className, motionClassName, {
      "wave-quick": isSmallComponent
    }),
    style: waveStyle
  }));
};
const showWaveEffect = (target, info) => {
  const {
    component
  } = info;
  if (component === "Checkbox" && !target.querySelector("input")?.checked) {
    return;
  }
  const holder = document.createElement("div");
  holder.style.position = "absolute";
  holder.style.left = "0px";
  holder.style.top = "0px";
  target?.insertBefore(holder, target?.firstChild);
  render(/* @__PURE__ */ reactExports.createElement(WaveEffect, {
    ...info,
    target
  }), holder);
};
const useWave = (nodeRef, className, component, colorSource) => {
  const {
    wave
  } = reactExports.useContext(ConfigContext);
  const [, token, hashId] = useToken();
  const showWave = useEvent((event) => {
    const node = nodeRef.current;
    if (wave?.disabled || !node) {
      return;
    }
    const targetNode = node.querySelector(`.${TARGET_CLS}`) || node;
    const {
      showEffect
    } = wave || {};
    (showEffect || showWaveEffect)(targetNode, {
      className,
      token,
      component,
      event,
      hashId,
      colorSource
    });
  });
  const rafIdRef = reactExports.useRef(null);
  reactExports.useEffect(() => () => {
    wrapperRaf.cancel(rafIdRef.current);
  }, []);
  const showDebounceWave = (event) => {
    wrapperRaf.cancel(rafIdRef.current);
    rafIdRef.current = wrapperRaf(() => {
      showWave(event);
    });
  };
  return showDebounceWave;
};
const TRIGGER_TYPE_TO_EVENT_MAP = {
  click: "click",
  mousedown: "mousedown",
  mouseup: "mouseup",
  pointerdown: "pointerdown",
  pointerup: "pointerup"
};
const Wave = (props) => {
  const {
    children,
    disabled,
    component,
    colorSource
  } = props;
  const {
    getPrefixCls,
    wave
  } = reactExports.useContext(ConfigContext);
  const containerRef = reactExports.useRef(null);
  const prefixCls = getPrefixCls("wave");
  const hashId = useStyle$g(prefixCls);
  const showWave = useWave(containerRef, clsx(prefixCls, hashId), component, colorSource);
  React.useEffect(() => {
    const node = containerRef.current;
    if (!node || node.nodeType !== window.Node.ELEMENT_NODE || disabled) {
      return;
    }
    const onClick = (e2) => {
      if (!isVisible(e2.target) || !node.getAttribute || node.getAttribute("disabled") || node.disabled || node.className.includes("disabled") && !node.className.includes("disabled:") || node.getAttribute("aria-disabled") === "true" || node.className.includes("-leave")) {
        return;
      }
      showWave(e2);
    };
    const triggerType = wave?.triggerType;
    const eventName = triggerType && triggerType in TRIGGER_TYPE_TO_EVENT_MAP ? TRIGGER_TYPE_TO_EVENT_MAP[triggerType] : "click";
    node.addEventListener(eventName, onClick, true);
    return () => {
      node.removeEventListener(eventName, onClick, true);
    };
  }, [disabled, wave?.triggerType]);
  if (!/* @__PURE__ */ React.isValidElement(children)) {
    return children ?? null;
  }
  const ref = supportRef(children) ? composeRef(getNodeRef(children), containerRef) : containerRef;
  return cloneElement(children, {
    ref
  });
};
const useSize = (customSize) => {
  const size = React.useContext(SizeContext);
  const mergedSize = React.useMemo(() => {
    if (!customSize) {
      return size;
    }
    if (isString(customSize)) {
      return customSize ?? size;
    }
    if (isFunction(customSize)) {
      return customSize(size);
    }
    return size;
  }, [customSize, size]);
  return mergedSize;
};
const genSpaceCompactStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: "inline-flex",
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-rtl": {
        direction: "rtl"
      }
    }
  };
};
const useStyle$f = genStyleHooks(["Space", "Compact"], genSpaceCompactStyle, () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: false
});
const SpaceCompactItemContext = /* @__PURE__ */ reactExports.createContext(null);
const useCompactItemContext = (prefixCls, direction) => {
  const compactItemContext = reactExports.useContext(SpaceCompactItemContext);
  const compactItemClassnames = reactExports.useMemo(() => {
    if (!compactItemContext) {
      return "";
    }
    const {
      compactDirection,
      isFirstItem,
      isLastItem
    } = compactItemContext;
    const separator = compactDirection === "vertical" ? "-vertical-" : "-";
    return clsx(`${prefixCls}-compact${separator}item`, {
      [`${prefixCls}-compact${separator}first-item`]: isFirstItem,
      [`${prefixCls}-compact${separator}last-item`]: isLastItem,
      [`${prefixCls}-compact${separator}item-rtl`]: direction === "rtl"
    });
  }, [prefixCls, direction, compactItemContext]);
  return {
    compactSize: compactItemContext?.compactSize,
    compactDirection: compactItemContext?.compactDirection,
    compactItemClassnames
  };
};
const NoCompactStyle = (props) => {
  const {
    children
  } = props;
  return /* @__PURE__ */ reactExports.createElement(SpaceCompactItemContext.Provider, {
    value: null
  }, children);
};
const CompactItem = (props) => {
  const {
    children,
    ...others
  } = props;
  return /* @__PURE__ */ reactExports.createElement(SpaceCompactItemContext.Provider, {
    value: reactExports.useMemo(() => others, [others])
  }, children);
};
const Compact$1 = (props) => {
  const {
    getPrefixCls,
    direction: directionConfig
  } = reactExports.useContext(ConfigContext);
  const {
    size,
    direction,
    orientation,
    block,
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    children,
    vertical,
    ...restProps
  } = props;
  const [mergedOrientation, mergedVertical] = useOrientation(orientation, vertical, direction);
  const mergedSize = useSize((ctx) => size ?? ctx);
  const prefixCls = getPrefixCls("space-compact", customizePrefixCls);
  const [hashId] = useStyle$f(prefixCls);
  const clx = clsx(prefixCls, hashId, {
    [`${prefixCls}-rtl`]: directionConfig === "rtl",
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-vertical`]: mergedVertical
  }, className, rootClassName);
  const compactItemContext = reactExports.useContext(SpaceCompactItemContext);
  const childNodes = toArray$1(children);
  const nodes = reactExports.useMemo(() => childNodes.map((child, i) => {
    const key = child?.key || `${prefixCls}-item-${i}`;
    return /* @__PURE__ */ reactExports.createElement(CompactItem, {
      key,
      compactSize: mergedSize,
      compactDirection: mergedOrientation,
      isFirstItem: i === 0 && (!compactItemContext || compactItemContext?.isFirstItem),
      isLastItem: i === childNodes.length - 1 && (!compactItemContext || compactItemContext?.isLastItem)
    }, child);
  }), [childNodes, compactItemContext, mergedOrientation, mergedSize, prefixCls]);
  if (childNodes.length === 0) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement("div", {
    className: clx,
    ...restProps
  }, nodes);
};
const GroupSizeContext = /* @__PURE__ */ reactExports.createContext(void 0);
const ButtonGroup = (props) => {
  const {
    getPrefixCls,
    direction
  } = reactExports.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    size,
    className,
    ...others
  } = props;
  const prefixCls = getPrefixCls("btn-group", customizePrefixCls);
  const [, , hashId] = useToken();
  const sizeCls = reactExports.useMemo(() => {
    switch (size) {
      case "large":
        return "lg";
      case "small":
        return "sm";
      default:
        return "";
    }
  }, [size]);
  const classes = clsx(prefixCls, {
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, className, hashId);
  return /* @__PURE__ */ reactExports.createElement(GroupSizeContext.Provider, {
    value: size
  }, /* @__PURE__ */ reactExports.createElement("div", {
    ...others,
    className: classes
  }));
};
const rxTwoCNChar = /^[\u4E00-\u9FA5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function convertLegacyProps(type) {
  if (type === "danger") {
    return {
      danger: true
    };
  }
  return {
    type
  };
}
function isUnBorderedButtonVariant(type) {
  return type === "text" || type === "link";
}
function splitCNCharsBySpace(child, needInserted, style, className) {
  if (!isReactRenderable(child)) {
    return;
  }
  const SPACE = needInserted ? " " : "";
  if (!isString(child) && !isNumber(child) && isString(child.type) && isTwoCNChar(child.props.children)) {
    return cloneElement(child, (oriProps) => {
      const mergedCls = clsx(oriProps.className, className) || void 0;
      const mergedStyle = {
        ...style,
        ...oriProps.style
      };
      return {
        ...oriProps,
        children: oriProps.children.split("").join(SPACE),
        className: mergedCls,
        style: mergedStyle
      };
    });
  }
  if (isString(child)) {
    return /* @__PURE__ */ React.createElement("span", {
      className,
      style
    }, isTwoCNChar(child) ? child.split("").join(SPACE) : child);
  }
  if (isFragment(child)) {
    return /* @__PURE__ */ React.createElement("span", {
      className,
      style
    }, child);
  }
  return cloneElement(child, (oriProps) => ({
    ...oriProps,
    className: clsx(oriProps.className, className) || void 0,
    style: {
      ...oriProps.style,
      ...style
    }
  }));
}
function spaceChildren(children, needInserted, style, className) {
  let isPrevChildPure = false;
  const childList = [];
  React.Children.forEach(children, (child) => {
    const isCurrentChildPure = isString(child) || isNumber(child);
    if (isPrevChildPure && isCurrentChildPure) {
      const lastIndex = childList.length - 1;
      const lastChild = childList[lastIndex];
      childList[lastIndex] = `${lastChild}${child}`;
    } else {
      childList.push(child);
    }
    isPrevChildPure = isCurrentChildPure;
  });
  return React.Children.map(childList, (child) => splitCNCharsBySpace(child, needInserted, style, className));
}
["default", "primary", "danger"].concat(_toConsumableArray(PresetColors));
const IconWrapper = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    className,
    style,
    children,
    prefixCls
  } = props;
  const iconWrapperCls = clsx(`${prefixCls}-icon`, className);
  return /* @__PURE__ */ React.createElement("span", {
    ref,
    className: iconWrapperCls,
    style
  }, children);
});
const InnerLoadingIcon = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    prefixCls,
    className,
    style,
    iconClassName
  } = props;
  const mergedIconCls = clsx(`${prefixCls}-loading-icon`, className);
  return /* @__PURE__ */ React.createElement(IconWrapper, {
    prefixCls,
    className: mergedIconCls,
    style,
    ref
  }, /* @__PURE__ */ React.createElement(RefIcon$2, {
    className: iconClassName
  }));
});
const getCollapsedWidth = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
});
const getRealWidth = (node) => ({
  width: node.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
});
const DefaultLoadingIcon = (props) => {
  const {
    prefixCls,
    loading,
    existIcon,
    className,
    style,
    mount
  } = props;
  const visible = !!loading;
  if (existIcon) {
    return /* @__PURE__ */ React.createElement(InnerLoadingIcon, {
      prefixCls,
      className,
      style
    });
  }
  return /* @__PURE__ */ React.createElement(CSSMotion, {
    visible,
    // Used for minus flex gap style only
    motionName: `${prefixCls}-loading-icon-motion`,
    motionAppear: !mount,
    motionEnter: !mount,
    motionLeave: !mount,
    removeOnLeave: true,
    onAppearStart: getCollapsedWidth,
    onAppearActive: getRealWidth,
    onEnterStart: getCollapsedWidth,
    onEnterActive: getRealWidth,
    onLeaveStart: getRealWidth,
    onLeaveActive: getCollapsedWidth
  }, ({
    className: motionCls,
    style: motionStyle
  }, ref) => {
    const mergedStyle = {
      ...style,
      ...motionStyle
    };
    return /* @__PURE__ */ React.createElement(InnerLoadingIcon, {
      prefixCls,
      className: clsx(className, motionCls),
      style: mergedStyle,
      ref
    });
  });
};
const genCollapseMotion = (token) => {
  const {
    componentCls,
    antCls,
    motionDurationMid,
    motionEaseInOut
  } = token;
  return {
    [componentCls]: {
      // For common/openAnimation
      [`${antCls}-motion-collapse-legacy`]: {
        overflow: "hidden",
        "&-active": {
          transition: `${["height", "opacity"].map((prop) => `${prop} ${motionDurationMid} ${motionEaseInOut}`).join(", ")} !important`
        }
      },
      [`${antCls}-motion-collapse`]: {
        overflow: "hidden",
        transition: `${["height", "opacity"].map((prop) => `${prop} ${motionDurationMid} ${motionEaseInOut}`).join(", ")} !important`
      }
    }
  };
};
const initMotionCommon = (duration) => ({
  animationDuration: duration,
  animationFillMode: "both"
});
const initMotion = (motionCls, inKeyframes, outKeyframes, duration, sameLevel = false) => {
  const sameLevelPrefix = sameLevel ? "&" : "";
  return {
    [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: {
      ...initMotionCommon(duration),
      animationPlayState: "paused"
    },
    [`${sameLevelPrefix}${motionCls}-leave`]: {
      ...initMotionCommon(duration),
      animationPlayState: "paused"
    },
    [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
      animationName: inKeyframes,
      animationPlayState: "running"
    },
    [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
      animationName: outKeyframes,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
};
const fadeIn = new Keyframe("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
});
const fadeOut = new Keyframe("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
});
const initFadeMotion = (token, sameLevel = false) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-fade`;
  const sameLevelPrefix = sameLevel ? "&" : "";
  return [initMotion(motionCls, fadeIn, fadeOut, token.motionDurationMid, sameLevel), {
    [`
        ${sameLevelPrefix}${motionCls}-enter,
        ${sameLevelPrefix}${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: "linear"
    },
    [`${sameLevelPrefix}${motionCls}-leave`]: {
      animationTimingFunction: "linear"
    }
  }];
};
const moveDownIn = new Keyframe("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveDownOut = new Keyframe("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveLeftIn = new Keyframe("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveLeftOut = new Keyframe("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveRightIn = new Keyframe("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveRightOut = new Keyframe("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveUpIn = new Keyframe("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveUpOut = new Keyframe("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveMotion = {
  "move-up": {
    inKeyframes: moveUpIn,
    outKeyframes: moveUpOut
  },
  "move-down": {
    inKeyframes: moveDownIn,
    outKeyframes: moveDownOut
  },
  "move-left": {
    inKeyframes: moveLeftIn,
    outKeyframes: moveLeftOut
  },
  "move-right": {
    inKeyframes: moveRightIn,
    outKeyframes: moveRightOut
  }
};
const initMoveMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = moveMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};
const slideUpIn = new Keyframe("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
const slideUpOut = new Keyframe("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
const slideDownIn = new Keyframe("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
});
const slideDownOut = new Keyframe("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
});
const slideLeftIn = new Keyframe("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
const slideLeftOut = new Keyframe("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
const slideRightIn = new Keyframe("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
});
const slideRightOut = new Keyframe("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
});
const slideMotion = {
  "slide-up": {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut
  },
  "slide-down": {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut
  },
  "slide-left": {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut
  },
  "slide-right": {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut
  }
};
const initSlideMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = slideMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
      ${motionCls}-enter,
      ${motionCls}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: token.motionEaseOutQuint,
      "&-prepare": {
        transform: "scale(1)"
      }
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInQuint
    }
  }];
};
const genNoMotionStyle = () => {
  return {
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      animation: "none"
    }
  };
};
const zoomIn = new Keyframe("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
});
const zoomOut = new Keyframe("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
});
const zoomBigIn = new Keyframe("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
});
const zoomBigOut = new Keyframe("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
});
const zoomUpIn = new Keyframe("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
});
const zoomUpOut = new Keyframe("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
});
const zoomLeftIn = new Keyframe("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
});
const zoomLeftOut = new Keyframe("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
});
const zoomRightIn = new Keyframe("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
});
const zoomRightOut = new Keyframe("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
});
const zoomDownIn = new Keyframe("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
});
const zoomDownOut = new Keyframe("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
});
const zoomMotion = {
  zoom: {
    inKeyframes: zoomIn,
    outKeyframes: zoomOut
  },
  "zoom-big": {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  "zoom-big-fast": {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  "zoom-left": {
    inKeyframes: zoomLeftIn,
    outKeyframes: zoomLeftOut
  },
  "zoom-right": {
    inKeyframes: zoomRightIn,
    outKeyframes: zoomRightOut
  },
  "zoom-up": {
    inKeyframes: zoomUpIn,
    outKeyframes: zoomUpOut
  },
  "zoom-down": {
    inKeyframes: zoomDownIn,
    outKeyframes: zoomDownOut
  }
};
const initZoomMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = zoomMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, motionName === "zoom-big-fast" ? token.motionDurationFast : token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};
const genButtonBorderStyle = (buttonTypeCls, borderColor) => ({
  // Border
  [`> span, > ${buttonTypeCls}`]: {
    "&:not(:last-child)": {
      [`&, & > ${buttonTypeCls}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: borderColor
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${buttonTypeCls}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: borderColor
        }
      }
    }
  }
});
const genGroupStyle$1 = (token) => {
  const {
    componentCls,
    fontSize,
    lineWidth,
    groupBorderColor,
    colorErrorHover
  } = token;
  return {
    [`${componentCls}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${componentCls}`]: {
          "&:not(:last-child)": {
            [`&, & > ${componentCls}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: token.calc(lineWidth).mul(-1).equal(),
            [`&, & > ${componentCls}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [componentCls]: {
          position: "relative",
          zIndex: 1,
          "&:hover, &:focus, &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${componentCls}-icon-only`]: {
          fontSize
        }
      },
      // Border Color
      genButtonBorderStyle(`${componentCls}-primary`, groupBorderColor),
      genButtonBorderStyle(`${componentCls}-danger`, colorErrorHover)
    ]
  };
};
const toHexFormat = (value, alpha) => value?.replace(/[^0-9a-f]/gi, "").slice(0, alpha ? 8 : 6) || "";
const getHex = (value, alpha) => value ? toHexFormat(value, alpha) : "";
let AggregationColor = /* @__PURE__ */ (function() {
  function AggregationColor2(color) {
    _classCallCheck(this, AggregationColor2);
    this.cleared = false;
    if (color instanceof AggregationColor2) {
      this.metaColor = color.metaColor.clone();
      this.colors = color.colors?.map((info) => ({
        color: new AggregationColor2(info.color),
        percent: info.percent
      }));
      this.cleared = color.cleared;
      return;
    }
    const isArray = Array.isArray(color);
    if (isArray && color.length) {
      this.colors = color.map(({
        color: c,
        percent
      }) => ({
        color: new AggregationColor2(c),
        percent
      }));
      this.metaColor = new Color(this.colors[0].color.metaColor);
    } else {
      this.metaColor = new Color(isArray ? "" : color);
    }
    if (!color || isArray && !this.colors) {
      this.metaColor = this.metaColor.setA(0);
      this.cleared = true;
    }
  }
  return _createClass(AggregationColor2, [{
    key: "toHsb",
    value: function toHsb() {
      return this.metaColor.toHsb();
    }
  }, {
    key: "toHsbString",
    value: function toHsbString() {
      return this.metaColor.toHsbString();
    }
  }, {
    key: "toHex",
    value: function toHex() {
      return getHex(this.toHexString(), this.metaColor.a < 1);
    }
  }, {
    key: "toHexString",
    value: function toHexString() {
      return this.metaColor.toHexString();
    }
  }, {
    key: "toRgb",
    value: function toRgb() {
      return this.metaColor.toRgb();
    }
  }, {
    key: "toRgbString",
    value: function toRgbString() {
      return this.metaColor.toRgbString();
    }
  }, {
    key: "isGradient",
    value: function isGradient() {
      return !!this.colors && !this.cleared;
    }
  }, {
    key: "getColors",
    value: function getColors() {
      return this.colors || [{
        color: this,
        percent: 0
      }];
    }
  }, {
    key: "toCssString",
    value: function toCssString() {
      const {
        colors
      } = this;
      if (colors) {
        const colorsStr = colors.map((c) => `${c.color.toRgbString()} ${c.percent}%`).join(", ");
        return `linear-gradient(90deg, ${colorsStr})`;
      }
      return this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function equals(color) {
      if (!color || this.isGradient() !== color.isGradient()) {
        return false;
      }
      if (!this.isGradient()) {
        return this.toHexString() === color.toHexString();
      }
      return this.colors.length === color.colors.length && this.colors.every((c, i) => {
        const target = color.colors[i];
        return c.percent === target.percent && c.color.equals(target.color);
      });
    }
  }]);
})();
const generateColor = (color) => {
  if (color instanceof AggregationColor) {
    return color;
  }
  return new AggregationColor(color);
};
const isBright = (value, bgColorToken) => {
  const {
    r,
    g,
    b,
    a
  } = value.toRgb();
  const hsv = new Color(value.toRgbString()).onBackground(bgColorToken).toHsv();
  if (a <= 0.5) {
    return hsv.v > 0.5;
  }
  return r * 0.299 + g * 0.587 + b * 0.114 > 192;
};
const prepareToken$2 = (token) => {
  const {
    paddingInline,
    onlyIconSize,
    borderColorDisabled
  } = token;
  const buttonToken = merge$1(token, {
    buttonPaddingHorizontal: paddingInline,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: onlyIconSize,
    colorBorderDisabled: borderColorDisabled
  });
  return buttonToken;
};
const prepareComponentToken$8 = (token) => {
  const contentFontSize = token.contentFontSize ?? token.fontSize;
  const contentFontSizeSM = token.contentFontSizeSM ?? token.fontSize;
  const contentFontSizeLG = token.contentFontSizeLG ?? token.fontSizeLG;
  const contentLineHeight = token.contentLineHeight ?? getLineHeight(contentFontSize);
  const contentLineHeightSM = token.contentLineHeightSM ?? getLineHeight(contentFontSizeSM);
  const contentLineHeightLG = token.contentLineHeightLG ?? getLineHeight(contentFontSizeLG);
  const solidTextColor = isBright(new AggregationColor(token.colorBgSolid), "#fff") ? "#000" : "#fff";
  const shadowColorTokens = PresetColors.reduce((prev, colorKey) => ({
    ...prev,
    [`${colorKey}ShadowColor`]: `0 ${unit(token.controlOutlineWidth)} 0 ${getAlphaColor(token[`${colorKey}1`], token.colorBgContainer)}`
  }), {});
  const defaultBgDisabled = token.colorBgContainerDisabled;
  const dashedBgDisabled = token.colorBgContainerDisabled;
  return {
    ...shadowColorTokens,
    fontWeight: 400,
    iconGap: token.marginXS,
    defaultShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlTmpOutline}`,
    primaryShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlOutline}`,
    dangerShadow: `0 ${token.controlOutlineWidth}px 0 ${token.colorErrorOutline}`,
    primaryColor: token.colorTextLightSolid,
    dangerColor: token.colorTextLightSolid,
    borderColorDisabled: token.colorBorderDisabled,
    defaultGhostColor: token.colorBgContainer,
    ghostBg: "transparent",
    defaultGhostBorderColor: token.colorBgContainer,
    paddingInline: token.paddingContentHorizontal - token.lineWidth,
    paddingInlineLG: token.paddingContentHorizontal - token.lineWidth,
    paddingInlineSM: 8 - token.lineWidth,
    onlyIconSize: "inherit",
    onlyIconSizeSM: "inherit",
    onlyIconSizeLG: "inherit",
    groupBorderColor: token.colorPrimaryHover,
    linkHoverBg: "transparent",
    textTextColor: token.colorText,
    textTextHoverColor: token.colorText,
    textTextActiveColor: token.colorText,
    textHoverBg: token.colorFillTertiary,
    defaultColor: token.colorText,
    defaultBg: token.colorBgContainer,
    defaultBorderColor: token.colorBorder,
    defaultBorderColorDisabled: token.colorBorder,
    defaultHoverBg: token.colorBgContainer,
    defaultHoverColor: token.colorPrimaryHover,
    defaultHoverBorderColor: token.colorPrimaryHover,
    defaultActiveBg: token.colorBgContainer,
    defaultActiveColor: token.colorPrimaryActive,
    defaultActiveBorderColor: token.colorPrimaryActive,
    solidTextColor,
    contentFontSize,
    contentFontSizeSM,
    contentFontSizeLG,
    contentLineHeight,
    contentLineHeightSM,
    contentLineHeightLG,
    paddingBlock: Math.max((token.controlHeight - contentFontSize * contentLineHeight) / 2 - token.lineWidth, 0),
    paddingBlockSM: Math.max((token.controlHeightSM - contentFontSizeSM * contentLineHeightSM) / 2 - token.lineWidth, 0),
    paddingBlockLG: Math.max((token.controlHeightLG - contentFontSizeLG * contentLineHeightLG) / 2 - token.lineWidth, 0),
    defaultBgDisabled,
    dashedBgDisabled
  };
};
const genVariantStyle = (token) => {
  const {
    componentCls,
    antCls,
    lineWidth
  } = token;
  const [varName, varRef] = genCssVar(antCls, "btn");
  return {
    [componentCls]: [
      // ==============================================================
      // ==                         Variable                         ==
      // ==============================================================
      {
        // Border
        [varName("border-width")]: lineWidth,
        [varName("border-color")]: "#000",
        [varName("border-color-hover")]: varRef("border-color"),
        [varName("border-color-active")]: varRef("border-color"),
        [varName("border-color-disabled")]: varRef("border-color"),
        [varName("border-style")]: "solid",
        // Text
        [varName("text-color")]: "#000",
        [varName("text-color-hover")]: varRef("text-color"),
        [varName("text-color-active")]: varRef("text-color"),
        [varName("text-color-disabled")]: varRef("text-color"),
        // Background
        [varName("bg-color")]: "#ddd",
        [varName("bg-color-hover")]: varRef("bg-color"),
        [varName("bg-color-active")]: varRef("bg-color"),
        [varName("bg-color-disabled")]: token.colorBgContainerDisabled,
        [varName("bg-color-container")]: token.colorBgContainer,
        // Shadow
        [varName("shadow")]: "none"
      },
      // ==============================================================
      // ==                         Template                         ==
      // ==============================================================
      {
        // Basic
        border: [varRef("border-width"), varRef("border-style"), varRef("border-color")].join(" "),
        color: varRef("text-color"),
        backgroundColor: varRef("bg-color"),
        // Status
        [`&:not(:disabled):not(${componentCls}-disabled)`]: {
          // Hover
          "&:hover": {
            border: [varRef("border-width"), varRef("border-style"), varRef("border-color-hover")].join(" "),
            color: varRef("text-color-hover"),
            backgroundColor: varRef("bg-color-hover")
          },
          // Active
          "&:active": {
            border: [varRef("border-width"), varRef("border-style"), varRef("border-color-active")].join(" "),
            color: varRef("text-color-active"),
            backgroundColor: varRef("bg-color-active")
          }
        }
      },
      // ==============================================================
      // ==                         Variants                         ==
      // ==============================================================
      {
        // >>>>> Solid
        [`&${componentCls}-variant-solid`]: {
          // Solid Variables
          [varName("solid-bg-color")]: varRef("color-base"),
          [varName("solid-bg-color-hover")]: varRef("color-hover"),
          [varName("solid-bg-color-active")]: varRef("color-active"),
          // Variables
          [varName("border-color")]: "transparent",
          [varName("text-color")]: token.colorTextLightSolid,
          [varName("bg-color")]: varRef("solid-bg-color"),
          [varName("bg-color-hover")]: varRef("solid-bg-color-hover"),
          [varName("bg-color-active")]: varRef("solid-bg-color-active"),
          // Box Shadow
          boxShadow: varRef("shadow")
        },
        // >>>>> Outlined & Dashed
        [`&${componentCls}-variant-outlined, &${componentCls}-variant-dashed`]: {
          [varName("border-color")]: varRef("color-base"),
          [varName("border-color-hover")]: varRef("color-hover"),
          [varName("border-color-active")]: varRef("color-active"),
          [varName("bg-color")]: varRef("bg-color-container"),
          [varName("text-color")]: varRef("color-base"),
          [varName("text-color-hover")]: varRef("color-hover"),
          [varName("text-color-active")]: varRef("color-active"),
          // Box Shadow
          boxShadow: varRef("shadow")
        },
        // >>>>> Dashed
        [`&${componentCls}-variant-dashed`]: {
          [varName("border-style")]: "dashed",
          [varName("bg-color-disabled")]: token.dashedBgDisabled
        },
        // >>>>> Filled
        [`&${componentCls}-variant-filled`]: {
          [varName("border-color")]: "transparent",
          [varName("text-color")]: varRef("color-base"),
          [varName("bg-color")]: varRef("color-light"),
          [varName("bg-color-hover")]: varRef("color-light-hover"),
          [varName("bg-color-active")]: varRef("color-light-active")
        },
        // >>>>> Text & Link
        [`&${componentCls}-variant-text, &${componentCls}-variant-link`]: {
          [varName("border-color")]: "transparent",
          [varName("text-color")]: varRef("color-base"),
          [varName("text-color-hover")]: varRef("color-hover"),
          [varName("text-color-active")]: varRef("color-active"),
          [varName("bg-color")]: "transparent",
          [varName("bg-color-hover")]: "transparent",
          [varName("bg-color-active")]: "transparent",
          [`&:disabled, &${token.componentCls}-disabled`]: {
            background: "transparent",
            borderColor: "transparent"
          }
        },
        // >>>>> Text
        [`&${componentCls}-variant-text`]: {
          [varName("bg-color-hover")]: varRef("color-light"),
          [varName("bg-color-active")]: varRef("color-light-active")
        }
      },
      // ==============================================================
      // ==                          Colors                          ==
      // ==============================================================
      {
        // ======================== By Default ========================
        // >>>>> Link
        [`&${componentCls}-variant-link`]: {
          [varName("color-base")]: token.colorLink,
          [varName("color-hover")]: token.colorLinkHover,
          [varName("color-active")]: token.colorLinkActive,
          [varName("bg-color-hover")]: token.linkHoverBg
        },
        // ======================== Compatible ========================
        // >>>>> Primary
        [`&${componentCls}-color-primary`]: {
          [varName("color-base")]: token.colorPrimary,
          [varName("color-hover")]: token.colorPrimaryHover,
          [varName("color-active")]: token.colorPrimaryActive,
          [varName("color-light")]: token.colorPrimaryBg,
          [varName("color-light-hover")]: token.colorPrimaryBgHover,
          [varName("color-light-active")]: token.colorPrimaryBorder,
          [varName("shadow")]: token.primaryShadow,
          [`&${componentCls}-variant-solid`]: {
            [varName("text-color")]: token.primaryColor,
            [varName("text-color-hover")]: varRef("text-color"),
            [varName("text-color-active")]: varRef("text-color")
          }
        },
        // >>>>> Danger
        [`&${componentCls}-color-dangerous`]: {
          [varName("color-base")]: token.colorError,
          [varName("color-hover")]: token.colorErrorHover,
          [varName("color-active")]: token.colorErrorActive,
          [varName("color-light")]: token.colorErrorBg,
          [varName("color-light-hover")]: token.colorErrorBgFilledHover,
          [varName("color-light-active")]: token.colorErrorBgActive,
          [varName("shadow")]: token.dangerShadow,
          [`&${componentCls}-variant-solid`]: {
            [varName("text-color")]: token.dangerColor,
            [varName("text-color-hover")]: varRef("text-color"),
            [varName("text-color-active")]: varRef("text-color")
          }
        },
        // >>>>> Default
        [`&${componentCls}-color-default`]: {
          [varName("solid-bg-color")]: token.colorBgSolid,
          [varName("solid-bg-color-hover")]: token.colorBgSolidHover,
          [varName("solid-bg-color-active")]: token.colorBgSolidActive,
          [varName("color-base")]: token.defaultBorderColor,
          [varName("color-hover")]: token.defaultHoverBorderColor,
          [varName("color-active")]: token.defaultActiveBorderColor,
          [varName("color-light")]: token.colorFillTertiary,
          [varName("color-light-hover")]: token.colorFillSecondary,
          [varName("color-light-active")]: token.colorFill,
          [varName("text-color")]: token.defaultColor,
          [varName("text-color-hover")]: token.defaultHoverColor,
          [varName("text-color-active")]: token.defaultActiveColor,
          [varName("shadow")]: token.defaultShadow,
          [`&${componentCls}-variant-outlined`]: {
            [varName("bg-color-disabled")]: token.defaultBgDisabled
          },
          [`&${componentCls}-variant-solid`]: {
            [varName("text-color")]: token.solidTextColor,
            [varName("text-color-hover")]: varRef("text-color"),
            [varName("text-color-active")]: varRef("text-color")
          },
          [`&${componentCls}-variant-filled, &${componentCls}-variant-text`]: {
            [varName("text-color-hover")]: varRef("text-color"),
            [varName("text-color-active")]: varRef("text-color")
          },
          [`&${componentCls}-variant-outlined, &${componentCls}-variant-dashed`]: {
            [varName("text-color")]: token.defaultColor,
            [varName("text-color-hover")]: token.defaultHoverColor,
            [varName("text-color-active")]: token.defaultActiveColor,
            [varName("bg-color-container")]: token.defaultBg,
            [varName("bg-color-hover")]: token.defaultHoverBg,
            [varName("bg-color-active")]: token.defaultActiveBg
          },
          [`&${componentCls}-variant-text`]: {
            [varName("text-color")]: token.textTextColor,
            [varName("text-color-hover")]: token.textTextHoverColor,
            [varName("text-color-active")]: token.textTextActiveColor,
            [varName("bg-color-hover")]: token.textHoverBg
          },
          [`&${componentCls}-background-ghost`]: {
            [`&${componentCls}-variant-outlined, &${componentCls}-variant-dashed`]: {
              [varName("text-color")]: token.defaultGhostColor,
              [varName("border-color")]: token.defaultGhostBorderColor
            }
          }
        }
      },
      // >>>>> Preset Colors
      PresetColors.map((colorKey) => {
        const darkColor = token[`${colorKey}6`];
        const lightColor = token[`${colorKey}1`];
        const hoverColor = token[`${colorKey}Hover`];
        const lightHoverColor = token[`${colorKey}2`];
        const lightActiveColor = token[`${colorKey}3`];
        const activeColor = token[`${colorKey}Active`];
        const shadowColor = token[`${colorKey}ShadowColor`];
        return {
          [`&${componentCls}-color-${colorKey}`]: {
            [varName("color-base")]: darkColor,
            [varName("color-hover")]: hoverColor,
            [varName("color-active")]: activeColor,
            [varName("color-light")]: lightColor,
            [varName("color-light-hover")]: lightHoverColor,
            [varName("color-light-active")]: lightActiveColor,
            [varName("shadow")]: shadowColor
          }
        };
      }),
      // ==============================================================
      // ==                         Disabled                         ==
      // ==============================================================
      {
        // Disabled
        [`&:disabled, &${token.componentCls}-disabled`]: {
          cursor: "not-allowed",
          borderColor: token.colorBorderDisabled,
          background: varRef("bg-color-disabled"),
          color: token.colorTextDisabled,
          boxShadow: "none"
        }
      },
      // ==============================================================
      // ==                          Ghost                           ==
      // ==============================================================
      {
        // Ghost
        [`&${componentCls}-background-ghost`]: {
          [varName("bg-color")]: token.ghostBg,
          [varName("bg-color-hover")]: token.ghostBg,
          [varName("bg-color-active")]: token.ghostBg,
          [varName("shadow")]: "none",
          [`&${componentCls}-variant-outlined, &${componentCls}-variant-dashed`]: {
            [varName("bg-color-hover")]: token.ghostBg,
            [varName("bg-color-active")]: token.ghostBg
          }
        }
      }
    ]
  };
};
const genSharedButtonStyle = (token) => {
  const {
    componentCls,
    iconCls,
    fontWeight,
    opacityLoading,
    motionDurationSlow,
    motionEaseInOut,
    iconGap,
    calc
  } = token;
  return {
    [componentCls]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: iconGap,
      alignItems: "center",
      justifyContent: "center",
      fontWeight,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      cursor: "pointer",
      transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      ...genNoMotionStyle(),
      "&:disabled > *": {
        pointerEvents: "none"
      },
      // https://github.com/ant-design/ant-design/issues/51380
      [`${componentCls}-icon > svg`]: resetIcon(),
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": genFocusStyle(token),
      [`&${componentCls}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${componentCls}-two-chinese-chars > *:not(${iconCls})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      [`&${componentCls}-icon-only`]: {
        paddingInline: 0,
        // make `btn-icon-only` not too narrow
        [`&${componentCls}-compact-item`]: {
          flex: "none"
        }
      },
      // Loading
      [`&${componentCls}-loading`]: {
        opacity: opacityLoading,
        cursor: "default"
      },
      [`${componentCls}-loading-icon`]: {
        transition: ["width", "opacity", "margin"].map((prop) => `${prop} ${motionDurationSlow} ${motionEaseInOut}`).join(",")
      },
      // iconPlacement
      [`&:not(${componentCls}-icon-end)`]: {
        [`${componentCls}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineEnd: calc(iconGap).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineEnd: 0
          },
          "&-leave-start": {
            marginInlineEnd: 0
          },
          "&-leave-active": {
            marginInlineEnd: calc(iconGap).mul(-1).equal()
          }
        }
      },
      "&-icon-end": {
        flexDirection: "row-reverse",
        [`${componentCls}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineStart: calc(iconGap).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineStart: 0
          },
          "&-leave-start": {
            marginInlineStart: 0
          },
          "&-leave-active": {
            marginInlineStart: calc(iconGap).mul(-1).equal()
          }
        }
      }
    }
  };
};
const genCircleButtonStyle = (token) => ({
  minWidth: token.controlHeight,
  paddingInline: 0,
  borderRadius: "50%"
});
const genButtonStyle = (token, prefixCls = "") => {
  const {
    componentCls,
    controlHeight,
    fontSize,
    borderRadius,
    buttonPaddingHorizontal,
    iconCls,
    buttonPaddingVertical,
    buttonIconOnlyFontSize
  } = token;
  return [
    {
      [prefixCls]: {
        fontSize,
        height: controlHeight,
        padding: `${unit(buttonPaddingVertical)} ${unit(buttonPaddingHorizontal)}`,
        borderRadius,
        [`&${componentCls}-icon-only`]: {
          width: controlHeight,
          [iconCls]: {
            fontSize: buttonIconOnlyFontSize
          }
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${componentCls}${componentCls}-circle${prefixCls}`]: genCircleButtonStyle(token)
    },
    {
      [`${componentCls}${componentCls}-round${prefixCls}`]: {
        borderRadius: token.controlHeight,
        [`&:not(${componentCls}-icon-only)`]: {
          paddingInline: token.buttonPaddingHorizontal
        }
      }
    }
  ];
};
const genSizeBaseButtonStyle = (token) => {
  const baseToken = merge$1(token, {
    fontSize: token.contentFontSize
  });
  return genButtonStyle(baseToken, token.componentCls);
};
const genSizeSmallButtonStyle = (token) => {
  const smallToken = merge$1(token, {
    controlHeight: token.controlHeightSM,
    fontSize: token.contentFontSizeSM,
    padding: token.paddingXS,
    buttonPaddingHorizontal: token.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: token.borderRadiusSM,
    buttonIconOnlyFontSize: token.onlyIconSizeSM
  });
  return genButtonStyle(smallToken, `${token.componentCls}-sm`);
};
const genSizeLargeButtonStyle = (token) => {
  const largeToken = merge$1(token, {
    controlHeight: token.controlHeightLG,
    fontSize: token.contentFontSizeLG,
    buttonPaddingHorizontal: token.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: token.borderRadiusLG,
    buttonIconOnlyFontSize: token.onlyIconSizeLG
  });
  return genButtonStyle(largeToken, `${token.componentCls}-lg`);
};
const genBlockButtonStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      [`&${componentCls}-block`]: {
        width: "100%"
      }
    }
  };
};
const useStyle$e = genStyleHooks("Button", (token) => {
  const buttonToken = prepareToken$2(token);
  return [
    // Shared
    genSharedButtonStyle(buttonToken),
    // Size
    genSizeBaseButtonStyle(buttonToken),
    genSizeSmallButtonStyle(buttonToken),
    genSizeLargeButtonStyle(buttonToken),
    // Block
    genBlockButtonStyle(buttonToken),
    // Variant
    genVariantStyle(buttonToken),
    // Button Group
    genGroupStyle$1(buttonToken)
  ];
}, prepareComponentToken$8, {
  unitless: {
    fontWeight: true,
    contentLineHeight: true,
    contentLineHeightSM: true,
    contentLineHeightLG: true
  }
});
function compactItemBorder(token, parentCls, options, prefixCls) {
  const {
    focusElCls,
    focus,
    borderElCls
  } = options;
  const childCombinator = borderElCls ? "> *" : "";
  const suffix = childCombinator ? ` ${childCombinator}` : "";
  const genEffects = (effects) => effects.filter(Boolean).map((n) => `&:${n}${suffix}`).join(",");
  const hoverEffects = genEffects(["hover", focusElCls ? `hover${focusElCls}` : null]);
  const focusEffects = genEffects([focus ? "focus" : null, "active"]);
  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal()
    },
    [`&-item:not(${prefixCls}-status-success)`]: {
      zIndex: 2
    },
    "&-item": {
      [focusEffects]: {
        zIndex: 3
      },
      [hoverEffects]: {
        zIndex: 4
      },
      ...focusElCls ? {
        [`&${focusElCls}`]: {
          zIndex: 3
        }
      } : {},
      [`&[disabled] ${childCombinator}`]: {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderRadius(prefixCls, parentCls, options) {
  const {
    borderElCls
  } = options;
  const childCombinator = borderElCls ? `> ${borderElCls}` : "";
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
      borderRadius: 0
    },
    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(token, options = {
  focus: true
}) {
  const {
    componentCls
  } = token;
  const {
    componentCls: customizePrefixCls
  } = options;
  const mergedComponentCls = customizePrefixCls || componentCls;
  const compactCls = `${mergedComponentCls}-compact`;
  return {
    [compactCls]: {
      ...compactItemBorder(token, compactCls, options, mergedComponentCls),
      ...compactItemBorderRadius(mergedComponentCls, compactCls, options)
    }
  };
}
function compactItemVerticalBorder(token, parentCls, prefixCls) {
  return {
    // border collapse
    [`&-item:not(${parentCls}-last-item)`]: {
      marginBottom: token.calc(token.lineWidth).mul(-1).equal()
    },
    [`&-item:not(${prefixCls}-status-success)`]: {
      zIndex: 2
    },
    "&-item": {
      "&:focus,&:active": {
        zIndex: 3
      },
      "&:hover": {
        zIndex: 4
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderVerticalRadius(prefixCls, parentCls) {
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${parentCls}-first-item:not(${parentCls}-last-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${parentCls}-last-item:not(${parentCls}-first-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function genCompactItemVerticalStyle(token) {
  const compactCls = `${token.componentCls}-compact-vertical`;
  return {
    [compactCls]: {
      ...compactItemVerticalBorder(token, compactCls, token.componentCls),
      ...compactItemBorderVerticalRadius(token.componentCls, compactCls)
    }
  };
}
const genButtonCompactStyle = (token) => {
  const {
    antCls,
    componentCls,
    lineWidth,
    calc,
    colorBgContainer
  } = token;
  const solidSelector = `${componentCls}-variant-solid:not([disabled])`;
  const insetOffset = calc(lineWidth).mul(-1).equal();
  const [varName, varRef] = genCssVar(antCls, "btn");
  const getCompactBorderStyle = (vertical) => {
    const itemCls = `${componentCls}-compact${vertical ? "-vertical" : ""}-item`;
    return {
      // TODO: Border color transition should be not cover when has color.
      [itemCls]: {
        [varName("compact-connect-border-color")]: varRef("bg-color-hover"),
        [`&${solidSelector}`]: {
          transition: `none`,
          [`& + ${solidSelector}:before`]: [{
            position: "absolute",
            backgroundColor: varRef("compact-connect-border-color"),
            content: '""'
          }, vertical ? {
            top: insetOffset,
            insetInline: insetOffset,
            height: lineWidth
          } : {
            insetBlock: insetOffset,
            insetInlineStart: insetOffset,
            width: lineWidth
          }],
          "&:hover:before": {
            display: "none"
          }
        }
      }
    };
  };
  return [getCompactBorderStyle(), getCompactBorderStyle(true), {
    [`${solidSelector}${componentCls}-color-default`]: {
      [varName("compact-connect-border-color")]: `color-mix(in srgb, ${varRef("bg-color-hover")} 75%, ${colorBgContainer})`
    }
  }];
};
const Compact = genSubStyleComponent(["Button", "compact"], (token) => {
  const buttonToken = prepareToken$2(token);
  return [
    // Space Compact
    genCompactItemStyle(buttonToken),
    genCompactItemVerticalStyle(buttonToken),
    genButtonCompactStyle(buttonToken)
  ];
}, prepareComponentToken$8);
function getLoadingConfig(loading) {
  if (isPlainObject(loading)) {
    let delay = loading?.delay;
    delay = isNumber(delay) ? delay : 0;
    return {
      loading: delay <= 0,
      delay
    };
  }
  return {
    loading: !!loading,
    delay: 0
  };
}
const ButtonTypeMap = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
};
const InternalCompoundedButton = /* @__PURE__ */ React.forwardRef((props, ref) => {
  const {
    _skipSemantic,
    loading = false,
    prefixCls: customizePrefixCls,
    color,
    variant,
    type,
    danger = false,
    shape: customizeShape,
    size: customizeSize,
    disabled: customDisabled,
    className,
    rootClassName,
    children,
    icon,
    iconPosition,
    iconPlacement,
    ghost = false,
    block = false,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType = "button",
    classNames,
    styles,
    style,
    autoInsertSpace,
    autoFocus,
    ...rest
  } = props;
  const childNodes = toArray$1(children);
  const mergedType = type || "default";
  const {
    getPrefixCls,
    direction,
    autoInsertSpace: contextAutoInsertSpace,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles,
    loadingIcon: contextLoadingIcon,
    shape: contextShape,
    color: contextColor,
    variant: contextVariant
  } = useComponentConfig("button");
  const mergedShape = customizeShape || contextShape || "default";
  const [parsedColor, parsedVariant] = reactExports.useMemo(() => {
    if (color && variant) {
      return [color, variant];
    }
    if (type || danger) {
      const colorVariantPair = ButtonTypeMap[mergedType] || [];
      if (danger) {
        return ["danger", colorVariantPair[1]];
      }
      return colorVariantPair;
    }
    if (variant === "solid") {
      return ["primary", variant];
    }
    if (contextColor && contextVariant) {
      return [contextColor, contextVariant];
    }
    if (contextVariant === "solid") {
      return ["primary", contextVariant];
    }
    return ["default", "outlined"];
  }, [color, variant, type, danger, contextColor, contextVariant, mergedType]);
  const [mergedColor, mergedVariant] = reactExports.useMemo(() => {
    if (ghost && parsedVariant === "solid") {
      return [parsedColor, "outlined"];
    }
    return [parsedColor, parsedVariant];
  }, [parsedColor, parsedVariant, ghost]);
  const isDanger = mergedColor === "danger";
  const mergedColorText = isDanger ? "dangerous" : mergedColor;
  const mergedInsertSpace = autoInsertSpace ?? contextAutoInsertSpace ?? true;
  const prefixCls = getPrefixCls("btn", customizePrefixCls);
  const [hashId, cssVarCls] = useStyle$e(prefixCls);
  const disabled = reactExports.useContext(DisabledContext);
  const mergedDisabled = customDisabled ?? disabled;
  const groupSize = reactExports.useContext(GroupSizeContext);
  const loadingOrDelay = reactExports.useMemo(() => getLoadingConfig(loading), [loading]);
  const [innerLoading, setInnerLoading] = reactExports.useState(loadingOrDelay.loading);
  const [hasTwoCNChar, setHasTwoCNChar] = reactExports.useState(false);
  const buttonRef = reactExports.useRef(null);
  const mergedRef = useComposeRef(ref, buttonRef);
  const needInserted = childNodes.length === 1 && !icon && !isUnBorderedButtonVariant(mergedVariant);
  const isMountRef = reactExports.useRef(true);
  React.useEffect(() => {
    isMountRef.current = false;
    return () => {
      isMountRef.current = true;
    };
  }, []);
  useLayoutEffect(() => {
    let delayTimer = null;
    if (loadingOrDelay.delay > 0) {
      delayTimer = setTimeout(() => {
        delayTimer = null;
        setInnerLoading(true);
      }, loadingOrDelay.delay);
    } else {
      setInnerLoading(loadingOrDelay.loading);
    }
    function cleanupTimer() {
      if (delayTimer) {
        clearTimeout(delayTimer);
        delayTimer = null;
      }
    }
    return cleanupTimer;
  }, [loadingOrDelay.delay, loadingOrDelay.loading]);
  reactExports.useEffect(() => {
    if (!buttonRef.current || !mergedInsertSpace) {
      return;
    }
    const buttonText = buttonRef.current.textContent || "";
    if (needInserted && isTwoCNChar(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  });
  reactExports.useEffect(() => {
    if (autoFocus && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);
  const handleClick = React.useCallback((e2) => {
    if (innerLoading || mergedDisabled) {
      e2.preventDefault();
      return;
    }
    props.onClick?.("href" in props ? e2 : e2);
  }, [props.onClick, innerLoading, mergedDisabled]);
  const {
    compactSize,
    compactItemClassnames
  } = useCompactItemContext(prefixCls, direction);
  const sizeFullName = useSize((ctxSize) => customizeSize ?? compactSize ?? groupSize ?? ctxSize);
  const iconType = innerLoading ? "loading" : icon;
  const mergedIconPlacement = iconPlacement ?? iconPosition ?? "start";
  const linkButtonRestProps = omit(rest, ["navigate"]);
  const mergedProps = {
    ...props,
    type: mergedType,
    color: mergedColor,
    variant: mergedVariant,
    danger: isDanger,
    shape: mergedShape,
    size: sizeFullName,
    disabled: mergedDisabled,
    loading: innerLoading,
    iconPlacement: mergedIconPlacement
  };
  const contextStyleRoot = useSemanticRootStyle(contextStyle);
  const styleRoot = useSemanticRootStyle(style);
  const [mergedClassNames, mergedStyles] = useMergeSemantic([_skipSemantic ? void 0 : contextClassNames, classNames], [_skipSemantic ? void 0 : contextStyles, contextStyleRoot, styles, styleRoot], {
    props: mergedProps
  });
  const classes = clsx(prefixCls, hashId, cssVarCls, {
    [`${prefixCls}-${mergedShape}`]: mergedShape !== "default" && mergedShape !== "square" && mergedShape,
    // Compatible with versions earlier than 5.21.0
    [`${prefixCls}-${mergedType}`]: mergedType,
    [`${prefixCls}-dangerous`]: danger,
    [`${prefixCls}-color-${mergedColorText}`]: mergedColorText,
    [`${prefixCls}-variant-${mergedVariant}`]: mergedVariant,
    [`${prefixCls}-lg`]: sizeFullName === "large",
    [`${prefixCls}-sm`]: sizeFullName === "small",
    [`${prefixCls}-icon-only`]: !children && children !== 0 && !!iconType,
    [`${prefixCls}-background-ghost`]: ghost && !isUnBorderedButtonVariant(mergedVariant),
    [`${prefixCls}-loading`]: innerLoading,
    [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar && mergedInsertSpace && !innerLoading,
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-icon-end`]: mergedIconPlacement === "end"
  }, compactItemClassnames, className, rootClassName, contextClassName, mergedClassNames.root);
  const iconSharedProps = {
    className: mergedClassNames.icon,
    style: mergedStyles.icon
  };
  const iconWrapperElement = (child) => /* @__PURE__ */ React.createElement(IconWrapper, {
    prefixCls,
    ...iconSharedProps
  }, child);
  const defaultLoadingIconElement = /* @__PURE__ */ React.createElement(DefaultLoadingIcon, {
    existIcon: !!icon,
    prefixCls,
    loading: innerLoading,
    mount: isMountRef.current,
    ...iconSharedProps
  });
  const mergedLoadingIcon = isPlainObject(loading) ? loading.icon || contextLoadingIcon : contextLoadingIcon;
  let iconNode;
  if (icon && !innerLoading) {
    iconNode = iconWrapperElement(icon);
  } else if (loading && mergedLoadingIcon) {
    iconNode = iconWrapperElement(mergedLoadingIcon);
  } else {
    iconNode = defaultLoadingIconElement;
  }
  const contentNode = isReactRenderable(children) ? spaceChildren(children, needInserted && mergedInsertSpace, mergedStyles.content, mergedClassNames.content) : null;
  if (linkButtonRestProps.href !== void 0) {
    return /* @__PURE__ */ React.createElement("a", {
      ...linkButtonRestProps,
      className: clsx(classes, {
        [`${prefixCls}-disabled`]: mergedDisabled
      }),
      href: mergedDisabled ? void 0 : linkButtonRestProps.href,
      style: mergedStyles.root,
      onClick: handleClick,
      ref: mergedRef,
      tabIndex: mergedDisabled ? -1 : 0,
      "aria-disabled": mergedDisabled
    }, iconNode, contentNode);
  }
  let buttonNode = /* @__PURE__ */ React.createElement("button", {
    ...rest,
    type: htmlType,
    className: classes,
    style: mergedStyles.root,
    onClick: handleClick,
    disabled: mergedDisabled,
    ref: mergedRef
  }, iconNode, contentNode, compactItemClassnames && /* @__PURE__ */ React.createElement(Compact, {
    prefixCls
  }));
  if (!isUnBorderedButtonVariant(mergedVariant)) {
    buttonNode = /* @__PURE__ */ React.createElement(Wave, {
      component: "Button",
      disabled: innerLoading
    }, buttonNode);
  }
  return buttonNode;
});
const Button$1 = InternalCompoundedButton;
Button$1.Group = ButtonGroup;
Button$1.__ANT_BUTTON = true;
const ActionButton = (props) => {
  const {
    type,
    children,
    prefixCls,
    buttonProps,
    close,
    autoFocus,
    emitEvent,
    isSilent,
    quitOnNullishReturnValue,
    actionFn
  } = props;
  const clickedRef = reactExports.useRef(false);
  const buttonRef = reactExports.useRef(null);
  const [loading, setLoading] = useSafeState(false);
  const onInternalClose = (...args) => {
    close?.(...args);
  };
  reactExports.useEffect(() => {
    let timeoutId = null;
    if (autoFocus) {
      timeoutId = setTimeout(() => {
        buttonRef.current?.focus({
          preventScroll: true
        });
      });
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [autoFocus]);
  const handlePromiseOnOk = (returnValueOfOnOk) => {
    if (!isThenable(returnValueOfOnOk)) {
      return;
    }
    setLoading(true);
    returnValueOfOnOk.then((...args) => {
      setLoading(false, true);
      onInternalClose.apply(void 0, args);
      clickedRef.current = false;
    }, (e2) => {
      setLoading(false, true);
      clickedRef.current = false;
      if (isSilent?.()) {
        return;
      }
      return Promise.reject(e2);
    });
  };
  const onClick = (e2) => {
    if (clickedRef.current) {
      return;
    }
    clickedRef.current = true;
    if (!actionFn) {
      onInternalClose();
      return;
    }
    let returnValueOfOnOk;
    if (emitEvent) {
      returnValueOfOnOk = actionFn(e2);
      if (quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
        clickedRef.current = false;
        onInternalClose(e2);
        return;
      }
    } else if (actionFn.length) {
      returnValueOfOnOk = actionFn(close);
      clickedRef.current = false;
    } else {
      returnValueOfOnOk = actionFn();
      if (!isThenable(returnValueOfOnOk)) {
        onInternalClose();
        return;
      }
    }
    handlePromiseOnOk(returnValueOfOnOk);
  };
  return /* @__PURE__ */ reactExports.createElement(Button$1, {
    ...convertLegacyProps(type),
    onClick,
    loading,
    prefixCls,
    ...buttonProps,
    ref: buttonRef
  }, children);
};
const ModalContext = /* @__PURE__ */ React.createContext({});
const {
  Provider: ModalContextProvider
} = ModalContext;
const ConfirmCancelBtn = () => {
  const {
    autoFocusButton,
    cancelButtonProps,
    cancelTextLocale,
    isSilent,
    mergedOkCancel,
    rootPrefixCls,
    close,
    onCancel,
    onConfirm,
    onClose
  } = reactExports.useContext(ModalContext);
  return mergedOkCancel ? /* @__PURE__ */ React.createElement(ActionButton, {
    isSilent,
    actionFn: onCancel,
    close: (...args) => {
      close?.(...args);
      onConfirm?.(false);
      onClose?.();
    },
    autoFocus: autoFocusButton === "cancel",
    buttonProps: cancelButtonProps,
    prefixCls: `${rootPrefixCls}-btn`
  }, cancelTextLocale) : null;
};
const ConfirmOkBtn = () => {
  const {
    autoFocusButton,
    close,
    isSilent,
    okButtonProps,
    rootPrefixCls,
    okTextLocale,
    okType,
    onConfirm,
    onOk,
    onClose
  } = reactExports.useContext(ModalContext);
  return /* @__PURE__ */ React.createElement(ActionButton, {
    isSilent,
    type: okType || "primary",
    actionFn: onOk,
    close: (...args) => {
      close?.(...args);
      onConfirm?.(true);
      onClose?.();
    },
    autoFocus: autoFocusButton === "ok",
    buttonProps: okButtonProps,
    prefixCls: `${rootPrefixCls}-btn`
  }, okTextLocale);
};
const FormContext = /* @__PURE__ */ reactExports.createContext({
  labelAlign: "right",
  layout: "horizontal",
  itemRef: () => {
  }
});
const NoStyleItemContext = /* @__PURE__ */ reactExports.createContext(null);
const FormProvider = (props) => {
  const providerProps = omit(props, ["prefixCls"]);
  return /* @__PURE__ */ reactExports.createElement(FormProvider$1, {
    ...providerProps
  });
};
const FormItemPrefixContext = /* @__PURE__ */ reactExports.createContext({
  prefixCls: ""
});
const FormItemInputContext = /* @__PURE__ */ reactExports.createContext({});
const NoFormStyle = ({
  children,
  status,
  override
}) => {
  const formItemInputContext = reactExports.useContext(FormItemInputContext);
  const newFormItemInputContext = reactExports.useMemo(() => {
    const newContext = {
      ...formItemInputContext
    };
    if (override) {
      delete newContext.isFormItemInput;
    }
    if (status) {
      delete newContext.status;
      delete newContext.hasFeedback;
      delete newContext.feedbackIcon;
    }
    return newContext;
  }, [status, override, formItemInputContext]);
  return /* @__PURE__ */ reactExports.createElement(FormItemInputContext.Provider, {
    value: newFormItemInputContext
  }, children);
};
const VariantContext = /* @__PURE__ */ reactExports.createContext(void 0);
const ContextIsolator = (props) => {
  const {
    space,
    form,
    children
  } = props;
  if (!isReactRenderable(children)) {
    return null;
  }
  let result = children;
  if (form) {
    result = /* @__PURE__ */ React.createElement(NoFormStyle, {
      override: true,
      status: true
    }, result);
  }
  if (space) {
    result = /* @__PURE__ */ React.createElement(NoCompactStyle, null, result);
  }
  return result;
};
const canUseDocElement = () => canUseDom() && window.document.documentElement;
function useFocusable(focusable, defaultTrap, legacyFocusTriggerAfterClose) {
  return reactExports.useMemo(() => {
    const ret = {
      trap: defaultTrap ?? true,
      focusTriggerAfterClose: legacyFocusTriggerAfterClose ?? true
    };
    return {
      ...ret,
      ...focusable
    };
  }, [focusable, defaultTrap, legacyFocusTriggerAfterClose]);
}
const Element = (props) => {
  const {
    prefixCls,
    className,
    style,
    size,
    shape
  } = props;
  const sizeCls = clsx({
    [`${prefixCls}-lg`]: size === "large",
    [`${prefixCls}-sm`]: size === "small"
  });
  const shapeCls = clsx({
    [`${prefixCls}-circle`]: shape === "circle",
    [`${prefixCls}-square`]: shape === "square",
    [`${prefixCls}-round`]: shape === "round"
  });
  const sizeStyle = reactExports.useMemo(() => isNumber(size) ? {
    width: size,
    height: size,
    lineHeight: `${size}px`
  } : {}, [size]);
  return /* @__PURE__ */ reactExports.createElement("span", {
    className: clsx(prefixCls, sizeCls, shapeCls, className),
    style: {
      ...sizeStyle,
      ...style
    }
  });
};
const skeletonClsLoading = new Keyframe(`ant-skeleton-loading`, {
  "0%": {
    backgroundPosition: "100% 50%"
  },
  "100%": {
    backgroundPosition: "0 50%"
  }
});
const genSkeletonElementCommonSize = (size) => ({
  height: size,
  lineHeight: unit(size)
});
const genSkeletonElementSize = (size) => ({
  width: size,
  ...genSkeletonElementCommonSize(size)
});
const genSkeletonColor = (token) => ({
  background: token.skeletonLoadingBackground,
  backgroundSize: "400% 100%",
  animationName: skeletonClsLoading,
  animationDuration: token.skeletonLoadingMotionDuration,
  animationTimingFunction: "ease",
  animationIterationCount: "infinite"
});
const genSkeletonElementInputSize = (size, calc) => ({
  width: calc(size).mul(5).equal(),
  minWidth: calc(size).mul(5).equal(),
  ...genSkeletonElementCommonSize(size)
});
const genSkeletonElementAvatar = (token) => {
  const {
    skeletonAvatarCls,
    gradientFromColor,
    controlHeight,
    controlHeightLG,
    controlHeightSM
  } = token;
  return {
    [skeletonAvatarCls]: {
      display: "inline-block",
      verticalAlign: "top",
      background: gradientFromColor,
      ...genSkeletonElementSize(controlHeight)
    },
    [`${skeletonAvatarCls}${skeletonAvatarCls}-circle`]: {
      borderRadius: "50%"
    },
    [`${skeletonAvatarCls}${skeletonAvatarCls}-lg`]: {
      ...genSkeletonElementSize(controlHeightLG)
    },
    [`${skeletonAvatarCls}${skeletonAvatarCls}-sm`]: {
      ...genSkeletonElementSize(controlHeightSM)
    }
  };
};
const genSkeletonElementInput = (token) => {
  const {
    controlHeight,
    borderRadiusSM,
    skeletonInputCls,
    controlHeightLG,
    controlHeightSM,
    gradientFromColor,
    calc
  } = token;
  return {
    [skeletonInputCls]: {
      display: "inline-block",
      verticalAlign: "top",
      background: gradientFromColor,
      borderRadius: borderRadiusSM,
      ...genSkeletonElementInputSize(controlHeight, calc)
    },
    [`${skeletonInputCls}-lg`]: {
      ...genSkeletonElementInputSize(controlHeightLG, calc)
    },
    [`${skeletonInputCls}-sm`]: {
      ...genSkeletonElementInputSize(controlHeightSM, calc)
    }
  };
};
const genSkeletonElementShape = (token) => {
  const {
    gradientFromColor,
    borderRadiusSM,
    imageSizeBase,
    calc
  } = token;
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
    background: gradientFromColor,
    borderRadius: borderRadiusSM,
    ...genSkeletonElementSize(calc(imageSizeBase).mul(2).equal())
  };
};
const genSkeletonElementNode = (token) => {
  return {
    [token.skeletonNodeCls]: {
      ...genSkeletonElementShape(token)
    }
  };
};
const genSkeletonElementImage = (token) => {
  const {
    skeletonImageCls,
    imageSizeBase,
    calc
  } = token;
  return {
    [skeletonImageCls]: {
      ...genSkeletonElementShape(token),
      [`${skeletonImageCls}-path`]: {
        fill: "#bfbfbf"
      },
      [`${skeletonImageCls}-svg`]: {
        ...genSkeletonElementSize(imageSizeBase),
        maxWidth: calc(imageSizeBase).mul(4).equal(),
        maxHeight: calc(imageSizeBase).mul(4).equal()
      },
      [`${skeletonImageCls}-svg${skeletonImageCls}-svg-circle`]: {
        borderRadius: "50%"
      }
    },
    [`${skeletonImageCls}${skeletonImageCls}-circle`]: {
      borderRadius: "50%"
    }
  };
};
const genSkeletonElementButtonShape = (token, size, buttonCls) => {
  const {
    skeletonButtonCls
  } = token;
  return {
    [`${buttonCls}${skeletonButtonCls}-circle`]: {
      width: size,
      minWidth: size,
      borderRadius: "50%"
    },
    [`${buttonCls}${skeletonButtonCls}-round`]: {
      borderRadius: size
    }
  };
};
const genSkeletonElementButtonSize = (size, calc) => ({
  width: calc(size).mul(2).equal(),
  minWidth: calc(size).mul(2).equal(),
  ...genSkeletonElementCommonSize(size)
});
const genSkeletonElementButton = (token) => {
  const {
    borderRadiusSM,
    skeletonButtonCls,
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    gradientFromColor,
    calc
  } = token;
  return {
    [skeletonButtonCls]: {
      display: "inline-block",
      verticalAlign: "top",
      background: gradientFromColor,
      borderRadius: borderRadiusSM,
      width: calc(controlHeight).mul(2).equal(),
      minWidth: calc(controlHeight).mul(2).equal(),
      ...genSkeletonElementButtonSize(controlHeight, calc)
    },
    ...genSkeletonElementButtonShape(token, controlHeight, skeletonButtonCls),
    [`${skeletonButtonCls}-lg`]: {
      ...genSkeletonElementButtonSize(controlHeightLG, calc)
    },
    ...genSkeletonElementButtonShape(token, controlHeightLG, `${skeletonButtonCls}-lg`),
    [`${skeletonButtonCls}-sm`]: {
      ...genSkeletonElementButtonSize(controlHeightSM, calc)
    },
    ...genSkeletonElementButtonShape(token, controlHeightSM, `${skeletonButtonCls}-sm`)
  };
};
const genBaseStyle$3 = (token) => {
  const {
    componentCls,
    skeletonAvatarCls,
    skeletonTitleCls,
    skeletonParagraphCls,
    skeletonButtonCls,
    skeletonInputCls,
    skeletonNodeCls,
    skeletonImageCls,
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    gradientFromColor,
    padding,
    marginSM,
    borderRadius,
    titleHeight,
    blockRadius,
    paragraphLiHeight,
    controlHeightXS,
    paragraphMarginTop
  } = token;
  return {
    [componentCls]: {
      display: "table",
      width: "100%",
      [`${componentCls}-header`]: {
        display: "table-cell",
        paddingInlineEnd: padding,
        verticalAlign: "top",
        // Avatar
        [skeletonAvatarCls]: {
          display: "inline-block",
          verticalAlign: "top",
          background: gradientFromColor,
          ...genSkeletonElementSize(controlHeight)
        },
        [`${skeletonAvatarCls}-circle`]: {
          borderRadius: "50%"
        },
        [`${skeletonAvatarCls}-lg`]: {
          ...genSkeletonElementSize(controlHeightLG)
        },
        [`${skeletonAvatarCls}-sm`]: {
          ...genSkeletonElementSize(controlHeightSM)
        }
      },
      [`${componentCls}-section`]: {
        display: "table-cell",
        width: "100%",
        verticalAlign: "top",
        // Title
        [skeletonTitleCls]: {
          width: "100%",
          height: titleHeight,
          background: gradientFromColor,
          borderRadius: blockRadius,
          [`+ ${skeletonParagraphCls}`]: {
            marginBlockStart: controlHeightSM
          }
        },
        // paragraph
        [skeletonParagraphCls]: {
          padding: 0,
          "> li": {
            width: "100%",
            height: paragraphLiHeight,
            listStyle: "none",
            background: gradientFromColor,
            borderRadius: blockRadius,
            "+ li": {
              marginBlockStart: controlHeightXS
            }
          }
        },
        [`${skeletonParagraphCls}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
          width: "61%"
        }
      },
      [`&-round ${componentCls}-section`]: {
        [`${skeletonTitleCls}, ${skeletonParagraphCls} > li`]: {
          borderRadius
        }
      }
    },
    [`${componentCls}-with-avatar ${componentCls}-section`]: {
      // Title
      [skeletonTitleCls]: {
        marginBlockStart: marginSM,
        [`+ ${skeletonParagraphCls}`]: {
          marginBlockStart: paragraphMarginTop
        }
      }
    },
    // Skeleton with element
    [`${componentCls}${componentCls}-element`]: {
      display: "inline-block",
      width: "auto",
      ...genSkeletonElementButton(token),
      ...genSkeletonElementAvatar(token),
      ...genSkeletonElementInput(token),
      ...genSkeletonElementNode(token),
      ...genSkeletonElementImage(token)
    },
    // Skeleton Block Button, Input
    [`${componentCls}${componentCls}-block`]: {
      width: "100%",
      [skeletonButtonCls]: {
        width: "100%"
      },
      [skeletonInputCls]: {
        width: "100%"
      }
    },
    // With active animation
    [`${componentCls}${componentCls}-active`]: {
      [`
        ${skeletonTitleCls},
        ${skeletonParagraphCls} > li,
        ${skeletonAvatarCls},
        ${skeletonButtonCls},
        ${skeletonInputCls},
        ${skeletonNodeCls},
        ${skeletonImageCls}
      `]: {
        ...genSkeletonColor(token)
      }
    }
  };
};
const prepareComponentToken$7 = (token) => {
  const {
    colorFillContent,
    colorFill
  } = token;
  const gradientFromColor = colorFillContent;
  const gradientToColor = colorFill;
  return {
    color: gradientFromColor,
    colorGradientEnd: gradientToColor,
    gradientFromColor,
    gradientToColor,
    titleHeight: token.controlHeight / 2,
    blockRadius: token.borderRadiusSM,
    paragraphMarginTop: token.marginLG + token.marginXXS,
    paragraphLiHeight: token.controlHeight / 2
  };
};
const useStyle$d = genStyleHooks("Skeleton", (token) => {
  const {
    componentCls,
    calc
  } = token;
  const skeletonToken = merge$1(token, {
    skeletonAvatarCls: `${componentCls}-avatar`,
    skeletonTitleCls: `${componentCls}-title`,
    skeletonParagraphCls: `${componentCls}-paragraph`,
    skeletonButtonCls: `${componentCls}-button`,
    skeletonInputCls: `${componentCls}-input`,
    skeletonNodeCls: `${componentCls}-node`,
    skeletonImageCls: `${componentCls}-image`,
    imageSizeBase: calc(token.controlHeight).mul(1.5).equal(),
    borderRadius: 100,
    // Large number to make capsule shape
    skeletonLoadingBackground: `linear-gradient(90deg, ${token.gradientFromColor} 25%, ${token.gradientToColor} 37%, ${token.gradientFromColor} 63%)`,
    skeletonLoadingMotionDuration: "1.4s"
  });
  return genBaseStyle$3(skeletonToken);
}, prepareComponentToken$7, {
  deprecatedTokens: [["color", "gradientFromColor"], ["colorGradientEnd", "gradientToColor"]]
});
const SkeletonAvatar = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    classNames,
    rootClassName,
    active,
    style,
    styles,
    shape = "circle",
    size: customSize,
    ...rest
  } = props;
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [hashId, cssVarCls] = useStyle$d(prefixCls);
  const mergedSize = useSize((ctx) => customSize ?? ctx);
  const cls = clsx(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active
  }, classNames?.root, className, rootClassName, hashId, cssVarCls);
  return /* @__PURE__ */ reactExports.createElement("div", {
    className: cls,
    style: styles?.root
  }, /* @__PURE__ */ reactExports.createElement(Element, {
    prefixCls: `${prefixCls}-avatar`,
    className: classNames?.content,
    style: {
      ...styles?.content,
      ...style
    },
    shape,
    size: mergedSize,
    ...rest
  }));
};
const SkeletonButton = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    classNames,
    active,
    style,
    styles,
    block = false,
    size: customSize,
    ...rest
  } = props;
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [hashId, cssVarCls] = useStyle$d(prefixCls);
  const mergedSize = useSize((ctx) => customSize ?? ctx);
  const cls = clsx(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active,
    [`${prefixCls}-block`]: block
  }, classNames?.root, className, rootClassName, hashId, cssVarCls);
  return /* @__PURE__ */ reactExports.createElement("div", {
    className: cls,
    style: styles?.root
  }, /* @__PURE__ */ reactExports.createElement(Element, {
    prefixCls: `${prefixCls}-button`,
    className: classNames?.content,
    style: {
      ...styles?.content,
      ...style
    },
    size: mergedSize,
    ...rest
  }));
};
const SkeletonNode = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    classNames,
    rootClassName,
    internalClassName,
    style,
    styles,
    active,
    children
  } = props;
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [hashId, cssVarCls] = useStyle$d(prefixCls);
  const cls = clsx(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active
  }, hashId, classNames?.root, className, rootClassName, cssVarCls);
  return /* @__PURE__ */ reactExports.createElement("div", {
    className: cls,
    style: styles?.root
  }, /* @__PURE__ */ reactExports.createElement("div", {
    className: clsx(classNames?.content, internalClassName || `${prefixCls}-node`),
    style: {
      ...styles?.content,
      ...style
    }
  }, children));
};
const SkeletonImage = (props) => {
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", props.prefixCls);
  return /* @__PURE__ */ reactExports.createElement(SkeletonNode, {
    ...props,
    internalClassName: `${prefixCls}-image`
  }, /* @__PURE__ */ reactExports.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: `${prefixCls}-image-svg`
  }, /* @__PURE__ */ reactExports.createElement("title", null, "Image placeholder"), /* @__PURE__ */ reactExports.createElement("path", {
    d: "M365.7 329.1q0 45.8-32 77.7t-77.7 32-77.7-32-32-77.7 32-77.6 77.7-32 77.7 32 32 77.6M951 548.6v256H146.3V694.9L329 512l91.5 91.4L713 311zm54.8-402.3H91.4q-7.4 0-12.8 5.4T73 164.6v694.8q0 7.5 5.5 12.9t12.8 5.4h914.3q7.5 0 12.9-5.4t5.4-12.9V164.6q0-7.5-5.4-12.9t-12.9-5.4m91.4 18.3v694.8q0 37.8-26.8 64.6t-64.6 26.9H91.4q-37.7 0-64.6-26.9T0 859.4V164.6q0-37.8 26.8-64.6T91.4 73h914.3q37.8 0 64.6 26.9t26.8 64.6",
    className: `${prefixCls}-image-path`
  })));
};
const SkeletonInput = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    classNames,
    rootClassName,
    active,
    block,
    style,
    styles,
    size: customSize,
    ...rest
  } = props;
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [hashId, cssVarCls] = useStyle$d(prefixCls);
  const mergedSize = useSize((ctx) => customSize ?? ctx);
  const cls = clsx(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active,
    [`${prefixCls}-block`]: block
  }, classNames?.root, className, rootClassName, hashId, cssVarCls);
  return /* @__PURE__ */ reactExports.createElement("div", {
    className: cls,
    style: styles?.root
  }, /* @__PURE__ */ reactExports.createElement(Element, {
    prefixCls: `${prefixCls}-input`,
    className: classNames?.content,
    style: {
      ...styles?.content,
      ...style
    },
    size: mergedSize,
    ...rest
  }));
};
const getWidth = (index, props) => {
  const {
    width,
    rows = 2
  } = props;
  if (Array.isArray(width)) {
    return width[index];
  }
  if (rows - 1 === index) {
    return width;
  }
  return void 0;
};
const Paragraph = (props) => {
  const {
    prefixCls,
    className,
    style,
    rows = 0
  } = props;
  const rowList = Array.from({
    length: rows
  }).map((_, index) => /* @__PURE__ */ reactExports.createElement("li", {
    key: index,
    style: {
      width: getWidth(index, props)
    }
  }));
  return /* @__PURE__ */ reactExports.createElement("ul", {
    className: clsx(prefixCls, className),
    style
  }, rowList);
};
const Title = ({
  prefixCls,
  className,
  width,
  style
}) => /* @__PURE__ */ reactExports.createElement("h3", {
  className: clsx(prefixCls, className),
  style: {
    width,
    ...style
  }
});
function getComponentProps(prop) {
  if (isPlainObject(prop)) {
    return prop;
  }
  return {};
}
function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    return {
      size: "large",
      shape: "square"
    };
  }
  return {
    size: "large",
    shape: "circle"
  };
}
function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return {
      width: "38%"
    };
  }
  if (hasAvatar && hasParagraph) {
    return {
      width: "50%"
    };
  }
  return {};
}
function getParagraphBasicProps(hasAvatar, hasTitle) {
  const basicProps = {};
  if (!hasAvatar || !hasTitle) {
    basicProps.width = "61%";
  }
  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }
  return basicProps;
}
const Skeleton = (props) => {
  const {
    prefixCls: customizePrefixCls,
    loading,
    className,
    rootClassName,
    classNames,
    style,
    styles,
    children,
    avatar = false,
    title = true,
    paragraph = true,
    active,
    round
  } = props;
  const {
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = useComponentConfig("skeleton");
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [hashId, cssVarCls] = useStyle$d(prefixCls);
  const mergedProps = {
    ...props,
    avatar,
    title,
    paragraph
  };
  const contextStyleRoot = useSemanticRootStyle(contextStyle);
  const styleRoot = useSemanticRootStyle(style);
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, contextStyleRoot, styles, styleRoot], {
    props: mergedProps
  });
  if (loading || !("loading" in props)) {
    const hasAvatar = !!avatar;
    const hasTitle = !!title;
    const hasParagraph = !!paragraph;
    let avatarNode;
    if (hasAvatar) {
      const avatarProps = {
        className: mergedClassNames.avatar,
        prefixCls: `${prefixCls}-avatar`,
        ...getAvatarBasicProps(hasTitle, hasParagraph),
        ...getComponentProps(avatar),
        style: mergedStyles.avatar
      };
      avatarNode = /* @__PURE__ */ reactExports.createElement("div", {
        className: clsx(mergedClassNames.header, `${prefixCls}-header`),
        style: mergedStyles.header
      }, /* @__PURE__ */ reactExports.createElement(Element, {
        ...avatarProps
      }));
    }
    let contentNode;
    if (hasTitle || hasParagraph) {
      let $title;
      if (hasTitle) {
        const titleProps = {
          className: mergedClassNames.title,
          prefixCls: `${prefixCls}-title`,
          ...getTitleBasicProps(hasAvatar, hasParagraph),
          ...getComponentProps(title),
          style: mergedStyles.title
        };
        $title = /* @__PURE__ */ reactExports.createElement(Title, {
          ...titleProps
        });
      }
      let paragraphNode;
      if (hasParagraph) {
        const paragraphProps = {
          className: mergedClassNames.paragraph,
          prefixCls: `${prefixCls}-paragraph`,
          ...getParagraphBasicProps(hasAvatar, hasTitle),
          ...getComponentProps(paragraph),
          style: mergedStyles.paragraph
        };
        paragraphNode = /* @__PURE__ */ reactExports.createElement(Paragraph, {
          ...paragraphProps
        });
      }
      contentNode = /* @__PURE__ */ reactExports.createElement("div", {
        className: clsx(mergedClassNames.section, `${prefixCls}-section`),
        style: mergedStyles.section
      }, $title, paragraphNode);
    }
    const cls = clsx(prefixCls, {
      [`${prefixCls}-with-avatar`]: hasAvatar,
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-rtl`]: direction === "rtl",
      [`${prefixCls}-round`]: round
    }, mergedClassNames.root, contextClassName, className, rootClassName, hashId, cssVarCls);
    return /* @__PURE__ */ reactExports.createElement("div", {
      className: cls,
      style: mergedStyles.root
    }, avatarNode, contentNode);
  }
  return children ?? null;
};
Skeleton.Button = SkeletonButton;
Skeleton.Avatar = SkeletonAvatar;
Skeleton.Input = SkeletonInput;
Skeleton.Image = SkeletonImage;
Skeleton.Node = SkeletonNode;
function voidFunc() {
}
const WatermarkContext = /* @__PURE__ */ reactExports.createContext({
  add: voidFunc,
  remove: voidFunc
});
function usePanelRef(panelSelector) {
  const watermark = reactExports.useContext(WatermarkContext);
  const panelEleRef = reactExports.useRef(null);
  const panelRef = useEvent((ele) => {
    if (ele) {
      const innerContentEle = panelSelector ? ele.querySelector(panelSelector) : ele;
      if (innerContentEle) {
        watermark.add(innerContentEle);
        panelEleRef.current = innerContentEle;
      }
    } else {
      watermark.remove(panelEleRef.current);
    }
  });
  return panelRef;
}
const NormalCancelBtn = () => {
  const {
    cancelButtonProps,
    cancelTextLocale,
    onCancel
  } = reactExports.useContext(ModalContext);
  return /* @__PURE__ */ React.createElement(Button$1, {
    onClick: onCancel,
    ...cancelButtonProps
  }, cancelTextLocale);
};
const NormalOkBtn = () => {
  const {
    confirmLoading,
    okButtonProps,
    okType,
    okTextLocale,
    onOk
  } = reactExports.useContext(ModalContext);
  return /* @__PURE__ */ React.createElement(Button$1, {
    ...convertLegacyProps(okType),
    loading: confirmLoading,
    onClick: onOk,
    ...okButtonProps
  }, okTextLocale);
};
function renderCloseIcon(prefixCls, closeIcon) {
  return /* @__PURE__ */ React.createElement("span", {
    className: `${prefixCls}-close-x`
  }, closeIcon || /* @__PURE__ */ React.createElement(RefIcon$1, {
    className: `${prefixCls}-close-icon`
  }));
}
const Footer = (props) => {
  const {
    okText,
    okType = "primary",
    cancelText,
    confirmLoading,
    onOk,
    onCancel,
    okButtonProps,
    cancelButtonProps,
    footer
  } = props;
  const [locale2] = useLocale("Modal", getConfirmLocale());
  const okTextLocale = okText || locale2?.okText;
  const cancelTextLocale = cancelText || locale2?.cancelText;
  const memoizedValue = React.useMemo(() => {
    return {
      confirmLoading,
      okButtonProps,
      cancelButtonProps,
      okTextLocale,
      cancelTextLocale,
      okType,
      onOk,
      onCancel
    };
  }, [confirmLoading, okButtonProps, cancelButtonProps, okTextLocale, cancelTextLocale, okType, onOk, onCancel]);
  let footerNode;
  if (isFunction(footer) || typeof footer === "undefined") {
    footerNode = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(NormalCancelBtn, null), /* @__PURE__ */ React.createElement(NormalOkBtn, null));
    if (isFunction(footer)) {
      footerNode = footer(footerNode, {
        OkBtn: NormalOkBtn,
        CancelBtn: NormalCancelBtn
      });
    }
    footerNode = /* @__PURE__ */ React.createElement(ModalContextProvider, {
      value: memoizedValue
    }, footerNode);
  } else {
    footerNode = footer;
  }
  return /* @__PURE__ */ React.createElement(DisabledContextProvider, {
    disabled: false
  }, footerNode);
};
const genGridRowStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      display: "flex",
      flexFlow: "row wrap",
      minWidth: 0,
      "&::before, &::after": {
        display: "flex"
      },
      "&-no-wrap": {
        flexWrap: "nowrap"
      },
      // The origin of the X-axis
      "&-start": {
        justifyContent: "flex-start"
      },
      // The center of the X-axis
      "&-center": {
        justifyContent: "center"
      },
      // The opposite of the X-axis
      "&-end": {
        justifyContent: "flex-end"
      },
      "&-space-between": {
        justifyContent: "space-between"
      },
      "&-space-around": {
        justifyContent: "space-around"
      },
      "&-space-evenly": {
        justifyContent: "space-evenly"
      },
      // Align at the top
      "&-top": {
        alignItems: "flex-start"
      },
      // Align at the center
      "&-middle": {
        alignItems: "center"
      },
      "&-bottom": {
        alignItems: "flex-end"
      }
    }
  };
};
const genGridColStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      position: "relative",
      maxWidth: "100%",
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
};
const genLoopGridColumnsStyle = (token, sizeCls) => {
  const {
    componentCls,
    gridColumns,
    antCls
  } = token;
  const [gridVarName, gridVarRef] = genCssVar(antCls, "grid");
  const [, colVarRef] = genCssVar(antCls, "col");
  const gridColumnsStyle = {};
  for (let i = gridColumns; i >= 0; i--) {
    if (i === 0) {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = {
        display: "none"
      };
      gridColumnsStyle[`${componentCls}-push-${i}`] = {
        insetInlineStart: "auto"
      };
      gridColumnsStyle[`${componentCls}-pull-${i}`] = {
        insetInlineEnd: "auto"
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: "auto"
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: "auto"
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineStart: 0
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: 0
      };
    } else {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = [
        // https://github.com/ant-design/ant-design/issues/44456
        // Form set `display: flex` on Col which will override `display: block`.
        // Let's get it from css variable to support override.
        {
          [gridVarName("display")]: "block",
          // Fallback to display if variable not support
          display: "block"
        },
        {
          display: gridVarRef("display"),
          flex: `0 0 ${i / gridColumns * 100}%`,
          maxWidth: `${i / gridColumns * 100}%`
        }
      ];
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: i
      };
    }
  }
  gridColumnsStyle[`${componentCls}${sizeCls}-flex`] = {
    flex: colVarRef(`${sizeCls.replace(/-/, "")}-flex`)
  };
  return gridColumnsStyle;
};
const genGridStyle = (token, sizeCls) => genLoopGridColumnsStyle(token, sizeCls);
const genGridMediaStyle = (token, screenSize, sizeCls) => ({
  [`@media (min-width: ${unit(screenSize)})`]: {
    ...genGridStyle(token, sizeCls)
  }
});
const prepareRowComponentToken = () => ({});
const prepareColComponentToken = () => ({});
const useRowStyle = genStyleHooks("Grid", genGridRowStyle, prepareRowComponentToken);
const getMediaSize = (token) => {
  const mediaSizesMap = {
    xs: token.screenXSMin,
    sm: token.screenSMMin,
    md: token.screenMDMin,
    lg: token.screenLGMin,
    xl: token.screenXLMin,
    xxl: token.screenXXLMin,
    xxxl: token.screenXXXLMin
  };
  return mediaSizesMap;
};
const useColStyle = genStyleHooks("Grid", (token) => {
  const gridToken = merge$1(token, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  });
  const gridMediaSizesMap = getMediaSize(gridToken);
  delete gridMediaSizesMap.xs;
  return [genGridColStyle(gridToken), genGridStyle(gridToken, ""), genGridStyle(gridToken, "-xs"), Object.keys(gridMediaSizesMap).map((key) => genGridMediaStyle(gridToken, gridMediaSizesMap[key], `-${key}`)).reduce((pre, cur) => ({
    ...pre,
    ...cur
  }), {})];
}, prepareColComponentToken);
function box(position) {
  return {
    position,
    inset: 0
  };
}
const genModalMaskStyle = (token) => {
  const {
    componentCls,
    antCls
  } = token;
  return [{
    [`${componentCls}-root`]: {
      [`${componentCls}${antCls}-zoom-enter, ${componentCls}${antCls}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: "none",
        opacity: 0,
        animationDuration: token.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: "none"
      },
      // https://github.com/ant-design/ant-design/issues/37329
      // https://github.com/ant-design/ant-design/issues/40272
      [`${componentCls}${antCls}-zoom-leave ${componentCls}-container`]: {
        pointerEvents: "none"
      },
      [`${componentCls}-mask`]: {
        ...box("fixed"),
        zIndex: token.zIndexPopupBase,
        height: "100%",
        backgroundColor: token.colorBgMask,
        pointerEvents: "none",
        [`&${componentCls}-mask-blur`]: {
          backdropFilter: "blur(4px)"
        },
        [`${componentCls}-hidden`]: {
          display: "none"
        }
      },
      [`${componentCls}-wrap`]: {
        ...box("fixed"),
        zIndex: token.zIndexPopupBase,
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      }
    }
  }, {
    [`${componentCls}-root`]: initFadeMotion(token)
  }];
};
const genModalStyle = (token) => {
  const {
    componentCls,
    motionDurationMid
  } = token;
  return [
    // ======================== Root =========================
    {
      [`${componentCls}-root`]: {
        [`${componentCls}-wrap-rtl`]: {
          direction: "rtl"
        },
        [`${componentCls}-centered`]: {
          textAlign: "center",
          "&::before": {
            display: "inline-block",
            width: 0,
            height: "100%",
            verticalAlign: "middle",
            content: '""'
          },
          [componentCls]: {
            top: 0,
            display: "inline-block",
            paddingBottom: 0,
            textAlign: "start",
            verticalAlign: "middle"
          }
        },
        [`@media (max-width: ${token.screenSMMax}px)`]: {
          [componentCls]: {
            maxWidth: "calc(100vw - 16px)",
            margin: `${unit(token.marginXS)} auto`
          },
          [`${componentCls}-centered`]: {
            [componentCls]: {
              flex: 1
            }
          }
        }
      }
    },
    // ======================== Modal ========================
    {
      [componentCls]: {
        ...resetComponent(token),
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${unit(token.calc(token.margin).mul(2).equal())})`,
        margin: "0 auto",
        "&:focus-visible": {
          borderRadius: token.borderRadiusLG,
          ...genFocusOutline(token)
        },
        [`${componentCls}-title`]: {
          margin: 0,
          color: token.titleColor,
          fontWeight: token.fontWeightStrong,
          fontSize: token.titleFontSize,
          lineHeight: token.titleLineHeight,
          wordWrap: "break-word"
        },
        [`${componentCls}-container`]: {
          position: "relative",
          backgroundColor: token.contentBg,
          backgroundClip: "padding-box",
          border: 0,
          borderRadius: token.borderRadiusLG,
          boxShadow: token.boxShadow,
          pointerEvents: "auto",
          padding: token.contentPadding
        },
        [`${componentCls}-close`]: {
          position: "absolute",
          top: token.calc(token.modalHeaderHeight).sub(token.modalCloseBtnSize).div(2).equal(),
          insetInlineEnd: token.calc(token.modalHeaderHeight).sub(token.modalCloseBtnSize).div(2).equal(),
          zIndex: token.calc(token.zIndexPopupBase).add(10).equal(),
          padding: 0,
          color: token.modalCloseIconColor,
          fontWeight: token.fontWeightStrong,
          lineHeight: 1,
          textDecoration: "none",
          background: "transparent",
          borderRadius: token.borderRadiusSM,
          width: token.modalCloseBtnSize,
          height: token.modalCloseBtnSize,
          border: 0,
          outline: 0,
          cursor: "pointer",
          transition: ["color", "background-color"].map((prop) => `${prop} ${motionDurationMid}`).join(", "),
          "&-x": {
            display: "flex",
            fontSize: token.fontSizeLG,
            fontStyle: "normal",
            lineHeight: unit(token.modalCloseBtnSize),
            justifyContent: "center",
            textTransform: "none",
            textRendering: "auto"
          },
          "&:disabled": {
            pointerEvents: "none"
          },
          "&:hover": {
            color: token.modalCloseIconHoverColor,
            backgroundColor: token.colorBgTextHover,
            textDecoration: "none"
          },
          "&:active": {
            backgroundColor: token.colorBgTextActive
          },
          ...genFocusStyle(token)
        },
        [`${componentCls}-header`]: {
          color: token.colorText,
          background: token.headerBg,
          borderRadius: `${unit(token.borderRadiusLG)} ${unit(token.borderRadiusLG)} 0 0`,
          marginBottom: token.headerMarginBottom,
          padding: token.headerPadding,
          borderBottom: token.headerBorderBottom
        },
        [`${componentCls}-body`]: {
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          wordWrap: "break-word",
          padding: token.bodyPadding,
          [`${componentCls}-body-skeleton`]: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: `${unit(token.margin)} auto`
          }
        },
        [`${componentCls}-footer`]: {
          textAlign: "end",
          background: token.footerBg,
          marginTop: token.footerMarginTop,
          padding: token.footerPadding,
          borderTop: token.footerBorderTop,
          borderRadius: token.footerBorderRadius,
          [`> ${token.antCls}-btn + ${token.antCls}-btn`]: {
            marginInlineStart: token.marginXS
          }
        },
        [`${componentCls}-open`]: {
          overflow: "hidden"
        }
      }
    },
    // ======================== Pure =========================
    {
      [`${componentCls}-pure-panel`]: {
        top: "auto",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        [`${componentCls}-container,
          ${componentCls}-body,
          ${componentCls}-confirm-body-wrapper`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto"
        },
        [`${componentCls}-confirm-body`]: {
          marginBottom: "auto"
        }
      }
    }
  ];
};
const genRTLStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-root`]: {
      [`${componentCls}-wrap-rtl`]: {
        direction: "rtl",
        [`${componentCls}-confirm-body`]: {
          direction: "rtl"
        }
      }
    }
  };
};
const genResponsiveWidthStyle = (token) => {
  const {
    componentCls
  } = token;
  const oriGridMediaSizesMap = getMediaSize(token);
  const gridMediaSizesMap = {
    ...oriGridMediaSizesMap
  };
  delete gridMediaSizesMap.xs;
  const cssVarPrefix = `--${componentCls.replace(".", "")}-`;
  const responsiveStyles = Object.keys(gridMediaSizesMap).map((key) => ({
    [`@media (min-width: ${unit(gridMediaSizesMap[key])})`]: {
      width: `var(${cssVarPrefix}${key}-width)`
    }
  }));
  return {
    [`${componentCls}-root`]: {
      [componentCls]: [].concat(_toConsumableArray(Object.keys(oriGridMediaSizesMap).map((currentKey, index) => {
        const previousKey = Object.keys(oriGridMediaSizesMap)[index - 1];
        return previousKey ? {
          [`${cssVarPrefix}${currentKey}-width`]: `var(${cssVarPrefix}${previousKey}-width)`
        } : null;
      })), [{
        width: `var(${cssVarPrefix}xs-width)`
      }], _toConsumableArray(responsiveStyles))
    }
  };
};
const prepareToken$1 = (token) => {
  const headerPaddingVertical = token.padding;
  const headerFontSize = token.fontSizeHeading5;
  const headerLineHeight = token.lineHeightHeading5;
  const modalToken = merge$1(token, {
    modalHeaderHeight: token.calc(token.calc(headerLineHeight).mul(headerFontSize).equal()).add(token.calc(headerPaddingVertical).mul(2).equal()).equal(),
    modalFooterBorderColorSplit: token.colorSplit,
    modalFooterBorderStyle: token.lineType,
    modalFooterBorderWidth: token.lineWidth,
    modalCloseIconColor: token.colorIcon,
    modalCloseIconHoverColor: token.colorIconHover,
    modalCloseBtnSize: token.controlHeight,
    modalConfirmIconSize: token.fontHeight,
    modalTitleHeight: token.calc(token.titleFontSize).mul(token.titleLineHeight).equal()
  });
  return modalToken;
};
const prepareComponentToken$6 = (token) => ({
  footerBg: "transparent",
  headerBg: "transparent",
  titleLineHeight: token.lineHeightHeading5,
  titleFontSize: token.fontSizeHeading5,
  contentBg: token.colorBgElevated,
  titleColor: token.colorTextHeading,
  // internal
  contentPadding: token.wireframe ? 0 : `${unit(token.paddingMD)} ${unit(token.paddingContentHorizontalLG)}`,
  headerPadding: token.wireframe ? `${unit(token.padding)} ${unit(token.paddingLG)}` : 0,
  headerBorderBottom: token.wireframe ? `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}` : "none",
  headerMarginBottom: token.wireframe ? 0 : token.marginXS,
  bodyPadding: token.wireframe ? token.paddingLG : 0,
  footerPadding: token.wireframe ? `${unit(token.paddingXS)} ${unit(token.padding)}` : 0,
  footerBorderTop: token.wireframe ? `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}` : "none",
  footerBorderRadius: token.wireframe ? `0 0 ${unit(token.borderRadiusLG)} ${unit(token.borderRadiusLG)}` : 0,
  footerMarginTop: token.wireframe ? 0 : token.marginSM,
  confirmBodyPadding: token.wireframe ? `${unit(token.padding * 2)} ${unit(token.padding * 2)} ${unit(token.paddingLG)}` : 0,
  confirmIconMarginInlineEnd: token.wireframe ? token.margin : token.marginSM,
  confirmBtnsMarginTop: token.wireframe ? token.marginLG : token.marginSM,
  mask: true
});
const useStyle$c = genStyleHooks("Modal", (token) => {
  const modalToken = prepareToken$1(token);
  return [genModalStyle(modalToken), genRTLStyle(modalToken), genModalMaskStyle(modalToken), initZoomMotion(modalToken, "zoom"), genResponsiveWidthStyle(modalToken)];
}, prepareComponentToken$6, {
  unitless: {
    titleLineHeight: true
  }
});
let mousePosition;
const getClickPosition = (e2) => {
  mousePosition = {
    x: e2.pageX,
    y: e2.pageY
  };
  setTimeout(() => {
    mousePosition = null;
  }, 100);
};
if (canUseDocElement()) {
  document.documentElement.addEventListener("click", getClickPosition, true);
}
const Modal$1 = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    open,
    wrapClassName,
    centered,
    getContainer,
    style,
    width = 520,
    footer,
    classNames,
    styles,
    children,
    loading,
    confirmLoading,
    zIndex: customizeZIndex,
    mousePosition: customizeMousePosition,
    onOk,
    onCancel,
    okButtonProps,
    cancelButtonProps,
    destroyOnHidden,
    destroyOnClose,
    panelRef = null,
    closable,
    mask: modalMask,
    modalRender,
    maskClosable,
    scrollLock,
    // Focusable
    focusTriggerAfterClose,
    focusable,
    ...restProps
  } = props;
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles,
    centered: contextCentered,
    cancelButtonProps: contextCancelButtonProps,
    okButtonProps: contextOkButtonProps,
    mask: contextMask,
    focusable: contextFocusable
  } = useComponentConfig("modal");
  const {
    modal: modalContext
  } = reactExports.useContext(ConfigContext);
  const [closableAfterClose, onClose] = reactExports.useMemo(() => {
    if (typeof closable === "boolean") {
      return [void 0, void 0];
    }
    return [closable?.afterClose, closable?.onClose];
  }, [closable]);
  const prefixCls = getPrefixCls("modal", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const [mergedMask, maskBlurClassName, mergeMaskClosable] = useMergedMask(modalMask, contextMask, prefixCls, maskClosable);
  const mergedFocusable = useFocusable({
    ...contextFocusable,
    ...focusable
  }, mergedMask, focusTriggerAfterClose);
  const handleCancel = (e2) => {
    if (confirmLoading) {
      return;
    }
    onCancel?.(e2);
    onClose?.();
  };
  const handleOk = (e2) => {
    onOk?.(e2);
    onClose?.();
  };
  const rootCls = useCSSVarCls(prefixCls);
  const [hashId, cssVarCls] = useStyle$c(prefixCls, rootCls);
  const wrapClassNameExtended = clsx(wrapClassName, {
    [`${prefixCls}-centered`]: centered ?? contextCentered,
    [`${prefixCls}-wrap-rtl`]: direction === "rtl"
  });
  const dialogFooter = footer !== null && !loading ? /* @__PURE__ */ reactExports.createElement(Footer, {
    ...props,
    okButtonProps: {
      ...contextOkButtonProps,
      ...okButtonProps
    },
    onOk: handleOk,
    cancelButtonProps: {
      ...contextCancelButtonProps,
      ...cancelButtonProps
    },
    onCancel: handleCancel
  }) : null;
  const [rawClosable, mergedCloseIcon, closeBtnIsDisabled, ariaProps] = useClosable(pickClosable(props), pickClosable(modalContext), {
    closable: true,
    closeIcon: /* @__PURE__ */ reactExports.createElement(RefIcon$1, {
      className: `${prefixCls}-close-icon`
    }),
    closeIconRender: (icon) => renderCloseIcon(prefixCls, icon)
  });
  const mergedClosable = rawClosable ? {
    disabled: closeBtnIsDisabled,
    closeIcon: mergedCloseIcon,
    afterClose: closableAfterClose,
    ...ariaProps
  } : false;
  const mergedModalRender = modalRender ? (node) => /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-render`
  }, modalRender(node)) : void 0;
  const panelClassName = `.${prefixCls}-${modalRender ? "render" : "container"}`;
  const innerPanelRef = usePanelRef(panelClassName);
  const mergedPanelRef = composeRef(panelRef, innerPanelRef);
  const [zIndex, contextZIndex] = useZIndex("Modal", customizeZIndex);
  const mergedProps = {
    ...props,
    width,
    panelRef,
    focusTriggerAfterClose: mergedFocusable.focusTriggerAfterClose,
    focusable: mergedFocusable,
    mask: mergedMask,
    maskClosable: mergeMaskClosable,
    zIndex
  };
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames, maskBlurClassName], [contextStyles, styles], {
    props: mergedProps
  });
  const [numWidth, responsiveWidth] = reactExports.useMemo(() => {
    if (isPlainObject(width)) {
      return [void 0, width];
    }
    return [width, void 0];
  }, [width]);
  const responsiveWidthVars = reactExports.useMemo(() => {
    const vars = {};
    if (responsiveWidth) {
      Object.keys(responsiveWidth).forEach((breakpoint) => {
        const breakpointWidth = responsiveWidth[breakpoint];
        if (isNonNullable(breakpointWidth)) {
          vars[`--${prefixCls}-${breakpoint}-width`] = isNumber(breakpointWidth) ? `${breakpointWidth}px` : breakpointWidth;
        }
      });
    }
    return vars;
  }, [prefixCls, responsiveWidth]);
  return /* @__PURE__ */ reactExports.createElement(ContextIsolator, {
    form: true,
    space: true
  }, /* @__PURE__ */ reactExports.createElement(ZIndexContext.Provider, {
    value: contextZIndex
  }, /* @__PURE__ */ reactExports.createElement(DialogWrap, {
    width: numWidth,
    ...restProps,
    zIndex,
    getContainer: getContainer === void 0 ? getContextPopupContainer : getContainer,
    prefixCls,
    rootClassName: clsx(hashId, rootClassName, cssVarCls, rootCls, mergedClassNames.root),
    rootStyle: mergedStyles.root,
    footer: dialogFooter,
    visible: open,
    mousePosition: customizeMousePosition ?? mousePosition,
    onClose: handleCancel,
    closable: mergedClosable,
    closeIcon: mergedCloseIcon,
    transitionName: getTransitionName(rootPrefixCls, "zoom", props.transitionName),
    maskTransitionName: getTransitionName(rootPrefixCls, "fade", props.maskTransitionName),
    mask: mergedMask,
    maskClosable: mergeMaskClosable,
    scrollLock,
    className: clsx(hashId, className, contextClassName),
    style: {
      ...contextStyle,
      ...style,
      ...responsiveWidthVars
    },
    classNames: {
      ...mergedClassNames,
      wrapper: clsx(mergedClassNames.wrapper, wrapClassNameExtended)
    },
    styles: mergedStyles,
    panelRef: mergedPanelRef,
    destroyOnHidden: destroyOnHidden ?? destroyOnClose,
    modalRender: mergedModalRender,
    // Focusable
    focusTriggerAfterClose: mergedFocusable.focusTriggerAfterClose,
    focusTrap: mergedFocusable.trap
  }, loading ? /* @__PURE__ */ reactExports.createElement(Skeleton, {
    active: true,
    title: false,
    paragraph: {
      rows: 4
    },
    className: `${prefixCls}-body-skeleton`
  }) : children)));
};
const genModalConfirmStyle = (token) => {
  const {
    componentCls,
    titleFontSize,
    titleLineHeight,
    modalConfirmIconSize,
    fontSize,
    lineHeight,
    modalTitleHeight,
    fontHeight,
    confirmBodyPadding
  } = token;
  const confirmComponentCls = `${componentCls}-confirm`;
  return {
    [confirmComponentCls]: {
      "&-rtl": {
        direction: "rtl"
      },
      [`${token.antCls}-modal-header`]: {
        display: "none"
      },
      [`${confirmComponentCls}-body-wrapper`]: {
        ...clearFix()
      },
      [`&${componentCls} ${componentCls}-body`]: {
        padding: confirmBodyPadding
      },
      // ====================== Body ======================
      [`${confirmComponentCls}-body`]: {
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "start",
        [`> ${token.iconCls}`]: {
          flex: "none",
          fontSize: modalConfirmIconSize,
          marginInlineEnd: token.confirmIconMarginInlineEnd,
          marginTop: token.calc(token.calc(fontHeight).sub(modalConfirmIconSize).equal()).div(2).equal()
        },
        [`&-has-title > ${token.iconCls}`]: {
          marginTop: token.calc(token.calc(modalTitleHeight).sub(modalConfirmIconSize).equal()).div(2).equal()
        }
      },
      [`${confirmComponentCls}-paragraph`]: {
        display: "flex",
        flexDirection: "column",
        flex: "auto",
        rowGap: token.marginXS,
        // https://github.com/ant-design/ant-design/issues/51912
        maxWidth: `calc(100% - ${unit(token.marginSM)})`
      },
      [`${confirmComponentCls}-body-no-icon ${confirmComponentCls}-paragraph`]: {
        maxWidth: "100%"
      },
      // https://github.com/ant-design/ant-design/issues/48159
      [`${token.iconCls} + ${confirmComponentCls}-paragraph`]: {
        maxWidth: `calc(100% - ${unit(token.calc(token.modalConfirmIconSize).add(token.marginSM).equal())})`
      },
      [`${confirmComponentCls}-title`]: {
        color: token.colorTextHeading,
        fontWeight: token.fontWeightStrong,
        fontSize: titleFontSize,
        lineHeight: titleLineHeight
      },
      [`${confirmComponentCls}-container`]: {
        color: token.colorText,
        fontSize,
        lineHeight
      },
      // ===================== Footer =====================
      [`${confirmComponentCls}-btns`]: {
        textAlign: "end",
        marginTop: token.confirmBtnsMarginTop,
        [`${token.antCls}-btn + ${token.antCls}-btn`]: {
          marginBottom: 0,
          marginInlineStart: token.marginXS
        }
      }
    },
    [`${confirmComponentCls}-error ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorError
    },
    [`${confirmComponentCls}-warning ${confirmComponentCls}-body > ${token.iconCls},
        ${confirmComponentCls}-confirm ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorWarning
    },
    [`${confirmComponentCls}-info ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorInfo
    },
    [`${confirmComponentCls}-success ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorSuccess
    }
  };
};
const Confirm = genSubStyleComponent(["Modal", "confirm"], (token) => {
  const modalToken = prepareToken$1(token);
  return genModalConfirmStyle(modalToken);
}, prepareComponentToken$6, {
  // confirm is weak than modal since no conflict here
  order: -1e3
});
const ConfirmContent = (props) => {
  const {
    prefixCls,
    icon,
    okText,
    cancelText,
    confirmPrefixCls,
    type,
    okCancel,
    footer,
    // Legacy for static function usage
    locale: staticLocale,
    autoFocusButton,
    focusable,
    ...restProps
  } = props;
  const {
    infoIcon,
    successIcon,
    errorIcon,
    warningIcon
  } = useComponentConfig("modal");
  let mergedIcon = icon;
  if (icon === void 0) {
    switch (type) {
      case "info":
        mergedIcon = fallbackProp(infoIcon, /* @__PURE__ */ reactExports.createElement(RefIcon$5, null));
        break;
      case "success":
        mergedIcon = fallbackProp(successIcon, /* @__PURE__ */ reactExports.createElement(RefIcon$4, null));
        break;
      case "error":
        mergedIcon = fallbackProp(errorIcon, /* @__PURE__ */ reactExports.createElement(RefIcon, null));
        break;
      default:
        mergedIcon = fallbackProp(warningIcon, /* @__PURE__ */ reactExports.createElement(RefIcon$3, null));
    }
  }
  const mergedOkCancel = okCancel ?? type === "confirm";
  const mergedAutoFocusButton = reactExports.useMemo(() => {
    const base = focusable?.autoFocusButton || autoFocusButton;
    return base || base === null ? base : "ok";
  }, [autoFocusButton, focusable?.autoFocusButton]);
  const [locale2] = useLocale("Modal");
  const mergedLocale = staticLocale || locale2;
  const okTextLocale = okText || (mergedOkCancel ? mergedLocale?.okText : mergedLocale?.justOkText);
  const cancelTextLocale = cancelText || mergedLocale?.cancelText;
  const {
    closable
  } = restProps;
  const {
    onClose
  } = isPlainObject(closable) ? closable : {};
  const memoizedValue = reactExports.useMemo(() => {
    return {
      autoFocusButton: mergedAutoFocusButton,
      cancelTextLocale,
      okTextLocale,
      mergedOkCancel,
      onClose,
      ...restProps
    };
  }, [mergedAutoFocusButton, cancelTextLocale, okTextLocale, mergedOkCancel, onClose, restProps]);
  const footerOriginNode = /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(ConfirmCancelBtn, null), /* @__PURE__ */ reactExports.createElement(ConfirmOkBtn, null));
  const hasTitle = isReactRenderable(props.title);
  const hasIcon = isReactRenderable(mergedIcon);
  const bodyCls = `${confirmPrefixCls}-body`;
  return /* @__PURE__ */ reactExports.createElement("div", {
    className: `${confirmPrefixCls}-body-wrapper`
  }, /* @__PURE__ */ reactExports.createElement("div", {
    className: clsx(bodyCls, {
      [`${bodyCls}-has-title`]: hasTitle,
      [`${bodyCls}-no-icon`]: !hasIcon
    })
  }, mergedIcon, /* @__PURE__ */ reactExports.createElement("div", {
    className: `${confirmPrefixCls}-paragraph`
  }, hasTitle && /* @__PURE__ */ reactExports.createElement("span", {
    className: `${confirmPrefixCls}-title`
  }, props.title), /* @__PURE__ */ reactExports.createElement("div", {
    className: `${confirmPrefixCls}-content`
  }, props.content))), footer === void 0 || isFunction(footer) ? /* @__PURE__ */ reactExports.createElement(ModalContextProvider, {
    value: memoizedValue
  }, /* @__PURE__ */ reactExports.createElement("div", {
    className: `${confirmPrefixCls}-btns`
  }, isFunction(footer) ? footer(footerOriginNode, {
    OkBtn: ConfirmOkBtn,
    CancelBtn: ConfirmCancelBtn
  }) : footerOriginNode)) : footer, /* @__PURE__ */ reactExports.createElement(Confirm, {
    prefixCls
  }));
};
const ConfirmDialog = (props) => {
  const {
    close,
    zIndex,
    maskStyle,
    direction,
    prefixCls,
    wrapClassName,
    rootPrefixCls,
    bodyStyle,
    closable = false,
    onConfirm,
    styles,
    title,
    mask,
    maskClosable,
    okButtonProps,
    cancelButtonProps
  } = props;
  const {
    cancelButtonProps: contextCancelButtonProps,
    okButtonProps: contextOkButtonProps
  } = useComponentConfig("modal");
  const confirmPrefixCls = `${prefixCls}-confirm`;
  const width = props.width || 416;
  const style = props.style || {};
  const classString = clsx(confirmPrefixCls, `${confirmPrefixCls}-${props.type}`, {
    [`${confirmPrefixCls}-rtl`]: direction === "rtl"
  }, props.className);
  const mergedMask = reactExports.useMemo(() => {
    const nextMaskConfig = normalizeMaskConfig(mask, maskClosable);
    nextMaskConfig.closable ?? (nextMaskConfig.closable = false);
    return nextMaskConfig;
  }, [mask, maskClosable]);
  const [, token] = useToken();
  const mergedZIndex = reactExports.useMemo(() => {
    if (zIndex !== void 0) {
      return zIndex;
    }
    return token.zIndexPopupBase + CONTAINER_MAX_OFFSET;
  }, [zIndex, token]);
  return /* @__PURE__ */ reactExports.createElement(Modal$1, {
    ...props,
    className: classString,
    wrapClassName: clsx({
      [`${confirmPrefixCls}-centered`]: !!props.centered
    }, wrapClassName),
    onCancel: () => {
      close?.({
        triggerCancel: true
      });
      onConfirm?.(false);
    },
    title,
    footer: null,
    transitionName: getTransitionName(rootPrefixCls || "", "zoom", props.transitionName),
    maskTransitionName: getTransitionName(rootPrefixCls || "", "fade", props.maskTransitionName),
    mask: mergedMask,
    style,
    styles: {
      body: bodyStyle,
      mask: maskStyle,
      ...styles
    },
    width,
    zIndex: mergedZIndex,
    closable
  }, /* @__PURE__ */ reactExports.createElement(ConfirmContent, {
    ...props,
    confirmPrefixCls,
    okButtonProps: {
      ...contextOkButtonProps,
      ...okButtonProps
    },
    cancelButtonProps: {
      ...contextCancelButtonProps,
      ...cancelButtonProps
    }
  }));
};
const ConfirmDialogWrapper$1 = (props) => {
  const {
    rootPrefixCls,
    iconPrefixCls,
    direction,
    theme
  } = props;
  return /* @__PURE__ */ reactExports.createElement(ConfigProvider, {
    prefixCls: rootPrefixCls,
    iconPrefixCls,
    direction,
    theme
  }, /* @__PURE__ */ reactExports.createElement(ConfirmDialog, {
    ...props
  }));
};
const destroyFns = [];
let defaultRootPrefixCls = "";
function getRootPrefixCls() {
  return defaultRootPrefixCls;
}
const ConfirmDialogWrapper = (props) => {
  const {
    prefixCls: customizePrefixCls,
    getContainer,
    direction
  } = props;
  const runtimeLocale2 = getConfirmLocale();
  const config = reactExports.useContext(ConfigContext);
  const rootPrefixCls = getRootPrefixCls() || config.getPrefixCls();
  const prefixCls = customizePrefixCls || `${rootPrefixCls}-modal`;
  let mergedGetContainer = getContainer;
  if (mergedGetContainer === false) {
    mergedGetContainer = void 0;
  }
  return /* @__PURE__ */ React.createElement(ConfirmDialogWrapper$1, {
    ...props,
    rootPrefixCls,
    prefixCls,
    iconPrefixCls: config.iconPrefixCls,
    theme: config.theme,
    direction: direction ?? config.direction,
    locale: config.locale?.Modal ?? runtimeLocale2,
    getContainer: mergedGetContainer
  });
};
function confirm(config) {
  const global = globalConfig();
  const container = document.createDocumentFragment();
  let currentConfig = {
    ...config,
    close,
    open: true
  };
  let timeoutId;
  function destroy(...args) {
    const triggerCancel = args.some((param) => param?.triggerCancel);
    if (triggerCancel) {
      config.onCancel?.(() => {
      }, ...args.slice(1));
    }
    for (let i = 0; i < destroyFns.length; i++) {
      const fn = destroyFns[i];
      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
    unmount(container).then(() => {
    });
  }
  const scheduleRender = (props) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const rootPrefixCls = global.getPrefixCls(void 0, getRootPrefixCls());
      const iconPrefixCls = global.getIconPrefixCls();
      const theme = global.getTheme();
      const dom = /* @__PURE__ */ React.createElement(ConfirmDialogWrapper, {
        ...props
      });
      render(/* @__PURE__ */ React.createElement(ConfigProvider, {
        prefixCls: rootPrefixCls,
        iconPrefixCls,
        theme
      }, isFunction(global.holderRender) ? global.holderRender(dom) : dom), container);
    });
  };
  function close(...args) {
    currentConfig = {
      ...currentConfig,
      open: false,
      afterClose: () => {
        if (isFunction(config.afterClose)) {
          config.afterClose();
        }
        destroy.apply(this, args);
      }
    };
    scheduleRender(currentConfig);
  }
  function update(configUpdate) {
    if (isFunction(configUpdate)) {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = {
        ...currentConfig,
        ...configUpdate
      };
    }
    scheduleRender(currentConfig);
  }
  scheduleRender(currentConfig);
  destroyFns.push(close);
  return {
    destroy: close,
    update
  };
}
function withWarn(props) {
  return {
    ...props,
    type: "warning"
  };
}
function withInfo(props) {
  return {
    ...props,
    type: "info"
  };
}
function withSuccess(props) {
  return {
    ...props,
    type: "success"
  };
}
function withError(props) {
  return {
    ...props,
    type: "error"
  };
}
function withConfirm(props) {
  return {
    ...props,
    type: "confirm"
  };
}
function modalGlobalConfig({
  rootPrefixCls
}) {
  defaultRootPrefixCls = rootPrefixCls;
}
const HookModal = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    afterClose: hookAfterClose,
    config,
    ...restProps
  } = props;
  const [open, setOpen] = reactExports.useState(true);
  const [innerConfig, setInnerConfig] = reactExports.useState(config);
  const {
    direction,
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("modal");
  const rootPrefixCls = getPrefixCls();
  const afterClose = () => {
    hookAfterClose();
    innerConfig.afterClose?.();
  };
  const close = (...args) => {
    setOpen(false);
    const triggerCancel = args.some((param) => param?.triggerCancel);
    if (triggerCancel) {
      innerConfig.onCancel?.(() => {
      }, ...args.slice(1));
    }
  };
  reactExports.useImperativeHandle(ref, () => ({
    destroy: close,
    update: (newConfig) => {
      setInnerConfig((originConfig) => {
        const nextConfig = isFunction(newConfig) ? newConfig(originConfig) : newConfig;
        return {
          ...originConfig,
          ...nextConfig
        };
      });
    }
  }));
  const mergedOkCancel = innerConfig.okCancel ?? innerConfig.type === "confirm";
  const [contextLocale] = useLocale("Modal", localeValues.Modal);
  return /* @__PURE__ */ reactExports.createElement(ConfirmDialogWrapper$1, {
    prefixCls,
    rootPrefixCls,
    ...innerConfig,
    close,
    open,
    afterClose,
    okText: innerConfig.okText || (mergedOkCancel ? contextLocale?.okText : contextLocale?.justOkText),
    direction: innerConfig.direction || direction,
    cancelText: innerConfig.cancelText || contextLocale?.cancelText,
    ...restProps
  });
});
let uuid = 0;
const ElementsHolder = /* @__PURE__ */ reactExports.memo(/* @__PURE__ */ reactExports.forwardRef((_props, ref) => {
  const [elements, patchElement] = usePatchElement();
  reactExports.useImperativeHandle(ref, () => ({
    patchElement
  }), [patchElement]);
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, elements);
}));
function useModal() {
  const holderRef = reactExports.useRef(null);
  const [actionQueue, setActionQueue] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (actionQueue.length) {
      const cloneQueue = _toConsumableArray(actionQueue);
      cloneQueue.forEach((action) => {
        action();
      });
      setActionQueue([]);
    }
  }, [actionQueue]);
  const getConfirmFunc = reactExports.useCallback((withFunc) => function hookConfirm(config) {
    uuid += 1;
    const modalRef = /* @__PURE__ */ reactExports.createRef();
    let resolvePromise;
    const promise = new Promise((resolve) => {
      resolvePromise = resolve;
    });
    let silent = false;
    let closeFunc;
    const modal = /* @__PURE__ */ reactExports.createElement(HookModal, {
      key: `modal-${uuid}`,
      config: withFunc(config),
      ref: modalRef,
      afterClose: () => {
        closeFunc?.();
      },
      isSilent: () => silent,
      onConfirm: (confirmed) => {
        resolvePromise(confirmed);
      }
    });
    closeFunc = holderRef.current?.patchElement(modal);
    if (closeFunc) {
      destroyFns.push(closeFunc);
    }
    const instance = {
      destroy: () => {
        function destroyAction() {
          modalRef.current?.destroy();
        }
        if (modalRef.current) {
          destroyAction();
        } else {
          setActionQueue((prev) => [].concat(_toConsumableArray(prev), [destroyAction]));
        }
      },
      update: (newConfig) => {
        function updateAction() {
          modalRef.current?.update(newConfig);
        }
        if (modalRef.current) {
          updateAction();
        } else {
          setActionQueue((prev) => [].concat(_toConsumableArray(prev), [updateAction]));
        }
      },
      then: (resolve) => {
        silent = true;
        return promise.then(resolve);
      }
    };
    return instance;
  }, []);
  const fns = reactExports.useMemo(() => ({
    info: getConfirmFunc(withInfo),
    success: getConfirmFunc(withSuccess),
    error: getConfirmFunc(withError),
    warning: getConfirmFunc(withWarn),
    confirm: getConfirmFunc(withConfirm)
  }), [getConfirmFunc]);
  return [fns, /* @__PURE__ */ reactExports.createElement(ElementsHolder, {
    key: "modal-holder",
    ref: holderRef
  })];
}
function withPureRenderTheme(Component) {
  return (props) => /* @__PURE__ */ reactExports.createElement(ConfigProvider, {
    theme: {
      token: {
        motion: false,
        zIndexPopupBase: 0
      }
    }
  }, /* @__PURE__ */ reactExports.createElement(Component, {
    ...props
  }));
}
const genPurePanel = (Component, alignPropName, postProps, defaultPrefixCls2, getDropdownCls) => {
  const PurePanel2 = (props) => {
    const {
      prefixCls: customizePrefixCls,
      style
    } = props;
    const holderRef = reactExports.useRef(null);
    const [popupHeight, setPopupHeight] = reactExports.useState(0);
    const [popupWidth, setPopupWidth] = reactExports.useState(0);
    const [open, setOpen] = useControlledState(false, props.open);
    const {
      getPrefixCls
    } = reactExports.useContext(ConfigContext);
    const prefixCls = getPrefixCls("select", customizePrefixCls);
    reactExports.useEffect(() => {
      setOpen(true);
      if (typeof ResizeObserver !== "undefined") {
        const resizeObserver = new ResizeObserver((entries) => {
          const element = entries[0].target;
          setPopupHeight(element.offsetHeight + 8);
          setPopupWidth(element.offsetWidth);
        });
        const interval = setInterval(() => {
          const dropdownCls = `.${prefixCls}-dropdown`;
          const popup = holderRef.current?.querySelector(dropdownCls);
          if (popup) {
            clearInterval(interval);
            resizeObserver.observe(popup);
          }
        }, 10);
        return () => {
          clearInterval(interval);
          resizeObserver.disconnect();
        };
      }
    }, [prefixCls]);
    let mergedProps = {
      ...props,
      style: {
        ...style,
        margin: 0
      },
      open,
      getPopupContainer: () => holderRef.current
    };
    {
      mergedProps = {
        ...mergedProps,
        [alignPropName]: {
          overflow: {
            adjustX: false,
            adjustY: false
          }
        }
      };
    }
    const mergedStyle = {
      paddingBottom: popupHeight,
      position: "relative",
      minWidth: popupWidth
    };
    return /* @__PURE__ */ reactExports.createElement("div", {
      ref: holderRef,
      style: mergedStyle
    }, /* @__PURE__ */ reactExports.createElement(Component, {
      ...mergedProps
    }));
  };
  return withPureRenderTheme(PurePanel2);
};
function normalizeIcon(value, key, fallback) {
  if (value === false) return null;
  if (value === true) return fallback;
  if (value && value[key] !== void 0) {
    return value[key];
  }
  return fallback;
}
const getStatusClassNames = (prefixCls, status, hasFeedback) => {
  return clsx({
    [`${prefixCls}-status-success`]: status === "success",
    [`${prefixCls}-status-warning`]: status === "warning",
    [`${prefixCls}-status-error`]: status === "error",
    [`${prefixCls}-status-validating`]: status === "validating",
    [`${prefixCls}-has-feedback`]: hasFeedback
  });
};
const getMergedStatus = (contextStatus, customStatus) => customStatus || contextStatus;
const getAsSolidColor = (color, background) => {
  if (color?.startsWith("var(") || background?.startsWith("var(")) {
    return color;
  }
  return new FastColor(color).onBackground(background).toHexString();
};
const Empty$1 = () => {
  const [, token] = useToken();
  const [locale2] = useLocale("Empty");
  const {
    colorBgContainer,
    colorFill,
    colorFillSecondary,
    colorFillTertiary,
    colorTextQuaternary
  } = token;
  const {
    panelBgColor,
    borderColor,
    detailColor,
    shadowColor,
    iconColor
  } = reactExports.useMemo(() => ({
    panelBgColor: getAsSolidColor(colorFillTertiary, colorBgContainer),
    borderColor: getAsSolidColor(colorTextQuaternary, colorBgContainer),
    detailColor: getAsSolidColor(colorFill, colorBgContainer),
    shadowColor: getAsSolidColor(colorFillSecondary, colorBgContainer),
    iconColor: colorBgContainer
  }), [colorBgContainer, colorFill, colorFillSecondary, colorFillTertiary, colorTextQuaternary]);
  return /* @__PURE__ */ reactExports.createElement("svg", {
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ reactExports.createElement("title", null, locale2?.description || "Empty"), /* @__PURE__ */ reactExports.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ reactExports.createElement("g", {
    transform: "translate(24 31.7)"
  }, /* @__PURE__ */ reactExports.createElement("ellipse", {
    fillOpacity: ".8",
    fill: shadowColor,
    cx: "67.8",
    cy: "106.9",
    rx: "67.8",
    ry: "12.7"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    fill: borderColor,
    d: "M122 69.7 98.1 40.2a6 6 0 0 0-4.6-2.2H42.1a6 6 0 0 0-4.6 2.2l-24 29.5V85H122z"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    fill: panelBgColor,
    d: "M33.8 0h68a4 4 0 0 1 4 4v93.3a4 4 0 0 1-4 4h-68a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    fill: detailColor,
    d: "M42.7 10h50.2a2 2 0 0 1 2 2v25a2 2 0 0 1-2 2H42.7a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2m.2 39.8h49.8a2.3 2.3 0 1 1 0 4.5H42.9a2.3 2.3 0 0 1 0-4.5m0 11.7h49.8a2.3 2.3 0 1 1 0 4.6H42.9a2.3 2.3 0 0 1 0-4.6m79 43.5a7 7 0 0 1-6.8 5.4H20.5a7 7 0 0 1-6.7-5.4l-.2-1.8V69.7h26.3c2.9 0 5.2 2.4 5.2 5.4s2.4 5.4 5.3 5.4h34.8c2.9 0 5.3-2.4 5.3-5.4s2.3-5.4 5.2-5.4H122v33.5q0 1-.2 1.8"
  })), /* @__PURE__ */ reactExports.createElement("path", {
    fill: detailColor,
    d: "m149.1 33.3-6.8 2.6a1 1 0 0 1-1.3-1.2l2-6.2q-4.1-4.5-4.2-10.4c0-10 10.1-18.1 22.6-18.1S184 8.1 184 18.1s-10.1 18-22.6 18q-6.8 0-12.3-2.8"
  }), /* @__PURE__ */ reactExports.createElement("g", {
    fill: iconColor,
    transform: "translate(149.7 15.4)"
  }, /* @__PURE__ */ reactExports.createElement("circle", {
    cx: "20.7",
    cy: "3.2",
    r: "2.8"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    d: "M5.7 5.6H0L2.9.7zM9.3.7h5v5h-5z"
  }))));
};
const Simple = () => {
  const [, token] = useToken();
  const [locale2] = useLocale("Empty");
  const {
    colorFill,
    colorFillTertiary,
    colorFillQuaternary,
    colorBgContainer
  } = token;
  const {
    borderColor,
    shadowColor,
    contentColor
  } = reactExports.useMemo(() => ({
    borderColor: getAsSolidColor(colorFill, colorBgContainer),
    shadowColor: getAsSolidColor(colorFillTertiary, colorBgContainer),
    contentColor: getAsSolidColor(colorFillQuaternary, colorBgContainer)
  }), [colorFill, colorFillTertiary, colorFillQuaternary, colorBgContainer]);
  return /* @__PURE__ */ reactExports.createElement("svg", {
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ reactExports.createElement("title", null, locale2?.description || "Empty"), /* @__PURE__ */ reactExports.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ reactExports.createElement("ellipse", {
    fill: shadowColor,
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /* @__PURE__ */ reactExports.createElement("g", {
    fillRule: "nonzero",
    stroke: borderColor
  }, /* @__PURE__ */ reactExports.createElement("path", {
    d: "M55 12.8 44.9 1.3Q44 0 42.9 0H21.1q-1.2 0-2 1.3L9 12.8V22h46z"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    d: "M41.6 16c0-1.7 1-3 2.2-3H55v18.1c0 2.2-1.3 3.9-3 3.9H12c-1.7 0-3-1.7-3-3.9V13h11.2c1.2 0 2.2 1.3 2.2 3s1 2.9 2.2 2.9h14.8c1.2 0 2.2-1.4 2.2-3",
    fill: contentColor
  }))));
};
const genSharedEmptyStyle = (token) => {
  const {
    componentCls,
    margin,
    marginXS,
    marginXL,
    fontSize,
    lineHeight
  } = token;
  return {
    [componentCls]: {
      marginInline: marginXS,
      fontSize,
      lineHeight,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的 hashId，改成父子结构
      [`${componentCls}-image`]: {
        height: token.emptyImgHeight,
        marginBottom: marginXS,
        opacity: token.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          maxWidth: "100%",
          height: "100%",
          margin: "auto"
        }
      },
      [`${componentCls}-description`]: {
        color: token.colorTextDescription
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的 hashId，改成父子结构
      [`${componentCls}-footer`]: {
        marginTop: margin
      },
      "&-normal": {
        marginBlock: marginXL,
        color: token.colorTextDescription,
        [`${componentCls}-description`]: {
          color: token.colorTextDescription
        },
        [`${componentCls}-image`]: {
          height: token.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: marginXS,
        color: token.colorTextDescription,
        [`${componentCls}-image`]: {
          height: token.emptyImgHeightSM
        }
      }
    }
  };
};
const useStyle$b = genStyleHooks("Empty", (token) => {
  const {
    componentCls,
    controlHeightLG,
    calc
  } = token;
  const emptyToken = merge$1(token, {
    emptyImgCls: `${componentCls}-img`,
    emptyImgHeight: calc(controlHeightLG).mul(2.5).equal(),
    emptyImgHeightMD: controlHeightLG,
    emptyImgHeightSM: calc(controlHeightLG).mul(0.875).equal()
  });
  return genSharedEmptyStyle(emptyToken);
});
const defaultEmptyImg = /* @__PURE__ */ reactExports.createElement(Empty$1, null);
const simpleEmptyImg = /* @__PURE__ */ reactExports.createElement(Simple, null);
const Empty = (props) => {
  const {
    className,
    rootClassName,
    prefixCls: customizePrefixCls,
    image,
    description,
    children,
    imageStyle,
    style,
    classNames,
    styles,
    ...restProps
  } = props;
  const {
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles,
    image: contextImage
  } = useComponentConfig("empty");
  const prefixCls = getPrefixCls("empty", customizePrefixCls);
  const [hashId, cssVarCls] = useStyle$b(prefixCls);
  const contextStyleRoot = useSemanticRootStyle(contextStyle);
  const styleRoot = useSemanticRootStyle(style);
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, contextStyleRoot, styles, styleRoot], {
    props
  });
  const [locale2] = useLocale("Empty");
  const des = typeof description !== "undefined" ? description : locale2?.description;
  const alt = typeof des === "string" ? des : "empty";
  const mergedImage = image ?? contextImage ?? defaultEmptyImg;
  let imageNode = null;
  if (typeof mergedImage === "string") {
    imageNode = /* @__PURE__ */ reactExports.createElement("img", {
      draggable: false,
      alt,
      src: mergedImage
    });
  } else {
    imageNode = mergedImage;
  }
  return /* @__PURE__ */ reactExports.createElement("div", {
    className: clsx(hashId, cssVarCls, prefixCls, contextClassName, {
      [`${prefixCls}-normal`]: mergedImage === simpleEmptyImg,
      [`${prefixCls}-rtl`]: direction === "rtl"
    }, className, rootClassName, mergedClassNames.root),
    style: mergedStyles.root,
    ...restProps
  }, /* @__PURE__ */ reactExports.createElement("div", {
    className: clsx(`${prefixCls}-image`, mergedClassNames.image),
    style: {
      ...imageStyle,
      ...mergedStyles.image
    }
  }, imageNode), des && /* @__PURE__ */ reactExports.createElement("div", {
    className: clsx(`${prefixCls}-description`, mergedClassNames.description),
    style: mergedStyles.description
  }, des), children && /* @__PURE__ */ reactExports.createElement("div", {
    className: clsx(`${prefixCls}-footer`, mergedClassNames.footer),
    style: mergedStyles.footer
  }, children));
};
Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
const DefaultRenderEmpty = (props) => {
  const {
    componentName
  } = props;
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefix = getPrefixCls("empty");
  switch (componentName) {
    case "Table":
    case "List":
      return /* @__PURE__ */ React.createElement(Empty, {
        image: Empty.PRESENTED_IMAGE_SIMPLE
      });
    case "Select":
    case "TreeSelect":
    case "Cascader":
    case "Transfer":
    case "Mentions":
      return /* @__PURE__ */ React.createElement(Empty, {
        image: Empty.PRESENTED_IMAGE_SIMPLE,
        className: `${prefix}-small`
      });
    /**
     * This type of component should satisfy the nullish coalescing operator(??) on the left-hand side.
     * to let the component itself implement the logic.
     * For example `Table.filter`.
     */
    case "Table.filter":
      return null;
    default:
      return /* @__PURE__ */ React.createElement(Empty, null);
  }
};
const useVariant = (component, variant, legacyBordered) => {
  const {
    variant: configVariant,
    [component]: componentConfig
  } = reactExports.useContext(ConfigContext);
  const ctxVariant = reactExports.useContext(VariantContext);
  const configComponentVariant = componentConfig?.variant;
  let mergedVariant;
  if (typeof variant !== "undefined") {
    mergedVariant = variant;
  } else if (legacyBordered === false) {
    mergedVariant = "borderless";
  } else {
    mergedVariant = ctxVariant ?? configComponentVariant ?? configVariant ?? "outlined";
  }
  const enableVariantCls = Variants.includes(mergedVariant);
  return [mergedVariant, enableVariantCls];
};
const getBuiltInPlacements = (popupOverflow) => {
  const htmlRegion = popupOverflow === "scroll" ? "scroll" : "visible";
  const sharedConfig = {
    overflow: {
      adjustX: true,
      adjustY: true,
      shiftY: true
    },
    htmlRegion,
    dynamicInset: true
  };
  return {
    bottomLeft: {
      ...sharedConfig,
      points: ["tl", "bl"],
      offset: [0, 4]
    },
    bottomRight: {
      ...sharedConfig,
      points: ["tr", "br"],
      offset: [0, 4]
    },
    topLeft: {
      ...sharedConfig,
      points: ["bl", "tl"],
      offset: [0, -4]
    },
    topRight: {
      ...sharedConfig,
      points: ["br", "tr"],
      offset: [0, -4]
    }
  };
};
function mergedBuiltinPlacements(buildInPlacements, popupOverflow) {
  return buildInPlacements || getBuiltInPlacements(popupOverflow);
}
const genItemStyle = (token) => {
  const {
    optionHeight,
    optionFontSize,
    optionLineHeight,
    optionPadding
  } = token;
  return {
    position: "relative",
    display: "block",
    minHeight: optionHeight,
    padding: optionPadding,
    color: token.colorText,
    fontWeight: "normal",
    fontSize: optionFontSize,
    lineHeight: optionLineHeight,
    boxSizing: "border-box"
  };
};
const genSingleStyle = (token) => {
  const {
    antCls,
    componentCls
  } = token;
  const selectItemCls = `${componentCls}-item`;
  const slideUpEnterActive = `&${antCls}-slide-up-enter${antCls}-slide-up-enter-active`;
  const slideUpAppearActive = `&${antCls}-slide-up-appear${antCls}-slide-up-appear-active`;
  const slideUpLeaveActive = `&${antCls}-slide-up-leave${antCls}-slide-up-leave-active`;
  const dropdownPlacementCls = `${componentCls}-dropdown-placement-`;
  const selectedItemCls = `${selectItemCls}-option-selected`;
  return [
    {
      [`${componentCls}-dropdown`]: {
        // ========================== Popup ==========================
        ...resetComponent(token),
        position: "absolute",
        top: -9999,
        zIndex: token.zIndexPopup,
        boxSizing: "border-box",
        padding: token.paddingXXS,
        overflow: "hidden",
        fontSize: token.fontSize,
        // Fix select render lag of long text in chrome
        // https://github.com/ant-design/ant-design/issues/11456
        // https://github.com/ant-design/ant-design/issues/11843
        fontVariant: "initial",
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        outline: "none",
        boxShadow: token.boxShadowSecondary,
        [`
          ${slideUpEnterActive}${dropdownPlacementCls}bottomLeft,
          ${slideUpAppearActive}${dropdownPlacementCls}bottomLeft
        `]: {
          animationName: slideUpIn
        },
        [`
          ${slideUpEnterActive}${dropdownPlacementCls}topLeft,
          ${slideUpAppearActive}${dropdownPlacementCls}topLeft,
          ${slideUpEnterActive}${dropdownPlacementCls}topRight,
          ${slideUpAppearActive}${dropdownPlacementCls}topRight
        `]: {
          animationName: slideDownIn
        },
        [`${slideUpLeaveActive}${dropdownPlacementCls}bottomLeft`]: {
          animationName: slideUpOut
        },
        [`
          ${slideUpLeaveActive}${dropdownPlacementCls}topLeft,
          ${slideUpLeaveActive}${dropdownPlacementCls}topRight
        `]: {
          animationName: slideDownOut
        },
        "&-hidden": {
          display: "none"
        },
        [selectItemCls]: {
          ...genItemStyle(token),
          cursor: "pointer",
          transition: `background-color ${token.motionDurationSlow} ease`,
          borderRadius: token.borderRadiusSM,
          // =========== Group ============
          "&-group": {
            color: token.colorTextDescription,
            fontSize: token.fontSizeSM,
            cursor: "default"
          },
          // =========== Option ===========
          "&-option": {
            display: "flex",
            "&-content": {
              flex: "auto",
              ...textEllipsis
            },
            "&-state": {
              flex: "none",
              display: "flex",
              alignItems: "center"
            },
            [`&-selected:not(${selectItemCls}-option-disabled)`]: {
              color: token.optionSelectedColor,
              fontWeight: token.optionSelectedFontWeight,
              backgroundColor: token.optionSelectedBg,
              [`${selectItemCls}-option-state`]: {
                color: token.colorPrimary
              }
            },
            [`&-active:not(${selectItemCls}-option-disabled)`]: {
              backgroundColor: token.optionActiveBg
            },
            [`&-selected${selectItemCls}-option-active:not(${selectItemCls}-option-disabled)`]: {
              backgroundColor: token.controlItemBgActiveHover
            },
            "&-disabled": {
              [`&${selectItemCls}-option-selected`]: {
                backgroundColor: token.colorBgContainerDisabled
              },
              color: token.colorTextDisabled,
              cursor: "not-allowed"
            },
            "&-grouped": {
              paddingInlineStart: token.calc(token.controlPaddingHorizontal).mul(2).equal()
            }
          },
          "&-empty": {
            ...genItemStyle(token),
            color: token.colorTextDisabled
          }
        },
        // https://github.com/ant-design/ant-design/pull/46646
        [`${selectedItemCls}:has(+ ${selectedItemCls})`]: {
          borderEndStartRadius: 0,
          borderEndEndRadius: 0,
          [`& + ${selectedItemCls}`]: {
            borderStartStartRadius: 0,
            borderStartEndRadius: 0
          }
        },
        // =========================== RTL ===========================
        "&-rtl": {
          direction: "rtl"
        }
      }
    },
    // Follow code may reuse in other components
    initSlideMotion(token, "slide-up"),
    initSlideMotion(token, "slide-down"),
    initMoveMotion(token, "move-up"),
    initMoveMotion(token, "move-down")
  ];
};
const genSelectInputCustomizeStyle = (token) => {
  const {
    antCls,
    componentCls
  } = token;
  const transparentBackground = {
    background: "transparent"
  };
  const disabledCustomizedInputSelector = ["> input[disabled]", "> textarea[disabled]", `> ${componentCls}-input`, `> ${antCls}-input-affix-wrapper-disabled`, `> ${antCls}-input-search`].join(", ");
  return {
    [`&${componentCls}-customize`]: {
      border: 0,
      padding: 0,
      fontSize: "inherit",
      lineHeight: "inherit",
      [`${componentCls}-placeholder`]: {
        display: "none"
      },
      [`${componentCls}-content`]: {
        margin: 0,
        padding: 0,
        "&-value": {
          display: "none"
        }
      },
      [`&${componentCls}-disabled ${componentCls}-content`]: {
        [disabledCustomizedInputSelector]: transparentBackground,
        "input[disabled], textarea[disabled]": transparentBackground
      }
    }
  };
};
const FIXED_INPUT_MIN_WIDTH = 4;
const genSelectInputMultipleStyle = (token) => {
  const {
    componentCls,
    calc,
    iconCls,
    paddingXS,
    paddingXXS,
    INTERNAL_FIXED_ITEM_MARGIN,
    lineWidth,
    colorIcon,
    colorIconHover,
    inputPaddingHorizontalBase,
    antCls
  } = token;
  const [varName, varRef] = genCssVar(antCls, "select");
  return {
    "&-multiple": {
      [varName("multi-item-background")]: token.multipleItemBg,
      [varName("multi-item-border-color")]: "transparent",
      [varName("multi-item-border-radius")]: token.borderRadiusSM,
      [varName("multi-item-height")]: token.multipleItemHeight,
      [varName("multi-padding-base")]: `calc((${varRef("height")} - ${varRef("multi-item-height")}) / 2)`,
      [varName("multi-padding-vertical")]: `calc(${varRef("multi-padding-base")} - ${INTERNAL_FIXED_ITEM_MARGIN} - ${lineWidth})`,
      [varName("multi-item-padding-horizontal")]: `calc(${inputPaddingHorizontalBase} - ${varRef("multi-padding-vertical")} - ${lineWidth} * 2)`,
      // ========================================================
      // ==                        Base                        ==
      // ========================================================
      // ========================= Root =========================
      paddingBlock: varRef("multi-padding-vertical"),
      paddingInlineStart: `calc(${varRef("multi-padding-base")} - ${lineWidth})`,
      // ======================== Prefix ========================
      [`${componentCls}-prefix`]: {
        marginInlineStart: varRef("multi-item-padding-horizontal")
      },
      [`${componentCls}-prefix + ${componentCls}-content`]: {
        [`${componentCls}-placeholder`]: {
          insetInlineStart: 0
        },
        [`${componentCls}-content-item${componentCls}-content-item-suffix`]: {
          marginInlineStart: 0
        }
      },
      // ===================== Placeholder ======================
      [`${componentCls}-placeholder`]: {
        position: "absolute",
        lineHeight: varRef("line-height"),
        insetInlineStart: varRef("multi-item-padding-horizontal"),
        width: `calc(100% - ${varRef("multi-item-padding-horizontal")})`,
        top: "50%",
        transform: "translateY(-50%)"
      },
      // ======================= Content ========================
      [`${componentCls}-content`]: {
        flexWrap: "wrap",
        alignItems: "center",
        lineHeight: 1,
        "&-item-prefix": {
          height: varRef("font-size")
        },
        "&-item": {
          lineHeight: 1,
          maxWidth: `calc(100% - ${FIXED_INPUT_MIN_WIDTH}px)`
        },
        [`${componentCls}-content-item-prefix + ${componentCls}-content-item-suffix,
          ${componentCls}-content-item-suffix:first-child`]: {
          marginInlineStart: varRef("multi-item-padding-horizontal")
        },
        [`${componentCls}-selection-item`]: {
          lineHeight: `calc(${varRef("multi-item-height")} - ${lineWidth} * 2)`,
          border: `${lineWidth} solid ${varRef("multi-item-border-color")}`,
          display: "flex",
          marginBlock: INTERNAL_FIXED_ITEM_MARGIN,
          marginInlineEnd: calc(INTERNAL_FIXED_ITEM_MARGIN).mul(2).equal(),
          background: varRef("multi-item-background"),
          borderRadius: varRef("multi-item-border-radius"),
          paddingInlineStart: paddingXS,
          paddingInlineEnd: paddingXXS,
          transition: ["height", "line-height", "padding"].map((key) => `${key} ${token.motionDurationSlow}`).join(","),
          // >>> Content
          "&-content": {
            ...textEllipsis,
            marginInlineEnd: paddingXXS
          },
          // >>> Remove
          "&-remove": {
            ...resetIcon(),
            display: "inline-flex",
            alignItems: "center",
            color: colorIcon,
            fontWeight: "bold",
            fontSize: 10,
            lineHeight: "inherit",
            cursor: "pointer",
            [`> ${iconCls}`]: {
              verticalAlign: "-0.2em"
            },
            "&:hover": {
              color: colorIconHover
            }
          }
        },
        [`${componentCls}-input`]: {
          lineHeight: calc(INTERNAL_FIXED_ITEM_MARGIN).mul(2).add(varRef("multi-item-height")).equal(),
          width: `calc(var(--select-input-width, 0) * 1px)`,
          minWidth: FIXED_INPUT_MIN_WIDTH,
          maxWidth: "100%",
          transition: `line-height ${token.motionDurationSlow}`
        }
      },
      // ========================================================
      // ==                        Size                        ==
      // ========================================================
      [`&${componentCls}-sm`]: {
        [varName("multi-item-height")]: token.multipleItemHeightSM,
        [varName("multi-item-border-radius")]: token.borderRadiusXS
      },
      [`&${componentCls}-lg`]: {
        [varName("multi-item-height")]: token.multipleItemHeightLG,
        [varName("multi-item-border-radius")]: token.borderRadius
      },
      // ========================================================
      // ==                      Variants                      ==
      // ========================================================
      [`&${componentCls}-filled`]: {
        [varName("multi-item-border-color")]: token.colorSplit,
        [varName("multi-item-background")]: token.colorBgContainer,
        [`&${componentCls}-disabled`]: {
          [varName("multi-item-border-color")]: "transparent"
        }
      }
    }
  };
};
const genSelectInputVariableStyle = (token, colors) => {
  const {
    componentCls,
    antCls
  } = token;
  const [varName] = genCssVar(antCls, "select");
  const {
    border,
    borderHover,
    borderActive,
    borderOutline
  } = colors;
  const baseBG = colors.background || token.selectorBg || token.colorBgContainer;
  return {
    [varName("border-color")]: border,
    [varName("background-color")]: baseBG,
    [varName("affix-color")]: colors.affixColor,
    [`&:not(${componentCls}-disabled)`]: {
      "&:hover": {
        [varName("border-color")]: borderHover,
        [varName("background-color")]: colors.backgroundHover || baseBG
      },
      [`&${componentCls}-focused`]: {
        [varName("border-color")]: borderActive,
        [varName("background-color")]: colors.backgroundActive || baseBG,
        boxShadow: `0 0 0 ${unit(token.controlOutlineWidth)} ${borderOutline}`
      }
    },
    [`&${componentCls}-disabled`]: {
      [varName("border-color")]: colors.borderDisabled || colors.border,
      [varName("background-color")]: colors.backgroundDisabled || colors.background
    }
  };
};
const genSelectInputVariantStyle = (token, variant, colors, errorColors, warningColors, patchStyle) => {
  const {
    componentCls
  } = token;
  return {
    [`&${componentCls}-${variant}`]: [genSelectInputVariableStyle(token, colors), {
      [`&${componentCls}-status-error`]: genSelectInputVariableStyle(token, {
        ...colors,
        ...errorColors
      }),
      [`&${componentCls}-status-warning`]: genSelectInputVariableStyle(token, {
        ...colors,
        ...warningColors
      })
    }, patchStyle]
  };
};
const genSelectInputFocusVisibleStyle = (token, outlineColor) => ({
  outline: `${unit(token.lineWidth)} ${token.lineType} ${outlineColor}`,
  outlineOffset: unit(token.calc(token.lineWidth).mul(-1).equal()),
  transition: [`outline-offset`, `outline`].map((prop) => `${prop} 0s`).join(", ")
});
const genSelectInputStyle = (token) => {
  const {
    componentCls,
    fontHeight,
    controlHeight,
    fontSizeIcon,
    showArrowPaddingInlineEnd,
    iconCls,
    antCls,
    max,
    calc
  } = token;
  const [varName, varRef] = genCssVar(antCls, "select");
  const contentMarginInlineEnd = max(calc(showArrowPaddingInlineEnd).sub(fontSizeIcon).equal(), 0);
  return {
    [componentCls]: [
      {
        // Border
        [varName("border-radius")]: token.borderRadius,
        [varName("border-color")]: "#000",
        [varName("border-size")]: token.lineWidth,
        // Background
        [varName("background-color")]: token.colorBgContainer,
        // Font
        [varName("font-size")]: token.fontSize,
        [varName("line-height")]: token.lineHeight,
        [varName("font-height")]: fontHeight,
        [varName("color")]: token.colorText,
        [varName("affix-color")]: token.colorText,
        // Size
        [varName("height")]: controlHeight,
        [varName("padding-horizontal")]: calc(token.paddingSM).sub(token.lineWidth).equal(),
        [varName("padding-vertical")]: `calc((${varRef("height")} - ${varRef("font-height")}) / 2 - ${varRef("border-size")})`,
        // ==========================================================
        // ==                         Base                         ==
        // ==========================================================
        ...resetComponent(token),
        display: "inline-flex",
        // gap: calc(token.paddingXXS).mul(1.5).equal(),
        flexWrap: "nowrap",
        position: "relative",
        transition: `all ${token.motionDurationSlow}`,
        alignItems: "flex-start",
        outline: 0,
        cursor: "pointer",
        // Border
        borderRadius: varRef("border-radius"),
        borderWidth: varRef("border-size"),
        borderStyle: token.lineType,
        borderColor: varRef("border-color"),
        // Background
        background: varRef("background-color"),
        // Font
        fontSize: varRef("font-size"),
        lineHeight: varRef("line-height"),
        color: varRef("color"),
        // Padding
        paddingInline: varRef("padding-horizontal"),
        paddingBlock: varRef("padding-vertical"),
        // ========================= Prefix =========================
        [`${componentCls}-prefix`]: {
          color: varRef("affix-color"),
          flex: "none",
          lineHeight: 1
        },
        // ====================== Placeholder =======================
        [`${componentCls}-placeholder`]: {
          ...textEllipsis,
          color: token.colorTextPlaceholder,
          pointerEvents: "none",
          zIndex: 1
        },
        // ======================== Content =========================
        [`${componentCls}-content`]: {
          flex: "auto",
          minWidth: 0,
          position: "relative",
          display: "flex",
          marginInlineEnd: contentMarginInlineEnd,
          "&:before": {
            content: '"\\a0"',
            width: 0,
            overflow: "hidden"
          },
          // >>> Value
          "&-value": {
            visibility: "inherit"
          },
          // >>> Input: should only take effect for not customize mode
          // input element with readOnly use cursor pointer
          "input[readonly]": {
            cursor: "inherit",
            caretColor: "transparent"
          }
        },
        // ========================= Suffix =========================
        [`${componentCls}-suffix`]: {
          flex: "none",
          color: token.colorTextQuaternary,
          fontSize: token.fontSizeIcon,
          lineHeight: 1,
          "> :not(:last-child)": {
            marginInlineEnd: token.marginXS
          }
        },
        [`${componentCls}-prefix, ${componentCls}-suffix`]: {
          alignSelf: "center",
          [iconCls]: {
            verticalAlign: "top"
          }
        },
        // ==========================================================
        // ==                       Disabled                       ==
        // ==========================================================
        "&-disabled": {
          background: token.colorBgContainerDisabled,
          color: token.colorTextDisabled,
          cursor: "not-allowed",
          input: {
            cursor: "not-allowed"
          }
        },
        // ==========================================================
        // ==                         Size                         ==
        // ==========================================================
        "&-sm": {
          [varName("height")]: token.controlHeightSM,
          [varName("padding-horizontal")]: calc(token.paddingXS).sub(token.lineWidth).equal(),
          [varName("border-radius")]: token.borderRadiusSM,
          [`${componentCls}-clear`]: {
            insetInlineEnd: varRef("padding-horizontal")
          }
        },
        "&-lg": {
          [varName("height")]: token.controlHeightLG,
          [varName("font-size")]: token.fontSizeLG,
          [varName("line-height")]: token.lineHeightLG,
          [varName("font-height")]: token.fontHeightLG,
          [varName("border-radius")]: token.borderRadiusLG
        }
      },
      // ============================================================
      // ==                         Input                          ==
      // ============================================================
      {
        [`&:not(${componentCls}-customize)`]: {
          [`${componentCls}-input`]: {
            outline: "none",
            background: "transparent",
            appearance: "none",
            border: 0,
            margin: 0,
            padding: 0,
            color: varRef("color"),
            fontFamily: "inherit",
            fontSize: "inherit",
            "&::-webkit-search-cancel-button": {
              display: "none",
              appearance: "none"
            }
          }
        }
      },
      // ============================================================
      // ==                         Single                         ==
      // ============================================================
      {
        [`&-single:not(${componentCls}-customize)`]: {
          [`${componentCls}-input`]: {
            position: "absolute",
            inset: 0,
            lineHeight: "inherit"
          },
          // Content center align
          [`${componentCls}-content`]: {
            ...textEllipsis,
            alignSelf: "center",
            "&-has-value": {
              display: "block",
              "&:before": {
                display: "none"
              }
            },
            "&-has-search-value": {
              color: "transparent",
              [`> *:not(${componentCls}-input)`]: {
                opacity: 0
              }
            },
            // >>> Value
            "&-value": {
              transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
              zIndex: 1,
              opacity: 1
            }
          },
          // Dim the selected content while the dropdown is open. Shared by all select-like
          // components (Select / Cascader / TreeSelect) since they render through the same
          // `content` structure.
          [`&${componentCls}-open ${componentCls}-content`]: {
            "&-has-value": {
              opacity: 0.25
            },
            "&-has-search-value": {
              opacity: 1,
              transition: `opacity ${token.motionDurationMid} ${token.motionEaseInOut}`,
              color: "transparent",
              [`> *:not(${componentCls}-input)`]: {
                opacity: 0
              }
            }
          }
        }
      },
      // ======================== Show Search =======================
      {
        [`&-show-search:not(${componentCls}-customize-input):not(${componentCls}-disabled)`]: {
          cursor: "text"
        }
      },
      // ============================================================
      // ==                        Multiple                        ==
      // ============================================================
      genSelectInputMultipleStyle(token),
      // ========================= Variant ==========================
      // >>> Outlined
      genSelectInputVariantStyle(
        token,
        "outlined",
        {
          border: token.colorBorder,
          borderHover: token.hoverBorderColor,
          borderActive: token.activeBorderColor,
          borderOutline: token.activeOutlineColor,
          borderDisabled: token.colorBorderDisabled
        },
        // Error
        {
          border: token.colorError,
          borderHover: token.colorErrorBorderHover,
          borderActive: token.colorError,
          borderOutline: token.colorErrorOutline,
          affixColor: token.colorErrorAffix
        },
        // Warning
        {
          border: token.colorWarning,
          borderHover: token.colorWarningHover,
          borderActive: token.colorWarning,
          borderOutline: token.colorWarningOutline,
          affixColor: token.colorWarningAffix
        }
      ),
      // >>> Filled
      genSelectInputVariantStyle(
        token,
        "filled",
        {
          border: "transparent",
          borderHover: "transparent",
          borderActive: token.activeBorderColor,
          borderOutline: "transparent",
          borderDisabled: token.colorBorderDisabled,
          background: token.colorFillTertiary,
          backgroundHover: token.colorFillSecondary,
          backgroundActive: token.colorBgContainer
        },
        // Error
        {
          color: token.colorErrorText,
          background: token.colorErrorBg,
          backgroundHover: token.colorErrorBgHover,
          borderActive: token.colorError
        },
        // Warning
        {
          background: token.colorWarningBg,
          backgroundHover: token.colorWarningBgHover,
          borderActive: token.colorWarning
        }
      ),
      // >>> Borderless
      genSelectInputVariantStyle(token, "borderless", {
        border: "transparent",
        borderHover: "transparent",
        borderActive: "transparent",
        borderOutline: "transparent",
        background: "transparent"
      }, {}, {}, {
        [`&:not(${componentCls}-disabled):has(input:focus-visible), &:not(${componentCls}-disabled):has(textarea:focus-visible)`]: genSelectInputFocusVisibleStyle(token, token.activeBorderColor),
        [`&${componentCls}-status-error:not(${componentCls}-disabled):has(input:focus-visible), &${componentCls}-status-error:not(${componentCls}-disabled):has(textarea:focus-visible)`]: genSelectInputFocusVisibleStyle(token, token.colorError),
        [`&${componentCls}-status-warning:not(${componentCls}-disabled):has(input:focus-visible), &${componentCls}-status-warning:not(${componentCls}-disabled):has(textarea:focus-visible)`]: genSelectInputFocusVisibleStyle(token, token.colorWarning)
      }),
      // Underlined
      genSelectInputVariantStyle(
        token,
        "underlined",
        {
          border: token.colorBorder,
          borderHover: token.hoverBorderColor,
          borderActive: token.activeBorderColor,
          borderOutline: "transparent"
        },
        // Error
        {
          border: token.colorError,
          borderHover: token.colorErrorBorderHover,
          borderActive: token.colorError
        },
        // Warning
        {
          border: token.colorWarning,
          borderHover: token.colorWarningHover,
          borderActive: token.colorWarning
        },
        {
          borderRadius: 0,
          borderTopColor: "transparent",
          borderInlineColor: "transparent"
        }
      ),
      // ============================================================
      // ==                         Custom                         ==
      // ============================================================
      genSelectInputCustomizeStyle(token)
    ]
  };
};
const prepareComponentToken$5 = (token) => {
  const {
    fontSize,
    lineHeight,
    lineWidth,
    controlHeight,
    controlHeightSM,
    controlHeightLG,
    paddingXXS,
    controlPaddingHorizontal,
    zIndexPopupBase,
    colorText,
    fontWeightStrong,
    controlItemBgActive,
    controlItemBgHover,
    colorBgContainer,
    colorFillSecondary,
    colorBgContainerDisabled,
    colorTextDisabled,
    colorPrimaryHover,
    colorPrimary,
    controlOutline
  } = token;
  const dblPaddingXXS = paddingXXS * 2;
  const dblLineWidth = lineWidth * 2;
  const multipleItemHeight = Math.min(controlHeight - dblPaddingXXS, controlHeight - dblLineWidth);
  const multipleItemHeightSM = Math.min(controlHeightSM - dblPaddingXXS, controlHeightSM - dblLineWidth);
  const multipleItemHeightLG = Math.min(controlHeightLG - dblPaddingXXS, controlHeightLG - dblLineWidth);
  const INTERNAL_FIXED_ITEM_MARGIN = Math.floor(paddingXXS / 2);
  return {
    INTERNAL_FIXED_ITEM_MARGIN,
    zIndexPopup: zIndexPopupBase + 50,
    optionSelectedColor: colorText,
    optionSelectedFontWeight: fontWeightStrong,
    optionSelectedBg: controlItemBgActive,
    optionActiveBg: controlItemBgHover,
    optionPadding: `${(controlHeight - fontSize * lineHeight) / 2}px ${controlPaddingHorizontal}px`,
    optionFontSize: fontSize,
    optionLineHeight: lineHeight,
    optionHeight: controlHeight,
    selectorBg: colorBgContainer,
    clearBg: colorBgContainer,
    singleItemHeightLG: controlHeightLG,
    multipleItemBg: colorFillSecondary,
    multipleItemBorderColor: "transparent",
    multipleItemHeight,
    multipleItemHeightSM,
    multipleItemHeightLG,
    multipleSelectorBgDisabled: colorBgContainerDisabled,
    multipleItemColorDisabled: colorTextDisabled,
    multipleItemBorderColorDisabled: "transparent",
    showArrowPaddingInlineEnd: Math.ceil(token.fontSize * 1.25),
    hoverBorderColor: colorPrimaryHover,
    activeBorderColor: colorPrimary,
    activeOutlineColor: controlOutline,
    selectAffixPadding: paddingXXS
  };
};
const genBaseStyle$2 = (token) => {
  const {
    antCls,
    componentCls,
    motionDurationMid,
    inputPaddingHorizontalBase
  } = token;
  const hoverShowClearStyle = {
    [`${componentCls}-clear`]: {
      opacity: 1,
      background: token.colorBgBase,
      borderRadius: "50%"
    }
  };
  return {
    [componentCls]: {
      ...resetComponent(token),
      // ======================== Selection ========================
      [`${componentCls}-selection-item`]: {
        flex: 1,
        fontWeight: "normal",
        position: "relative",
        userSelect: "none",
        ...textEllipsis,
        // https://github.com/ant-design/ant-design/issues/40421
        [`> ${antCls}-typography`]: {
          display: "inline"
        }
      },
      // ========================= Prefix ==========================
      [`${componentCls}-prefix`]: {
        flex: "none",
        marginInlineEnd: token.selectAffixPadding
      },
      // ========================== Clear ==========================
      [`${componentCls}-clear`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: inputPaddingHorizontalBase,
        zIndex: 1,
        display: "inline-block",
        width: token.fontSizeIcon,
        height: token.fontSizeIcon,
        marginTop: token.calc(token.fontSizeIcon).mul(-1).div(2).equal(),
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        cursor: "pointer",
        opacity: 0,
        transition: ["color", "opacity"].map((prop) => `${prop} ${motionDurationMid} ease`).join(", "),
        textRendering: "auto",
        // https://github.com/ant-design/ant-design/issues/54205
        // Force GPU compositing on Safari to prevent flickering on opacity/transform transitions
        transform: "translateZ(0)",
        "&:before": {
          display: "block"
        },
        "&:hover": {
          color: token.colorIcon
        }
      },
      "@media(hover:none)": hoverShowClearStyle,
      "&:hover": hoverShowClearStyle
    },
    // ========================= Feedback ==========================
    [`${componentCls}-status`]: {
      "&-error, &-warning, &-success, &-validating": {
        [`&${componentCls}-has-feedback`]: {
          [`${componentCls}-clear`]: {
            insetInlineEnd: token.calc(inputPaddingHorizontalBase).add(token.fontSize).add(token.paddingXS).equal()
          }
        }
      }
    }
  };
};
const genSelectStyle = (token) => {
  const {
    componentCls
  } = token;
  return [
    {
      [componentCls]: {
        // ==================== In Form ====================
        [`&${componentCls}-in-form-item`]: {
          width: "100%"
        }
      }
    },
    // =====================================================
    // ==                       LTR                       ==
    // =====================================================
    // Base
    genBaseStyle$2(token),
    // Dropdown
    genSingleStyle(token),
    // =====================================================
    // ==                       RTL                       ==
    // =====================================================
    {
      [`${componentCls}-rtl`]: {
        direction: "rtl"
      }
    },
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    genCompactItemStyle(token, {
      focusElCls: `${componentCls}-focused`
    })
  ];
};
const useSelectStyle = genStyleHooks("Select", (token, {
  rootPrefixCls
}) => {
  const selectToken = merge$1(token, {
    rootPrefixCls,
    inputPaddingHorizontalBase: token.calc(token.paddingSM).sub(token.lineWidth).equal(),
    multipleSelectItemHeight: token.multipleItemHeight,
    selectHeight: token.controlHeight
  });
  return [genSelectStyle(selectToken), genSelectInputStyle(selectToken)];
}, prepareComponentToken$5, {
  unitless: {
    optionLineHeight: true,
    optionSelectedFontWeight: true
  }
});
function useIcons({
  suffixIcon,
  contextSuffixIcon,
  clearIcon,
  contextClearIcon,
  menuItemSelectedIcon,
  contextMenuItemSelectedIcon,
  removeIcon,
  contextRemoveIcon,
  loading,
  loadingIcon,
  contextLoadingIcon,
  searchIcon,
  contextSearchIcon,
  multiple,
  hasFeedback,
  showSuffixIcon,
  feedbackIcon,
  showArrow,
  componentName
}) {
  return reactExports.useMemo(() => {
    const mergedClearIcon = fallbackProp(clearIcon, contextClearIcon, /* @__PURE__ */ reactExports.createElement(RefIcon, null));
    const getSuffixIconNode = (arrowIcon) => {
      if (suffixIcon === null && !hasFeedback && !showArrow) {
        return null;
      }
      return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, showSuffixIcon !== false && arrowIcon, hasFeedback && feedbackIcon);
    };
    let mergedSuffixIcon = null;
    if (suffixIcon !== void 0) {
      mergedSuffixIcon = getSuffixIconNode(suffixIcon);
    } else if (loading) {
      mergedSuffixIcon = getSuffixIconNode(fallbackProp(loadingIcon, contextLoadingIcon, /* @__PURE__ */ reactExports.createElement(RefIcon$2, {
        spin: true
      })));
    } else {
      mergedSuffixIcon = ({
        open,
        showSearch
      }) => {
        if (open && showSearch) {
          return getSuffixIconNode(fallbackProp(searchIcon, contextSearchIcon, /* @__PURE__ */ reactExports.createElement(RefIcon$7, null)));
        }
        return getSuffixIconNode(fallbackProp(contextSuffixIcon, /* @__PURE__ */ reactExports.createElement(RefIcon$8, null)));
      };
    }
    const mergedItemIcon = fallbackProp(menuItemSelectedIcon, contextMenuItemSelectedIcon, multiple ? /* @__PURE__ */ reactExports.createElement(RefIcon$6, null) : null);
    const mergedRemoveIcon = fallbackProp(removeIcon, contextRemoveIcon, /* @__PURE__ */ reactExports.createElement(RefIcon$1, null));
    return {
      clearIcon: mergedClearIcon,
      suffixIcon: mergedSuffixIcon,
      itemIcon: mergedItemIcon,
      removeIcon: mergedRemoveIcon
    };
  }, [suffixIcon, contextSuffixIcon, clearIcon, contextClearIcon, menuItemSelectedIcon, contextMenuItemSelectedIcon, removeIcon, contextRemoveIcon, loading, loadingIcon, contextLoadingIcon, searchIcon, contextSearchIcon, multiple, hasFeedback, showSuffixIcon, feedbackIcon, showArrow]);
}
function usePopupRender(renderFn) {
  return React.useMemo(() => {
    if (!renderFn) {
      return void 0;
    }
    return (...args) => /* @__PURE__ */ React.createElement(ContextIsolator, {
      space: true
    }, renderFn.apply(void 0, args));
  }, [renderFn]);
}
function useShowArrow(suffixIcon, showArrow) {
  return showArrow !== void 0 ? showArrow : suffixIcon !== null;
}
const SECRET_COMBOBOX_MODE_DO_NOT_USE = "SECRET_COMBOBOX_MODE_DO_NOT_USE";
const InternalSelect = (props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    bordered,
    className,
    rootClassName,
    getPopupContainer,
    popupClassName,
    dropdownClassName,
    listHeight = 256,
    placement,
    listItemHeight: customListItemHeight,
    size: customizeSize,
    disabled: customDisabled,
    notFoundContent,
    status: customStatus,
    builtinPlacements,
    dropdownMatchSelectWidth,
    popupMatchSelectWidth,
    direction: propDirection,
    style,
    allowClear,
    variant: customizeVariant,
    popupStyle,
    dropdownStyle,
    transitionName,
    tagRender,
    maxCount,
    prefix,
    dropdownRender,
    /**
     * @since 5.25.0
     */
    popupRender,
    onDropdownVisibleChange,
    onOpenChange,
    styles,
    classNames,
    clearIcon,
    showSearch,
    ...rest
  } = props;
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    renderEmpty,
    direction: contextDirection,
    virtual,
    popupMatchSelectWidth: contextPopupMatchSelectWidth,
    popupOverflow
  } = reactExports.useContext(ConfigContext);
  const {
    showSearch: contextShowSearch,
    allowClear: contextAllowClear,
    style: contextStyle,
    styles: contextStyles,
    className: contextClassName,
    classNames: contextClassNames,
    clearIcon: contextClearIcon,
    loadingIcon: contextLoadingIcon,
    menuItemSelectedIcon: contextMenuItemSelectedIcon,
    removeIcon: contextRemoveIcon,
    suffixIcon: contextSuffixIcon
  } = useComponentConfig("select");
  const [, token] = useToken();
  const listItemHeight = customListItemHeight ?? token?.controlHeight;
  const prefixCls = getPrefixCls("select", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const direction = propDirection ?? contextDirection;
  const {
    compactSize,
    compactItemClassnames
  } = useCompactItemContext(prefixCls, direction);
  const [variant, enableVariantCls] = useVariant("select", customizeVariant, bordered);
  const rootCls = useCSSVarCls(prefixCls);
  const [hashId, cssVarCls] = useSelectStyle(prefixCls, rootCls);
  const mode = reactExports.useMemo(() => {
    const {
      mode: m
    } = props;
    if (m === "combobox") {
      return void 0;
    }
    if (m === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
      return "combobox";
    }
    return m;
  }, [props.mode]);
  const isMultiple = mode === "multiple" || mode === "tags";
  const showSuffixIcon = useShowArrow(props.suffixIcon, props.showArrow);
  const mergedPopupMatchSelectWidth = popupMatchSelectWidth ?? dropdownMatchSelectWidth ?? contextPopupMatchSelectWidth;
  const mergedPopupRender = usePopupRender(popupRender || dropdownRender);
  const mergedOnOpenChange = onOpenChange || onDropdownVisibleChange;
  const {
    status: contextStatus,
    hasFeedback,
    isFormItemInput,
    feedbackIcon
  } = reactExports.useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  let mergedNotFound;
  if (notFoundContent !== void 0) {
    mergedNotFound = notFoundContent;
  } else if (mode === "combobox") {
    mergedNotFound = null;
  } else {
    mergedNotFound = renderEmpty?.("Select") || /* @__PURE__ */ reactExports.createElement(DefaultRenderEmpty, {
      componentName: "Select"
    });
  }
  const {
    suffixIcon,
    itemIcon,
    removeIcon,
    clearIcon: mergedClearIcon
  } = useIcons({
    ...rest,
    multiple: isMultiple,
    hasFeedback,
    feedbackIcon,
    showSuffixIcon,
    componentName: "Select",
    clearIcon,
    searchIcon: normalizeIcon(showSearch, "searchIcon"),
    contextClearIcon,
    contextLoadingIcon,
    contextMenuItemSelectedIcon,
    contextRemoveIcon,
    contextSearchIcon: normalizeIcon(contextShowSearch, "searchIcon"),
    contextSuffixIcon
  });
  const finalAllowClear = allowClear ?? contextAllowClear;
  const mergedAllowClear = finalAllowClear === true ? {
    clearIcon: mergedClearIcon
  } : finalAllowClear;
  const mergedShowSearch = showSearch ?? contextShowSearch;
  const selectProps = omit(rest, ["suffixIcon", "itemIcon"]);
  const mergedSize = useSize((ctx) => customizeSize ?? compactSize ?? ctx);
  const disabled = reactExports.useContext(DisabledContext);
  const mergedDisabled = customDisabled ?? disabled;
  const mergedProps = {
    ...props,
    variant,
    status: mergedStatus,
    disabled: mergedDisabled,
    size: mergedSize
  };
  const contextStyleRoot = useSemanticRootStyle(contextStyle);
  const styleRoot = useSemanticRootStyle(style);
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, contextStyleRoot, styles, styleRoot], {
    props: mergedProps
  }, {
    popup: {
      _default: "root"
    }
  });
  const mergedPopupClassName = clsx(mergedClassNames.popup.root, popupClassName, dropdownClassName, {
    [`${prefixCls}-dropdown-${direction}`]: direction === "rtl"
  }, rootClassName, cssVarCls, rootCls, hashId);
  const mergedPopupStyle = {
    ...mergedStyles.popup?.root,
    ...popupStyle ?? dropdownStyle
  };
  const mergedClassName = clsx({
    [`${prefixCls}-lg`]: mergedSize === "large",
    [`${prefixCls}-sm`]: mergedSize === "small",
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-${variant}`]: enableVariantCls,
    [`${prefixCls}-in-form-item`]: isFormItemInput
  }, getStatusClassNames(prefixCls, mergedStatus, hasFeedback), compactItemClassnames, contextClassName, className, mergedClassNames.root, rootClassName, cssVarCls, rootCls, hashId);
  const memoPlacement = reactExports.useMemo(() => {
    if (placement !== void 0) {
      return placement;
    }
    return direction === "rtl" ? "bottomRight" : "bottomLeft";
  }, [placement, direction]);
  const [zIndex] = useZIndex("SelectLike", mergedStyles.popup.root?.zIndex ?? mergedPopupStyle.zIndex);
  return /* @__PURE__ */ reactExports.createElement(TypedSelect, {
    ref,
    virtual,
    classNames: mergedClassNames,
    styles: mergedStyles,
    showSearch: mergedShowSearch,
    ...selectProps,
    style: mergedStyles.root,
    popupMatchSelectWidth: mergedPopupMatchSelectWidth,
    transitionName: getTransitionName(rootPrefixCls, "slide-up", transitionName),
    builtinPlacements: mergedBuiltinPlacements(builtinPlacements, popupOverflow),
    listHeight,
    listItemHeight,
    mode,
    prefixCls,
    placement: memoPlacement,
    direction,
    prefix,
    suffixIcon,
    menuItemSelectedIcon: itemIcon,
    removeIcon,
    allowClear: mergedAllowClear,
    notFoundContent: mergedNotFound,
    className: mergedClassName,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    popupClassName: mergedPopupClassName,
    disabled: mergedDisabled,
    popupStyle: {
      ...mergedStyles.popup.root,
      ...mergedPopupStyle,
      zIndex
    },
    maxCount: isMultiple ? maxCount : void 0,
    tagRender: isMultiple ? tagRender : void 0,
    popupRender: mergedPopupRender,
    onPopupVisibleChange: mergedOnOpenChange
  });
};
const Select = /* @__PURE__ */ reactExports.forwardRef(InternalSelect);
const PurePanel$3 = genPurePanel(Select, "popupAlign");
Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
Select.Option = Option;
Select.OptGroup = OptGroup;
Select._InternalPanelDoNotUseOrYouWillBeFired = PurePanel$3;
const responsiveArray = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"];
const responsiveArrayReversed = [].concat(responsiveArray).reverse();
const getResponsiveMap = (token) => ({
  xs: `(max-width: ${token.screenXSMax}px)`,
  sm: `(min-width: ${token.screenSM}px)`,
  md: `(min-width: ${token.screenMD}px)`,
  lg: `(min-width: ${token.screenLG}px)`,
  xl: `(min-width: ${token.screenXL}px)`,
  xxl: `(min-width: ${token.screenXXL}px)`,
  xxxl: `(min-width: ${token.screenXXXL}px)`
});
const validateBreakpoints = (token) => {
  const indexableToken = token;
  const revBreakpoints = [].concat(responsiveArray).reverse();
  revBreakpoints.forEach((breakpoint, i) => {
    const breakpointUpper = breakpoint.toUpperCase();
    const screenMin = `screen${breakpointUpper}Min`;
    const screen = `screen${breakpointUpper}`;
    if (!(indexableToken[screenMin] <= indexableToken[screen])) {
      throw new Error(`${screenMin}<=${screen} fails : !(${indexableToken[screenMin]}<=${indexableToken[screen]})`);
    }
    if (i < revBreakpoints.length - 1) {
      const screenMax = `screen${breakpointUpper}Max`;
      if (!(indexableToken[screen] <= indexableToken[screenMax])) {
        throw new Error(`${screen}<=${screenMax} fails : !(${indexableToken[screen]}<=${indexableToken[screenMax]})`);
      }
      const nextBreakpointUpperMin = revBreakpoints[i + 1].toUpperCase();
      const nextScreenMin = `screen${nextBreakpointUpperMin}Min`;
      if (!(indexableToken[screenMax] <= indexableToken[nextScreenMin])) {
        throw new Error(`${screenMax}<=${nextScreenMin} fails : !(${indexableToken[screenMax]}<=${indexableToken[nextScreenMin]})`);
      }
    }
  });
  return token;
};
const useResponsiveObserver = () => {
  const [, token] = useToken();
  const responsiveMap = getResponsiveMap(validateBreakpoints(token));
  return React.useMemo(() => {
    const subscribers = /* @__PURE__ */ new Map();
    let subUid = -1;
    let screens = {};
    return {
      responsiveMap,
      matchHandlers: {},
      dispatch(pointMap) {
        screens = pointMap;
        subscribers.forEach((func) => {
          func(screens);
        });
        return subscribers.size >= 1;
      },
      subscribe(func) {
        if (!subscribers.size) {
          this.register();
        }
        subUid += 1;
        subscribers.set(subUid, func);
        func(screens);
        return subUid;
      },
      unsubscribe(paramToken) {
        subscribers.delete(paramToken);
        if (!subscribers.size) {
          this.unregister();
        }
      },
      register() {
        Object.entries(responsiveMap).forEach(([screen, mediaQuery]) => {
          const listener = ({
            matches
          }) => {
            this.dispatch({
              ...screens,
              [screen]: matches
            });
          };
          const mql = window.matchMedia(mediaQuery);
          if (isFunction(mql.addEventListener)) {
            mql.addEventListener("change", listener);
          }
          this.matchHandlers[mediaQuery] = {
            mql,
            listener
          };
          listener(mql);
        });
      },
      unregister() {
        Object.values(responsiveMap).forEach((mediaQuery) => {
          const handler = this.matchHandlers[mediaQuery];
          if (isFunction(handler?.mql.removeEventListener)) {
            handler.mql.removeEventListener("change", handler?.listener);
          }
        });
        subscribers.clear();
      }
    };
  }, [responsiveMap]);
};
function useBreakpoint(refreshOnChange = true, defaultScreens = {}) {
  const screensRef = reactExports.useRef(defaultScreens);
  const [, forceUpdate] = useForceUpdate();
  const responsiveObserver = useResponsiveObserver();
  useLayoutEffect(() => {
    const token = responsiveObserver.subscribe((supportScreens) => {
      screensRef.current = supportScreens;
      if (refreshOnChange) {
        forceUpdate();
      }
    });
    return () => responsiveObserver.unsubscribe(token);
  }, []);
  return screensRef.current;
}
function getArrowToken(token) {
  const {
    sizePopupArrow,
    borderRadiusXS,
    borderRadiusOuter
  } = token;
  const unitWidth = sizePopupArrow / 2;
  const ax = 0;
  const ay = unitWidth;
  const bx = borderRadiusOuter * 1 / Math.sqrt(2);
  const by = unitWidth - borderRadiusOuter * (1 - 1 / Math.sqrt(2));
  const cx = unitWidth - borderRadiusXS * (1 / Math.sqrt(2));
  const cy = borderRadiusOuter * (Math.sqrt(2) - 1) + borderRadiusXS * (1 / Math.sqrt(2));
  const dx = 2 * unitWidth - cx;
  const dy = cy;
  const ex = 2 * unitWidth - bx;
  const ey = by;
  const fx = 2 * unitWidth - ax;
  const fy = ay;
  const shadowWidth = unitWidth * Math.sqrt(2) + borderRadiusOuter * (Math.sqrt(2) - 2);
  const polygonOffset = borderRadiusOuter * (Math.sqrt(2) - 1);
  const arrowPolygon = `polygon(${polygonOffset}px 100%, 50% ${polygonOffset}px, ${2 * unitWidth - polygonOffset}px 100%, ${polygonOffset}px 100%)`;
  const arrowPath = `path('M ${ax} ${ay} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${bx} ${by} L ${cx} ${cy} A ${borderRadiusXS} ${borderRadiusXS} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${fx} ${fy} Z')`;
  return {
    arrowShadowWidth: shadowWidth,
    arrowPath,
    arrowPolygon
  };
}
const genRoundedArrow = (token, bgColor, boxShadow) => {
  const {
    sizePopupArrow,
    arrowPolygon,
    arrowPath,
    arrowShadowWidth,
    borderRadiusXS,
    calc
  } = token;
  const afterStyle = {
    content: '""',
    position: "absolute",
    width: arrowShadowWidth,
    height: arrowShadowWidth,
    bottom: 0,
    insetInline: 0,
    margin: "auto",
    borderRadius: {
      _skip_check_: true,
      value: `0 0 ${unit(borderRadiusXS)} 0`
    },
    transform: "translateY(50%) rotate(-135deg)",
    zIndex: 0,
    background: "transparent"
  };
  if (boxShadow) {
    afterStyle.boxShadow = boxShadow;
  }
  return {
    pointerEvents: "none",
    width: sizePopupArrow,
    height: sizePopupArrow,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: sizePopupArrow,
      height: calc(sizePopupArrow).div(2).equal(),
      background: bgColor,
      clipPath: {
        _multi_value_: true,
        value: [arrowPolygon, arrowPath]
      },
      content: '""'
    },
    "&::after": afterStyle
  };
};
const MAX_VERTICAL_CONTENT_RADIUS = 8;
function getArrowOffsetToken(options) {
  const {
    contentRadius,
    limitVerticalRadius
  } = options;
  const arrowOffset = contentRadius > 12 ? contentRadius + 2 : 12;
  const arrowOffsetVertical = limitVerticalRadius ? MAX_VERTICAL_CONTENT_RADIUS : arrowOffset;
  return {
    arrowOffsetHorizontal: arrowOffset,
    arrowOffsetVertical
  };
}
const getArrowStyle = (token, colorBg, options) => {
  const {
    componentCls,
    boxShadowPopoverArrow,
    arrowOffsetVertical,
    arrowOffsetHorizontal,
    antCls
  } = token;
  const [varName] = genCssVar(antCls, "tooltip");
  const {
    arrowDistance = 0,
    arrowShadow = true
  } = options || {};
  return {
    [componentCls]: {
      // ============================ Basic ============================
      [`${componentCls}-arrow`]: [{
        position: "absolute",
        zIndex: 1,
        // lift it up so the menu wouldn't cask shadow on it
        display: "block",
        ...genRoundedArrow(token, colorBg, arrowShadow ? boxShadowPopoverArrow : false),
        "&:before": {
          background: colorBg
        }
      }],
      // ========================== Placement ==========================
      // Here handle the arrow position and rotate stuff
      // >>>>> Top
      [[`&-placement-top > ${componentCls}-arrow`, `&-placement-topLeft > ${componentCls}-arrow`, `&-placement-topRight > ${componentCls}-arrow`].join(",")]: {
        bottom: arrowDistance,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top > ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      "&-placement-topLeft": {
        [varName("arrow-offset-x")]: arrowOffsetHorizontal,
        [`> ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        }
      },
      "&-placement-topRight": {
        [varName("arrow-offset-x")]: `calc(100% - ${unit(arrowOffsetHorizontal)})`,
        [`> ${componentCls}-arrow`]: {
          right: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        }
      },
      // >>>>> Bottom
      [[`&-placement-bottom > ${componentCls}-arrow`, `&-placement-bottomLeft > ${componentCls}-arrow`, `&-placement-bottomRight > ${componentCls}-arrow`].join(",")]: {
        top: arrowDistance,
        transform: `translateY(-100%)`
      },
      [`&-placement-bottom > ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: "50%"
        },
        transform: `translateX(-50%) translateY(-100%)`
      },
      "&-placement-bottomLeft": {
        [varName("arrow-offset-x")]: arrowOffsetHorizontal,
        [`> ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        }
      },
      "&-placement-bottomRight": {
        [varName("arrow-offset-x")]: `calc(100% - ${unit(arrowOffsetHorizontal)})`,
        [`> ${componentCls}-arrow`]: {
          right: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        }
      },
      // >>>>> Left
      [[`&-placement-left > ${componentCls}-arrow`, `&-placement-leftTop > ${componentCls}-arrow`, `&-placement-leftBottom > ${componentCls}-arrow`].join(",")]: {
        right: {
          _skip_check_: true,
          value: arrowDistance
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left > ${componentCls}-arrow`]: {
        top: {
          _skip_check_: true,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop > ${componentCls}-arrow`]: {
        top: arrowOffsetVertical
      },
      [`&-placement-leftBottom > ${componentCls}-arrow`]: {
        bottom: arrowOffsetVertical
      },
      // >>>>> Right
      [[`&-placement-right > ${componentCls}-arrow`, `&-placement-rightTop > ${componentCls}-arrow`, `&-placement-rightBottom > ${componentCls}-arrow`].join(",")]: {
        left: {
          _skip_check_: true,
          value: arrowDistance
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right > ${componentCls}-arrow`]: {
        top: {
          _skip_check_: true,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop > ${componentCls}-arrow`]: {
        top: arrowOffsetVertical
      },
      [`&-placement-rightBottom > ${componentCls}-arrow`]: {
        bottom: arrowOffsetVertical
      }
    }
  };
};
function getOverflowOptions(placement, arrowOffset, arrowWidth, autoAdjustOverflow) {
  if (autoAdjustOverflow === false) {
    return {
      adjustX: false,
      adjustY: false
    };
  }
  const overflow = isPlainObject(autoAdjustOverflow) ? autoAdjustOverflow : {};
  const baseOverflow = {};
  switch (placement) {
    case "top":
    case "bottom":
      baseOverflow.shiftX = arrowOffset.arrowOffsetHorizontal * 2 + arrowWidth;
      baseOverflow.shiftY = true;
      baseOverflow.adjustY = true;
      break;
    case "left":
    case "right":
      baseOverflow.shiftY = arrowOffset.arrowOffsetVertical * 2 + arrowWidth;
      baseOverflow.shiftX = true;
      baseOverflow.adjustX = true;
      break;
  }
  const mergedOverflow = {
    ...baseOverflow,
    ...overflow
  };
  if (!mergedOverflow.shiftX) {
    mergedOverflow.adjustX = true;
  }
  if (!mergedOverflow.shiftY) {
    mergedOverflow.adjustY = true;
  }
  return mergedOverflow;
}
const PlacementAlignMap = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
};
const ArrowCenterPlacementAlignMap = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
};
const DisableAutoArrowList = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function getPlacements(config) {
  const {
    arrowWidth,
    autoAdjustOverflow,
    arrowPointAtCenter,
    offset,
    borderRadius
  } = config;
  const halfArrowWidth = arrowWidth / 2;
  const placementMap = {};
  const arrowOffset = getArrowOffsetToken({
    contentRadius: borderRadius,
    limitVerticalRadius: true
  });
  Object.keys(PlacementAlignMap).forEach((key) => {
    const template = arrowPointAtCenter && ArrowCenterPlacementAlignMap[key] || PlacementAlignMap[key];
    const placementInfo = {
      ...template,
      offset: [0, 0],
      dynamicInset: true
    };
    placementMap[key] = placementInfo;
    if (DisableAutoArrowList.has(key)) {
      placementInfo.autoArrow = false;
    }
    switch (key) {
      case "top":
      case "topLeft":
      case "topRight":
        placementInfo.offset[1] = -halfArrowWidth - offset;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        placementInfo.offset[1] = halfArrowWidth + offset;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        placementInfo.offset[0] = -halfArrowWidth - offset;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        placementInfo.offset[0] = halfArrowWidth + offset;
        break;
    }
    if (arrowPointAtCenter) {
      switch (key) {
        case "topLeft":
        case "bottomLeft":
          placementInfo.offset[0] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
          break;
        case "topRight":
        case "bottomRight":
          placementInfo.offset[0] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
          break;
        case "leftTop":
        case "rightTop":
          placementInfo.offset[1] = -arrowOffset.arrowOffsetHorizontal * 2 + halfArrowWidth;
          break;
        case "leftBottom":
        case "rightBottom":
          placementInfo.offset[1] = arrowOffset.arrowOffsetHorizontal * 2 - halfArrowWidth;
          break;
      }
    }
    placementInfo.overflow = getOverflowOptions(key, arrowOffset, arrowWidth, autoAdjustOverflow);
    {
      placementInfo.htmlRegion = "visibleFirst";
    }
  });
  return placementMap;
}
const TableMeasureRowContext = /* @__PURE__ */ React.createContext(false);
const useMergedArrow = (providedArrow, providedContextArrow) => {
  const toConfig = (arrow) => typeof arrow === "boolean" ? {
    show: arrow
  } : arrow || {};
  return React.useMemo(() => {
    const arrowConfig = toConfig(providedArrow);
    const contextArrowConfig = toConfig(providedContextArrow);
    return {
      ...contextArrowConfig,
      ...arrowConfig,
      show: arrowConfig.show ?? contextArrowConfig.show ?? true
    };
  }, [providedArrow, providedContextArrow]);
};
const FALL_BACK_ORIGIN = "50%";
const genTooltipStyle = (token) => {
  const {
    calc,
    componentCls,
    // ant-tooltip
    tooltipMaxWidth,
    tooltipColor,
    tooltipBg,
    tooltipBorderRadius,
    zIndexPopup,
    controlHeight,
    dropShadowPopover,
    paddingSM,
    paddingXS,
    arrowOffsetHorizontal,
    sizePopupArrow,
    antCls
  } = token;
  const [varName, varRef] = genCssVar(antCls, "tooltip");
  const edgeAlignMinWidth = calc(tooltipBorderRadius).add(sizePopupArrow).add(arrowOffsetHorizontal).equal();
  const centerAlignMinWidth = calc(tooltipBorderRadius).mul(2).add(sizePopupArrow).equal();
  const sharedBodyStyle = {
    minWidth: centerAlignMinWidth,
    minHeight: controlHeight,
    padding: `${unit(token.calc(paddingSM).div(2).equal())} ${unit(paddingXS)}`,
    color: varRef("overlay-color", tooltipColor),
    textAlign: "start",
    textDecoration: "none",
    wordWrap: "break-word",
    backgroundColor: tooltipBg,
    borderRadius: tooltipBorderRadius,
    boxSizing: "border-box"
  };
  const sharedTransformOrigin = {
    // When use `autoArrow`, origin will follow the arrow position
    [varName("valid-offset-x")]: varRef("arrow-offset-x", "var(--arrow-x)"),
    transformOrigin: [varRef("valid-offset-x", FALL_BACK_ORIGIN), `var(--arrow-y, ${FALL_BACK_ORIGIN})`].join(" ")
  };
  return [
    {
      [componentCls]: {
        ...resetComponent(token),
        position: "absolute",
        zIndex: zIndexPopup,
        display: "block",
        width: "max-content",
        maxWidth: tooltipMaxWidth,
        visibility: "visible",
        filter: dropShadowPopover,
        ...sharedTransformOrigin,
        "&-hidden": {
          display: "none"
        },
        [varName("arrow-background-color")]: tooltipBg,
        // Wrapper for the tooltip content
        [`${componentCls}-container`]: [sharedBodyStyle, initFadeMotion(token, true)],
        [`&:has(~ ${componentCls}-unique-container)`]: {
          [`${componentCls}-container`]: {
            border: "none",
            background: "transparent"
          }
        },
        // Align placement should have another min width
        [[`&-placement-topLeft`, `&-placement-topRight`, `&-placement-bottomLeft`, `&-placement-bottomRight`].join(",")]: {
          minWidth: edgeAlignMinWidth
        },
        // Limit left and right placement radius
        [[`&-placement-left`, `&-placement-leftTop`, `&-placement-leftBottom`, `&-placement-right`, `&-placement-rightTop`, `&-placement-rightBottom`].join(",")]: {
          [`${componentCls}-inner`]: {
            borderRadius: token.min(tooltipBorderRadius, MAX_VERTICAL_CONTENT_RADIUS)
          }
        },
        [`${componentCls}-content`]: {
          position: "relative"
        },
        // generator for preset color
        ...genPresetColor(token, (colorKey, {
          darkColor
        }) => ({
          [`&${componentCls}-${colorKey}`]: {
            [`${componentCls}-container`]: {
              backgroundColor: darkColor
            },
            [`${componentCls}-arrow`]: {
              [varName("arrow-background-color")]: darkColor
            }
          }
        })),
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      }
    },
    // Arrow Style
    getArrowStyle(token, varRef("arrow-background-color"), {
      arrowShadow: false
    }),
    // Pure Render
    {
      [`${componentCls}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: token.sizePopupArrow
      }
    },
    // Unique Body
    {
      [`${componentCls}-unique-container`]: {
        ...sharedBodyStyle,
        ...sharedTransformOrigin,
        position: "absolute",
        zIndex: calc(zIndexPopup).sub(1).equal(),
        filter: dropShadowPopover,
        "&-hidden": {
          display: "none"
        },
        "&-visible": {
          transition: `all ${token.motionDurationSlow}`
        }
      }
    }
  ];
};
const prepareComponentToken$4 = (token) => ({
  zIndexPopup: token.zIndexPopupBase + 70,
  maxWidth: 250,
  ...getArrowOffsetToken({
    contentRadius: token.borderRadius,
    limitVerticalRadius: true
  }),
  ...getArrowToken(merge$1(token, {
    borderRadiusOuter: Math.min(token.borderRadiusOuter, 4)
  }))
});
const useStyle$a = (prefixCls, rootCls, injectStyle = true) => {
  const useStyle2 = genStyleHooks("Tooltip", (token) => {
    const {
      borderRadius,
      colorTextLightSolid,
      colorBgSpotlight,
      maxWidth
    } = token;
    const TooltipToken = merge$1(token, {
      // default variables
      tooltipMaxWidth: maxWidth,
      tooltipColor: colorTextLightSolid,
      tooltipBorderRadius: borderRadius,
      tooltipBg: colorBgSpotlight
    });
    return [genTooltipStyle(TooltipToken), initZoomMotion(token, "zoom-big-fast")];
  }, prepareComponentToken$4, {
    resetStyle: false,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle
  });
  return useStyle2(prefixCls, rootCls);
};
const inverseColors = PresetColors.map((color) => `${color}-inverse`);
function isPresetColor(color, includeInverse = true) {
  if (includeInverse) {
    return [].concat(_toConsumableArray(inverseColors), _toConsumableArray(PresetColors)).includes(color);
  }
  return PresetColors.includes(color);
}
const parseColor = (rootPrefixCls, prefixCls, color) => {
  const isInternalColor = isPresetColor(color);
  const [varName] = genCssVar(rootPrefixCls, "tooltip");
  const className = clsx({
    [`${prefixCls}-${color}`]: color && isInternalColor
  });
  const overlayStyle = {};
  const arrowStyle = {};
  const rgb = generateColor(color).toRgb();
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  const textColor = luminance < 0.5 ? "#FFF" : "#000";
  if (color && !isInternalColor) {
    overlayStyle.background = color;
    overlayStyle[varName("overlay-color")] = textColor;
    arrowStyle[varName("arrow-background-color")] = color;
  }
  return {
    className,
    overlayStyle,
    arrowStyle
  };
};
const PurePanel$2 = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    placement = "top",
    title,
    color,
    overlayInnerStyle,
    classNames,
    styles
  } = props;
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("tooltip", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const rootCls = useCSSVarCls(prefixCls);
  const [hashId, cssVarCls] = useStyle$a(prefixCls, rootCls);
  const colorInfo = parseColor(rootPrefixCls, prefixCls, color);
  const arrowContentStyle = colorInfo.arrowStyle;
  const innerStyles = reactExports.useMemo(() => {
    const mergedStyle = {
      ...overlayInnerStyle,
      ...colorInfo.overlayStyle
    };
    return {
      container: mergedStyle
    };
  }, [overlayInnerStyle, colorInfo.overlayStyle]);
  const mergedProps = {
    ...props,
    placement
  };
  const [mergedClassNames, mergedStyles] = useMergeSemantic([classNames], [innerStyles, styles], {
    props: mergedProps
  });
  const rootClassName = clsx(rootCls, hashId, cssVarCls, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className, colorInfo.className);
  return /* @__PURE__ */ reactExports.createElement("div", {
    className: rootClassName,
    style: arrowContentStyle
  }, /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-arrow`
  }), /* @__PURE__ */ reactExports.createElement(Popup, {
    ...props,
    className: hashId,
    prefixCls,
    classNames: mergedClassNames,
    styles: mergedStyles
  }, title));
};
const InternalTooltip = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    openClassName,
    getTooltipContainer,
    color,
    children,
    afterOpenChange,
    arrow: tooltipArrow,
    destroyTooltipOnHide,
    destroyOnHidden,
    title,
    overlay,
    trigger,
    builtinPlacements,
    autoAdjustOverflow = true,
    motion,
    getPopupContainer,
    placement = "top",
    mouseEnterDelay = 0.1,
    mouseLeaveDelay = 0.1,
    rootClassName,
    styles,
    classNames,
    onOpenChange,
    // Legacy
    overlayInnerStyle,
    overlayStyle,
    overlayClassName,
    ...restProps
  } = props;
  const [, token] = useToken();
  const injectFromPopover = props["data-popover-inject"];
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction,
    ...semanticConfig
  } = useComponentConfig("tooltip");
  const {
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles,
    arrow: contextArrow,
    trigger: contextTrigger
  } = injectFromPopover ? {} : semanticConfig;
  const mergedArrow = useMergedArrow(tooltipArrow, contextArrow);
  const mergedShowArrow = mergedArrow.show;
  const mergedTrigger = trigger || contextTrigger || "hover";
  const mergedGetPopupContainer = getPopupContainer || getContextPopupContainer;
  const mergedDestroyOnHidden = destroyOnHidden ?? !!destroyTooltipOnHide;
  const inTableMeasureRow = reactExports.useContext(TableMeasureRowContext);
  const tooltipRef = reactExports.useRef(null);
  const forceAlign = () => {
    tooltipRef.current?.forceAlign();
  };
  reactExports.useImperativeHandle(ref, () => ({
    forceAlign,
    nativeElement: tooltipRef.current?.nativeElement,
    popupElement: tooltipRef.current?.popupElement
  }));
  const [open, setOpen] = useControlledState(props.defaultOpen ?? false, props.open);
  const noTitle = !title && !overlay && title !== 0;
  const onInternalOpenChange = (vis) => {
    setOpen(noTitle ? false : vis);
    if (!noTitle && onOpenChange) {
      onOpenChange(vis);
    }
  };
  const tooltipPlacements = reactExports.useMemo(() => {
    return builtinPlacements || getPlacements({
      arrowPointAtCenter: mergedArrow?.pointAtCenter ?? false,
      autoAdjustOverflow,
      arrowWidth: mergedShowArrow ? token.sizePopupArrow : 0,
      borderRadius: token.borderRadius,
      offset: token.marginXXS
    });
  }, [mergedArrow, builtinPlacements, token, mergedShowArrow, autoAdjustOverflow]);
  const memoOverlay = reactExports.useMemo(() => {
    if (title === 0) {
      return title;
    }
    return overlay || title || "";
  }, [overlay, title]);
  const memoOverlayWrapper = /* @__PURE__ */ reactExports.createElement(ContextIsolator, {
    space: true,
    form: true
  }, isFunction(memoOverlay) ? memoOverlay() : memoOverlay);
  const mergedProps = {
    ...props,
    trigger: mergedTrigger,
    builtinPlacements: tooltipPlacements,
    getPopupContainer: mergedGetPopupContainer,
    destroyOnHidden: mergedDestroyOnHidden
  };
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, styles], {
    props: mergedProps
  });
  const prefixCls = getPrefixCls("tooltip", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  let tempOpen = open;
  if (!("open" in props) && noTitle || inTableMeasureRow) {
    tempOpen = false;
  }
  const child = /* @__PURE__ */ reactExports.isValidElement(children) && !isFragment(children) ? children : /* @__PURE__ */ reactExports.createElement("span", null, children);
  const childProps = child.props;
  const childCls = !childProps.className || typeof childProps.className === "string" ? clsx(childProps.className, openClassName || `${prefixCls}-open`) : childProps.className;
  const rootCls = useCSSVarCls(prefixCls);
  const [hashId, cssVarCls] = useStyle$a(prefixCls, rootCls, !injectFromPopover);
  const colorInfo = parseColor(rootPrefixCls, prefixCls, color);
  const arrowContentStyle = colorInfo.arrowStyle;
  const themeCls = clsx(rootCls, hashId, cssVarCls);
  const rootClassNames = clsx(overlayClassName, {
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, colorInfo.className, rootClassName, themeCls, contextClassName, mergedClassNames.root);
  const [zIndex, contextZIndex] = useZIndex("Tooltip", restProps.zIndex);
  const containerStyle = {
    ...mergedStyles.container,
    ...overlayInnerStyle,
    ...colorInfo.overlayStyle
  };
  const content = /* @__PURE__ */ reactExports.createElement(Tooltip$1, {
    unique: true,
    ...restProps,
    zIndex,
    showArrow: mergedShowArrow,
    placement,
    mouseEnterDelay,
    mouseLeaveDelay,
    prefixCls,
    classNames: {
      root: rootClassNames,
      container: mergedClassNames.container,
      arrow: mergedClassNames.arrow,
      uniqueContainer: clsx(themeCls, mergedClassNames.container)
    },
    styles: {
      root: {
        ...arrowContentStyle,
        ...mergedStyles.root,
        ...contextStyle,
        ...overlayStyle
      },
      container: containerStyle,
      uniqueContainer: containerStyle,
      arrow: mergedStyles.arrow
    },
    ref: tooltipRef,
    overlay: memoOverlayWrapper,
    visible: tempOpen,
    onVisibleChange: onInternalOpenChange,
    afterVisibleChange: afterOpenChange,
    arrowContent: /* @__PURE__ */ reactExports.createElement("span", {
      className: `${prefixCls}-arrow-content`
    }),
    motion: {
      motionName: getTransitionName(rootPrefixCls, "zoom-big-fast", typeof motion?.motionName === "string" ? motion?.motionName : void 0),
      motionDeadline: 1e3
    },
    trigger: mergedTrigger,
    builtinPlacements: tooltipPlacements,
    getTooltipContainer: mergedGetPopupContainer,
    destroyOnHidden: mergedDestroyOnHidden
  }, tempOpen ? cloneElement(child, {
    className: childCls
  }) : child);
  return /* @__PURE__ */ reactExports.createElement(ZIndexContext.Provider, {
    value: contextZIndex
  }, content);
});
const Tooltip = InternalTooltip;
Tooltip._InternalPanelDoNotUseOrYouWillBeFired = PurePanel$2;
Tooltip.UniqueProvider = UniqueProvider;
const formItemNameBlackList = ["parentNode"];
const defaultItemNamePrefixCls = "form_item";
function toArray(candidate) {
  if (candidate === void 0 || candidate === false) {
    return [];
  }
  return Array.isArray(candidate) ? candidate : [candidate];
}
function getFieldId(namePath, formName) {
  if (!namePath.length) {
    return void 0;
  }
  const mergedId = namePath.join("_");
  if (formName) {
    return `${formName}_${mergedId}`;
  }
  const isIllegalName = formItemNameBlackList.includes(mergedId);
  return isIllegalName ? `${defaultItemNamePrefixCls}_${mergedId}` : mergedId;
}
function getStatus(errors, warnings, meta, defaultValidateStatus, hasFeedback, validateStatus) {
  let status = defaultValidateStatus;
  if (validateStatus !== void 0) {
    status = validateStatus;
  } else if (meta.validating) {
    status = "validating";
  } else if (errors.length) {
    status = "error";
  } else if (warnings.length) {
    status = "warning";
  } else if (meta.touched || hasFeedback && meta.validated) {
    status = "success";
  }
  return status;
}
function toNamePathStr(name) {
  const namePath = toArray(name);
  return namePath.join("_");
}
function getFieldDOMNode(name, wrapForm) {
  const field = wrapForm.getFieldInstance(name);
  const fieldDom = getDOM(field);
  if (fieldDom) {
    return fieldDom;
  }
  const fieldId = getFieldId(toArray(name), wrapForm.__INTERNAL__.name);
  if (fieldId) {
    return document.getElementById(fieldId);
  }
}
function useForm(form) {
  const [rcForm] = useForm$1();
  const itemsRef = reactExports.useRef({});
  const wrapForm = reactExports.useMemo(() => form ?? {
    ...rcForm,
    __INTERNAL__: {
      itemRef: (name) => (node) => {
        const namePathStr = toNamePathStr(name);
        if (node) {
          itemsRef.current[namePathStr] = node;
        } else {
          delete itemsRef.current[namePathStr];
        }
      }
    },
    scrollToField: (name, options = {}) => {
      const {
        focus,
        ...restOpt
      } = options;
      const node = getFieldDOMNode(name, wrapForm);
      if (node) {
        e(node, {
          scrollMode: "if-needed",
          block: "nearest",
          ...restOpt
        });
        if (focus) {
          wrapForm.focusField(name);
        }
      }
    },
    focusField: (name) => {
      const itemRef = wrapForm.getFieldInstance(name);
      if (isFunction(itemRef?.focus)) {
        itemRef.focus();
      } else {
        getFieldDOMNode(name, wrapForm)?.focus?.();
      }
    },
    getFieldInstance: (name) => {
      const namePathStr = toNamePathStr(name);
      return itemsRef.current[namePathStr];
    }
  }, [form, rcForm]);
  return [wrapForm];
}
const RadioGroupContext = /* @__PURE__ */ reactExports.createContext(void 0);
const RadioGroupContextProvider = RadioGroupContext.Provider;
const RadioOptionTypeContext = /* @__PURE__ */ reactExports.createContext(void 0);
const RadioOptionTypeContextProvider = RadioOptionTypeContext.Provider;
function useBubbleLock(onOriginInputClick) {
  const labelClickLockRef = React.useRef(null);
  const clearLock = () => {
    wrapperRaf.cancel(labelClickLockRef.current);
    labelClickLockRef.current = null;
  };
  const onLabelClick = () => {
    clearLock();
    labelClickLockRef.current = wrapperRaf(() => {
      labelClickLockRef.current = null;
    });
  };
  const onInputClick = (e2) => {
    if (labelClickLockRef.current) {
      e2.stopPropagation();
      clearLock();
    }
    onOriginInputClick?.(e2);
  };
  return [onLabelClick, onInputClick];
}
const getGroupRadioStyle = (token) => {
  const {
    componentCls,
    antCls,
    lineWidth,
    borderRadius,
    borderRadiusLG,
    borderRadiusSM,
    calc
  } = token;
  const groupPrefixCls = `${componentCls}-group`;
  const buttonWrapperCls = `${componentCls}-button-wrapper`;
  const badgeCls = `${antCls}-badge`;
  const genVerticalBadgeButtonStyle = (radius) => ({
    [`> ${badgeCls}`]: {
      width: "auto"
    },
    [`> ${badgeCls} > ${buttonWrapperCls}`]: {
      width: "100%"
    },
    [`> ${badgeCls}:not(:last-child)`]: {
      marginBlockEnd: calc(lineWidth).mul(-1).equal()
    },
    [`> ${badgeCls} > ${buttonWrapperCls}:not(:last-child)`]: {
      marginBlockEnd: 0
    },
    [`> ${badgeCls}:first-child > ${buttonWrapperCls}`]: {
      borderStartStartRadius: radius,
      borderStartEndRadius: radius,
      borderEndStartRadius: 0,
      borderEndEndRadius: 0
    },
    [`> ${badgeCls}:last-child > ${buttonWrapperCls}`]: {
      borderStartStartRadius: 0,
      borderStartEndRadius: 0,
      borderEndStartRadius: radius,
      borderEndEndRadius: radius
    },
    [`> ${badgeCls}:not(:first-child):not(:last-child) > ${buttonWrapperCls}`]: {
      borderRadius: 0
    },
    [`> ${badgeCls}:first-child:last-child > ${buttonWrapperCls}`]: {
      borderRadius: radius
    }
  });
  return {
    [groupPrefixCls]: {
      ...resetComponent(token),
      display: "inline-block",
      fontSize: 0,
      // RTL
      [`&${groupPrefixCls}-rtl`]: {
        direction: "rtl"
      },
      [`&${groupPrefixCls}-block`]: {
        display: "flex"
      },
      [`${antCls}-badge ${antCls}-badge-count`]: {
        zIndex: 1
      },
      [`> ${antCls}-badge:not(:first-child) > ${antCls}-button-wrapper`]: {
        borderInlineStart: "none"
      },
      "&-vertical": {
        display: "flex",
        flexDirection: "column",
        rowGap: token.marginXS,
        [`&:has(> ${buttonWrapperCls}, > ${badgeCls} > ${buttonWrapperCls})`]: {
          rowGap: 0
        },
        [`${componentCls}-wrapper`]: {
          marginInlineEnd: 0
        },
        ...genVerticalBadgeButtonStyle(borderRadius),
        [`&${groupPrefixCls}-large`]: {
          ...genVerticalBadgeButtonStyle(borderRadiusLG)
        },
        [`&${groupPrefixCls}-small`]: {
          ...genVerticalBadgeButtonStyle(borderRadiusSM)
        }
      }
    }
  };
};
const getRadioBasicStyle = (token) => {
  const {
    componentCls,
    wrapperMarginInlineEnd,
    colorPrimary,
    colorPrimaryHover,
    radioSize,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOutCirc,
    colorBgContainer,
    colorBorder,
    lineWidth,
    colorBgContainerDisabled,
    colorTextDisabled,
    paddingXS,
    dotColorDisabled,
    dotSize,
    lineType,
    radioColor,
    radioBgColor
  } = token;
  return {
    [`${componentCls}-wrapper`]: {
      ...resetComponent(token),
      display: "inline-flex",
      alignItems: "baseline",
      marginInlineStart: 0,
      marginInlineEnd: wrapperMarginInlineEnd,
      cursor: "pointer",
      "&:last-child": {
        marginInlineEnd: 0
      },
      // RTL
      [`&${componentCls}-wrapper-rtl`]: {
        direction: "rtl"
      },
      "&-disabled": {
        cursor: "not-allowed",
        color: token.colorTextDisabled
      },
      "&::after": {
        display: "inline-block",
        width: 0,
        overflow: "hidden",
        content: '"\\a0"'
      },
      "&-block": {
        flex: 1,
        justifyContent: "center"
      },
      // ===================== Radio =====================
      [componentCls]: {
        ...resetComponent(token),
        position: "relative",
        whiteSpace: "nowrap",
        lineHeight: 1,
        cursor: "pointer",
        alignSelf: "center",
        // Styles moved from inner
        boxSizing: "border-box",
        display: "block",
        width: `calc(${radioSize} * 1px)`,
        height: `calc(${radioSize} * 1px)`,
        backgroundColor: colorBgContainer,
        border: `${unit(lineWidth)} ${lineType} ${colorBorder}`,
        borderRadius: "50%",
        transition: `all ${motionDurationMid}`,
        flex: "none",
        // Dot
        "&:after": {
          content: '""',
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(0)",
          width: `calc(${dotSize} * 1px)`,
          height: `calc(${dotSize} * 1px)`,
          backgroundColor: radioColor,
          borderRadius: "50%",
          transformOrigin: "50% 50%",
          opacity: 0,
          transition: `all ${motionDurationSlow} ${motionEaseInOutCirc}`
        },
        // Wrapper > Radio > input
        [`${componentCls}-input`]: {
          position: "absolute",
          inset: 0,
          zIndex: 1,
          cursor: "pointer",
          opacity: 0,
          margin: 0
        },
        // Focus outline on radio when input is focus-visible
        [`&:has(${componentCls}-input:focus-visible)`]: genFocusOutline(token)
      },
      // ===================== Hover =====================
      [`&:hover:not(${componentCls}-wrapper-disabled) ${componentCls}`]: {
        borderColor: colorPrimary
      },
      [`&:hover ${componentCls}-checked:not(${componentCls}-disabled)`]: {
        backgroundColor: colorPrimaryHover,
        borderColor: "transparent"
      },
      // ==================== Checked ====================
      [`${componentCls}-checked`]: {
        backgroundColor: radioBgColor,
        borderColor: colorPrimary,
        "&::after": {
          transform: `translate(-50%, -50%)`,
          opacity: 1
        }
      },
      // ==================== Disable ====================
      [`${componentCls}-disabled`]: {
        // Wrapper > Radio > input
        [`&, ${componentCls}-input`]: {
          cursor: "not-allowed",
          // Disabled for native input to enable Tooltip event handler
          pointerEvents: "none"
        },
        // Disabled radio styles
        background: colorBgContainerDisabled,
        borderColor: colorBorder,
        "&::after": {
          backgroundColor: dotColorDisabled
        }
      },
      [`${componentCls}-disabled + span`]: {
        color: colorTextDisabled,
        cursor: "not-allowed"
      },
      [`span${componentCls} + *`]: {
        paddingInlineStart: paddingXS,
        paddingInlineEnd: paddingXS
      }
    }
  };
};
const getRadioButtonStyle = (token) => {
  const {
    buttonColor,
    controlHeight,
    componentCls,
    lineWidth,
    lineType,
    colorBorder,
    motionDurationMid,
    buttonPaddingInline,
    fontSize,
    buttonBg,
    fontSizeLG,
    controlHeightLG,
    controlHeightSM,
    paddingXS,
    borderRadius,
    borderRadiusSM,
    borderRadiusLG,
    buttonCheckedBg,
    buttonSolidCheckedColor,
    colorTextDisabled,
    colorBgContainerDisabled,
    buttonCheckedBgDisabled,
    buttonCheckedColorDisabled,
    colorPrimary,
    colorPrimaryHover,
    colorPrimaryActive,
    buttonSolidCheckedBg,
    buttonSolidCheckedHoverBg,
    buttonSolidCheckedActiveBg,
    calc
  } = token;
  return {
    [`${componentCls}-button-wrapper`]: {
      position: "relative",
      display: "inline-block",
      height: controlHeight,
      margin: 0,
      paddingInline: buttonPaddingInline,
      paddingBlock: 0,
      color: buttonColor,
      fontSize,
      lineHeight: unit(calc(controlHeight).sub(calc(lineWidth).mul(2)).equal()),
      background: buttonBg,
      border: `${unit(lineWidth)} ${lineType} ${colorBorder}`,
      // strange align fix for chrome but works
      // https://gw.alipayobjects.com/zos/rmsportal/VFTfKXJuogBAXcvfAUWJ.gif
      borderBlockStartWidth: calc(lineWidth).add(0.02).equal(),
      borderInlineEndWidth: lineWidth,
      cursor: "pointer",
      transition: [`color`, `background-color`, `box-shadow`].map((prop) => `${prop} ${motionDurationMid}`).join(","),
      a: {
        color: buttonColor
      },
      [`> ${componentCls}-button`]: {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineStart: 0,
        zIndex: -1,
        width: "100%",
        height: "100%"
      },
      "&:not(:last-child)": {
        marginInlineEnd: calc(lineWidth).mul(-1).equal()
      },
      "&:first-child": {
        borderInlineStart: `${unit(lineWidth)} ${lineType} ${colorBorder}`,
        borderStartStartRadius: borderRadius,
        borderEndStartRadius: borderRadius
      },
      "&:last-child": {
        borderStartEndRadius: borderRadius,
        borderEndEndRadius: borderRadius
      },
      "&:first-child:last-child": {
        borderRadius
      },
      [`${componentCls}-group-large &`]: {
        height: controlHeightLG,
        fontSize: fontSizeLG,
        lineHeight: unit(calc(controlHeightLG).sub(calc(lineWidth).mul(2)).equal()),
        "&:first-child": {
          borderStartStartRadius: borderRadiusLG,
          borderEndStartRadius: borderRadiusLG
        },
        "&:last-child": {
          borderStartEndRadius: borderRadiusLG,
          borderEndEndRadius: borderRadiusLG
        }
      },
      [`${componentCls}-group-small &`]: {
        height: controlHeightSM,
        paddingInline: calc(paddingXS).sub(lineWidth).equal(),
        paddingBlock: 0,
        lineHeight: unit(calc(controlHeightSM).sub(calc(lineWidth).mul(2)).equal()),
        "&:first-child": {
          borderStartStartRadius: borderRadiusSM,
          borderEndStartRadius: borderRadiusSM
        },
        "&:last-child": {
          borderStartEndRadius: borderRadiusSM,
          borderEndEndRadius: borderRadiusSM
        }
      },
      [`${componentCls}-group-vertical > &`]: {
        marginInlineEnd: 0,
        borderRadius: 0,
        "&:not(:last-child)": {
          marginBlockEnd: calc(lineWidth).mul(-1).equal()
        },
        "&:first-child": {
          borderStartStartRadius: borderRadius,
          borderStartEndRadius: borderRadius,
          borderEndStartRadius: 0,
          borderEndEndRadius: 0
        },
        "&:last-child": {
          borderStartStartRadius: 0,
          borderStartEndRadius: 0,
          borderEndStartRadius: borderRadius,
          borderEndEndRadius: borderRadius
        },
        "&:first-child:last-child": {
          borderRadius
        }
      },
      [`${componentCls}-group-vertical${componentCls}-group-large > &`]: {
        "&:first-child": {
          borderStartStartRadius: borderRadiusLG,
          borderStartEndRadius: borderRadiusLG
        },
        "&:last-child": {
          borderEndStartRadius: borderRadiusLG,
          borderEndEndRadius: borderRadiusLG
        },
        "&:first-child:last-child": {
          borderRadius: borderRadiusLG
        }
      },
      [`${componentCls}-group-vertical${componentCls}-group-small > &`]: {
        "&:first-child": {
          borderStartStartRadius: borderRadiusSM,
          borderStartEndRadius: borderRadiusSM
        },
        "&:last-child": {
          borderEndStartRadius: borderRadiusSM,
          borderEndEndRadius: borderRadiusSM
        },
        "&:first-child:last-child": {
          borderRadius: borderRadiusSM
        }
      },
      "&:hover": {
        position: "relative",
        color: colorPrimary
      },
      "&:has(:focus-visible)": genFocusOutline(token),
      [`${componentCls}, input[type='checkbox'], input[type='radio']`]: {
        width: 0,
        height: 0,
        opacity: 0,
        pointerEvents: "none"
      },
      [`&-checked:not(${componentCls}-button-wrapper-disabled)`]: {
        zIndex: 1,
        color: colorPrimary,
        background: buttonCheckedBg,
        borderColor: colorPrimary,
        "&::before": {
          backgroundColor: colorPrimary
        },
        "&:first-child": {
          borderColor: colorPrimary
        },
        "&:hover": {
          color: colorPrimaryHover,
          borderColor: colorPrimaryHover,
          "&::before": {
            backgroundColor: colorPrimaryHover
          }
        },
        "&:active": {
          color: colorPrimaryActive,
          borderColor: colorPrimaryActive,
          "&::before": {
            backgroundColor: colorPrimaryActive
          }
        }
      },
      [`${componentCls}-group-solid &-checked:not(${componentCls}-button-wrapper-disabled)`]: {
        color: buttonSolidCheckedColor,
        background: buttonSolidCheckedBg,
        borderColor: buttonSolidCheckedBg,
        "&:hover": {
          color: buttonSolidCheckedColor,
          background: buttonSolidCheckedHoverBg,
          borderColor: buttonSolidCheckedHoverBg
        },
        "&:active": {
          color: buttonSolidCheckedColor,
          background: buttonSolidCheckedActiveBg,
          borderColor: buttonSolidCheckedActiveBg
        }
      },
      "&-disabled": {
        color: colorTextDisabled,
        backgroundColor: colorBgContainerDisabled,
        borderColor: colorBorder,
        cursor: "not-allowed",
        "&:first-child, &:hover": {
          color: colorTextDisabled,
          backgroundColor: colorBgContainerDisabled,
          borderColor: colorBorder
        }
      },
      [`&-disabled${componentCls}-button-wrapper-checked`]: {
        color: buttonCheckedColorDisabled,
        backgroundColor: buttonCheckedBgDisabled,
        borderColor: colorBorder,
        boxShadow: "none"
      },
      "&-block": {
        flex: 1,
        textAlign: "center"
      }
    }
  };
};
const prepareComponentToken$3 = (token) => {
  const {
    wireframe,
    padding,
    marginXS,
    lineWidth,
    fontSizeLG,
    colorText,
    colorBgContainer,
    colorTextDisabled,
    controlItemBgActiveDisabled,
    colorTextLightSolid,
    colorPrimary,
    colorPrimaryHover,
    colorPrimaryActive,
    colorWhite
  } = token;
  const dotPadding = 4;
  const radioSize = fontSizeLG;
  const radioDotSize = wireframe ? radioSize - dotPadding * 2 : radioSize - (dotPadding + lineWidth) * 2;
  return {
    // Radio
    radioSize,
    dotSize: radioDotSize,
    dotColorDisabled: colorTextDisabled,
    // Radio buttons
    buttonSolidCheckedColor: colorTextLightSolid,
    buttonSolidCheckedBg: colorPrimary,
    buttonSolidCheckedHoverBg: colorPrimaryHover,
    buttonSolidCheckedActiveBg: colorPrimaryActive,
    buttonBg: colorBgContainer,
    buttonCheckedBg: colorBgContainer,
    buttonColor: colorText,
    buttonCheckedBgDisabled: controlItemBgActiveDisabled,
    buttonCheckedColorDisabled: colorTextDisabled,
    buttonPaddingInline: padding - lineWidth,
    wrapperMarginInlineEnd: marginXS,
    // internal
    radioColor: wireframe ? colorPrimary : colorWhite,
    radioBgColor: wireframe ? colorBgContainer : colorPrimary
  };
};
const useStyle$9 = genStyleHooks("Radio", (token) => {
  const {
    controlOutline,
    controlOutlineWidth
  } = token;
  const radioFocusShadow = `0 0 0 ${unit(controlOutlineWidth)} ${controlOutline}`;
  const radioButtonFocusShadow = radioFocusShadow;
  const radioToken = merge$1(token, {
    radioFocusShadow,
    radioButtonFocusShadow
  });
  return [getGroupRadioStyle(radioToken), getRadioBasicStyle(radioToken), getRadioButtonStyle(radioToken)];
}, prepareComponentToken$3, {
  unitless: {
    radioSize: true,
    dotSize: true
  }
});
const InternalRadio = (props, ref) => {
  const groupContext = reactExports.useContext(RadioGroupContext);
  const radioOptionTypeContext = reactExports.useContext(RadioOptionTypeContext);
  const {
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = useComponentConfig("radio");
  const innerRef = reactExports.useRef(null);
  const mergedRef = composeRef(ref, innerRef);
  const {
    isFormItemInput
  } = reactExports.useContext(FormItemInputContext);
  const onChange = (e2) => {
    props.onChange?.(e2);
    groupContext?.onChange?.(e2);
  };
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    children,
    style,
    title,
    classNames,
    styles,
    checked,
    ...restProps
  } = props;
  const radioPrefixCls = getPrefixCls("radio", customizePrefixCls);
  const isButtonType = (groupContext?.optionType || radioOptionTypeContext) === "button";
  const prefixCls = isButtonType ? `${radioPrefixCls}-button` : radioPrefixCls;
  const rootCls = useCSSVarCls(radioPrefixCls);
  const [hashId, cssVarCls] = useStyle$9(radioPrefixCls, rootCls);
  const radioProps = {
    ...restProps
  };
  const disabled = reactExports.useContext(DisabledContext);
  const hasChecked = "checked" in props;
  let mergedChecked = checked;
  if (groupContext) {
    radioProps.name = groupContext.name;
    radioProps.onChange = onChange;
    mergedChecked = props.value === groupContext.value;
    radioProps.disabled = radioProps.disabled ?? groupContext.disabled;
  }
  if (hasChecked || groupContext) {
    radioProps.checked = mergedChecked;
  }
  radioProps.disabled = radioProps.disabled ?? disabled;
  const mergedProps = {
    ...props,
    ...radioProps,
    checked: mergedChecked
  };
  const contextStyleRoot = useSemanticRootStyle(contextStyle);
  const styleRoot = useSemanticRootStyle(style);
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, contextStyleRoot, styles, styleRoot], {
    props: mergedProps
  });
  const wrapperClassString = clsx(`${prefixCls}-wrapper`, {
    [`${prefixCls}-wrapper-checked`]: mergedChecked,
    [`${prefixCls}-wrapper-disabled`]: radioProps.disabled,
    [`${prefixCls}-wrapper-rtl`]: direction === "rtl",
    [`${prefixCls}-wrapper-in-form-item`]: isFormItemInput,
    [`${prefixCls}-wrapper-block`]: !!groupContext?.block
  }, contextClassName, className, rootClassName, mergedClassNames.root, hashId, cssVarCls, rootCls);
  const [onLabelClick, onInputClick] = useBubbleLock(radioProps.onClick);
  return /* @__PURE__ */ reactExports.createElement(Wave, {
    component: "Radio",
    disabled: radioProps.disabled
  }, /* @__PURE__ */ reactExports.createElement("label", {
    className: wrapperClassString,
    style: mergedStyles.root,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    title,
    onClick: onLabelClick
  }, /* @__PURE__ */ reactExports.createElement(Checkbox, {
    ...radioProps,
    className: clsx(mergedClassNames.icon, {
      [TARGET_CLS]: !isButtonType
    }),
    style: mergedStyles.icon,
    type: "radio",
    prefixCls,
    ref: mergedRef,
    onClick: onInputClick
  }), isReactRenderable(children) ? /* @__PURE__ */ reactExports.createElement("span", {
    className: clsx(`${prefixCls}-label`, mergedClassNames.label),
    style: mergedStyles.label
  }, children) : null));
};
const Radio$1 = /* @__PURE__ */ reactExports.forwardRef(InternalRadio);
const RadioGroup = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    getPrefixCls,
    direction
  } = reactExports.useContext(ConfigContext);
  const {
    name: formItemName
  } = reactExports.useContext(FormItemInputContext);
  const defaultName = useId(toNamePathStr(formItemName));
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    options,
    buttonStyle = "outline",
    disabled,
    children,
    size: customizeSize,
    style,
    id,
    optionType,
    name = defaultName,
    defaultValue,
    value: customizedValue,
    block = false,
    onChange,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    orientation,
    vertical,
    role = "radiogroup"
  } = props;
  const [value, setValue] = useControlledState(defaultValue, customizedValue);
  const onRadioChange = reactExports.useCallback((event) => {
    const lastValue = value;
    const val = event.target.value;
    if (!("value" in props)) {
      setValue(val);
    }
    if (val !== lastValue) {
      onChange?.(event);
    }
  }, [value, setValue, onChange]);
  const prefixCls = getPrefixCls("radio", customizePrefixCls);
  const groupPrefixCls = `${prefixCls}-group`;
  const rootCls = useCSSVarCls(prefixCls);
  const [hashId, cssVarCls] = useStyle$9(prefixCls, rootCls);
  let childrenToRender = children;
  if (options && options.length > 0) {
    childrenToRender = options.map((option) => {
      if (typeof option === "string" || isNumber(option)) {
        return /* @__PURE__ */ reactExports.createElement(Radio$1, {
          key: option.toString(),
          prefixCls,
          disabled,
          value: option,
          checked: value === option
        }, option);
      }
      return /* @__PURE__ */ reactExports.createElement(Radio$1, {
        key: `radio-group-value-options-${option.value}`,
        prefixCls,
        disabled: option.disabled || disabled,
        value: option.value,
        checked: value === option.value,
        title: option.title,
        style: option.style,
        className: option.className,
        id: option.id,
        required: option.required
      }, option.label);
    });
  }
  const mergedSize = useSize(customizeSize);
  const [, mergedVertical] = useOrientation(orientation, vertical);
  const classString = clsx(groupPrefixCls, `${groupPrefixCls}-${buttonStyle}`, {
    [`${groupPrefixCls}-large`]: mergedSize === "large",
    [`${groupPrefixCls}-small`]: mergedSize === "small",
    [`${groupPrefixCls}-rtl`]: direction === "rtl",
    [`${groupPrefixCls}-block`]: block
  }, className, rootClassName, hashId, cssVarCls, rootCls);
  const memoizedValue = reactExports.useMemo(() => ({
    onChange: onRadioChange,
    value,
    disabled,
    name,
    optionType,
    block
  }), [onRadioChange, value, disabled, name, optionType, block]);
  return /* @__PURE__ */ reactExports.createElement("div", {
    ...pickAttrs(props, {
      aria: true,
      data: true
    }),
    role,
    className: clsx(classString, {
      [`${prefixCls}-group-vertical`]: mergedVertical
    }),
    style,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    id,
    ref
  }, /* @__PURE__ */ reactExports.createElement(RadioGroupContextProvider, {
    value: memoizedValue
  }, childrenToRender));
});
const Group$1 = /* @__PURE__ */ reactExports.memo(RadioGroup);
const RadioButton = (props, ref) => {
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    ...radioProps
  } = props;
  const prefixCls = getPrefixCls("radio", customizePrefixCls);
  return /* @__PURE__ */ reactExports.createElement(RadioOptionTypeContextProvider, {
    value: "button"
  }, /* @__PURE__ */ reactExports.createElement(Radio$1, {
    prefixCls,
    ...radioProps,
    type: "radio",
    ref
  }));
};
const Button = /* @__PURE__ */ reactExports.forwardRef(RadioButton);
const Radio = Radio$1;
Radio.Button = Button;
Radio.Group = Group$1;
Radio.__ANT_RADIO = true;
function initInputToken(token) {
  return merge$1(token, {
    inputAffixPadding: token.paddingXXS
  });
}
const initComponentToken = (token) => {
  const {
    controlHeight,
    fontSize,
    lineHeight,
    lineWidth,
    controlHeightSM,
    controlHeightLG,
    fontSizeLG,
    lineHeightLG,
    paddingSM,
    controlPaddingHorizontalSM,
    controlPaddingHorizontal,
    colorFillAlter,
    colorPrimaryHover,
    colorPrimary,
    controlOutlineWidth,
    controlOutline,
    colorErrorOutline,
    colorWarningOutline,
    colorBgContainer,
    inputFontSize,
    inputFontSizeLG,
    inputFontSizeSM
  } = token;
  const mergedFontSize = inputFontSize || fontSize;
  const mergedFontSizeSM = inputFontSizeSM || mergedFontSize;
  const mergedFontSizeLG = inputFontSizeLG || fontSizeLG;
  const paddingBlock = Math.round((controlHeight - mergedFontSize * lineHeight) / 2 * 10) / 10 - lineWidth;
  const paddingBlockSM = Math.round((controlHeightSM - mergedFontSizeSM * lineHeight) / 2 * 10) / 10 - lineWidth;
  const paddingBlockLG = Math.ceil((controlHeightLG - mergedFontSizeLG * lineHeightLG) / 2 * 10) / 10 - lineWidth;
  return {
    paddingBlock: Math.max(paddingBlock, 0),
    paddingBlockSM: Math.max(paddingBlockSM, 0),
    paddingBlockLG: Math.max(paddingBlockLG, 0),
    paddingInline: paddingSM - lineWidth,
    paddingInlineSM: controlPaddingHorizontalSM - lineWidth,
    paddingInlineLG: controlPaddingHorizontal - lineWidth,
    addonBg: colorFillAlter,
    activeBorderColor: colorPrimary,
    hoverBorderColor: colorPrimaryHover,
    activeShadow: `0 0 0 ${controlOutlineWidth}px ${controlOutline}`,
    errorActiveShadow: `0 0 0 ${controlOutlineWidth}px ${colorErrorOutline}`,
    warningActiveShadow: `0 0 0 ${controlOutlineWidth}px ${colorWarningOutline}`,
    hoverBg: colorBgContainer,
    activeBg: colorBgContainer,
    inputFontSize: mergedFontSize,
    inputFontSizeLG: mergedFontSizeLG,
    inputFontSizeSM: mergedFontSizeSM
  };
};
const genHoverStyle = (token) => ({
  borderColor: token.hoverBorderColor,
  backgroundColor: token.hoverBg
});
const genDisabledStyle = (token) => ({
  color: token.colorTextDisabled,
  backgroundColor: token.colorBgContainerDisabled,
  borderColor: token.colorBorderDisabled,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": {
    ...genHoverStyle(merge$1(token, {
      hoverBorderColor: token.colorBorderDisabled,
      hoverBg: token.colorBgContainerDisabled
    }))
  }
});
const genBaseOutlinedStyle = (token, options) => ({
  background: token.colorBgContainer,
  borderWidth: token.lineWidth,
  borderStyle: token.lineType,
  borderColor: options.borderColor,
  "&:hover": {
    borderColor: options.hoverBorderColor,
    backgroundColor: token.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: options.activeBorderColor,
    boxShadow: options.activeShadow,
    outline: 0,
    backgroundColor: token.activeBg
  }
});
const genOutlinedStatusStyle = (token, options) => ({
  [`&${token.componentCls}-status-${options.status}:not(${token.componentCls}-disabled)`]: {
    ...genBaseOutlinedStyle(token, options),
    [`${token.componentCls}-prefix, ${token.componentCls}-suffix`]: {
      color: options.affixColor
    }
  },
  [`&${token.componentCls}-status-${options.status}${token.componentCls}-disabled`]: {
    borderColor: options.borderColor
  }
});
const genOutlinedStyle = (token, extraStyles) => ({
  "&-outlined": {
    ...genBaseOutlinedStyle(token, {
      borderColor: token.colorBorder,
      hoverBorderColor: token.hoverBorderColor,
      activeBorderColor: token.activeBorderColor,
      activeShadow: token.activeShadow
    }),
    [`&${token.componentCls}-disabled, &[disabled]`]: {
      ...genDisabledStyle(token)
    },
    ...genOutlinedStatusStyle(token, {
      status: "error",
      borderColor: token.colorError,
      hoverBorderColor: token.colorErrorBorderHover,
      activeBorderColor: token.colorError,
      activeShadow: token.errorActiveShadow,
      affixColor: token.colorErrorAffix
    }),
    ...genOutlinedStatusStyle(token, {
      status: "warning",
      borderColor: token.colorWarning,
      hoverBorderColor: token.colorWarningBorderHover,
      activeBorderColor: token.colorWarning,
      activeShadow: token.warningActiveShadow,
      affixColor: token.colorWarningAffix
    }),
    ...extraStyles
  }
});
const genOutlinedGroupStatusStyle = (token, options) => ({
  [`&${token.componentCls}-group-wrapper-status-${options.status}`]: {
    [`${token.componentCls}-group-addon`]: {
      borderColor: options.addonBorderColor,
      color: options.addonColor
    }
  }
});
const genOutlinedGroupStyle = (token) => ({
  "&-outlined": {
    [`${token.componentCls}-group`]: {
      "&-addon": {
        background: token.addonBg,
        border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    },
    ...genOutlinedGroupStatusStyle(token, {
      status: "error",
      addonBorderColor: token.colorError,
      addonColor: token.colorErrorText
    }),
    ...genOutlinedGroupStatusStyle(token, {
      status: "warning",
      addonBorderColor: token.colorWarning,
      addonColor: token.colorWarningText
    }),
    [`&${token.componentCls}-group-wrapper-disabled`]: {
      [`${token.componentCls}-group-addon`]: {
        ...genDisabledStyle(token)
      }
    }
  }
});
const borderlessFocusVisibleSelector = "&:focus-visible, &:has(input:focus-visible), &:has(textarea:focus-visible)";
const genBorderlessFocusVisibleStyle = (token, outlineColor) => ({
  outline: `${unit(token.lineWidth)} ${token.lineType} ${outlineColor}`,
  outlineOffset: unit(token.calc(token.lineWidth).mul(-1).equal()),
  transition: [`outline-offset`, `outline`].map((prop) => `${prop} 0s`).join(", ")
});
const genBorderlessStatusStyle = (token, options) => ({
  "&, & input, & textarea": {
    color: options.color
  },
  [borderlessFocusVisibleSelector]: genBorderlessFocusVisibleStyle(token, options.color),
  [`${token.componentCls}-prefix, ${token.componentCls}-suffix`]: {
    color: options.affixColor
  }
});
const genBorderlessStyle = (token, extraStyles) => {
  const {
    componentCls
  } = token;
  return {
    "&-borderless": {
      background: "transparent",
      border: "none",
      // Compensate for the removed border to maintain consistent height with other components
      // (e.g. Select borderless) that keep a transparent border.
      paddingBlock: token.calc(token.paddingBlock).add(token.lineWidth).equal(),
      [`&${componentCls}-sm, &${componentCls}-affix-wrapper-sm`]: {
        paddingBlock: token.calc(token.paddingBlockSM).add(token.lineWidth).equal()
      },
      [`&${componentCls}-lg, &${componentCls}-affix-wrapper-lg`]: {
        paddingBlock: token.calc(token.paddingBlockLG).add(token.lineWidth).equal()
      },
      "&:focus, &:focus-within": {
        outline: "none"
      },
      [borderlessFocusVisibleSelector]: genBorderlessFocusVisibleStyle(token, token.activeBorderColor),
      // >>>>> Disabled
      [`&${componentCls}-disabled, &[disabled]`]: {
        color: token.colorTextDisabled,
        cursor: "not-allowed"
      },
      // >>>>> Status
      [`&${componentCls}-status-error`]: genBorderlessStatusStyle(token, {
        color: token.colorError,
        affixColor: token.colorErrorAffix
      }),
      [`&${componentCls}-status-warning`]: genBorderlessStatusStyle(token, {
        color: token.colorWarning,
        affixColor: token.colorWarningAffix
      }),
      ...extraStyles
    }
  };
};
const genBaseFilledStyle = (token, options) => ({
  background: options.bg,
  borderWidth: token.lineWidth,
  borderStyle: token.lineType,
  borderColor: "transparent",
  "input&, & input, textarea&, & textarea": {
    color: options?.inputColor ?? "unset"
  },
  "&:hover": {
    background: options.hoverBg
  },
  "&:focus, &:focus-within": {
    outline: 0,
    borderColor: options.activeBorderColor,
    backgroundColor: token.activeBg
  }
});
const genFilledStatusStyle = (token, options) => ({
  [`&${token.componentCls}-status-${options.status}:not(${token.componentCls}-disabled)`]: {
    ...genBaseFilledStyle(token, options),
    [`${token.componentCls}-prefix, ${token.componentCls}-suffix`]: {
      color: options.affixColor
    }
  }
});
const genFilledStyle = (token, extraStyles) => ({
  "&-filled": {
    ...genBaseFilledStyle(token, {
      bg: token.colorFillTertiary,
      hoverBg: token.colorFillSecondary,
      activeBorderColor: token.activeBorderColor,
      inputColor: token.colorText
    }),
    [`&${token.componentCls}-disabled, &[disabled]`]: {
      ...genDisabledStyle(token)
    },
    ...genFilledStatusStyle(token, {
      status: "error",
      bg: token.colorErrorBg,
      hoverBg: token.colorErrorBgHover,
      activeBorderColor: token.colorError,
      inputColor: token.colorErrorText,
      affixColor: token.colorErrorAffix
    }),
    ...genFilledStatusStyle(token, {
      status: "warning",
      bg: token.colorWarningBg,
      hoverBg: token.colorWarningBgHover,
      activeBorderColor: token.colorWarning,
      inputColor: token.colorWarningText,
      affixColor: token.colorWarningAffix
    }),
    ...extraStyles
  }
});
const genFilledGroupStatusStyle = (token, options) => ({
  [`&${token.componentCls}-group-wrapper-status-${options.status}`]: {
    [`${token.componentCls}-group-addon`]: {
      background: options.addonBg,
      color: options.addonColor
    }
  }
});
const genFilledGroupStyle = (token) => ({
  "&-filled": {
    [`${token.componentCls}-group-addon`]: {
      background: token.colorFillTertiary,
      "&:last-child": {
        position: "static"
      }
    },
    ...genFilledGroupStatusStyle(token, {
      status: "error",
      addonBg: token.colorErrorBg,
      addonColor: token.colorErrorText
    }),
    ...genFilledGroupStatusStyle(token, {
      status: "warning",
      addonBg: token.colorWarningBg,
      addonColor: token.colorWarningText
    }),
    [`&${token.componentCls}-group-wrapper-disabled`]: {
      [`${token.componentCls}-group`]: {
        "&-addon": {
          background: token.colorFillTertiary,
          color: token.colorTextDisabled
        },
        "&-addon:first-child": {
          borderInlineStart: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderTop: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderTop: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
        }
      }
    }
  }
});
const genBaseUnderlinedStyle = (token, options) => ({
  background: token.colorBgContainer,
  borderWidth: `${unit(token.lineWidth)} 0`,
  borderStyle: `${token.lineType} none`,
  borderColor: `transparent transparent ${options.borderColor} transparent`,
  borderRadius: 0,
  "&:hover": {
    borderColor: `transparent transparent ${options.hoverBorderColor} transparent`,
    backgroundColor: token.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: `transparent transparent ${options.activeBorderColor} transparent`,
    outline: 0,
    backgroundColor: token.activeBg
  }
});
const genUnderlinedStatusStyle = (token, options) => ({
  [`&${token.componentCls}-status-${options.status}:not(${token.componentCls}-disabled)`]: {
    ...genBaseUnderlinedStyle(token, options),
    [`${token.componentCls}-prefix, ${token.componentCls}-suffix`]: {
      color: options.affixColor
    }
  },
  [`&${token.componentCls}-status-${options.status}${token.componentCls}-disabled`]: {
    borderColor: `transparent transparent ${options.borderColor} transparent`
  }
});
const genUnderlinedStyle = (token, extraStyles) => ({
  "&-underlined": {
    ...genBaseUnderlinedStyle(token, {
      borderColor: token.colorBorder,
      hoverBorderColor: token.hoverBorderColor,
      activeBorderColor: token.activeBorderColor,
      activeShadow: token.activeShadow
    }),
    // >>>>> Disabled
    [`&${token.componentCls}-disabled, &[disabled]`]: {
      color: token.colorTextDisabled,
      boxShadow: "none",
      cursor: "not-allowed",
      "&:hover": {
        borderColor: `transparent transparent ${token.colorBorder} transparent`
      }
    },
    "input[disabled], textarea[disabled]": {
      cursor: "not-allowed"
    },
    ...genUnderlinedStatusStyle(token, {
      status: "error",
      borderColor: token.colorError,
      hoverBorderColor: token.colorErrorBorderHover,
      activeBorderColor: token.colorError,
      activeShadow: token.errorActiveShadow,
      affixColor: token.colorErrorAffix
    }),
    ...genUnderlinedStatusStyle(token, {
      status: "warning",
      borderColor: token.colorWarning,
      hoverBorderColor: token.colorWarningBorderHover,
      activeBorderColor: token.colorWarning,
      activeShadow: token.warningActiveShadow,
      affixColor: token.colorWarningAffix
    }),
    ...extraStyles
  }
});
const genPlaceholderStyle = (color) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
});
const genInputLargeStyle = (token) => {
  const {
    paddingBlockLG,
    lineHeightLG,
    borderRadiusLG,
    paddingInlineLG
  } = token;
  return {
    padding: `${unit(paddingBlockLG)} ${unit(paddingInlineLG)}`,
    fontSize: token.inputFontSizeLG,
    lineHeight: lineHeightLG,
    borderRadius: borderRadiusLG
  };
};
const genInputSmallStyle = (token) => ({
  padding: `${unit(token.paddingBlockSM)} ${unit(token.paddingInlineSM)}`,
  fontSize: token.inputFontSizeSM,
  borderRadius: token.borderRadiusSM
});
const genBasicInputStyle = (token, option = {}) => ({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${unit(token.paddingBlock)} ${unit(token.paddingInline)}`,
  color: token.colorText,
  fontSize: token.inputFontSize,
  lineHeight: token.lineHeight,
  borderRadius: token.borderRadius,
  transition: `all ${token.motionDurationMid}`,
  ...genPlaceholderStyle(token.colorTextPlaceholder),
  // Size
  "&-lg": {
    ...genInputLargeStyle(token),
    ...option.largeStyle
  },
  "&-sm": {
    ...genInputSmallStyle(token),
    ...option.smallStyle
  },
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
});
const genInputGroupStyle = (token) => {
  const {
    componentCls,
    antCls
  } = token;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: token.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${componentCls}, &-lg > ${componentCls}-group-addon`]: {
      ...genInputLargeStyle(token)
    },
    [`&-sm ${componentCls}, &-sm > ${componentCls}-group-addon`]: {
      ...genInputSmallStyle(token)
    },
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${antCls}-select-single`]: {
      height: token.controlHeightLG
    },
    [`&-sm ${antCls}-select-single`]: {
      height: token.controlHeightSM
    },
    [`> ${componentCls}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${componentCls}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${unit(token.paddingInline)}`,
        color: token.colorText,
        fontWeight: "normal",
        fontSize: token.inputFontSize,
        textAlign: "center",
        borderRadius: token.borderRadius,
        transition: `all ${token.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${antCls}-select`]: {
          margin: `${unit(token.calc(token.paddingBlock).add(1).mul(-1).equal())} ${unit(token.calc(token.paddingInline).mul(-1).equal())}`,
          [`&${antCls}-select-single:not(${antCls}-select-customize-input):not(${antCls}-pagination-size-changer)`]: {
            backgroundColor: "inherit",
            border: `${unit(token.lineWidth)} ${token.lineType} transparent`,
            boxShadow: "none"
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${antCls}-cascader-picker`]: {
          margin: `-9px ${unit(token.calc(token.paddingInline).mul(-1).equal())}`,
          backgroundColor: "transparent",
          [`${antCls}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      }
    },
    [componentCls]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1
      }
    },
    // Reset rounded corners
    [`> ${componentCls}:first-child, ${componentCls}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${antCls}-select`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${componentCls}-affix-wrapper`]: {
      [`&:not(:first-child) ${componentCls}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${componentCls}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${componentCls}:last-child, ${componentCls}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${antCls}-select`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${componentCls}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      },
      "&:not(:first-child)": {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${componentCls}-group-compact`]: {
      display: "block",
      ...clearFix(),
      [`${componentCls}-group-addon, ${componentCls}-group-wrap, > ${componentCls}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: token.lineWidth,
          "&:hover, &:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-flex",
        float: "none",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design-pro/issues/139
        borderRadius: 0
      },
      [`
        & > ${componentCls}-affix-wrapper,
        & > ${componentCls}-number-affix-wrapper,
        & > ${antCls}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal(),
        borderInlineEndWidth: token.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [componentCls]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${antCls}-select,
      & > ${antCls}-select-auto-complete ${componentCls},
      & > ${antCls}-cascader-picker ${componentCls},
      & > ${componentCls}-group-wrapper ${componentCls}`]: {
        borderInlineEndWidth: token.lineWidth,
        borderRadius: 0,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`& > ${antCls}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${antCls}-select > ${antCls}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${antCls}-select:first-child,
      & > ${antCls}-select-auto-complete:first-child ${componentCls},
      & > ${antCls}-cascader-picker:first-child ${componentCls}`]: {
        borderStartStartRadius: token.borderRadius,
        borderEndStartRadius: token.borderRadius
      },
      [`& > *:last-child,
      & > ${antCls}-select:last-child,
      & > ${antCls}-cascader-picker:last-child ${componentCls},
      & > ${antCls}-cascader-picker-focused:last-child ${componentCls}`]: {
        borderInlineEndWidth: token.lineWidth,
        borderStartEndRadius: token.borderRadius,
        borderEndEndRadius: token.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${antCls}-select-auto-complete ${componentCls}`]: {
        verticalAlign: "top"
      },
      [`${componentCls}-group-wrapper + ${componentCls}-group-wrapper`]: {
        marginInlineStart: token.calc(token.lineWidth).mul(-1).equal(),
        [`${componentCls}-affix-wrapper`]: {
          // borderRadius: 0,
        }
      }
    }
  };
};
const genInputStyle = (token) => {
  const {
    componentCls,
    controlHeightSM,
    lineWidth,
    calc
  } = token;
  const FIXED_CHROME_COLOR_HEIGHT = 16;
  const colorSmallPadding = calc(controlHeightSM).sub(calc(lineWidth).mul(2)).sub(FIXED_CHROME_COLOR_HEIGHT).div(2).equal();
  return {
    [componentCls]: {
      ...resetComponent(token),
      ...genBasicInputStyle(token),
      // Variants
      ...genOutlinedStyle(token),
      ...genFilledStyle(token),
      ...genBorderlessStyle(token),
      ...genUnderlinedStyle(token),
      '&[type="color"]': {
        height: token.controlHeight,
        [`&${componentCls}-lg`]: {
          height: token.controlHeightLG
        },
        [`&${componentCls}-sm`]: {
          height: controlHeightSM,
          paddingTop: colorSmallPadding,
          paddingBottom: colorSmallPadding
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        appearance: "none"
      }
    }
  };
};
const genAllowClearStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    // ========================= Input =========================
    [`${componentCls}-clear-icon`]: {
      margin: 0,
      padding: 0,
      lineHeight: 0,
      color: token.colorTextQuaternary,
      fontSize: token.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${token.motionDurationSlow}`,
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      "&:hover": {
        color: token.colorIcon
      },
      "&:focus-visible": {
        color: token.colorIcon,
        borderRadius: token.borderRadiusSM,
        ...genFocusOutline(token)
      },
      "&:active": {
        color: token.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${unit(token.inputAffixPadding)}`
      }
    }
  };
};
const genAffixStyle = (token) => {
  const {
    componentCls,
    inputAffixPadding,
    colorTextDescription,
    motionDurationSlow,
    colorIcon,
    colorIconHover
  } = token;
  const affixCls = `${componentCls}-affix-wrapper`;
  const affixClsDisabled = `${componentCls}-affix-wrapper-disabled`;
  return {
    [affixCls]: {
      ...genBasicInputStyle(token),
      display: "inline-flex",
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`> input${componentCls}`]: {
        padding: 0
      },
      [`> input${componentCls}, > textarea${componentCls}`]: {
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        background: "transparent",
        color: "inherit",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [componentCls]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: token.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: colorTextDescription,
          direction: "ltr"
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: token.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: inputAffixPadding
        },
        "&-suffix": {
          marginInlineStart: inputAffixPadding
        },
        // password
        "&-password-icon": {
          display: "inline-flex",
          color: colorIcon,
          cursor: "pointer",
          transition: `all ${motionDurationSlow}`,
          "&:hover": {
            color: colorIconHover
          }
        }
      },
      ...genAllowClearStyle(token)
    },
    // 覆盖 affix-wrapper borderRadius！
    [`${componentCls}-underlined`]: {
      borderRadius: 0
    },
    [affixClsDisabled]: {
      // password disabled
      [`${componentCls}-password-icon`]: {
        color: colorIcon,
        cursor: "not-allowed",
        "&:hover": {
          color: colorIcon
        }
      }
    }
  };
};
const genGroupStyle = (token) => {
  const {
    componentCls,
    borderRadiusLG,
    borderRadiusSM
  } = token;
  return {
    [`${componentCls}-group`]: {
      // Style for input-group: input with label, with button or dropdown...
      ...resetComponent(token),
      ...genInputGroupStyle(token),
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": {
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design/issues/6403
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${componentCls}-group-addon`]: {
            borderRadius: borderRadiusLG,
            fontSize: token.inputFontSizeLG
          }
        },
        "&-sm": {
          [`${componentCls}-group-addon`]: {
            borderRadius: borderRadiusSM
          }
        },
        // Variants
        ...genOutlinedGroupStyle(token),
        ...genFilledGroupStyle(token),
        // '&-disabled': {
        //   [`${componentCls}-group-addon`]: {
        //     ...genDisabledStyle(token),
        //   },
        // },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${componentCls}-compact-first-item):not(${componentCls}-compact-last-item)${componentCls}-compact-item`]: {
          [`${componentCls}, ${componentCls}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${componentCls}-compact-last-item)${componentCls}-compact-first-item`]: {
          [`${componentCls}, ${componentCls}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${componentCls}-compact-first-item)${componentCls}-compact-last-item`]: {
          [`${componentCls}, ${componentCls}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        },
        // Fix the issue of input use show-count param in space compact mode
        // https://github.com/ant-design/ant-design/issues/46872
        [`&:not(${componentCls}-compact-last-item)${componentCls}-compact-item`]: {
          [`${componentCls}-affix-wrapper`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        // Fix the issue of input use `addonAfter` param in space compact mode
        // https://github.com/ant-design/ant-design/issues/52483
        [`&:not(${componentCls}-compact-first-item)${componentCls}-compact-item`]: {
          [`${componentCls}-affix-wrapper`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        }
      }
    }
  };
};
const genRangeStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-out-of-range`]: {
      [`&, & input, & textarea, ${componentCls}-show-count-suffix, ${componentCls}-data-count`]: {
        color: token.colorError
      }
    }
  };
};
const useSharedStyle = genStyleHooks(["Input", "Shared"], (token) => {
  const inputToken = merge$1(token, initInputToken(token));
  return [genInputStyle(inputToken), genAffixStyle(inputToken)];
}, initComponentToken, {
  resetFont: false
});
const useStyle$8 = genStyleHooks(["Input", "Component"], (token) => {
  const inputToken = merge$1(token, initInputToken(token));
  return [
    genGroupStyle(inputToken),
    genRangeStyle(inputToken),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    genCompactItemStyle(inputToken, {
      focus: true,
      focusElCls: `${inputToken.componentCls}-affix-wrapper-focused`
    })
  ];
}, initComponentToken, {
  resetFont: false
});
const RowContext = /* @__PURE__ */ reactExports.createContext({});
function parseFlex(flex) {
  if (flex === "auto") {
    return "1 1 auto";
  }
  if (isNumber(flex)) {
    return `${flex} ${flex} auto`;
  }
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }
  return flex;
}
const Col = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    getPrefixCls,
    direction
  } = reactExports.useContext(ConfigContext);
  const {
    gutter,
    wrap
  } = reactExports.useContext(RowContext);
  const {
    prefixCls: customizePrefixCls,
    span,
    order,
    offset,
    push,
    pull,
    className,
    children,
    flex,
    style,
    ...others
  } = props;
  const prefixCls = getPrefixCls("col", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const [hashId, cssVarCls] = useColStyle(prefixCls);
  const [varName] = genCssVar(rootPrefixCls, "col");
  const sizeStyle = {};
  let sizeClassObj = {};
  responsiveArrayReversed.forEach((size) => {
    let sizeProps = {};
    const propSize = props[size];
    if (isNumber(propSize)) {
      sizeProps.span = propSize;
    } else if (isPlainObject(propSize)) {
      sizeProps = propSize || {};
    }
    delete others[size];
    sizeClassObj = {
      ...sizeClassObj,
      [`${prefixCls}-${size}-${sizeProps.span}`]: isNonNullable(sizeProps.span),
      [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
      [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
      [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
      [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
      [`${prefixCls}-rtl`]: direction === "rtl"
    };
    if (sizeProps.flex) {
      sizeClassObj[`${prefixCls}-${size}-flex`] = true;
      sizeStyle[varName(`${size}-flex`)] = parseFlex(sizeProps.flex);
    }
  });
  const classes = clsx(prefixCls, {
    [`${prefixCls}-${span}`]: span !== void 0,
    [`${prefixCls}-order-${order}`]: order,
    [`${prefixCls}-offset-${offset}`]: offset,
    [`${prefixCls}-push-${push}`]: push,
    [`${prefixCls}-pull-${pull}`]: pull
  }, className, sizeClassObj, hashId, cssVarCls);
  const mergedStyle = {};
  if (gutter?.[0]) {
    const horizontalGutter = isNumber(gutter[0]) ? `${gutter[0] / 2}px` : `calc(${gutter[0]} / 2)`;
    mergedStyle.paddingInline = horizontalGutter;
  }
  if (flex) {
    mergedStyle.flex = parseFlex(flex);
    if (wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }
  return /* @__PURE__ */ reactExports.createElement("div", {
    ...others,
    style: {
      ...mergedStyle,
      ...style,
      ...sizeStyle
    },
    className: classes,
    ref
  }, children);
});
function useGutter(gutter, screens) {
  const results = [void 0, void 0];
  const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, void 0];
  const mergedScreens = screens || {
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true,
    xxxl: true
  };
  normalizedGutter.forEach((g, index) => {
    if (isPlainObject(g)) {
      for (let i = 0; i < responsiveArray.length; i++) {
        const breakpoint = responsiveArray[i];
        if (mergedScreens[breakpoint] && g[breakpoint] !== void 0) {
          results[index] = g[breakpoint];
          break;
        }
      }
    } else {
      results[index] = g;
    }
  });
  return results;
}
const useMergedPropByScreen = (oriProp, screen) => {
  const [prop, setProp] = reactExports.useState(() => isString(oriProp) ? oriProp : "");
  const calcMergedAlignOrJustify = () => {
    if (isString(oriProp)) {
      setProp(oriProp);
    }
    if (!isPlainObject(oriProp)) {
      return;
    }
    for (let i = 0; i < responsiveArray.length; i++) {
      const breakpoint = responsiveArray[i];
      if (!screen || !screen[breakpoint]) {
        continue;
      }
      const curVal = oriProp[breakpoint];
      if (curVal !== void 0) {
        setProp(curVal);
        return;
      }
    }
  };
  reactExports.useEffect(() => {
    calcMergedAlignOrJustify();
  }, [JSON.stringify(oriProp), screen]);
  return prop;
};
const Row = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    justify,
    align,
    className,
    style,
    children,
    gutter = 0,
    wrap,
    ...others
  } = props;
  const {
    getPrefixCls,
    direction
  } = reactExports.useContext(ConfigContext);
  const screens = useBreakpoint(true, null);
  const mergedAlign = useMergedPropByScreen(align, screens);
  const mergedJustify = useMergedPropByScreen(justify, screens);
  const prefixCls = getPrefixCls("row", customizePrefixCls);
  const [hashId, cssVarCls] = useRowStyle(prefixCls);
  const gutters = useGutter(gutter, screens);
  const classes = clsx(prefixCls, {
    [`${prefixCls}-no-wrap`]: wrap === false,
    [`${prefixCls}-${mergedJustify}`]: mergedJustify,
    [`${prefixCls}-${mergedAlign}`]: mergedAlign,
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, className, hashId, cssVarCls);
  const rowStyle = {};
  if (gutters?.[0]) {
    const horizontalGutter = isNumber(gutters[0]) ? `${gutters[0] / -2}px` : `calc(${gutters[0]} / -2)`;
    rowStyle.marginInline = horizontalGutter;
  }
  const [gutterH, gutterV] = gutters;
  rowStyle.rowGap = gutterV;
  const rowContext = reactExports.useMemo(() => ({
    gutter: [gutterH, gutterV],
    wrap
  }), [gutterH, gutterV, wrap]);
  return /* @__PURE__ */ reactExports.createElement(RowContext.Provider, {
    value: rowContext
  }, /* @__PURE__ */ reactExports.createElement("div", {
    ...others,
    className: classes,
    style: {
      ...rowStyle,
      ...style
    },
    ref
  }, children));
});
const genSpaceAddonStyle = (token) => {
  const {
    componentCls,
    borderRadius,
    paddingSM,
    colorBorder,
    paddingXS,
    fontSizeLG,
    fontSizeSM,
    borderRadiusLG,
    borderRadiusSM,
    colorBgContainerDisabled,
    lineWidth,
    antCls
  } = token;
  const [varName, varRef] = genCssVar(antCls, "space-addon");
  return {
    [componentCls]: [
      // ==========================================================
      // ==                         Base                         ==
      // ==========================================================
      {
        ...resetComponent(token),
        display: "inline-flex",
        alignItems: "center",
        gap: 0,
        whiteSpace: "nowrap",
        paddingInline: paddingSM,
        margin: 0,
        borderWidth: lineWidth,
        borderStyle: "solid",
        borderRadius,
        "&:hover": {
          zIndex: 0
        },
        [`&${componentCls}-disabled`]: {
          color: token.colorTextDisabled
        },
        "&-large": {
          fontSize: fontSizeLG,
          borderRadius: borderRadiusLG
        },
        "&-small": {
          paddingInline: paddingXS,
          borderRadius: borderRadiusSM,
          fontSize: fontSizeSM
        },
        "&-compact-last-item": {
          borderEndStartRadius: 0,
          borderStartStartRadius: 0
        },
        "&-compact-first-item": {
          borderEndEndRadius: 0,
          borderStartEndRadius: 0
        },
        "&-compact-item:not(:first-child):not(:last-child)": {
          borderRadius: 0
        },
        "&-compact-item:not(:last-child)": {
          borderInlineEndWidth: 0
        },
        "&-compact-item:not(:first-child)": {
          borderInlineStartWidth: 0
        }
      },
      // ==========================================================
      // ==                       Variants                       ==
      // ==========================================================
      {
        [varName("addon-border-color")]: colorBorder,
        [varName("addon-background")]: colorBgContainerDisabled,
        // Filled
        [varName("addon-border-color-outlined")]: colorBorder,
        [varName("addon-background-filled")]: colorBgContainerDisabled,
        borderColor: varRef("addon-border-color"),
        background: varRef("addon-background"),
        // ======================= Outlined =======================
        "&-variant-outlined": {
          [varName("addon-border-color")]: varRef("addon-border-color-outlined")
        },
        // ======================== Filled ========================
        "&-variant-filled": {
          [varName("addon-border-color")]: "transparent",
          [varName("addon-background")]: varRef("addon-background-filled"),
          // Disabled
          [`&${componentCls}-disabled`]: {
            [varName("addon-border-color")]: colorBorder,
            [varName("addon-background")]: colorBgContainerDisabled
          }
        },
        // ====================== Borderless ======================
        "&-variant-borderless": {
          border: "none",
          background: "transparent"
        },
        // ====================== Underlined ======================
        "&-variant-underlined": {
          border: "none",
          background: "transparent"
        }
      },
      // ==========================================================
      // ==                        Status                        ==
      // ==========================================================
      {
        "&-status-error": {
          [varName("addon-border-color-outlined")]: token.colorError,
          [varName("addon-background-filled")]: token.colorErrorBg,
          color: token.colorError
        },
        "&-status-warning": {
          [varName("addon-border-color-outlined")]: token.colorWarning,
          [varName("addon-background-filled")]: token.colorWarningBg,
          color: token.colorWarning
        }
      }
    ]
  };
};
const useStyle$7 = genStyleHooks("Addon", (token) => [genSpaceAddonStyle(token), genCompactItemStyle(token, {
  focus: false
})]);
const SpaceAddon = /* @__PURE__ */ React.forwardRef((props, ref) => {
  const {
    className,
    children,
    style,
    prefixCls: customizePrefixCls,
    variant = "outlined",
    disabled,
    status,
    ...restProps
  } = props;
  const {
    getPrefixCls,
    direction: directionConfig
  } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("space-addon", customizePrefixCls);
  const [hashId, cssVarCls] = useStyle$7(prefixCls);
  const {
    compactItemClassnames,
    compactSize
  } = useCompactItemContext(prefixCls, directionConfig);
  const statusCls = getStatusClassNames(prefixCls, status);
  const classes = clsx(prefixCls, hashId, compactItemClassnames, cssVarCls, `${prefixCls}-variant-${variant}`, statusCls, {
    [`${prefixCls}-${compactSize}`]: compactSize,
    [`${prefixCls}-disabled`]: disabled
  }, className);
  return /* @__PURE__ */ React.createElement("div", {
    ref,
    className: classes,
    style,
    ...restProps
  }, children);
});
function useRemovePasswordTimeout(inputRef, triggerOnMount) {
  const removePasswordTimeoutRef = reactExports.useRef([]);
  const removePasswordTimeout = () => {
    removePasswordTimeoutRef.current.push(setTimeout(() => {
      if (inputRef.current?.input && inputRef.current?.input.getAttribute("type") === "password" && inputRef.current?.input.hasAttribute("value")) {
        inputRef.current?.input.removeAttribute("value");
      }
    }));
  };
  reactExports.useEffect(() => {
    if (triggerOnMount) {
      removePasswordTimeout();
    }
    return () => removePasswordTimeoutRef.current.forEach((timer) => {
      if (timer) {
        clearTimeout(timer);
      }
    });
  }, []);
  return removePasswordTimeout;
}
function hasPrefixSuffix(props) {
  return !!(props.prefix || props.suffix || props.allowClear || props.showCount);
}
const Input$1 = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    bordered = true,
    status: customStatus,
    size: customSize,
    disabled: customDisabled,
    onBlur,
    onFocus,
    suffix,
    allowClear,
    addonAfter,
    addonBefore,
    className,
    style,
    styles,
    rootClassName,
    onChange,
    classNames,
    variant: customVariant,
    ...rest
  } = props;
  const {
    getPrefixCls,
    direction,
    allowClear: contextAllowClear,
    autoComplete: contextAutoComplete,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = useComponentConfig("input");
  const prefixCls = getPrefixCls("input", customizePrefixCls);
  const inputRef = reactExports.useRef(null);
  const rootCls = useCSSVarCls(prefixCls);
  const [hashId, cssVarCls] = useSharedStyle(prefixCls, rootClassName);
  useStyle$8(prefixCls, rootCls);
  const {
    compactSize,
    compactItemClassnames
  } = useCompactItemContext(prefixCls, direction);
  const mergedSize = useSize((ctx) => customSize ?? compactSize ?? ctx);
  const disabled = React.useContext(DisabledContext);
  const mergedDisabled = customDisabled ?? disabled;
  const mergedProps = {
    ...props,
    size: mergedSize,
    disabled: mergedDisabled
  };
  const contextStyleRoot = useSemanticRootStyle(contextStyle);
  const styleRoot = useSemanticRootStyle(style);
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, contextStyleRoot, styles, styleRoot], {
    props: mergedProps
  });
  const {
    status: contextStatus,
    hasFeedback,
    feedbackIcon
  } = reactExports.useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  const inputHasPrefixSuffix = hasPrefixSuffix(props) || !!hasFeedback;
  reactExports.useRef(inputHasPrefixSuffix);
  const removePasswordTimeout = useRemovePasswordTimeout(inputRef, true);
  const handleBlur = (e2) => {
    removePasswordTimeout();
    onBlur?.(e2);
  };
  const handleFocus = (e2) => {
    removePasswordTimeout();
    onFocus?.(e2);
  };
  const handleChange = (e2) => {
    removePasswordTimeout();
    onChange?.(e2);
  };
  const suffixNode = (hasFeedback || suffix) && /* @__PURE__ */ React.createElement(React.Fragment, null, suffix, hasFeedback && feedbackIcon);
  const mergedAllowClear = useAllowClear({
    allowClear,
    contextAllowClear,
    componentName: "Input"
  });
  const [variant, enableVariantCls] = useVariant("input", customVariant, bordered);
  return /* @__PURE__ */ React.createElement(Input$2, {
    ref: composeRef(ref, inputRef),
    prefixCls,
    autoComplete: contextAutoComplete,
    ...rest,
    disabled: mergedDisabled,
    onBlur: handleBlur,
    onFocus: handleFocus,
    style: mergedStyles.root,
    styles: mergedStyles,
    suffix: suffixNode,
    allowClear: mergedAllowClear,
    className: clsx(className, rootClassName, cssVarCls, rootCls, compactItemClassnames, contextClassName, mergedClassNames.root),
    onChange: handleChange,
    addonBefore: addonBefore && /* @__PURE__ */ React.createElement(ContextIsolator, {
      form: true,
      space: true
    }, addonBefore),
    addonAfter: addonAfter && /* @__PURE__ */ React.createElement(ContextIsolator, {
      form: true,
      space: true
    }, addonAfter),
    classNames: {
      ...mergedClassNames,
      input: clsx({
        [`${prefixCls}-sm`]: mergedSize === "small",
        [`${prefixCls}-lg`]: mergedSize === "large",
        [`${prefixCls}-rtl`]: direction === "rtl"
      }, mergedClassNames.input, hashId),
      variant: clsx({
        [`${prefixCls}-${variant}`]: enableVariantCls
      }, getStatusClassNames(prefixCls, mergedStatus)),
      affixWrapper: clsx({
        [`${prefixCls}-affix-wrapper-sm`]: mergedSize === "small",
        [`${prefixCls}-affix-wrapper-lg`]: mergedSize === "large",
        [`${prefixCls}-affix-wrapper-rtl`]: direction === "rtl"
      }, hashId),
      wrapper: clsx({
        [`${prefixCls}-group-rtl`]: direction === "rtl"
      }, hashId),
      groupWrapper: clsx({
        [`${prefixCls}-group-wrapper-sm`]: mergedSize === "small",
        [`${prefixCls}-group-wrapper-lg`]: mergedSize === "large",
        [`${prefixCls}-group-wrapper-rtl`]: direction === "rtl",
        [`${prefixCls}-group-wrapper-${variant}`]: enableVariantCls
      }, getStatusClassNames(`${prefixCls}-group-wrapper`, mergedStatus, hasFeedback), hashId)
    }
  });
});
function isPresetSize(size) {
  return ["small", "middle", "medium", "large"].includes(size);
}
function isValidGapNumber(size) {
  if (!size) {
    return false;
  }
  return isNumber(size);
}
const SpaceContext = /* @__PURE__ */ React.createContext({
  latestIndex: 0
});
const SpaceContextProvider = SpaceContext.Provider;
const Item = (props) => {
  const {
    className,
    prefix,
    index,
    children,
    separator,
    style,
    classNames,
    styles
  } = props;
  const {
    latestIndex
  } = reactExports.useContext(SpaceContext);
  if (!isReactRenderable(children)) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("div", {
    className,
    style
  }, children), index < latestIndex && separator && /* @__PURE__ */ reactExports.createElement("span", {
    className: clsx(`${prefix}-item-separator`, classNames?.separator),
    style: styles?.separator
  }, separator));
};
const genSpaceStyle = (token) => {
  const {
    componentCls,
    antCls
  } = token;
  return {
    [componentCls]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${componentCls}-item:empty`]: {
        display: "none"
      },
      // https://github.com/ant-design/ant-design/issues/47875
      [`${componentCls}-item > ${antCls}-badge-not-a-wrapper:only-child`]: {
        display: "block"
      }
    }
  };
};
const genSpaceGapStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      "&-gap-row-small": {
        rowGap: token.spaceGapSmallSize
      },
      "&-gap-row-medium, &-gap-row-middle": {
        rowGap: token.spaceGapMiddleSize
      },
      "&-gap-row-large": {
        rowGap: token.spaceGapLargeSize
      },
      "&-gap-col-small": {
        columnGap: token.spaceGapSmallSize
      },
      "&-gap-col-medium, &-gap-col-middle": {
        columnGap: token.spaceGapMiddleSize
      },
      "&-gap-col-large": {
        columnGap: token.spaceGapLargeSize
      }
    }
  };
};
const useStyle$6 = genStyleHooks("Space", (token) => {
  const spaceToken = merge$1(token, {
    spaceGapSmallSize: token.paddingXS,
    spaceGapMiddleSize: token.padding,
    spaceGapLargeSize: token.paddingLG
  });
  return [genSpaceStyle(spaceToken), genSpaceGapStyle(spaceToken)];
}, () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: false
});
const InternalSpace = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    getPrefixCls,
    direction: directionConfig,
    size: contextSize,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = useComponentConfig("space");
  const {
    size = contextSize ?? "small",
    align,
    className,
    rootClassName,
    children,
    direction,
    orientation,
    prefixCls: customizePrefixCls,
    split,
    separator,
    style,
    vertical,
    wrap = false,
    classNames,
    styles,
    ...restProps
  } = props;
  const [horizontalSize, verticalSize] = Array.isArray(size) ? size : [size, size];
  const isPresetVerticalSize = isPresetSize(verticalSize);
  const isPresetHorizontalSize = isPresetSize(horizontalSize);
  const isValidVerticalSize = isValidGapNumber(verticalSize);
  const isValidHorizontalSize = isValidGapNumber(horizontalSize);
  const childNodes = toArray$1(children, {
    keepEmpty: true
  });
  const [mergedOrientation, mergedVertical] = useOrientation(orientation, vertical, direction);
  const mergedAlign = align === void 0 && !mergedVertical ? "center" : align;
  const mergedSeparator = separator ?? split;
  const prefixCls = getPrefixCls("space", customizePrefixCls);
  const [hashId, cssVarCls] = useStyle$6(prefixCls);
  const mergedProps = {
    ...props,
    size,
    orientation: mergedOrientation,
    align: mergedAlign
  };
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, styles], {
    props: mergedProps
  });
  const rootClassNames = clsx(prefixCls, contextClassName, hashId, `${prefixCls}-${mergedOrientation}`, {
    [`${prefixCls}-rtl`]: directionConfig === "rtl",
    [`${prefixCls}-align-${mergedAlign}`]: mergedAlign,
    [`${prefixCls}-gap-row-${verticalSize}`]: isPresetVerticalSize,
    [`${prefixCls}-gap-col-${horizontalSize}`]: isPresetHorizontalSize
  }, className, rootClassName, cssVarCls, mergedClassNames.root);
  const itemClassName = clsx(`${prefixCls}-item`, mergedClassNames.item);
  const renderedItems = childNodes.map((child, i) => {
    const key = child?.key || `${itemClassName}-${i}`;
    return /* @__PURE__ */ reactExports.createElement(Item, {
      prefix: prefixCls,
      classNames: mergedClassNames,
      styles: mergedStyles,
      className: itemClassName,
      key,
      index: i,
      separator: mergedSeparator,
      style: mergedStyles.item
    }, child);
  });
  const memoizedSpaceContext = reactExports.useMemo(() => {
    const calcLatestIndex = childNodes.reduce((latest, child, i) => isReactRenderable(child) ? i : latest, 0);
    return {
      latestIndex: calcLatestIndex
    };
  }, [childNodes]);
  if (childNodes.length === 0) {
    return null;
  }
  const gapStyle = {};
  if (wrap) {
    gapStyle.flexWrap = "wrap";
  }
  if (!isPresetHorizontalSize && isValidHorizontalSize) {
    gapStyle.columnGap = horizontalSize;
  }
  if (!isPresetVerticalSize && isValidVerticalSize) {
    gapStyle.rowGap = verticalSize;
  }
  return /* @__PURE__ */ reactExports.createElement("div", {
    ref,
    className: rootClassNames,
    style: {
      ...gapStyle,
      ...mergedStyles.root,
      ...contextStyle,
      ...style
    },
    ...restProps
  }, /* @__PURE__ */ reactExports.createElement(SpaceContextProvider, {
    value: memoizedSpaceContext
  }, renderedItems));
});
const Space = InternalSpace;
Space.Compact = Compact$1;
Space.Addon = SpaceAddon;
const convertToTooltipProps = (tooltip, context) => {
  if (!isReactRenderable(tooltip)) {
    return null;
  }
  if (isPlainObject(tooltip) && !/* @__PURE__ */ reactExports.isValidElement(tooltip)) {
    return {
      ...context,
      ...tooltip
    };
  }
  return {
    ...context,
    title: tooltip
  };
};
function useDebounce(value) {
  const [cacheValue, setCacheValue] = reactExports.useState(value);
  reactExports.useEffect(() => {
    const timeout = setTimeout(() => {
      setCacheValue(value);
    }, value.length ? 0 : 10);
    return () => {
      clearTimeout(timeout);
    };
  }, [value]);
  return cacheValue;
}
const genFormValidateMotionStyle = (token) => {
  const {
    componentCls,
    motionDurationFast,
    motionEaseInOut
  } = token;
  const helpCls = `${componentCls}-show-help`;
  const helpItemCls = `${componentCls}-show-help-item`;
  return {
    [helpCls]: {
      // Explain holder
      transition: `opacity ${motionDurationFast} ${motionEaseInOut}`,
      "&-appear, &-enter": {
        opacity: 0,
        "&-active": {
          opacity: 1
        }
      },
      "&-leave": {
        opacity: 1,
        "&-active": {
          opacity: 0
        }
      },
      // Explain
      [helpItemCls]: {
        overflow: "hidden",
        transition: `${["height", "opacity", "transform"].map((prop) => `${prop} ${motionDurationFast} ${motionEaseInOut}`).join(", ")} !important`,
        [`&${helpItemCls}-appear, &${helpItemCls}-enter`]: {
          transform: `translateY(-5px)`,
          opacity: 0,
          "&-active": {
            transform: "translateY(0)",
            opacity: 1
          }
        },
        [`&${helpItemCls}-leave-active`]: {
          transform: `translateY(-5px)`
        }
      }
    }
  };
};
const resetForm = (token) => ({
  legend: {
    display: "block",
    width: "100%",
    marginBottom: token.marginLG,
    padding: 0,
    color: token.colorTextDescription,
    fontSize: token.fontSizeLG,
    lineHeight: "inherit",
    border: 0,
    borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
  },
  'input[type="search"]': {
    boxSizing: "border-box"
  },
  // Position radios and checkboxes better
  'input[type="radio"], input[type="checkbox"]': {
    lineHeight: "normal"
  },
  'input[type="file"]': {
    display: "block"
  },
  // Make range inputs behave like textual form controls
  'input[type="range"]': {
    display: "block",
    width: "100%"
  },
  // Make multiple select elements height not fixed
  "select[multiple], select[size]": {
    height: "auto"
  },
  // Focus for file, radio, and checkbox
  "input[type='file']:focus, input[type='radio']:focus, input[type='checkbox']:focus": {
    outline: 0,
    boxShadow: `0 0 0 ${unit(token.controlOutlineWidth)} ${token.controlOutline}`
  },
  // Adjust output element
  output: {
    display: "block",
    paddingTop: 15,
    color: token.colorText,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight
  }
});
const genFormSize = (token, height) => {
  const {
    formItemCls
  } = token;
  return {
    [formItemCls]: {
      [`${formItemCls}-label > label`]: {
        height
      },
      [`${formItemCls}-control-input`]: {
        minHeight: height
      }
    }
  };
};
const genFormStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      ...resetComponent(token),
      ...resetForm(token),
      [`${componentCls}-text`]: {
        display: "inline-block",
        paddingInlineEnd: token.paddingSM
      },
      // ================================================================
      // =                             Size                             =
      // ================================================================
      "&-small": {
        ...genFormSize(token, token.controlHeightSM)
      },
      "&-large": {
        ...genFormSize(token, token.controlHeightLG)
      }
    }
  };
};
const genFormItemStyle = (token) => {
  const {
    formItemCls,
    iconCls,
    rootPrefixCls,
    antCls,
    labelRequiredMarkColor,
    labelColor,
    labelFontSize,
    labelHeight,
    labelColonMarginInlineStart,
    labelColonMarginInlineEnd,
    itemMarginBottom
  } = token;
  const [varName] = genCssVar(antCls, "grid");
  return {
    [formItemCls]: {
      ...resetComponent(token),
      marginBottom: itemMarginBottom,
      verticalAlign: "top",
      "&-with-help": {
        transition: "none"
      },
      [`&-hidden,
        &-hidden${antCls}-row`]: {
        // https://github.com/ant-design/ant-design/issues/26141
        display: "none"
      },
      // ==============================================================
      // =                            Label                           =
      // ==============================================================
      [`${formItemCls}-label`]: {
        flexGrow: 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textAlign: "end",
        verticalAlign: "middle",
        "&-left": {
          textAlign: "start"
        },
        "&-wrap": {
          overflow: "unset",
          lineHeight: token.lineHeight,
          whiteSpace: "unset",
          "> label": {
            verticalAlign: "middle",
            textWrap: "balance"
          }
        },
        "> label": {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          maxWidth: "100%",
          height: labelHeight,
          color: labelColor,
          fontSize: labelFontSize,
          [`> ${iconCls}`]: {
            fontSize: token.fontSize,
            verticalAlign: "top"
          },
          [`&${formItemCls}-required`]: {
            "&::before": {
              display: "inline-block",
              marginInlineEnd: token.marginXXS,
              color: labelRequiredMarkColor,
              fontSize: token.fontSize,
              fontFamily: "sans-serif",
              lineHeight: 1,
              content: '"*"'
            },
            [`&${formItemCls}-required-mark-hidden, &${formItemCls}-required-mark-optional`]: {
              "&::before": {
                display: "none"
              }
            }
          },
          // Optional mark
          [`${formItemCls}-optional`]: {
            display: "inline-block",
            marginInlineStart: token.marginXXS,
            color: token.colorTextDescription,
            [`&${formItemCls}-required-mark-hidden`]: {
              display: "none"
            }
          },
          // Optional mark
          [`${formItemCls}-tooltip`]: {
            color: token.colorTextDescription,
            cursor: "help",
            writingMode: "horizontal-tb",
            marginInlineStart: token.marginXXS
          },
          "&::after": {
            content: '":"',
            position: "relative",
            marginBlock: 0,
            marginInlineStart: labelColonMarginInlineStart,
            marginInlineEnd: labelColonMarginInlineEnd
          },
          [`&${formItemCls}-no-colon::after`]: {
            content: '"\\a0"'
          }
        }
      },
      // ==============================================================
      // =                            Input                           =
      // ==============================================================
      [`${formItemCls}-control`]: {
        [varName("display")]: "flex",
        flexDirection: "column",
        flexGrow: 1,
        [`&:first-child:not([class^="'${rootPrefixCls}-col-'"]):not([class*="' ${rootPrefixCls}-col-'"])`]: {
          width: "100%"
        },
        "&-input": {
          position: "relative",
          display: "flex",
          alignItems: "center",
          minHeight: token.controlHeight,
          "&-content": {
            flex: "auto",
            maxWidth: "100%",
            // Fix https://github.com/ant-design/ant-design/issues/54042
            // Remove impact of whitespaces
            [`&:has(> ${antCls}-switch:only-child, > ${antCls}-rate:only-child)`]: {
              display: "flex",
              alignItems: "center"
            }
          }
        }
      },
      // ==============================================================
      // =                           Explain                          =
      // ==============================================================
      [formItemCls]: {
        "&-additional": {
          display: "flex",
          flexDirection: "column"
        },
        "&-explain, &-extra": {
          clear: "both",
          color: token.colorTextDescription,
          fontSize: token.fontSize,
          lineHeight: token.lineHeight
        },
        "&-explain-connected": {
          width: "100%"
        },
        "&-extra": {
          minHeight: token.controlHeightSM,
          transition: `color ${token.motionDurationMid} ${token.motionEaseOut}`
          // sync input color transition
        },
        "&-explain": {
          "&-error": {
            color: token.colorError
          },
          "&-warning": {
            color: token.colorWarning
          }
        }
      },
      [`&-with-help ${formItemCls}-explain`]: {
        height: "auto",
        opacity: 1
      },
      // ==============================================================
      // =                        Feedback Icon                       =
      // ==============================================================
      [`${formItemCls}-feedback-icon`]: {
        fontSize: token.fontSize,
        textAlign: "center",
        visibility: "visible",
        animationName: zoomIn,
        animationDuration: token.motionDurationMid,
        animationTimingFunction: token.motionEaseOutBack,
        pointerEvents: "none",
        "&-success": {
          color: token.colorSuccess
        },
        "&-error": {
          color: token.colorError
        },
        "&-warning": {
          color: token.colorWarning
        },
        "&-validating": {
          color: token.colorPrimary
        }
      }
    }
  };
};
const makeVerticalLayoutLabel = (token) => ({
  padding: token.verticalLabelPadding,
  margin: token.verticalLabelMargin,
  whiteSpace: "initial",
  textAlign: "start",
  "> label": {
    margin: 0,
    "&::after": {
      // https://github.com/ant-design/ant-design/issues/43538
      visibility: "hidden"
    }
  }
});
const genHorizontalStyle = (token) => {
  const {
    antCls,
    formItemCls
  } = token;
  return {
    [`${formItemCls}-horizontal`]: {
      [`${formItemCls}-label`]: {
        flexGrow: 0
      },
      [`${formItemCls}-control`]: {
        flex: "1 1 0",
        // https://github.com/ant-design/ant-design/issues/32777
        // https://github.com/ant-design/ant-design/issues/33773
        minWidth: 0
      },
      // Do not change this to `ant-col-24`! `-24` match all the responsive rules
      // https://github.com/ant-design/ant-design/issues/32980
      // https://github.com/ant-design/ant-design/issues/34903
      // https://github.com/ant-design/ant-design/issues/44538
      [`${formItemCls}-label[class$='-24'], ${formItemCls}-label[class*='-24 ']`]: {
        [`& + ${formItemCls}-control`]: {
          minWidth: "unset"
        }
      },
      [`${antCls}-col-24${formItemCls}-label,
        ${antCls}-col-xl-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
    }
  };
};
const genInlineStyle = (token) => {
  const {
    componentCls,
    formItemCls,
    inlineItemMarginBottom
  } = token;
  return {
    [`${componentCls}-inline`]: {
      display: "flex",
      flexWrap: "wrap",
      [`${formItemCls}-inline`]: {
        flex: "none",
        marginInlineEnd: token.margin,
        marginBottom: inlineItemMarginBottom,
        "&-row": {
          flexWrap: "nowrap"
        },
        [`> ${formItemCls}-label,
        > ${formItemCls}-control`]: {
          display: "inline-block",
          verticalAlign: "top"
        },
        [`> ${formItemCls}-label`]: {
          flex: "none"
        },
        [`${componentCls}-text`]: {
          display: "inline-block"
        },
        [`${formItemCls}-has-feedback`]: {
          display: "inline-block"
        }
      }
    }
  };
};
const makeVerticalLayout = (token) => {
  const {
    componentCls,
    formItemCls,
    rootPrefixCls
  } = token;
  return {
    [`${formItemCls} ${formItemCls}-label`]: makeVerticalLayoutLabel(token),
    // ref: https://github.com/ant-design/ant-design/issues/45122
    [`${componentCls}:not(${componentCls}-inline)`]: {
      [formItemCls]: {
        flexWrap: "wrap",
        [`${formItemCls}-label, ${formItemCls}-control`]: {
          // When developer pass `xs: { span }`,
          // It should follow the `xs` screen config
          // ref: https://github.com/ant-design/ant-design/issues/44386
          [`&:not([class*=" ${rootPrefixCls}-col-xs"])`]: {
            flex: "0 0 100%",
            maxWidth: "100%"
          }
        }
      }
    }
  };
};
const genVerticalStyle = (token) => {
  const {
    componentCls,
    formItemCls,
    antCls,
    verticalLabelHeight
  } = token;
  return {
    [`${formItemCls}-vertical`]: {
      [`${formItemCls}-row`]: {
        flexDirection: "column"
      },
      [`${formItemCls}-label > label`]: {
        height: verticalLabelHeight
      },
      [`${formItemCls}-control`]: {
        width: "100%"
      },
      [`${formItemCls}-label,
        ${antCls}-col-24${formItemCls}-label,
        ${antCls}-col-xl-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
    },
    [`@media (max-width: ${unit(token.screenXSMax)})`]: [makeVerticalLayout(token), {
      [componentCls]: {
        [`${formItemCls}:not(${formItemCls}-horizontal)`]: {
          [`${antCls}-col-xs-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
        }
      }
    }],
    [`@media (max-width: ${unit(token.screenSMMax)})`]: {
      [componentCls]: {
        [`${formItemCls}:not(${formItemCls}-horizontal)`]: {
          [`${antCls}-col-sm-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
        }
      }
    },
    [`@media (max-width: ${unit(token.screenMDMax)})`]: {
      [componentCls]: {
        [`${formItemCls}:not(${formItemCls}-horizontal)`]: {
          [`${antCls}-col-md-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
        }
      }
    },
    [`@media (max-width: ${unit(token.screenLGMax)})`]: {
      [componentCls]: {
        [`${formItemCls}:not(${formItemCls}-horizontal)`]: {
          [`${antCls}-col-lg-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
        }
      }
    }
  };
};
const prepareComponentToken$2 = (token) => ({
  labelRequiredMarkColor: token.colorError,
  labelColor: token.colorTextHeading,
  labelFontSize: token.fontSize,
  labelHeight: token.controlHeight,
  verticalLabelHeight: token.labelHeight ?? "auto",
  labelColonMarginInlineStart: token.marginXXS / 2,
  labelColonMarginInlineEnd: token.marginXS,
  itemMarginBottom: token.marginLG,
  verticalLabelPadding: `0 0 ${token.paddingXS}px`,
  verticalLabelMargin: 0,
  inlineItemMarginBottom: 0
});
const prepareToken = (token, rootPrefixCls) => {
  const formToken = merge$1(token, {
    formItemCls: `${token.componentCls}-item`,
    rootPrefixCls
  });
  return formToken;
};
const useStyle$5 = genStyleHooks("Form", (token, {
  rootPrefixCls
}) => {
  const formToken = prepareToken(token, rootPrefixCls);
  return [genFormStyle(formToken), genFormItemStyle(formToken), genFormValidateMotionStyle(formToken), genHorizontalStyle(formToken), genInlineStyle(formToken), genVerticalStyle(formToken), genCollapseMotion(formToken), zoomIn];
}, prepareComponentToken$2, {
  // Let From style before the Grid
  // ref https://github.com/ant-design/ant-design/issues/44386
  order: -1e3
});
const EMPTY_LIST = [];
function toErrorEntity(error, prefix, errorStatus, index = 0) {
  return {
    key: typeof error === "string" ? error : `${prefix}-${index}`,
    error,
    errorStatus
  };
}
const ErrorList = ({
  help,
  helpStatus,
  errors = EMPTY_LIST,
  warnings = EMPTY_LIST,
  className: rootClassName,
  fieldId,
  onVisibleChanged
}) => {
  const {
    prefixCls
  } = reactExports.useContext(FormItemPrefixContext);
  const {
    classNames: contextClassNames,
    styles: contextStyles
  } = reactExports.useContext(FormContext);
  const baseClassName = `${prefixCls}-item-explain`;
  const rootCls = useCSSVarCls(prefixCls);
  const [hashId, cssVarCls] = useStyle$5(prefixCls, rootCls);
  const collapseMotion = reactExports.useMemo(() => initCollapseMotion(prefixCls), [prefixCls]);
  const debounceErrors = useDebounce(errors);
  const debounceWarnings = useDebounce(warnings);
  const hasHelp = isNonNullable(help) && help !== false;
  const fullKeyList = reactExports.useMemo(() => {
    if (hasHelp) {
      return [toErrorEntity(help, "help", helpStatus)];
    }
    return [].concat(_toConsumableArray(debounceErrors.map((error, index) => toErrorEntity(error, "error", "error", index))), _toConsumableArray(debounceWarnings.map((warning, index) => toErrorEntity(warning, "warning", "warning", index))));
  }, [help, helpStatus, hasHelp, debounceErrors, debounceWarnings]);
  const filledKeyFullKeyList = reactExports.useMemo(() => {
    const keysCount = {};
    fullKeyList.forEach(({
      key
    }) => {
      keysCount[key] = (keysCount[key] || 0) + 1;
    });
    return fullKeyList.map((entity, index) => ({
      ...entity,
      key: keysCount[entity.key] > 1 ? `${entity.key}-fallback-${index}` : entity.key
    }));
  }, [fullKeyList]);
  const helpProps = {};
  if (fieldId) {
    helpProps.id = `${fieldId}_help`;
  }
  return /* @__PURE__ */ reactExports.createElement(CSSMotion, {
    motionDeadline: collapseMotion.motionDeadline,
    motionName: `${prefixCls}-show-help`,
    visible: !!filledKeyFullKeyList.length,
    onVisibleChanged
  }, (holderProps) => {
    const {
      className: holderClassName,
      style: holderStyle
    } = holderProps;
    return /* @__PURE__ */ reactExports.createElement("div", {
      ...helpProps,
      className: clsx(baseClassName, holderClassName, contextClassNames?.help, cssVarCls, rootCls, rootClassName, hashId),
      style: {
        ...contextStyles?.help,
        ...holderStyle
      }
    }, /* @__PURE__ */ reactExports.createElement(CSSMotionList, {
      keys: filledKeyFullKeyList,
      ...initCollapseMotion(prefixCls),
      motionName: `${prefixCls}-show-help-item`,
      component: false
    }, (itemProps) => {
      const {
        key,
        error,
        errorStatus,
        className: itemClassName,
        style: itemStyle
      } = itemProps;
      return /* @__PURE__ */ reactExports.createElement("div", {
        key,
        className: clsx(itemClassName, contextClassNames?.helpItem, {
          [`${baseClassName}-${errorStatus}`]: errorStatus
        }),
        style: {
          ...contextStyles?.helpItem,
          ...itemStyle
        }
      }, error);
    }));
  });
};
const InternalForm = (props, ref) => {
  const contextDisabled = reactExports.useContext(DisabledContext);
  const {
    getPrefixCls,
    direction,
    requiredMark: contextRequiredMark,
    colon: contextColon,
    scrollToFirstError: contextScrollToFirstError,
    className: contextClassName,
    style: contextStyle,
    styles: contextStyles,
    classNames: contextClassNames,
    tooltip: contextTooltip,
    labelAlign: contextLabelAlign,
    labelWrap: contextLabelWrap
  } = useComponentConfig("form");
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    size,
    disabled = contextDisabled,
    form,
    colon,
    labelAlign,
    labelWrap,
    labelCol,
    wrapperCol,
    layout = "horizontal",
    scrollToFirstError,
    requiredMark,
    onFinishFailed,
    name,
    style,
    feedbackIcons,
    variant,
    classNames,
    styles,
    tooltip,
    ...restFormProps
  } = props;
  const mergedSize = useSize(size);
  const contextValidateMessages = reactExports.useContext(ValidateMessagesContext);
  const mergedRequiredMark = reactExports.useMemo(() => {
    if (requiredMark !== void 0) {
      return requiredMark;
    }
    if (contextRequiredMark !== void 0) {
      return contextRequiredMark;
    }
    return true;
  }, [requiredMark, contextRequiredMark]);
  const mergedColon = colon ?? contextColon;
  const mergedLabelAlign = labelAlign ?? contextLabelAlign;
  const mergedLabelWrap = labelWrap ?? contextLabelWrap;
  const mergedTooltip = {
    ...contextTooltip,
    ...tooltip
  };
  const prefixCls = getPrefixCls("form", customizePrefixCls);
  const rootCls = useCSSVarCls(prefixCls);
  const [hashId, cssVarCls] = useStyle$5(prefixCls, rootCls);
  const mergedProps = {
    ...props,
    size: mergedSize,
    disabled,
    layout,
    colon: mergedColon,
    requiredMark: mergedRequiredMark,
    labelAlign: mergedLabelAlign,
    labelWrap: mergedLabelWrap
  };
  const contextStyleRoot = useSemanticRootStyle(contextStyle);
  const styleRoot = useSemanticRootStyle(style);
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, contextStyleRoot, styles, styleRoot], {
    props: mergedProps
  });
  const formClassName = clsx(prefixCls, `${prefixCls}-${layout}`, {
    [`${prefixCls}-hide-required-mark`]: mergedRequiredMark === false,
    // todo: remove in next major version
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-large`]: mergedSize === "large",
    [`${prefixCls}-small`]: mergedSize === "small"
  }, cssVarCls, rootCls, hashId, contextClassName, className, rootClassName, mergedClassNames.root);
  const [wrapForm] = useForm(form);
  const {
    __INTERNAL__
  } = wrapForm;
  __INTERNAL__.name = name;
  const formContextValue = reactExports.useMemo(() => ({
    name,
    labelAlign: mergedLabelAlign,
    labelCol,
    labelWrap: mergedLabelWrap,
    wrapperCol,
    layout,
    colon: mergedColon,
    requiredMark: mergedRequiredMark,
    itemRef: __INTERNAL__.itemRef,
    form: wrapForm,
    feedbackIcons,
    tooltip: mergedTooltip,
    classNames: mergedClassNames,
    styles: mergedStyles
  }), [name, mergedLabelAlign, mergedLabelWrap, labelCol, wrapperCol, layout, mergedColon, mergedRequiredMark, wrapForm, feedbackIcons, mergedClassNames, mergedStyles, mergedTooltip]);
  const nativeElementRef = reactExports.useRef(null);
  reactExports.useImperativeHandle(ref, () => ({
    ...wrapForm,
    nativeElement: nativeElementRef.current?.nativeElement
  }));
  const scrollToField = (options, fieldName) => {
    if (options) {
      let defaultScrollToFirstError = {
        block: "nearest"
      };
      if (isPlainObject(options)) {
        defaultScrollToFirstError = {
          ...defaultScrollToFirstError,
          ...options
        };
      }
      wrapForm.scrollToField(fieldName, defaultScrollToFirstError);
    }
  };
  const onInternalFinishFailed = (errorInfo) => {
    onFinishFailed?.(errorInfo);
    if (errorInfo.errorFields.length) {
      const fieldName = errorInfo.errorFields[0].name;
      if (scrollToFirstError !== void 0) {
        scrollToField(scrollToFirstError, fieldName);
        return;
      }
      if (contextScrollToFirstError !== void 0) {
        scrollToField(contextScrollToFirstError, fieldName);
      }
    }
  };
  return /* @__PURE__ */ reactExports.createElement(VariantContext.Provider, {
    value: variant
  }, /* @__PURE__ */ reactExports.createElement(DisabledContextProvider, {
    disabled
  }, /* @__PURE__ */ reactExports.createElement(SizeContext.Provider, {
    value: mergedSize
  }, /* @__PURE__ */ reactExports.createElement(FormProvider, {
    // This is not list in API, we pass with spread
    validateMessages: contextValidateMessages
  }, /* @__PURE__ */ reactExports.createElement(FormContext.Provider, {
    value: formContextValue
  }, /* @__PURE__ */ reactExports.createElement(NoFormStyle, {
    status: true
  }, /* @__PURE__ */ reactExports.createElement(RefForm, {
    id: name,
    ...restFormProps,
    name,
    onFinishFailed: onInternalFinishFailed,
    form: wrapForm,
    ref: nativeElementRef,
    style: mergedStyles?.root,
    className: formClassName
  })))))));
};
const Form$1 = /* @__PURE__ */ reactExports.forwardRef(InternalForm);
const useChildren = (children) => {
  if (isFunction(children)) {
    return children;
  }
  const childList = toArray$1(children);
  return childList.length <= 1 ? childList[0] : childList;
};
const useFormItemStatus = () => {
  const {
    status,
    errors = [],
    warnings = []
  } = reactExports.useContext(FormItemInputContext);
  return {
    status,
    errors,
    warnings
  };
};
useFormItemStatus.Context = FormItemInputContext;
function useFrameState(defaultValue) {
  const [value, setValue] = reactExports.useState(defaultValue);
  const frameRef = reactExports.useRef(null);
  const batchRef = reactExports.useRef([]);
  const destroyRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    destroyRef.current = false;
    return () => {
      destroyRef.current = true;
      wrapperRaf.cancel(frameRef.current);
      frameRef.current = null;
    };
  }, []);
  function setFrameValue(updater) {
    if (destroyRef.current) {
      return;
    }
    if (frameRef.current === null) {
      batchRef.current = [];
      frameRef.current = wrapperRaf(() => {
        frameRef.current = null;
        setValue((prevValue) => {
          let current = prevValue;
          batchRef.current.forEach((func) => {
            current = func(current);
          });
          return current;
        });
      });
    }
    batchRef.current.push(updater);
  }
  return [value, setFrameValue];
}
const useItemRef = () => {
  const {
    itemRef
  } = reactExports.useContext(FormContext);
  const cacheRef = reactExports.useRef({});
  const getRef = (name, children) => {
    const childrenRef = children && isPlainObject(children) && getNodeRef(children);
    const nameStr = name.join("_");
    if (cacheRef.current.name !== nameStr || cacheRef.current.originRef !== childrenRef) {
      cacheRef.current.name = nameStr;
      cacheRef.current.originRef = childrenRef;
      cacheRef.current.ref = composeRef(itemRef(name), childrenRef);
    }
    return cacheRef.current.ref;
  };
  return getRef;
};
const genFallbackStyle = (token) => {
  const {
    formItemCls
  } = token;
  return {
    "@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)": {
      // Fallback for IE, safe to remove we not support it anymore
      [`${formItemCls}-control`]: {
        display: "flex"
      }
    }
  };
};
const FallbackCmp = genSubStyleComponent(["Form", "item-item"], (token, {
  rootPrefixCls
}) => {
  const formToken = prepareToken(token, rootPrefixCls);
  return genFallbackStyle(formToken);
});
const GRID_MAX = 24;
const FormItemInput = (props) => {
  const {
    prefixCls,
    status,
    labelCol,
    wrapperCol,
    children,
    errors,
    warnings,
    _internalItemRender: formItemRender,
    extra,
    help,
    fieldId,
    marginBottom,
    onErrorVisibleChanged,
    label
  } = props;
  const baseClassName = `${prefixCls}-item`;
  const formContext = reactExports.useContext(FormContext);
  const {
    classNames: contextClassNames,
    styles: contextStyles
  } = formContext;
  const mergedWrapperCol = reactExports.useMemo(() => {
    let mergedWrapper = {
      ...wrapperCol || formContext.wrapperCol || {}
    };
    if (label === null && !labelCol && !wrapperCol && formContext.labelCol) {
      const list = [void 0].concat(_toConsumableArray(responsiveArrayReversed));
      list.forEach((size) => {
        const _size = size ? [size] : [];
        const formLabel = get(formContext.labelCol, _size);
        const formLabelObj = isPlainObject(formLabel) ? formLabel : {};
        const wrapper = get(mergedWrapper, _size);
        const wrapperObj = isPlainObject(wrapper) ? wrapper : {};
        if ("span" in formLabelObj && !("offset" in wrapperObj) && formLabelObj.span < GRID_MAX) {
          mergedWrapper = set(mergedWrapper, [].concat(_size, ["offset"]), formLabelObj.span);
        }
      });
    }
    return mergedWrapper;
  }, [wrapperCol, formContext.wrapperCol, formContext.labelCol, label, labelCol]);
  const className = clsx(`${baseClassName}-control`, mergedWrapperCol.className);
  const subFormContext = reactExports.useMemo(() => {
    const {
      labelCol: _labelCol,
      wrapperCol: _wrapperCol,
      ...rest
    } = formContext;
    return rest;
  }, [formContext]);
  const extraRef = reactExports.useRef(null);
  const [extraHeight, setExtraHeight] = reactExports.useState(0);
  useLayoutEffect(() => {
    if (extra && extraRef.current) {
      setExtraHeight(extraRef.current.clientHeight);
    } else {
      setExtraHeight(0);
    }
  }, [extra]);
  const inputDom = /* @__PURE__ */ reactExports.createElement("div", {
    className: `${baseClassName}-control-input`
  }, /* @__PURE__ */ reactExports.createElement("div", {
    className: clsx(`${baseClassName}-control-input-content`, contextClassNames?.content),
    style: contextStyles?.content
  }, children));
  const formItemContext = reactExports.useMemo(() => ({
    prefixCls,
    status
  }), [prefixCls, status]);
  const errorListDom = marginBottom !== null || errors.length || warnings.length ? /* @__PURE__ */ reactExports.createElement(FormItemPrefixContext.Provider, {
    value: formItemContext
  }, /* @__PURE__ */ reactExports.createElement(ErrorList, {
    fieldId,
    errors,
    warnings,
    help,
    helpStatus: status,
    className: `${baseClassName}-explain-connected`,
    onVisibleChanged: onErrorVisibleChanged
  })) : null;
  const extraProps = {};
  if (fieldId) {
    extraProps.id = `${fieldId}_extra`;
  }
  const extraDom = extra ? /* @__PURE__ */ reactExports.createElement("div", {
    ...extraProps,
    className: clsx(`${baseClassName}-extra`, contextClassNames?.extra),
    style: contextStyles?.extra,
    ref: extraRef
  }, extra) : null;
  const additionalDom = errorListDom || extraDom ? /* @__PURE__ */ reactExports.createElement("div", {
    className: `${baseClassName}-additional`,
    style: marginBottom ? {
      minHeight: marginBottom + extraHeight
    } : {}
  }, errorListDom, extraDom) : null;
  const dom = formItemRender && formItemRender.mark === "pro_table_render" && formItemRender.render ? formItemRender.render(props, {
    input: inputDom,
    errorList: errorListDom,
    extra: extraDom
  }) : /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, inputDom, additionalDom);
  return /* @__PURE__ */ reactExports.createElement(FormContext.Provider, {
    value: subFormContext
  }, /* @__PURE__ */ reactExports.createElement(Col, {
    ...mergedWrapperCol,
    className
  }, dom), /* @__PURE__ */ reactExports.createElement(FallbackCmp, {
    prefixCls
  }));
};
const FormItemLabel = ({
  prefixCls,
  label,
  htmlFor,
  labelCol,
  labelAlign,
  colon,
  required,
  requiredMark,
  tooltip,
  vertical
}) => {
  const [formLocale] = useLocale("Form");
  const {
    labelAlign: contextLabelAlign,
    labelCol: contextLabelCol,
    labelWrap,
    colon: contextColon,
    classNames: contextClassNames,
    styles: contextStyles,
    tooltip: contextTooltip
  } = reactExports.useContext(FormContext);
  if (!label) {
    return null;
  }
  const mergedLabelCol = labelCol || contextLabelCol || {};
  const mergedLabelAlign = labelAlign || contextLabelAlign;
  const labelClsBasic = `${prefixCls}-item-label`;
  const labelColClassName = clsx(labelClsBasic, mergedLabelAlign === "left" && `${labelClsBasic}-left`, mergedLabelCol.className, {
    [`${labelClsBasic}-wrap`]: !!labelWrap
  });
  let labelChildren = label;
  const computedColon = colon === true || contextColon !== false && colon !== false;
  const haveColon = computedColon && !vertical;
  if (haveColon && typeof label === "string" && label.trim()) {
    labelChildren = label.replace(/[:|：]\s*$/, "");
  }
  const tooltipProps = convertToTooltipProps(tooltip, contextTooltip);
  if (tooltipProps) {
    const tooltipNode = /* @__PURE__ */ reactExports.createElement(Tooltip, {
      ...tooltipProps
    }, /* @__PURE__ */ reactExports.createElement("span", {
      className: `${prefixCls}-item-tooltip`,
      onClick: (e2) => {
        e2.preventDefault();
      },
      tabIndex: -1
    }, tooltipProps.icon || tooltipProps.children || /* @__PURE__ */ reactExports.createElement(RefIcon$9, null)));
    labelChildren = /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, labelChildren, tooltipNode);
  }
  const isOptionalMark = requiredMark === "optional";
  const isRenderMark = isFunction(requiredMark);
  const hideRequiredMark = requiredMark === false;
  if (isRenderMark) {
    labelChildren = requiredMark(labelChildren, {
      required: !!required
    });
  } else if (isOptionalMark && !required) {
    labelChildren = /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, labelChildren, /* @__PURE__ */ reactExports.createElement("span", {
      className: `${prefixCls}-item-optional`
    }, formLocale?.optional || localeValues.Form?.optional));
  }
  let markType;
  if (hideRequiredMark) {
    markType = "hidden";
  } else if (isOptionalMark || isRenderMark) {
    markType = "optional";
  }
  const labelClassName = clsx(contextClassNames?.label, {
    [`${prefixCls}-item-required`]: required,
    [`${prefixCls}-item-required-mark-${markType}`]: markType,
    [`${prefixCls}-item-no-colon`]: !computedColon
  });
  return /* @__PURE__ */ reactExports.createElement(Col, {
    ...mergedLabelCol,
    className: labelColClassName
  }, /* @__PURE__ */ reactExports.createElement("label", {
    htmlFor,
    className: labelClassName,
    style: contextStyles?.label,
    title: typeof label === "string" ? label : void 0
  }, labelChildren));
};
const iconMap = {
  success: RefIcon$4,
  warning: RefIcon$3,
  error: RefIcon,
  validating: RefIcon$2
};
function StatusProvider({
  children,
  errors,
  warnings,
  hasFeedback,
  validateStatus,
  prefixCls,
  meta,
  noStyle,
  name
}) {
  const itemPrefixCls = `${prefixCls}-item`;
  const {
    feedbackIcons
  } = reactExports.useContext(FormContext);
  const mergedValidateStatus = getStatus(errors, warnings, meta, null, !!hasFeedback, validateStatus);
  const {
    isFormItemInput: parentIsFormItemInput,
    status: parentStatus,
    hasFeedback: parentHasFeedback,
    feedbackIcon: parentFeedbackIcon,
    name: parentName
  } = reactExports.useContext(FormItemInputContext);
  const formItemStatusContext = reactExports.useMemo(() => {
    let feedbackIcon;
    if (hasFeedback) {
      const customIcons = hasFeedback !== true && hasFeedback.icons || feedbackIcons;
      const customIconNode = mergedValidateStatus && customIcons?.({
        status: mergedValidateStatus,
        errors,
        warnings
      })?.[mergedValidateStatus];
      const IconNode = mergedValidateStatus ? iconMap[mergedValidateStatus] : null;
      feedbackIcon = customIconNode !== false && IconNode ? /* @__PURE__ */ reactExports.createElement("span", {
        className: clsx(`${itemPrefixCls}-feedback-icon`, `${itemPrefixCls}-feedback-icon-${mergedValidateStatus}`)
      }, customIconNode || /* @__PURE__ */ reactExports.createElement(IconNode, null)) : null;
    }
    const context = {
      status: mergedValidateStatus || "",
      errors,
      warnings,
      hasFeedback: !!hasFeedback,
      feedbackIcon,
      isFormItemInput: true,
      name
    };
    if (noStyle) {
      context.status = (mergedValidateStatus ?? parentStatus) || "";
      context.isFormItemInput = parentIsFormItemInput;
      context.hasFeedback = !!(hasFeedback ?? parentHasFeedback);
      context.feedbackIcon = hasFeedback !== void 0 ? context.feedbackIcon : parentFeedbackIcon;
      context.name = name ?? parentName;
    }
    return context;
  }, [mergedValidateStatus, hasFeedback, noStyle, parentIsFormItemInput, parentStatus]);
  return /* @__PURE__ */ reactExports.createElement(FormItemInputContext.Provider, {
    value: formItemStatusContext
  }, children);
}
function ItemHolder(props) {
  const {
    prefixCls,
    className,
    rootClassName,
    style,
    help,
    errors,
    warnings,
    validateStatus,
    meta,
    hasFeedback,
    hidden,
    children,
    fieldId,
    required,
    isRequired,
    onSubItemMetaChange,
    layout: propsLayout,
    name,
    ...restProps
  } = props;
  const itemPrefixCls = `${prefixCls}-item`;
  const {
    requiredMark,
    layout: formLayout
  } = reactExports.useContext(FormContext);
  const layout = propsLayout || formLayout;
  const vertical = layout === "vertical";
  const itemRef = reactExports.useRef(null);
  const debounceErrors = useDebounce(errors);
  const debounceWarnings = useDebounce(warnings);
  const hasHelp = isNonNullable(help) && help !== false;
  const hasError = !!(hasHelp || errors.length || warnings.length);
  const isOnScreen = !!itemRef.current && isVisible(itemRef.current);
  const [marginBottom, setMarginBottom] = reactExports.useState(null);
  useLayoutEffect(() => {
    if (hasError && itemRef.current) {
      const itemStyle = getComputedStyle(itemRef.current);
      setMarginBottom(Number.parseInt(itemStyle.marginBottom, 10));
    }
  }, [hasError, isOnScreen]);
  const onErrorVisibleChanged = (nextVisible) => {
    if (!nextVisible) {
      setMarginBottom(null);
    }
  };
  const getValidateState = (isDebounce = false) => {
    const _errors = isDebounce ? debounceErrors : meta.errors;
    const _warnings = isDebounce ? debounceWarnings : meta.warnings;
    return getStatus(_errors, _warnings, meta, "", !!hasFeedback, validateStatus);
  };
  const mergedValidateStatus = getValidateState();
  const itemClassName = clsx(itemPrefixCls, className, rootClassName, {
    [`${itemPrefixCls}-with-help`]: hasHelp || debounceErrors.length || debounceWarnings.length,
    // Status
    [`${itemPrefixCls}-has-feedback`]: mergedValidateStatus && hasFeedback,
    [`${itemPrefixCls}-has-success`]: mergedValidateStatus === "success",
    [`${itemPrefixCls}-has-warning`]: mergedValidateStatus === "warning",
    [`${itemPrefixCls}-has-error`]: mergedValidateStatus === "error",
    [`${itemPrefixCls}-is-validating`]: mergedValidateStatus === "validating",
    [`${itemPrefixCls}-hidden`]: hidden,
    // Layout
    [`${itemPrefixCls}-${layout}`]: layout
  });
  return /* @__PURE__ */ reactExports.createElement("div", {
    className: itemClassName,
    style,
    ref: itemRef
  }, /* @__PURE__ */ reactExports.createElement(Row, {
    className: `${itemPrefixCls}-row`,
    ...omit(restProps, [
      "_internalItemRender",
      "colon",
      "dependencies",
      "extra",
      "fieldKey",
      "getValueFromEvent",
      "getValueProps",
      "htmlFor",
      "id",
      // It is deprecated because `htmlFor` is its replacement.
      "initialValue",
      "isListField",
      "label",
      "labelAlign",
      "labelCol",
      "labelWrap",
      "messageVariables",
      "name",
      "normalize",
      "noStyle",
      "preserve",
      "requiredMark",
      "rules",
      "shouldUpdate",
      "trigger",
      "tooltip",
      "validateFirst",
      "validateTrigger",
      "valuePropName",
      "wrapperCol",
      "validateDebounce"
    ])
  }, /* @__PURE__ */ reactExports.createElement(FormItemLabel, {
    htmlFor: fieldId,
    ...props,
    requiredMark,
    required: required ?? isRequired,
    prefixCls,
    vertical
  }), /* @__PURE__ */ reactExports.createElement(FormItemInput, {
    ...props,
    ...meta,
    errors: debounceErrors,
    warnings: debounceWarnings,
    prefixCls,
    status: mergedValidateStatus,
    help,
    marginBottom,
    onErrorVisibleChanged
  }, /* @__PURE__ */ reactExports.createElement(NoStyleItemContext.Provider, {
    value: onSubItemMetaChange
  }, /* @__PURE__ */ reactExports.createElement(StatusProvider, {
    prefixCls,
    meta,
    errors: meta.errors,
    warnings: meta.warnings,
    hasFeedback,
    // Already calculated
    validateStatus: mergedValidateStatus,
    name
  }, children)))), !!marginBottom && /* @__PURE__ */ reactExports.createElement("div", {
    className: `${itemPrefixCls}-margin-offset`,
    style: {
      marginBottom: -marginBottom
    }
  }));
}
const NAME_SPLIT = "__SPLIT__";
function isSimilarControl(a, b) {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  return keysA.length === keysB.length && keysA.every((key) => {
    const propValueA = a[key];
    const propValueB = b[key];
    return propValueA === propValueB || isFunction(propValueA) || isFunction(propValueB);
  });
}
const MemoInput = /* @__PURE__ */ reactExports.memo((props) => props.children, (prev, next) => isSimilarControl(prev.control, next.control) && prev.update === next.update && prev.childProps.length === next.childProps.length && prev.childProps.every((value, index) => value === next.childProps[index]));
function genEmptyMeta() {
  return {
    errors: [],
    warnings: [],
    touched: false,
    validating: false,
    name: [],
    validated: false
  };
}
function InternalFormItem(props) {
  const {
    name,
    noStyle,
    className,
    dependencies,
    prefixCls: customizePrefixCls,
    shouldUpdate,
    rules,
    children,
    required,
    label,
    messageVariables,
    trigger = "onChange",
    validateTrigger,
    hidden,
    help,
    layout
  } = props;
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const {
    name: formName
  } = reactExports.useContext(FormContext);
  const mergedChildren = useChildren(children);
  const isRenderProps = isFunction(mergedChildren);
  const notifyParentMetaChange = reactExports.useContext(NoStyleItemContext);
  const {
    validateTrigger: contextValidateTrigger
  } = reactExports.useContext(Context);
  const mergedValidateTrigger = isNonNullable(validateTrigger) ? validateTrigger : contextValidateTrigger;
  const hasName = isNonNullable(name);
  const prefixCls = getPrefixCls("form", customizePrefixCls);
  const rootCls = useCSSVarCls(prefixCls);
  const [hashId, cssVarCls] = useStyle$5(prefixCls, rootCls);
  const listContext = reactExports.useContext(ListContext);
  const fieldKeyPathRef = reactExports.useRef(null);
  const [subFieldErrors, setSubFieldErrors] = useFrameState({});
  const [meta, setMeta] = useSafeState(() => genEmptyMeta());
  const onMetaChange = (nextMeta) => {
    const keyInfo = listContext?.getKey(nextMeta.name);
    setMeta(nextMeta.destroy ? genEmptyMeta() : nextMeta, true);
    if (noStyle && help !== false && notifyParentMetaChange) {
      let namePath = nextMeta.name;
      if (!nextMeta.destroy) {
        if (keyInfo !== void 0) {
          const [fieldKey, restPath] = keyInfo;
          namePath = [fieldKey].concat(_toConsumableArray(restPath));
          fieldKeyPathRef.current = namePath;
        }
      } else {
        namePath = fieldKeyPathRef.current || namePath;
      }
      notifyParentMetaChange(nextMeta, namePath);
    }
  };
  const onSubItemMetaChange = (subMeta, uniqueKeys) => {
    setSubFieldErrors((prevSubFieldErrors) => {
      const clone = {
        ...prevSubFieldErrors
      };
      const mergedNamePath = [].concat(_toConsumableArray(subMeta.name.slice(0, -1)), _toConsumableArray(uniqueKeys));
      const mergedNameKey = mergedNamePath.join(NAME_SPLIT);
      if (subMeta.destroy) {
        delete clone[mergedNameKey];
      } else {
        clone[mergedNameKey] = subMeta;
      }
      return clone;
    });
  };
  const [mergedErrors, mergedWarnings] = reactExports.useMemo(() => {
    const errorList = _toConsumableArray(meta.errors);
    const warningList = _toConsumableArray(meta.warnings);
    Object.values(subFieldErrors).forEach((subFieldError) => {
      errorList.push.apply(errorList, _toConsumableArray(subFieldError.errors || []));
      warningList.push.apply(warningList, _toConsumableArray(subFieldError.warnings || []));
    });
    return [errorList, warningList];
  }, [subFieldErrors, meta.errors, meta.warnings]);
  const getItemRef = useItemRef();
  function renderLayout(baseChildren, fieldId, isRequired) {
    if (noStyle && !hidden) {
      return /* @__PURE__ */ reactExports.createElement(StatusProvider, {
        prefixCls,
        hasFeedback: props.hasFeedback,
        validateStatus: props.validateStatus,
        meta,
        errors: mergedErrors,
        warnings: mergedWarnings,
        noStyle: true,
        name
      }, baseChildren);
    }
    return /* @__PURE__ */ reactExports.createElement(ItemHolder, {
      key: "row",
      ...props,
      className: clsx(className, cssVarCls, rootCls, hashId),
      prefixCls,
      fieldId,
      isRequired,
      errors: mergedErrors,
      warnings: mergedWarnings,
      meta,
      onSubItemMetaChange,
      layout,
      name
    }, baseChildren);
  }
  if (!hasName && !isRenderProps && !dependencies) {
    return renderLayout(mergedChildren);
  }
  let variables = {};
  if (typeof label === "string") {
    variables.label = label;
  } else if (name) {
    variables.label = String(name);
  }
  if (messageVariables) {
    variables = {
      ...variables,
      ...messageVariables
    };
  }
  return /* @__PURE__ */ reactExports.createElement(WrapperField, {
    ...props,
    messageVariables: variables,
    trigger,
    validateTrigger: mergedValidateTrigger,
    onMetaChange
  }, (control, renderMeta, context) => {
    const mergedName = toArray(name).length && renderMeta ? renderMeta.name : [];
    const fieldId = getFieldId(mergedName, formName);
    const isRequired = required !== void 0 ? required : rules?.some((rule) => {
      if (isPlainObject(rule) && rule.required && !rule.warningOnly) {
        return true;
      }
      if (isFunction(rule)) {
        const ruleEntity = rule(context);
        return ruleEntity?.required && !ruleEntity?.warningOnly;
      }
      return false;
    });
    const mergedControl = {
      ...control
    };
    let childNode = null;
    if (Array.isArray(mergedChildren) && hasName) {
      childNode = mergedChildren;
    } else if (isRenderProps && (!(shouldUpdate || dependencies) || hasName)) ;
    else if (dependencies && !isRenderProps && !hasName) ;
    else if (/* @__PURE__ */ reactExports.isValidElement(mergedChildren)) {
      const childProps = {
        ...mergedChildren.props,
        ...mergedControl
      };
      if (!childProps.id) {
        childProps.id = fieldId;
      }
      if (help || mergedErrors.length > 0 || mergedWarnings.length > 0 || props.extra) {
        const describedbyArr = [];
        if (help || mergedErrors.length > 0) {
          describedbyArr.push(`${fieldId}_help`);
        }
        if (props.extra) {
          describedbyArr.push(`${fieldId}_extra`);
        }
        childProps["aria-describedby"] = describedbyArr.join(" ");
      }
      if (mergedErrors.length > 0) {
        childProps["aria-invalid"] = "true";
      }
      if (isRequired) {
        childProps["aria-required"] = "true";
      }
      if (supportRef(mergedChildren)) {
        childProps.ref = getItemRef(mergedName, mergedChildren);
      }
      const triggers = new Set([].concat(_toConsumableArray(toArray(trigger)), _toConsumableArray(toArray(mergedValidateTrigger))));
      triggers.forEach((eventName) => {
        childProps[eventName] = (...args) => {
          mergedControl[eventName]?.(...args);
          mergedChildren.props[eventName]?.(...args);
        };
      });
      const watchingChildProps = [childProps["aria-required"], childProps["aria-invalid"], childProps["aria-describedby"]];
      childNode = /* @__PURE__ */ reactExports.createElement(MemoInput, {
        control: mergedControl,
        update: mergedChildren,
        childProps: watchingChildProps
      }, cloneElement(mergedChildren, childProps));
    } else if (isRenderProps && (shouldUpdate || dependencies) && !hasName) {
      childNode = mergedChildren(context);
    } else {
      childNode = mergedChildren;
    }
    return renderLayout(childNode, fieldId, isRequired);
  });
}
const FormItem = InternalFormItem;
FormItem.useStatus = useFormItemStatus;
const FormList = ({
  prefixCls: customizePrefixCls,
  children,
  ...props
}) => {
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("form", customizePrefixCls);
  const contextValue = reactExports.useMemo(() => ({
    prefixCls,
    status: "error"
  }), [prefixCls]);
  return /* @__PURE__ */ reactExports.createElement(List, {
    ...props
  }, (fields, operation, meta) => /* @__PURE__ */ reactExports.createElement(FormItemPrefixContext.Provider, {
    value: contextValue
  }, children(fields.map((field) => ({
    ...field,
    fieldKey: field.key
  })), operation, {
    errors: meta.errors,
    warnings: meta.warnings
  })));
};
function useFormInstance() {
  const {
    form
  } = reactExports.useContext(FormContext);
  return form;
}
const Form = Form$1;
Form.Item = FormItem;
Form.List = FormList;
Form.ErrorList = ErrorList;
Form.useForm = useForm;
Form.useFormInstance = useFormInstance;
Form.useWatch = useWatch;
Form.Provider = FormProvider;
const Group = (props) => {
  const {
    getPrefixCls,
    direction
  } = reactExports.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    className
  } = props;
  const prefixCls = getPrefixCls("input-group", customizePrefixCls);
  const inputPrefixCls = getPrefixCls("input");
  const [hashId, cssVarCls] = useStyle$8(inputPrefixCls);
  const cls = clsx(prefixCls, cssVarCls, {
    [`${prefixCls}-lg`]: props.size === "large",
    [`${prefixCls}-sm`]: props.size === "small",
    [`${prefixCls}-compact`]: props.compact,
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, hashId, className);
  const formItemContext = reactExports.useContext(FormItemInputContext);
  const groupFormItemContext = reactExports.useMemo(() => ({
    ...formItemContext,
    isFormItemInput: false
  }), [formItemContext]);
  return /* @__PURE__ */ reactExports.createElement(FormItemInputContext.Provider, {
    value: groupFormItemContext
  }, /* @__PURE__ */ reactExports.createElement(Space.Compact, {
    className: cls,
    style: props.style,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    onFocus: props.onFocus,
    onBlur: props.onBlur
  }, props.children));
};
const genOTPStyle = (token) => {
  const {
    componentCls,
    paddingXS
  } = token;
  return {
    [componentCls]: {
      display: "inline-flex",
      alignItems: "center",
      flexWrap: "nowrap",
      columnGap: paddingXS,
      [`${componentCls}-input-wrapper`]: {
        position: "relative",
        [`${componentCls}-mask-icon`]: {
          position: "absolute",
          zIndex: "1",
          top: "50%",
          right: "50%",
          transform: "translate(50%, -50%)",
          pointerEvents: "none"
        },
        [`${componentCls}-mask-input`]: {
          color: "transparent",
          caretColor: token.colorText,
          "&::selection": {
            color: "transparent"
          }
        },
        [`${componentCls}-mask-input[type=number]::-webkit-inner-spin-button`]: {
          "-webkit-appearance": "none",
          margin: 0
        },
        [`${componentCls}-mask-input[type=number]`]: {
          "-moz-appearance": "textfield"
        }
      },
      "&-rtl": {
        direction: "rtl"
      },
      [`${componentCls}-input`]: {
        textAlign: "center",
        paddingInline: token.paddingXXS
      },
      // ================= Size =================
      [`&${componentCls}-sm ${componentCls}-input`]: {
        paddingInline: token.calc(token.paddingXXS).div(2).equal()
      },
      [`&${componentCls}-lg ${componentCls}-input`]: {
        paddingInline: token.paddingXS
      }
    }
  };
};
const useStyle$4 = genStyleHooks(["Input", "OTP"], (token) => {
  const inputToken = merge$1(token, initInputToken(token));
  return genOTPStyle(inputToken);
}, initComponentToken);
const OTPInput = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    className,
    value,
    onChange,
    onActiveChange,
    index,
    mask,
    onFocus,
    ...restProps
  } = props;
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("otp");
  const maskValue = typeof mask === "string" ? mask : value;
  const inputRef = reactExports.useRef(null);
  reactExports.useImperativeHandle(ref, () => inputRef.current);
  const onInternalChange = (e2) => {
    onChange(index, e2.target.value);
  };
  const syncSelection = () => {
    wrapperRaf(() => {
      const inputEle = inputRef.current?.input;
      if (document.activeElement === inputEle && inputEle) {
        inputEle.select();
      }
    });
  };
  const onInternalFocus = (e2) => {
    onFocus?.(e2);
    syncSelection();
  };
  const onInternalKeyDown = (event) => {
    const {
      key,
      ctrlKey,
      metaKey
    } = event;
    if (key === "ArrowLeft") {
      onActiveChange(index - 1);
    } else if (key === "ArrowRight") {
      onActiveChange(index + 1);
    } else if (key === "z" && (ctrlKey || metaKey)) {
      event.preventDefault();
    } else if (key === "Backspace" && !value) {
      onActiveChange(index - 1);
    }
    syncSelection();
  };
  return /* @__PURE__ */ reactExports.createElement("span", {
    className: `${prefixCls}-input-wrapper`,
    role: "presentation"
  }, mask && value !== "" && value !== void 0 && /* @__PURE__ */ reactExports.createElement("span", {
    className: `${prefixCls}-mask-icon`,
    "aria-hidden": "true"
  }, maskValue), /* @__PURE__ */ reactExports.createElement(Input$1, {
    "aria-label": `OTP Input ${index + 1}`,
    type: mask === true ? "password" : "text",
    ...restProps,
    ref: inputRef,
    value,
    onInput: onInternalChange,
    onFocus: onInternalFocus,
    onKeyDown: onInternalKeyDown,
    onMouseDown: syncSelection,
    onMouseUp: syncSelection,
    className: clsx(className, {
      [`${prefixCls}-mask-input`]: mask
    })
  }));
});
function strToArr(str) {
  return (str || "").split("");
}
const Separator = (props) => {
  const {
    index,
    prefixCls,
    separator,
    className: semanticClassName,
    style: semanticStyle
  } = props;
  const separatorNode = isFunction(separator) ? separator(index) : separator;
  if (!separatorNode) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement("span", {
    className: clsx(`${prefixCls}-separator`, semanticClassName),
    style: semanticStyle
  }, separatorNode);
};
const OTP = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    length = 6,
    size: customSize,
    defaultValue,
    value,
    onChange,
    formatter,
    separator,
    variant,
    disabled,
    status: customStatus,
    autoFocus,
    mask,
    type,
    autoComplete,
    onInput,
    onFocus,
    inputMode,
    classNames,
    styles,
    className,
    style,
    ...restProps
  } = props;
  const {
    classNames: contextClassNames,
    styles: contextStyles,
    getPrefixCls,
    direction,
    style: contextStyle,
    className: contextClassName
  } = useComponentConfig("otp");
  const prefixCls = getPrefixCls("otp", customizePrefixCls);
  const mergedProps = {
    ...props,
    length
  };
  const contextStyleRoot = useSemanticRootStyle(contextStyle);
  const styleRoot = useSemanticRootStyle(style);
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, contextStyleRoot, styles, styleRoot], {
    props: mergedProps
  });
  const domAttrs = pickAttrs(restProps, {
    aria: true,
    data: true,
    attr: true
  });
  const [hashId, cssVarCls] = useStyle$4(prefixCls);
  const mergedSize = useSize((ctx) => customSize ?? ctx);
  const formContext = reactExports.useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(formContext.status, customStatus);
  const proxyFormContext = reactExports.useMemo(() => ({
    ...formContext,
    status: mergedStatus,
    hasFeedback: false,
    feedbackIcon: null
  }), [formContext, mergedStatus]);
  const containerRef = reactExports.useRef(null);
  const inputsRef = reactExports.useRef({});
  reactExports.useImperativeHandle(ref, () => ({
    focus: () => {
      inputsRef.current[0]?.focus();
    },
    blur: () => {
      for (let i = 0; i < length; i += 1) {
        inputsRef.current[i]?.blur();
      }
    },
    nativeElement: containerRef.current
  }));
  const internalFormatter = (txt) => formatter ? formatter(txt) : txt;
  const [valueCells, setValueCells] = reactExports.useState(() => strToArr(internalFormatter(defaultValue || "")));
  reactExports.useEffect(() => {
    if (value !== void 0) {
      setValueCells(strToArr(value));
    }
  }, [value]);
  const triggerValueCellsChange = useEvent((nextValueCells) => {
    setValueCells(nextValueCells);
    if (onInput) {
      onInput(nextValueCells);
    }
    if (onChange && nextValueCells.length === length && nextValueCells.every((c) => c) && nextValueCells.some((c, index) => valueCells[index] !== c)) {
      onChange(nextValueCells.join(""));
    }
  });
  const patchValue = useEvent((index, txt) => {
    let nextCells = _toConsumableArray(valueCells);
    for (let i = 0; i < index; i += 1) {
      if (!nextCells[i]) {
        nextCells[i] = "";
      }
    }
    if (txt.length <= 1) {
      nextCells[index] = txt;
    } else {
      nextCells = nextCells.slice(0, index).concat(strToArr(txt));
    }
    nextCells = nextCells.slice(0, length);
    for (let i = nextCells.length - 1; i >= 0; i -= 1) {
      if (nextCells[i]) {
        break;
      }
      nextCells.pop();
    }
    const formattedValue = internalFormatter(nextCells.map((c) => c || " ").join(""));
    nextCells = strToArr(formattedValue).map((c, i) => {
      if (c === " " && !nextCells[i]) {
        return nextCells[i];
      }
      return c;
    });
    return nextCells;
  });
  const onInputChange = (index, txt) => {
    const nextCells = patchValue(index, txt);
    const nextIndex = Math.min(index + txt.length, length - 1);
    if (nextIndex !== index && nextCells[index] !== void 0) {
      inputsRef.current[nextIndex]?.focus();
    }
    triggerValueCellsChange(nextCells);
  };
  const onInputActiveChange = (nextIndex) => {
    inputsRef.current[nextIndex]?.focus();
  };
  const onInputFocus = (event, index) => {
    for (let i = 0; i < index; i += 1) {
      if (!inputsRef.current[i]?.input?.value) {
        inputsRef.current[i]?.focus();
        break;
      }
    }
    onFocus?.(event);
  };
  const inputSharedProps = {
    variant,
    disabled,
    status: mergedStatus,
    mask,
    type,
    inputMode,
    autoComplete
  };
  return /* @__PURE__ */ reactExports.createElement("div", {
    ...domAttrs,
    ref: containerRef,
    className: clsx(className, prefixCls, {
      [`${prefixCls}-sm`]: mergedSize === "small",
      [`${prefixCls}-lg`]: mergedSize === "large",
      [`${prefixCls}-rtl`]: direction === "rtl"
    }, cssVarCls, hashId, contextClassName, mergedClassNames.root),
    style: mergedStyles.root,
    role: "group"
  }, /* @__PURE__ */ reactExports.createElement(FormItemInputContext.Provider, {
    value: proxyFormContext
  }, Array.from({
    length
  }).map((_, index) => {
    const key = `otp-${index}`;
    const singleValue = valueCells[index] || "";
    return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, {
      key
    }, /* @__PURE__ */ reactExports.createElement(OTPInput, {
      ref: (inputEle) => {
        inputsRef.current[index] = inputEle;
      },
      index,
      size: mergedSize,
      htmlSize: 1,
      className: clsx(mergedClassNames.input, `${prefixCls}-input`),
      style: mergedStyles.input,
      onChange: onInputChange,
      value: singleValue,
      onActiveChange: onInputActiveChange,
      autoFocus: index === 0 && autoFocus,
      onFocus: (event) => onInputFocus(event, index),
      ...inputSharedProps
    }), index < length - 1 && /* @__PURE__ */ reactExports.createElement(Separator, {
      separator,
      index,
      prefixCls,
      className: clsx(mergedClassNames.separator),
      style: mergedStyles.separator
    }));
  })));
});
const defaultIconRender = (visible) => visible ? /* @__PURE__ */ reactExports.createElement(RefIcon$a, null) : /* @__PURE__ */ reactExports.createElement(RefIcon$b, null);
const actionMap = {
  click: "onClick",
  hover: "onMouseOver"
};
const Password = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    disabled: customDisabled,
    action = "click",
    visibilityToggle = true,
    iconRender,
    prefixCls: customizePrefixCls,
    inputPrefixCls: customizeInputPrefixCls,
    suffix,
    className,
    style,
    classNames,
    styles,
    ...restProps
  } = props;
  const {
    getPrefixCls,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles,
    iconRender: contextIconRender
  } = useComponentConfig("inputPassword");
  const [locale2] = useLocale("global");
  const disabled = reactExports.useContext(DisabledContext);
  const mergedDisabled = customDisabled ?? disabled;
  const mergedProps = {
    ...props,
    disabled: mergedDisabled
  };
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, styles], {
    props: mergedProps
  });
  const visibilityControlled = isPlainObject(visibilityToggle) && visibilityToggle.visible !== void 0;
  const [visible, setVisible] = reactExports.useState(() => visibilityControlled ? visibilityToggle.visible : false);
  const inputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (visibilityControlled) {
      setVisible(visibilityToggle.visible);
    }
  }, [visibilityControlled, visibilityToggle]);
  const removePasswordTimeout = useRemovePasswordTimeout(inputRef);
  const onVisibleChange = () => {
    if (mergedDisabled) {
      return;
    }
    if (visible) {
      removePasswordTimeout();
    }
    const nextVisible = !visible;
    setVisible(nextVisible);
    if (isPlainObject(visibilityToggle)) {
      visibilityToggle.onVisibleChange?.(nextVisible);
    }
  };
  const getIcon = (prefixCls2) => {
    const iconTrigger = actionMap[action] || "";
    const iconRenderer = iconRender || contextIconRender || defaultIconRender;
    const icon = iconRenderer(visible);
    const iconTabIndex = isPlainObject(visibilityToggle) ? visibilityToggle.tabIndex : void 0;
    return /* @__PURE__ */ reactExports.createElement("span", {
      key: "passwordIcon",
      role: "button",
      tabIndex: mergedDisabled ? -1 : iconTabIndex ?? 0,
      className: `${prefixCls2}-icon`,
      "aria-disabled": mergedDisabled,
      "aria-pressed": visible,
      "aria-label": visible ? locale2.hide : locale2.show,
      onMouseDown: (e2) => {
        e2.preventDefault();
      },
      onMouseUp: (e2) => {
        e2.preventDefault();
      },
      onKeyDown: (e2) => {
        if (e2.key === "Enter" || e2.key === " ") {
          e2.preventDefault();
          onVisibleChange();
        }
      },
      [iconTrigger]: onVisibleChange
    }, icon);
  };
  const inputPrefixCls = getPrefixCls("input", customizeInputPrefixCls);
  const prefixCls = getPrefixCls("input-password", customizePrefixCls);
  const suffixIcon = visibilityToggle && getIcon(prefixCls);
  const inputClassName = clsx(prefixCls, contextClassName, className, {
    [`${prefixCls}-${props.size}`]: !!props.size
  });
  const inputProps = {
    ...restProps,
    type: visible ? "text" : "password",
    prefixCls: inputPrefixCls,
    suffix: /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, suffixIcon, suffix),
    disabled: mergedDisabled,
    className: inputClassName,
    style: {
      ...contextStyle,
      ...style
    },
    classNames: mergedClassNames,
    styles: mergedStyles
  };
  return /* @__PURE__ */ reactExports.createElement(Input$1, {
    ref: composeRef(ref, inputRef),
    ...inputProps
  });
});
const genSearchStyle = (token) => {
  const {
    componentCls,
    antCls,
    calc,
    max
  } = token;
  const btnCls = `${componentCls}-btn`;
  const [varName, varRef] = genCssVar(antCls, "input-search");
  const inputFontSizeSM = token.inputFontSizeSM ?? token.fontSize;
  const smallButtonHeight = max(token.controlHeightSM, calc(inputFontSizeSM).mul(token.lineHeight).add(calc(token.paddingBlockSM).mul(2)).add(calc(token.lineWidth).mul(2)).equal());
  return {
    [componentCls]: {
      [varName("btn-height")]: unit(token.controlHeight),
      width: "100%",
      // =========================== Button ===========================
      [btnCls]: {
        height: varRef("btn-height"),
        [`&${antCls}-btn-icon-only`]: {
          width: varRef("btn-height")
        },
        "&-filled": {
          background: token.colorFillTertiary,
          "&:not(:disabled)": {
            "&:hover": {
              background: token.colorFillSecondary
            },
            "&:active": {
              background: token.colorFill
            }
          }
        }
      },
      [`&${componentCls}-large`]: {
        [varName("btn-height")]: unit(token.controlHeightLG)
      },
      [`&${componentCls}-small`]: {
        [varName("btn-height")]: unit(token.controlHeightSM)
      },
      [`&${componentCls}-small ${btnCls}`]: {
        minHeight: smallButtonHeight,
        [`&${token.antCls}-btn-icon-only`]: {
          minWidth: smallButtonHeight
        }
      }
    }
  };
};
const useStyle$3 = genStyleHooks(["Input", "Search"], (token) => {
  const inputToken = merge$1(token, initInputToken(token));
  return genSearchStyle(inputToken);
}, initComponentToken);
const Search = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    inputPrefixCls: customizeInputPrefixCls,
    className,
    size: customizeSize,
    style,
    enterButton = false,
    searchIcon: customizeSearchIcon,
    addonAfter,
    loading,
    disabled,
    onSearch: customOnSearch,
    onChange: customOnChange,
    onCompositionStart,
    onCompositionEnd,
    variant,
    onPressEnter: customOnPressEnter,
    classNames,
    styles,
    hidden,
    ...restProps
  } = props;
  const {
    direction,
    getPrefixCls,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles,
    searchIcon: contextSearchIcon
  } = useComponentConfig("inputSearch");
  const mergedProps = {
    ...props,
    enterButton
  };
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, styles], {
    props: mergedProps
  }, {
    button: {
      _default: "root"
    }
  });
  const composedRef = reactExports.useRef(false);
  const prefixCls = getPrefixCls("input-search", customizePrefixCls);
  const inputPrefixCls = getPrefixCls("input", customizeInputPrefixCls);
  const [hashId, cssVarCls] = useStyle$3(prefixCls);
  const {
    compactSize
  } = useCompactItemContext(prefixCls, direction);
  const size = useSize((ctx) => customizeSize ?? compactSize ?? ctx);
  const inputRef = reactExports.useRef(null);
  const onChange = (e2) => {
    if (e2?.target && e2.type === "click" && customOnSearch) {
      customOnSearch(e2.target.value, e2, {
        source: "clear"
      });
    }
    customOnChange?.(e2);
  };
  const onMouseDown = (e2) => {
    if (document.activeElement === inputRef.current?.input) {
      e2.preventDefault();
    }
  };
  const onSearch = (e2) => {
    if (customOnSearch) {
      customOnSearch(inputRef.current?.input?.value, e2, {
        source: "input"
      });
    }
  };
  const onPressEnter = (e2) => {
    if (composedRef.current || loading) {
      return;
    }
    customOnPressEnter?.(e2);
    onSearch(e2);
  };
  const searchIcon = typeof enterButton === "boolean" ? fallbackProp(customizeSearchIcon, contextSearchIcon, /* @__PURE__ */ reactExports.createElement(RefIcon$7, null)) : null;
  const btnPrefixCls = `${prefixCls}-btn`;
  const btnClassName = clsx(btnPrefixCls, {
    [`${btnPrefixCls}-${variant}`]: variant
  });
  let button;
  const enterButtonAsElement = enterButton || {};
  const isAntdButton = enterButtonAsElement.type && enterButtonAsElement.type.__ANT_BUTTON === true;
  if (isAntdButton || enterButtonAsElement.type === "button") {
    const enterButtonProps = enterButtonAsElement.props;
    button = cloneElement(enterButtonAsElement, {
      onMouseDown,
      onClick: (e2) => {
        enterButtonAsElement?.props?.onClick?.(e2);
        onSearch(e2);
      },
      key: "enterButton",
      ...isAntdButton ? {
        className: clsx(btnClassName, enterButtonProps.className),
        size
      } : {}
    });
  } else {
    button = /* @__PURE__ */ reactExports.createElement(Button$1, {
      classNames: mergedClassNames.button,
      styles: mergedStyles.button,
      className: btnClassName,
      color: enterButton ? "primary" : "default",
      size,
      disabled,
      key: "enterButton",
      onMouseDown,
      onClick: onSearch,
      loading,
      icon: searchIcon,
      variant: variant === "borderless" || variant === "filled" || variant === "underlined" ? "text" : enterButton ? "solid" : void 0
    }, enterButton);
  }
  if (addonAfter) {
    button = [button, cloneElement(addonAfter, {
      key: "addonAfter"
    })];
  }
  const mergedClassName = clsx(prefixCls, cssVarCls, {
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-${size}`]: !!size,
    [`${prefixCls}-with-button`]: !!enterButton
  }, className, contextClassName, hashId, mergedClassNames.root);
  const handleOnCompositionStart = (e2) => {
    composedRef.current = true;
    onCompositionStart?.(e2);
  };
  const handleOnCompositionEnd = (e2) => {
    composedRef.current = false;
    onCompositionEnd?.(e2);
  };
  const rootProps = pickAttrs(restProps, {
    data: true
  });
  const inputProps = omit({
    ...restProps,
    classNames: omit(mergedClassNames, ["button", "root"]),
    styles: omit(mergedStyles, ["button", "root"]),
    prefixCls: inputPrefixCls,
    type: "search",
    size,
    variant,
    onPressEnter,
    onCompositionStart: handleOnCompositionStart,
    onCompositionEnd: handleOnCompositionEnd,
    onChange,
    disabled
  }, Object.keys(rootProps));
  return /* @__PURE__ */ reactExports.createElement(Compact$1, {
    className: mergedClassName,
    style: {
      ...mergedStyles.root,
      ...contextStyle,
      ...style
    },
    ...rootProps,
    hidden
  }, /* @__PURE__ */ reactExports.createElement(Input$1, {
    ref: composeRef(inputRef, ref),
    ...inputProps
  }), button);
});
const genTextAreaStyle = (token) => {
  const {
    componentCls,
    paddingLG
  } = token;
  const textareaPrefixCls = `${componentCls}-textarea`;
  return {
    // Raw Textarea
    [`textarea${componentCls}`]: {
      maxWidth: "100%",
      // prevent textarea resize from coming out of its container
      height: "auto",
      minHeight: token.controlHeight,
      lineHeight: token.lineHeight,
      verticalAlign: "bottom",
      transition: `all ${token.motionDurationSlow}`,
      resize: "vertical",
      [`&${componentCls}-mouse-active`]: {
        transition: `all ${token.motionDurationSlow}, height 0s, width 0s`
      }
    },
    // Wrapper for resize
    [`${componentCls}-textarea-affix-wrapper-resize-dirty`]: {
      width: "auto"
    },
    [textareaPrefixCls]: {
      position: "relative",
      "&-show-count": {
        [`${componentCls}-data-count`]: {
          position: "absolute",
          bottom: token.calc(token.fontSize).mul(token.lineHeight).mul(-1).equal(),
          insetInlineEnd: 0,
          color: token.colorTextDescription,
          whiteSpace: "nowrap",
          pointerEvents: "none"
        }
      },
      [`
        &-allow-clear > ${componentCls},
        &-affix-wrapper${textareaPrefixCls}-has-feedback ${componentCls}
      `]: {
        paddingInlineEnd: paddingLG
      },
      [`&-affix-wrapper${componentCls}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${componentCls}`]: {
          fontSize: "inherit",
          border: "none",
          outline: "none",
          background: "transparent",
          minHeight: token.calc(token.controlHeight).sub(token.calc(token.lineWidth).mul(2)).equal(),
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        [`${componentCls}-suffix`]: {
          margin: 0,
          "> *:not(:last-child)": {
            marginInline: 0
          },
          // Clear Icon
          [`${componentCls}-clear-icon`]: {
            position: "absolute",
            insetInlineEnd: token.paddingInline,
            insetBlockStart: token.paddingXS
          },
          // Feedback Icon
          [`${textareaPrefixCls}-suffix`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: token.paddingInline,
            bottom: 0,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            margin: "auto",
            pointerEvents: "none"
          }
        }
      },
      [`&-affix-wrapper${componentCls}-affix-wrapper-rtl`]: {
        [`${componentCls}-suffix`]: {
          [`${componentCls}-data-count`]: {
            direction: "ltr",
            insetInlineStart: 0
          }
        }
      },
      [`&-affix-wrapper${componentCls}-affix-wrapper-sm`]: {
        [`${componentCls}-suffix`]: {
          [`${componentCls}-clear-icon`]: {
            insetInlineEnd: token.paddingInlineSM
          }
        }
      }
    }
  };
};
const useStyle$2 = genStyleHooks(["Input", "TextArea"], (token) => {
  const inputToken = merge$1(token, initInputToken(token));
  return genTextAreaStyle(inputToken);
}, initComponentToken, {
  resetFont: false
});
const TextArea = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    bordered = true,
    size: customizeSize,
    disabled: customDisabled,
    status: customStatus,
    allowClear,
    classNames,
    rootClassName,
    className,
    style,
    styles,
    variant: customVariant,
    showCount,
    onMouseDown,
    onResize,
    ...rest
  } = props;
  const {
    getPrefixCls,
    direction,
    allowClear: contextAllowClear,
    autoComplete: contextAutoComplete,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = useComponentConfig("textArea");
  const disabled = reactExports.useContext(DisabledContext);
  const mergedDisabled = customDisabled ?? disabled;
  const {
    status: contextStatus,
    hasFeedback,
    feedbackIcon
  } = reactExports.useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  const contextStyleRoot = useSemanticRootStyle(contextStyle);
  const styleRoot = useSemanticRootStyle(style);
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, contextStyleRoot, styles, styleRoot], {
    props
  });
  const innerRef = reactExports.useRef(null);
  reactExports.useImperativeHandle(ref, () => ({
    resizableTextArea: innerRef.current?.resizableTextArea,
    focus: (option) => {
      triggerFocus(innerRef.current?.resizableTextArea?.textArea, option);
    },
    blur: () => innerRef.current?.blur(),
    nativeElement: innerRef.current?.nativeElement || null
  }));
  const prefixCls = getPrefixCls("input", customizePrefixCls);
  const rootCls = useCSSVarCls(prefixCls);
  const [hashId, cssVarCls] = useSharedStyle(prefixCls, rootClassName);
  useStyle$2(prefixCls, rootCls);
  const {
    compactSize,
    compactItemClassnames
  } = useCompactItemContext(prefixCls, direction);
  const mergedSize = useSize((ctx) => customizeSize ?? compactSize ?? ctx);
  const [variant, enableVariantCls] = useVariant("textArea", customVariant, bordered);
  const mergedAllowClear = useAllowClear({
    allowClear,
    contextAllowClear,
    componentName: "TextArea"
  });
  const [isMouseDown, setIsMouseDown] = reactExports.useState(false);
  const [resizeDirty, setResizeDirty] = reactExports.useState(false);
  const onInternalMouseDown = (e2) => {
    setIsMouseDown(true);
    onMouseDown?.(e2);
    const onMouseUp = () => {
      setIsMouseDown(false);
      document.removeEventListener("mouseup", onMouseUp);
    };
    document.addEventListener("mouseup", onMouseUp);
  };
  const onInternalResize = (size) => {
    onResize?.(size);
    if (isMouseDown && isFunction(getComputedStyle)) {
      const ele = innerRef.current?.nativeElement?.querySelector("textarea");
      if (ele && getComputedStyle(ele).resize === "both") {
        setResizeDirty(true);
      }
    }
  };
  return /* @__PURE__ */ reactExports.createElement(TextArea$1, {
    autoComplete: contextAutoComplete,
    ...rest,
    style: mergedStyles.root,
    styles: mergedStyles,
    disabled: mergedDisabled,
    allowClear: mergedAllowClear,
    className: clsx(
      cssVarCls,
      rootCls,
      className,
      rootClassName,
      compactItemClassnames,
      contextClassName,
      mergedClassNames.root,
      // Only for wrapper
      {
        [`${prefixCls}-textarea-affix-wrapper-resize-dirty`]: resizeDirty
      }
    ),
    classNames: {
      ...mergedClassNames,
      textarea: clsx({
        [`${prefixCls}-sm`]: mergedSize === "small",
        [`${prefixCls}-lg`]: mergedSize === "large"
      }, hashId, mergedClassNames.textarea, isMouseDown && `${prefixCls}-mouse-active`),
      variant: clsx({
        [`${prefixCls}-${variant}`]: enableVariantCls
      }, getStatusClassNames(prefixCls, mergedStatus)),
      affixWrapper: clsx(`${prefixCls}-textarea-affix-wrapper`, {
        [`${prefixCls}-affix-wrapper-rtl`]: direction === "rtl",
        [`${prefixCls}-affix-wrapper-sm`]: mergedSize === "small",
        [`${prefixCls}-affix-wrapper-lg`]: mergedSize === "large",
        [`${prefixCls}-textarea-show-count`]: showCount || props.count?.show
      }, hashId)
    },
    prefixCls,
    suffix: hasFeedback && /* @__PURE__ */ reactExports.createElement("span", {
      className: `${prefixCls}-textarea-suffix`
    }, feedbackIcon),
    showCount,
    ref: innerRef,
    onResize: onInternalResize,
    onMouseDown: onInternalMouseDown
  });
});
const Input = Input$1;
Input.Group = Group;
Input.Search = Search;
Input.TextArea = TextArea;
Input.Password = Password;
Input.OTP = OTP;
const PurePanel = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    closeIcon,
    closable,
    type,
    title,
    children,
    footer,
    classNames,
    styles,
    ...restProps
  } = props;
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const {
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = useComponentConfig("modal");
  const rootPrefixCls = getPrefixCls();
  const prefixCls = customizePrefixCls || getPrefixCls("modal");
  const rootCls = useCSSVarCls(rootPrefixCls);
  const [hashId, cssVarCls] = useStyle$c(prefixCls, rootCls);
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, styles], {
    props
  });
  const confirmPrefixCls = `${prefixCls}-confirm`;
  let additionalProps = {};
  if (type) {
    additionalProps = {
      closable: closable ?? false,
      title: "",
      footer: "",
      children: /* @__PURE__ */ reactExports.createElement(ConfirmContent, {
        ...props,
        prefixCls,
        confirmPrefixCls,
        rootPrefixCls,
        content: children
      })
    };
  } else {
    additionalProps = {
      closable: closable ?? true,
      title,
      footer: footer !== null && /* @__PURE__ */ reactExports.createElement(Footer, {
        ...props
      }),
      children
    };
  }
  return /* @__PURE__ */ reactExports.createElement(Panel, {
    prefixCls,
    className: clsx(hashId, `${prefixCls}-pure-panel`, type && confirmPrefixCls, type && `${confirmPrefixCls}-${type}`, className, contextClassName, cssVarCls, rootCls, mergedClassNames.root),
    style: {
      ...contextStyle,
      ...mergedStyles.root
    },
    ...restProps,
    closeIcon: renderCloseIcon(prefixCls, closeIcon),
    closable,
    classNames: mergedClassNames,
    styles: mergedStyles,
    ...additionalProps
  });
};
const PurePanel$1 = withPureRenderTheme(PurePanel);
function modalWarn(props) {
  return confirm(withWarn(props));
}
const Modal = Modal$1;
Modal.useModal = useModal;
Modal.info = function infoFn(props) {
  return confirm(withInfo(props));
};
Modal.success = function successFn(props) {
  return confirm(withSuccess(props));
};
Modal.error = function errorFn(props) {
  return confirm(withError(props));
};
Modal.warning = modalWarn;
Modal.warn = modalWarn;
Modal.confirm = function confirmFn(props) {
  return confirm(withConfirm(props));
};
Modal.destroyAll = function destroyAllFn() {
  while (destroyFns.length) {
    const close = destroyFns.pop();
    if (close) {
      close();
    }
  }
};
Modal.config = modalGlobalConfig;
Modal._InternalPanelDoNotUseOrYouWillBeFired = PurePanel$1;
function validProgress(progress) {
  if (!progress || progress < 0) {
    return 0;
  }
  if (progress > 100) {
    return 100;
  }
  return progress;
}
function getSuccessPercent({
  success
}) {
  let percent;
  if (success && "percent" in success) {
    percent = success.percent;
  }
  return percent;
}
const getPercentage = ({
  percent,
  success
}) => {
  const realSuccessPercent = validProgress(getSuccessPercent({
    success
  }));
  return [realSuccessPercent, validProgress(validProgress(percent) - realSuccessPercent)];
};
const getStrokeColor = ({
  success = {},
  strokeColor
}) => {
  const {
    strokeColor: successColor
  } = success;
  return [successColor || presetPrimaryColors.green, strokeColor || null];
};
const getSize = (size, type, extra) => {
  let width = -1;
  let height = -1;
  if (type === "step") {
    const steps = extra.steps;
    const strokeWidth = extra.strokeWidth;
    if (typeof size === "string" || typeof size === "undefined") {
      width = size === "small" ? 2 : 14;
      height = strokeWidth ?? 8;
    } else if (isNumber(size)) {
      [width, height] = [size, size];
    } else {
      [width = 14, height = 8] = Array.isArray(size) ? size : [size.width, size.height];
    }
    width *= steps;
  } else if (type === "line") {
    const strokeWidth = extra?.strokeWidth;
    if (typeof size === "string" || typeof size === "undefined") {
      height = strokeWidth || (size === "small" ? 6 : 8);
    } else if (isNumber(size)) {
      [width, height] = [size, size];
    } else {
      [width = -1, height = 8] = Array.isArray(size) ? size : [size.width, size.height];
    }
  } else if (type === "circle" || type === "dashboard") {
    if (typeof size === "string" || typeof size === "undefined") {
      [width, height] = size === "small" ? [60, 60] : [120, 120];
    } else if (isNumber(size)) {
      [width, height] = [size, size];
    } else if (Array.isArray(size)) {
      width = size[0] ?? size[1] ?? 120;
      height = size[0] ?? size[1] ?? 120;
    }
  }
  return [width, height];
};
const CIRCLE_MIN_STROKE_WIDTH = 3;
const getMinPercent = (width) => CIRCLE_MIN_STROKE_WIDTH / width * 100;
const OMIT_SEMANTIC_NAMES = ["root", "body", "indicator"];
const Circle = (props) => {
  const {
    prefixCls,
    classNames,
    styles,
    railColor,
    trailColor,
    strokeLinecap = "round",
    gapPosition,
    gapPlacement,
    gapDegree,
    width: originWidth = 120,
    type,
    children,
    success,
    size = originWidth,
    steps
  } = props;
  const {
    direction
  } = useComponentConfig("progress");
  const mergedRailColor = railColor ?? trailColor;
  const [width, height] = getSize(size, "circle");
  let {
    strokeWidth
  } = props;
  if (strokeWidth === void 0) {
    strokeWidth = Math.max(getMinPercent(width), 6);
  }
  const circleStyle = {
    width,
    height,
    fontSize: width * 0.15 + 6
  };
  const realGapDegree = reactExports.useMemo(() => {
    if (gapDegree || gapDegree === 0) {
      return gapDegree;
    }
    if (type === "dashboard") {
      return 75;
    }
    return void 0;
  }, [gapDegree, type]);
  const percentArray = getPercentage(props);
  const gapPos = reactExports.useMemo(() => {
    const mergedPlacement = (gapPlacement ?? gapPosition) || type === "dashboard" && "bottom" || void 0;
    const isRTL = direction === "rtl";
    switch (mergedPlacement) {
      case "start":
        return isRTL ? "right" : "left";
      case "end":
        return isRTL ? "left" : "right";
      default:
        return mergedPlacement;
    }
  }, [direction, gapPlacement, gapPosition, type]);
  const isGradient = isPlainObject(props.strokeColor);
  const strokeColor = getStrokeColor({
    success,
    strokeColor: props.strokeColor
  });
  const wrapperClassName = clsx(`${prefixCls}-body`, {
    [`${prefixCls}-circle-gradient`]: isGradient
  }, classNames.body);
  const circleContent = /* @__PURE__ */ reactExports.createElement(Circle$1, {
    steps,
    percent: steps ? percentArray[1] : percentArray,
    strokeWidth,
    railWidth: strokeWidth,
    strokeColor: steps ? strokeColor[1] : strokeColor,
    strokeLinecap,
    railColor: mergedRailColor,
    prefixCls,
    gapDegree: realGapDegree,
    gapPosition: gapPos,
    classNames: omit(classNames, OMIT_SEMANTIC_NAMES),
    styles: omit(styles, OMIT_SEMANTIC_NAMES)
  });
  const smallCircle = width <= 20;
  const node = /* @__PURE__ */ reactExports.createElement("div", {
    className: wrapperClassName,
    style: {
      ...circleStyle,
      ...styles.body
    }
  }, circleContent, !smallCircle && children);
  if (smallCircle) {
    return /* @__PURE__ */ reactExports.createElement(Tooltip, {
      title: children
    }, node);
  }
  return node;
};
const LineStrokeColorVar = "--progress-line-stroke-color";
const genAntProgressActive = (isRtl) => {
  const direction = "-100%";
  return new Keyframe(`antProgress${"LTR"}Active`, {
    "0%": {
      transform: `translateX(${direction}) scaleX(0)`,
      opacity: 0.1
    },
    "20%": {
      transform: `translateX(${direction}) scaleX(0)`,
      opacity: 0.5
    },
    to: {
      transform: "translateX(0) scaleX(1)",
      opacity: 0
    }
  });
};
const genBaseStyle$1 = (token) => {
  const {
    componentCls: progressCls,
    iconCls: iconPrefixCls
  } = token;
  return {
    [progressCls]: {
      ...resetComponent(token),
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      [`${progressCls}-indicator`]: {
        color: token.colorText,
        lineHeight: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        wordBreak: "normal",
        [iconPrefixCls]: {
          fontSize: token.fontSize
        }
      },
      [`&${progressCls}-status-exception`]: {
        [`${progressCls}-indicator`]: {
          color: token.colorError
        }
      },
      [`&${progressCls}-status-success`]: {
        [`${progressCls}-indicator`]: {
          color: token.colorSuccess
        }
      }
    }
  };
};
const genLineStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-line`]: {
      position: "relative",
      width: "100%",
      fontSize: token.fontSize,
      [`${componentCls}-body`]: {
        display: "inline-flex",
        alignItems: "center",
        width: "100%",
        gap: token.marginXS
      },
      [`${componentCls}-rail`]: {
        flex: "auto",
        background: token.remainingColor,
        borderRadius: token.lineBorderRadius,
        position: "relative",
        width: "100%",
        overflow: "hidden"
      },
      [`&${componentCls}-status-active`]: {
        [`${componentCls}-track:after`]: {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: token.colorBgContainer,
          borderRadius: "inherit",
          opacity: 0,
          animationName: genAntProgressActive(),
          animationDuration: token.progressActiveMotionDuration,
          animationTimingFunction: token.motionEaseOutQuint,
          animationIterationCount: "infinite"
        }
      },
      [`${componentCls}-track`]: {
        position: "absolute",
        insetInlineStart: 0,
        insetBlock: 0,
        borderRadius: "inherit",
        background: token.defaultColor,
        transition: `all ${token.motionDurationSlow} ${token.motionEaseInOutCirc}`,
        minWidth: "max-content",
        display: "flex",
        alignItems: "center",
        "&-success": {
          background: token.colorSuccess
        }
      },
      [`&${componentCls}-status-exception`]: {
        [`${componentCls}-track`]: {
          background: token.colorError
        }
      },
      [`&${componentCls}-status-success`]: {
        [`${componentCls}-track`]: {
          background: token.colorSuccess
        }
      },
      // >>>>> indicator
      // >>> Outer
      [`${componentCls}-indicator-outer`]: {
        [`&${componentCls}-indicator-start`]: {
          order: -1
        }
      },
      [`${componentCls}-body-layout-bottom`]: {
        flexDirection: "column",
        alignItems: "center",
        gap: token.marginXXS
      },
      // >>> Inner
      [`${componentCls}-indicator${componentCls}-indicator-inner`]: {
        color: token.colorWhite,
        paddingInline: token.paddingXXS,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        [`&${componentCls}-indicator-end`]: {
          justifyContent: "end"
        },
        [`&${componentCls}-indicator-start`]: {
          justifyContent: "start"
        },
        [`&${componentCls}-indicator-bright`]: {
          color: "rgba(0, 0, 0, 0.45)"
        }
      }
    }
  };
};
const genCircleStyle = (token) => {
  const {
    componentCls: progressCls,
    iconCls: iconPrefixCls
  } = token;
  return {
    [`${progressCls}-circle`]: {
      [`${progressCls}-circle-rail`]: {
        stroke: token.remainingColor
      },
      [`${progressCls}-body:not(${progressCls}-circle-gradient)`]: {
        [`${progressCls}-circle-path`]: {
          stroke: token.defaultColor
        }
      },
      [`${progressCls}-body`]: {
        position: "relative",
        lineHeight: 1,
        backgroundColor: "transparent"
      },
      [`${progressCls}-indicator`]: {
        position: "absolute",
        insetBlockStart: "50%",
        insetInlineStart: 0,
        width: "100%",
        margin: 0,
        padding: 0,
        color: token.circleTextColor,
        fontSize: token.circleTextFontSize,
        lineHeight: 1,
        whiteSpace: "normal",
        textAlign: "center",
        transform: "translateY(-50%)",
        [iconPrefixCls]: {
          fontSize: token.circleIconFontSize
        }
      },
      [`&${progressCls}-status-exception`]: {
        [`${progressCls}-body:not(${progressCls}-circle-gradient)`]: {
          [`${progressCls}-circle-path`]: {
            stroke: token.colorError
          }
        }
      },
      [`&${progressCls}-status-success`]: {
        [`${progressCls}-body:not(${progressCls}-circle-gradient)`]: {
          [`${progressCls}-circle-path`]: {
            stroke: token.colorSuccess
          }
        }
      }
    },
    [`${progressCls}-inline-circle`]: {
      lineHeight: 1,
      [`${progressCls}-inner`]: {
        verticalAlign: "bottom"
      }
    }
  };
};
const genStepStyle = (token) => {
  const {
    componentCls: progressCls
  } = token;
  return {
    [progressCls]: {
      [`${progressCls}-steps`]: {
        display: "inline-block",
        "&-body": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: token.progressStepMarginInlineEnd,
          [`${progressCls}-indicator`]: {
            marginInlineStart: token.marginXS
          }
        },
        "&-item": {
          flexShrink: 0,
          minWidth: token.progressStepMinWidth,
          backgroundColor: token.remainingColor,
          transition: `all ${token.motionDurationSlow}`,
          "&-active": {
            backgroundColor: token.defaultColor
          }
        }
      }
    }
  };
};
const genSmallLine = (token) => {
  const {
    componentCls: progressCls,
    iconCls: iconPrefixCls
  } = token;
  return {
    [progressCls]: {
      [`${progressCls}-small&-line, ${progressCls}-small&-line ${progressCls}-indicator ${iconPrefixCls}`]: {
        fontSize: token.fontSizeSM
      }
    }
  };
};
const prepareComponentToken$1 = (token) => ({
  circleTextColor: token.colorText,
  defaultColor: token.colorInfo,
  remainingColor: token.colorFillSecondary,
  lineBorderRadius: 100,
  // magic for capsule shape, should be a very large number
  circleTextFontSize: "1em",
  circleIconFontSize: `${token.fontSize / token.fontSizeSM}em`
});
const useStyle$1 = genStyleHooks("Progress", (token) => {
  const progressStepMarginInlineEnd = token.calc(token.marginXXS).div(2).equal();
  const progressToken = merge$1(token, {
    progressStepMarginInlineEnd,
    progressStepMinWidth: progressStepMarginInlineEnd,
    progressActiveMotionDuration: "2.4s"
  });
  return [genBaseStyle$1(progressToken), genLineStyle(progressToken), genCircleStyle(progressToken), genStepStyle(progressToken), genSmallLine(progressToken)];
}, prepareComponentToken$1);
const sortGradient = (gradients) => {
  let tempArr = [];
  Object.keys(gradients).forEach((key) => {
    const formattedKey = Number.parseFloat(key.replace(/%/g, ""));
    if (!Number.isNaN(formattedKey)) {
      tempArr.push({
        key: formattedKey,
        value: gradients[key]
      });
    }
  });
  tempArr = tempArr.sort((a, b) => a.key - b.key);
  return tempArr.map(({
    key,
    value
  }) => `${value} ${key}%`).join(", ");
};
const handleGradient = (strokeColor, directionConfig) => {
  const {
    from = presetPrimaryColors.blue,
    to = presetPrimaryColors.blue,
    direction = directionConfig === "rtl" ? "to left" : "to right",
    ...rest
  } = strokeColor;
  if (Object.keys(rest).length !== 0) {
    const sortedGradients = sortGradient(rest);
    const background2 = `linear-gradient(${direction}, ${sortedGradients})`;
    return {
      background: background2,
      [LineStrokeColorVar]: background2
    };
  }
  const background = `linear-gradient(${direction}, ${from}, ${to})`;
  return {
    background,
    [LineStrokeColorVar]: background
  };
};
const Line = (props) => {
  const {
    prefixCls,
    classNames,
    styles,
    direction: directionConfig,
    percent,
    size,
    strokeWidth,
    strokeColor,
    strokeLinecap = "round",
    children,
    railColor,
    trailColor,
    percentPosition,
    success
  } = props;
  const {
    align: infoAlign,
    type: infoPosition
  } = percentPosition;
  const mergedRailColor = railColor ?? trailColor;
  const borderRadius = strokeLinecap === "square" || strokeLinecap === "butt" ? 0 : void 0;
  const mergedSize = size ?? [-1, strokeWidth || (size === "small" ? 6 : 8)];
  const [width, height] = getSize(mergedSize, "line", {
    strokeWidth
  });
  const railStyle = {
    backgroundColor: mergedRailColor || void 0,
    borderRadius,
    height
  };
  const trackCls = `${prefixCls}-track`;
  const backgroundProps = strokeColor && typeof strokeColor !== "string" ? handleGradient(strokeColor, directionConfig) : {
    [LineStrokeColorVar]: strokeColor,
    background: strokeColor
  };
  const percentTrackStyle = {
    width: `${validProgress(percent)}%`,
    height,
    borderRadius,
    ...backgroundProps
  };
  const successPercent = getSuccessPercent(props);
  const successTrackStyle = {
    width: `${validProgress(successPercent)}%`,
    height,
    borderRadius,
    backgroundColor: success?.strokeColor
  };
  return /* @__PURE__ */ reactExports.createElement("div", {
    className: clsx(`${prefixCls}-body`, classNames.body, {
      [`${prefixCls}-body-layout-bottom`]: infoAlign === "center" && infoPosition === "outer"
    }),
    style: {
      width: width > 0 ? width : "100%",
      ...styles.body
    }
  }, /* @__PURE__ */ reactExports.createElement("div", {
    className: clsx(`${prefixCls}-rail`, classNames.rail),
    style: {
      ...railStyle,
      ...styles.rail
    }
  }, /* @__PURE__ */ reactExports.createElement("div", {
    className: clsx(trackCls, classNames.track),
    style: {
      ...percentTrackStyle,
      ...styles.track
    }
  }, infoPosition === "inner" && children), successPercent !== void 0 && /* @__PURE__ */ reactExports.createElement("div", {
    className: clsx(trackCls, `${trackCls}-success`, classNames.track),
    style: {
      ...successTrackStyle,
      ...styles.track
    }
  })), infoPosition === "outer" && children);
};
const Steps = (props) => {
  const {
    classNames,
    styles,
    size,
    steps,
    rounding: customRounding = Math.round,
    percent = 0,
    strokeWidth = 8,
    strokeColor,
    railColor,
    trailColor,
    prefixCls,
    children
  } = props;
  const current = customRounding(steps * (percent / 100));
  const stepWidth = size === "small" ? 2 : 14;
  const mergedSize = size ?? [stepWidth, strokeWidth];
  const [width, height] = getSize(mergedSize, "step", {
    steps,
    strokeWidth
  });
  const unitWidth = width / steps;
  const styledSteps = Array.from({
    length: steps
  });
  const mergedRailColor = railColor ?? trailColor;
  for (let i = 0; i < steps; i++) {
    const color = Array.isArray(strokeColor) ? strokeColor[i] : strokeColor;
    styledSteps[i] = /* @__PURE__ */ reactExports.createElement("div", {
      key: i,
      className: clsx(`${prefixCls}-steps-item`, {
        [`${prefixCls}-steps-item-active`]: i <= current - 1
      }, classNames.track),
      style: {
        backgroundColor: i <= current - 1 ? color : mergedRailColor,
        width: unitWidth,
        height,
        ...styles.track
      }
    });
  }
  return /* @__PURE__ */ reactExports.createElement("div", {
    className: clsx(`${prefixCls}-steps-body`, classNames.body),
    style: styles.body
  }, styledSteps, children);
};
const ProgressStatuses = ["normal", "exception", "active", "success"];
const Progress = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    classNames,
    styles,
    steps,
    strokeColor,
    percent = 0,
    size = "medium",
    showInfo = true,
    type = "line",
    status,
    format,
    style,
    percentPosition = {},
    ...restProps
  } = props;
  const {
    align: infoAlign = "end",
    type: infoPosition = "outer"
  } = percentPosition;
  const strokeColorNotArray = Array.isArray(strokeColor) ? strokeColor[0] : strokeColor;
  const strokeColorNotGradient = typeof strokeColor === "string" || Array.isArray(strokeColor) ? strokeColor : void 0;
  const strokeColorIsBright = reactExports.useMemo(() => {
    if (strokeColorNotArray) {
      const color = typeof strokeColorNotArray === "string" ? strokeColorNotArray : Object.values(strokeColorNotArray)[0];
      return new FastColor(color).isLight();
    }
    return false;
  }, [strokeColor]);
  const percentNumber = reactExports.useMemo(() => {
    const successPercent = getSuccessPercent(props);
    return Number.parseInt(successPercent !== void 0 ? (successPercent ?? 0)?.toString() : (percent ?? 0)?.toString(), 10);
  }, [percent, props.success]);
  const progressStatus = reactExports.useMemo(() => {
    if (!ProgressStatuses.includes(status) && percentNumber >= 100) {
      return "success";
    }
    return status || "normal";
  }, [status, percentNumber]);
  const {
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = useComponentConfig("progress");
  const prefixCls = getPrefixCls("progress", customizePrefixCls);
  const [hashId, cssVarCls] = useStyle$1(prefixCls);
  const mergedProps = {
    ...props,
    percent,
    type,
    size,
    showInfo,
    percentPosition
  };
  const contextStyleRoot = useSemanticRootStyle(contextStyle);
  const styleRoot = useSemanticRootStyle(style);
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, contextStyleRoot, styles, styleRoot], {
    props: mergedProps
  });
  const isLineType = type === "line";
  const isPureLineType = isLineType && !steps;
  const progressInfo = reactExports.useMemo(() => {
    if (!showInfo) {
      return null;
    }
    const successPercent = getSuccessPercent(props);
    let text;
    const textFormatter = format || ((number) => `${number}%`);
    const isBrightInnerColor = isLineType && strokeColorIsBright && infoPosition === "inner";
    if (infoPosition === "inner" || format || progressStatus !== "exception" && progressStatus !== "success") {
      text = textFormatter(validProgress(percent), validProgress(successPercent));
    } else if (progressStatus === "exception") {
      text = isLineType ? /* @__PURE__ */ reactExports.createElement(RefIcon, null) : /* @__PURE__ */ reactExports.createElement(RefIcon$1, null);
    } else if (progressStatus === "success") {
      text = isLineType ? /* @__PURE__ */ reactExports.createElement(RefIcon$4, null) : /* @__PURE__ */ reactExports.createElement(RefIcon$6, null);
    }
    return /* @__PURE__ */ reactExports.createElement("span", {
      className: clsx(`${prefixCls}-indicator`, {
        [`${prefixCls}-indicator-bright`]: isBrightInnerColor,
        [`${prefixCls}-indicator-${infoAlign}`]: isPureLineType,
        [`${prefixCls}-indicator-${infoPosition}`]: isPureLineType
      }, mergedClassNames.indicator),
      style: mergedStyles.indicator,
      title: typeof text === "string" ? text : void 0
    }, text);
  }, [showInfo, percent, percentNumber, progressStatus, type, prefixCls, format, isLineType, strokeColorIsBright, infoPosition, infoAlign, isPureLineType, mergedClassNames.indicator, mergedStyles.indicator]);
  const sharedProps = {
    ...props,
    classNames: mergedClassNames,
    styles: mergedStyles
  };
  let progress;
  if (type === "line") {
    progress = steps ? /* @__PURE__ */ reactExports.createElement(Steps, {
      ...sharedProps,
      strokeColor: strokeColorNotGradient,
      prefixCls,
      steps: isPlainObject(steps) ? steps.count : steps
    }, progressInfo) : /* @__PURE__ */ reactExports.createElement(Line, {
      ...sharedProps,
      strokeColor: strokeColorNotArray,
      prefixCls,
      direction,
      percentPosition: {
        align: infoAlign,
        type: infoPosition
      }
    }, progressInfo);
  } else if (type === "circle" || type === "dashboard") {
    progress = /* @__PURE__ */ reactExports.createElement(Circle, {
      ...sharedProps,
      strokeColor: strokeColorNotArray,
      prefixCls,
      progressStatus
    }, progressInfo);
  }
  const classString = clsx(prefixCls, `${prefixCls}-status-${progressStatus}`, {
    [`${prefixCls}-${type === "dashboard" && "circle" || type}`]: type !== "line",
    [`${prefixCls}-inline-circle`]: type === "circle" && getSize(size, "circle")[0] <= 20,
    [`${prefixCls}-line`]: isPureLineType,
    [`${prefixCls}-line-align-${infoAlign}`]: isPureLineType,
    [`${prefixCls}-line-position-${infoPosition}`]: isPureLineType,
    [`${prefixCls}-steps`]: steps,
    [`${prefixCls}-show-info`]: showInfo,
    [`${prefixCls}-small`]: size === "small",
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, contextClassName, className, rootClassName, mergedClassNames.root, hashId, cssVarCls);
  return /* @__PURE__ */ reactExports.createElement("div", {
    ref,
    style: mergedStyles.root,
    className: classString,
    role: "progressbar",
    "aria-valuenow": percentNumber,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    ...omit(restProps, ["railColor", "trailColor", "strokeWidth", "width", "gapDegree", "gapPosition", "gapPlacement", "strokeLinecap", "success"])
  }, progress);
});
const genDraggerStyle = (token) => {
  const {
    componentCls,
    iconCls
  } = token;
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-drag`]: {
        position: "relative",
        width: "100%",
        height: "100%",
        textAlign: "center",
        background: token.colorFillAlter,
        border: `${unit(token.lineWidth)} dashed ${token.colorBorder}`,
        borderRadius: token.borderRadiusLG,
        cursor: "pointer",
        transition: `border-color ${token.motionDurationSlow}`,
        [componentCls]: {
          padding: token.padding
        },
        [`${componentCls}-btn`]: {
          display: "table",
          width: "100%",
          height: "100%",
          outline: "none",
          borderRadius: token.borderRadiusLG,
          "&:focus-visible": {
            outline: `${unit(token.lineWidthFocus)} solid ${token.colorPrimaryBorder}`
          }
        },
        [`${componentCls}-drag-container`]: {
          display: "table-cell",
          verticalAlign: "middle"
        },
        [`
          &:not(${componentCls}-disabled):hover,
          &-hover:not(${componentCls}-disabled)
        `]: {
          borderColor: token.colorPrimaryHover
        },
        [`p${componentCls}-drag-icon`]: {
          marginBottom: token.margin,
          [iconCls]: {
            color: token.colorPrimary,
            fontSize: token.uploadThumbnailSize
          }
        },
        [`p${componentCls}-text`]: {
          margin: `0 0 ${unit(token.marginXXS)}`,
          color: token.colorTextHeading,
          fontSize: token.fontSizeLG
        },
        [`p${componentCls}-hint`]: {
          color: token.colorTextDescription,
          fontSize: token.fontSize
        },
        // ===================== Disabled =====================
        [`&${componentCls}-disabled`]: {
          [`p${componentCls}-drag-icon ${iconCls},
            p${componentCls}-text,
            p${componentCls}-hint
          `]: {
            color: token.colorTextDisabled
          }
        }
      }
    }
  };
};
const genListStyle = (token) => {
  const {
    componentCls,
    iconCls,
    fontSize,
    lineHeight,
    motionDurationSlow,
    calc
  } = token;
  const itemCls = `${componentCls}-list-item`;
  const actionsCls = `${itemCls}-actions`;
  const actionCls = `${itemCls}-action`;
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-list`]: {
        ...clearFix(),
        lineHeight: token.lineHeight,
        [itemCls]: {
          position: "relative",
          height: calc(token.lineHeight).mul(fontSize).equal(),
          marginTop: token.marginXS,
          fontSize,
          display: "flex",
          alignItems: "center",
          transition: `background-color ${motionDurationSlow}`,
          borderRadius: token.borderRadiusSM,
          "&:hover": {
            backgroundColor: token.controlItemBgHover
          },
          [`${itemCls}-name`]: {
            ...textEllipsis,
            padding: `0 ${unit(token.paddingXS)}`,
            lineHeight,
            flex: "auto",
            transition: `all ${motionDurationSlow}`
          },
          [actionsCls]: {
            whiteSpace: "nowrap",
            [actionCls]: {
              opacity: 0
            },
            "@media (hover: none), (pointer: coarse)": {
              [actionCls]: {
                opacity: 1
              }
            },
            [iconCls]: {
              color: token.actionsColor,
              transition: `all ${motionDurationSlow}`
            },
            [`
              ${actionCls}:focus-visible,
              &.picture ${actionCls}
            `]: {
              opacity: 1
            }
          },
          [`${componentCls}-icon ${iconCls}`]: {
            color: token.colorIcon,
            fontSize
          },
          [`${itemCls}-progress`]: {
            position: "absolute",
            bottom: token.calc(token.uploadProgressOffset).mul(-1).equal(),
            width: "100%",
            paddingInlineStart: calc(fontSize).add(token.paddingXS).equal(),
            fontSize,
            lineHeight: 0,
            pointerEvents: "none",
            "> div": {
              margin: 0
            }
          }
        },
        [`${itemCls}:hover ${actionCls}`]: {
          opacity: 1
        },
        [`${itemCls}-error`]: {
          color: token.colorError,
          [`${itemCls}-name, ${componentCls}-icon ${iconCls}`]: {
            color: token.colorError
          },
          [actionsCls]: {
            [`${iconCls}, ${iconCls}:hover`]: {
              color: token.colorError
            },
            [actionCls]: {
              opacity: 1
            }
          }
        },
        [`${componentCls}-list-item-container`]: {
          transition: ["opacity", "height"].map((prop) => `${prop} ${motionDurationSlow}`).join(", "),
          // For smooth removing animation
          "&::before": {
            display: "table",
            width: 0,
            height: 0,
            content: '""'
          }
        }
      }
    }
  };
};
const genMotionStyle = (token) => {
  const {
    componentCls
  } = token;
  const uploadAnimateInlineIn = new Keyframe("uploadAnimateInlineIn", {
    from: {
      width: 0,
      height: 0,
      padding: 0,
      opacity: 0,
      margin: token.calc(token.marginXS).div(-2).equal()
    }
  });
  const uploadAnimateInlineOut = new Keyframe("uploadAnimateInlineOut", {
    to: {
      width: 0,
      height: 0,
      padding: 0,
      opacity: 0,
      margin: token.calc(token.marginXS).div(-2).equal()
    }
  });
  const inlineCls = `${componentCls}-animate-inline`;
  return [{
    [`${componentCls}-wrapper`]: {
      [`${inlineCls}-appear, ${inlineCls}-enter, ${inlineCls}-leave`]: {
        animationDuration: token.motionDurationSlow,
        animationTimingFunction: token.motionEaseInOutCirc,
        animationFillMode: "forwards"
      },
      [`${inlineCls}-appear, ${inlineCls}-enter`]: {
        animationName: uploadAnimateInlineIn
      },
      [`${inlineCls}-leave`]: {
        animationName: uploadAnimateInlineOut
      }
    }
  }, {
    [`${componentCls}-wrapper`]: initFadeMotion(token)
  }, uploadAnimateInlineIn, uploadAnimateInlineOut];
};
const genPictureStyle = (token) => {
  const {
    componentCls,
    iconCls,
    uploadThumbnailSize,
    uploadProgressOffset,
    calc
  } = token;
  const listCls = `${componentCls}-list`;
  const itemCls = `${listCls}-item`;
  return {
    [`${componentCls}-wrapper`]: {
      // ${listCls} 增加优先级
      [`
        ${listCls}${listCls}-picture,
        ${listCls}${listCls}-picture-card,
        ${listCls}${listCls}-picture-circle
      `]: {
        [itemCls]: {
          position: "relative",
          height: calc(uploadThumbnailSize).add(calc(token.lineWidth).mul(2)).add(calc(token.paddingXS).mul(2)).equal(),
          padding: token.paddingXS,
          border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderRadius: token.borderRadiusLG,
          "&:hover": {
            background: "transparent"
          },
          [`${itemCls}-thumbnail`]: {
            ...textEllipsis,
            width: uploadThumbnailSize,
            height: uploadThumbnailSize,
            lineHeight: unit(calc(uploadThumbnailSize).add(token.paddingSM).equal()),
            textAlign: "center",
            flex: "none",
            [iconCls]: {
              fontSize: token.fontSizeHeading2,
              color: token.colorPrimary
            },
            img: {
              display: "block",
              width: "100%",
              height: "100%",
              overflow: "hidden"
            }
          },
          [`${itemCls}-progress`]: {
            bottom: calc(token.fontSize).mul(token.lineHeight).div(2).add(uploadProgressOffset).equal(),
            width: `calc(100% - ${unit(calc(token.paddingSM).mul(2).equal())})`,
            marginTop: 0,
            paddingInlineStart: calc(uploadThumbnailSize).add(token.paddingXS).equal()
          }
        },
        [`${itemCls}-error`]: {
          borderColor: token.colorError,
          [`${itemCls}-thumbnail${itemCls}-file ${iconCls}`]: {
            color: token.colorError
          }
        },
        [`${itemCls}-uploading`]: {
          borderStyle: "dashed",
          [`${itemCls}-name`]: {
            marginBottom: uploadProgressOffset
          }
        }
      },
      [`${listCls}${listCls}-picture-circle ${itemCls}`]: {
        [`&, &::before, ${itemCls}-thumbnail`]: {
          borderRadius: "50%"
        }
      }
    }
  };
};
const genPictureCardStyle = (token) => {
  const {
    componentCls,
    iconCls,
    fontSizeLG,
    colorTextLightSolid,
    calc
  } = token;
  const listCls = `${componentCls}-list`;
  const itemCls = `${listCls}-item`;
  const uploadPictureCardSize = token.uploadPicCardSize;
  return {
    [`
      ${componentCls}-wrapper${componentCls}-picture-card-wrapper,
      ${componentCls}-wrapper${componentCls}-picture-circle-wrapper
    `]: {
      ...clearFix(),
      display: "block",
      [`${componentCls}${componentCls}-select`]: {
        width: uploadPictureCardSize,
        height: uploadPictureCardSize,
        textAlign: "center",
        verticalAlign: "top",
        backgroundColor: token.colorFillAlter,
        border: `${unit(token.lineWidth)} dashed ${token.colorBorder}`,
        borderRadius: token.borderRadiusLG,
        cursor: "pointer",
        transition: `border-color ${token.motionDurationSlow}`,
        [`> ${componentCls}`]: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center"
        },
        [`&:not(${componentCls}-disabled):hover`]: {
          borderColor: token.colorPrimary
        }
      },
      // list
      [`${listCls}${listCls}-picture-card, ${listCls}${listCls}-picture-circle`]: {
        display: "flex",
        flexWrap: "wrap",
        "&:not(:empty)": {
          minHeight: uploadPictureCardSize
        },
        "@supports not (gap: 1px)": {
          "& > *": {
            marginBlockEnd: token.marginXS,
            marginInlineEnd: token.marginXS
          }
        },
        "@supports (gap: 1px)": {
          gap: token.marginXS
        },
        [`${listCls}-item-container`]: {
          display: "inline-block",
          width: uploadPictureCardSize,
          height: uploadPictureCardSize,
          verticalAlign: "top"
        },
        "&::after": {
          display: "none"
        },
        "&::before": {
          display: "none"
        },
        [itemCls]: {
          height: "100%",
          margin: 0,
          "&::before": {
            position: "absolute",
            zIndex: 1,
            width: `calc(100% - ${unit(calc(token.paddingXS).mul(2).equal())})`,
            height: `calc(100% - ${unit(calc(token.paddingXS).mul(2).equal())})`,
            backgroundColor: token.colorBgMask,
            opacity: 0,
            transition: `all ${token.motionDurationSlow}`,
            content: '" "'
          }
        },
        [`${itemCls}:hover`]: {
          [`&::before, ${itemCls}-actions`]: {
            opacity: 1
          }
        },
        [`${itemCls}-actions`]: {
          position: "absolute",
          insetInlineStart: 0,
          zIndex: 10,
          width: "100%",
          whiteSpace: "nowrap",
          textAlign: "center",
          opacity: 0,
          transition: `all ${token.motionDurationSlow}`,
          [`
            ${iconCls}-eye,
            ${iconCls}-download,
            ${iconCls}-delete
          `]: {
            zIndex: 10,
            width: fontSizeLG,
            margin: `0 ${unit(token.marginXXS)}`,
            fontSize: fontSizeLG,
            cursor: "pointer",
            transition: `all ${token.motionDurationSlow}`,
            color: colorTextLightSolid,
            "&:hover": {
              color: colorTextLightSolid
            },
            svg: {
              verticalAlign: "baseline"
            }
          }
        },
        [`${itemCls}-thumbnail, ${itemCls}-thumbnail img`]: {
          position: "static",
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "contain"
        },
        [`${itemCls}-name`]: {
          display: "none",
          textAlign: "center"
        },
        [`${itemCls}-file + ${itemCls}-name`]: {
          position: "absolute",
          bottom: token.margin,
          display: "block",
          width: `calc(100% - ${unit(calc(token.paddingXS).mul(2).equal())})`
        },
        [`${itemCls}-uploading`]: {
          [`&${itemCls}`]: {
            backgroundColor: token.colorFillAlter
          },
          [`&::before, ${iconCls}-eye, ${iconCls}-download, ${iconCls}-delete`]: {
            display: "none"
          }
        },
        [`${itemCls}-progress`]: {
          bottom: token.marginXL,
          width: `calc(100% - ${unit(calc(token.paddingXS).mul(2).equal())})`,
          paddingInlineStart: 0
        }
      }
    },
    [`${componentCls}-wrapper${componentCls}-picture-circle-wrapper`]: {
      [`${componentCls}${componentCls}-select`]: {
        borderRadius: "50%"
      }
    }
  };
};
const genRtlStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-rtl`]: {
      direction: "rtl"
    }
  };
};
const genBaseStyle = (token) => {
  const {
    componentCls,
    colorTextDisabled
  } = token;
  return {
    [`${componentCls}-wrapper`]: {
      ...resetComponent(token),
      [componentCls]: {
        outline: 0,
        "input[type='file']": {
          cursor: "pointer"
        }
      },
      [`${componentCls}-select`]: {
        display: "inline-block"
      },
      [`${componentCls}-hidden`]: {
        display: "none"
      },
      [`${componentCls}-disabled`]: {
        color: colorTextDisabled,
        cursor: "not-allowed"
      }
    }
  };
};
const prepareComponentToken = (token) => ({
  actionsColor: token.colorIcon,
  pictureCardSize: token.controlHeightLG * 2.55
});
const useStyle = genStyleHooks("Upload", (token) => {
  const {
    fontSizeHeading3,
    marginXS,
    lineWidth,
    pictureCardSize,
    calc
  } = token;
  const uploadToken = merge$1(token, {
    uploadThumbnailSize: calc(fontSizeHeading3).mul(2).equal(),
    uploadProgressOffset: calc(calc(marginXS).div(2)).add(lineWidth).equal(),
    uploadPicCardSize: pictureCardSize
  });
  return [genBaseStyle(uploadToken), genDraggerStyle(uploadToken), genPictureStyle(uploadToken), genPictureCardStyle(uploadToken), genListStyle(uploadToken), genMotionStyle(uploadToken), genRtlStyle(uploadToken), genCollapseMotion(uploadToken)];
}, prepareComponentToken);
function file2Obj(file) {
  return {
    ...file,
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    percent: 0,
    originFileObj: file
  };
}
function updateFileList(file, fileList) {
  const nextFileList = _toConsumableArray(fileList);
  const fileIndex = nextFileList.findIndex(({
    uid
  }) => uid === file.uid);
  if (fileIndex === -1) {
    nextFileList.push(file);
  } else {
    nextFileList[fileIndex] = file;
  }
  return nextFileList;
}
function getFileItem(file, fileList) {
  const matchKey = file.uid !== void 0 ? "uid" : "name";
  return fileList.filter((item) => item[matchKey] === file[matchKey])[0];
}
function removeFileItem(file, fileList) {
  const matchKey = file.uid !== void 0 ? "uid" : "name";
  const removed = fileList.filter((item) => item[matchKey] !== file[matchKey]);
  if (removed.length === fileList.length) {
    return null;
  }
  return removed;
}
const extname = (url = "") => {
  const temp = url.split("/");
  const filename = temp[temp.length - 1];
  const filenameWithoutSuffix = filename.split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [""])[0];
};
const isImageFileType = (type) => type.indexOf("image/") === 0;
const imageExtensions = [".avif", ".bmp", ".dpg", ".gif", ".heic", ".heif", ".ico", ".jfif", ".jpg", ".jpeg", ".png", ".svg", ".tif", ".tiff", ".webp"];
const isImageUrl = (file) => {
  if (file.type && !file.thumbUrl) {
    return isImageFileType(file.type);
  }
  const url = file.thumbUrl || file.url || "";
  const extension = extname(url || file.name);
  if (/^data:image\//.test(url) || imageExtensions.includes(extension?.toLowerCase() || "")) {
    return true;
  }
  if (/^data:/.test(url)) {
    return false;
  }
  if (extension) {
    return false;
  }
  return true;
};
const MEASURE_SIZE = 200;
function previewImage(file) {
  return new Promise((resolve) => {
    if (!file.type || !isImageFileType(file.type)) {
      resolve("");
      return;
    }
    const canvas = document.createElement("canvas");
    canvas.width = MEASURE_SIZE;
    canvas.height = MEASURE_SIZE;
    canvas.style.cssText = `position: fixed; left: 0; top: 0; width: ${MEASURE_SIZE}px; height: ${MEASURE_SIZE}px; z-index: 9999; display: none;`;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      const {
        width,
        height
      } = img;
      let drawWidth = MEASURE_SIZE;
      let drawHeight = MEASURE_SIZE;
      let offsetX = 0;
      let offsetY = 0;
      if (width > height) {
        drawHeight = height * (MEASURE_SIZE / width);
        offsetY = -(drawHeight - drawWidth) / 2;
      } else {
        drawWidth = width * (MEASURE_SIZE / height);
        offsetX = -(drawWidth - drawHeight) / 2;
      }
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      const dataURL = canvas.toDataURL();
      document.body.removeChild(canvas);
      window.URL.revokeObjectURL(img.src);
      resolve(dataURL);
    };
    img.crossOrigin = "anonymous";
    if (file.type.startsWith("image/svg+xml")) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result && typeof reader.result === "string") {
          img.src = reader.result;
        }
      };
      reader.readAsDataURL(file);
    } else if (file.type.startsWith("image/gif")) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          resolve(reader.result);
        }
      };
      reader.readAsDataURL(file);
    } else {
      img.src = window.URL.createObjectURL(file);
    }
  });
}
const ListItem = /* @__PURE__ */ reactExports.forwardRef(({
  prefixCls,
  className,
  style,
  classNames: itemClassNames,
  styles,
  locale: locale2,
  listType,
  file,
  items,
  progress: progressProps,
  iconRender,
  actionIconRender,
  itemRender,
  isImgUrl,
  showPreviewIcon,
  showRemoveIcon,
  showDownloadIcon,
  previewIcon: customPreviewIcon,
  removeIcon: customRemoveIcon,
  downloadIcon: customDownloadIcon,
  extra: customExtra,
  onPreview,
  onDownload,
  onClose
}, ref) => {
  const {
    status
  } = file;
  const [mergedStatus, setMergedStatus] = reactExports.useState(status);
  reactExports.useEffect(() => {
    if (status !== "removed") {
      setMergedStatus(status);
    }
  }, [status]);
  const [showProgress, setShowProgress] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => {
      setShowProgress(true);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  const iconNode = iconRender(file);
  let icon = /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-icon`
  }, iconNode);
  if (listType === "picture" || listType === "picture-card" || listType === "picture-circle") {
    if (mergedStatus === "uploading" || !file.thumbUrl && !file.url) {
      const uploadingClassName = clsx(`${prefixCls}-list-item-thumbnail`, {
        [`${prefixCls}-list-item-file`]: mergedStatus !== "uploading"
      });
      icon = /* @__PURE__ */ reactExports.createElement("div", {
        className: uploadingClassName
      }, iconNode);
    } else {
      const thumbnail = isImgUrl?.(file) ? /* @__PURE__ */ reactExports.createElement("img", {
        src: file.thumbUrl || file.url,
        alt: file.name,
        className: `${prefixCls}-list-item-image`,
        crossOrigin: file.crossOrigin
      }) : iconNode;
      const aClassName = clsx(`${prefixCls}-list-item-thumbnail`, {
        [`${prefixCls}-list-item-file`]: isImgUrl && !isImgUrl(file)
      });
      icon = /* @__PURE__ */ reactExports.createElement("a", {
        className: aClassName,
        onClick: (e2) => onPreview(file, e2),
        href: file.url || file.thumbUrl,
        target: "_blank",
        rel: "noopener noreferrer"
      }, thumbnail);
    }
  }
  const listItemClassName = clsx(`${prefixCls}-list-item`, `${prefixCls}-list-item-${mergedStatus}`, itemClassNames?.item);
  const linkProps = typeof file.linkProps === "string" ? JSON.parse(file.linkProps) : file.linkProps;
  const removeIcon = (isFunction(showRemoveIcon) ? showRemoveIcon(file) : showRemoveIcon) ? actionIconRender(
    (isFunction(customRemoveIcon) ? customRemoveIcon(file) : customRemoveIcon) || /* @__PURE__ */ reactExports.createElement(RefIcon$c, null),
    () => onClose(file),
    prefixCls,
    locale2.removeFile,
    // acceptUploadDisabled is true, only remove icon will follow Upload disabled prop
    // https://github.com/ant-design/ant-design/issues/46171
    true
  ) : null;
  const downloadIcon = (isFunction(showDownloadIcon) ? showDownloadIcon(file) : showDownloadIcon) && mergedStatus === "done" ? actionIconRender((isFunction(customDownloadIcon) ? customDownloadIcon(file) : customDownloadIcon) || /* @__PURE__ */ reactExports.createElement(RefIcon$d, null), () => onDownload(file), prefixCls, locale2.downloadFile) : null;
  const downloadOrDelete = listType !== "picture-card" && listType !== "picture-circle" && /* @__PURE__ */ reactExports.createElement("span", {
    key: "download-delete",
    className: clsx(`${prefixCls}-list-item-actions`, {
      picture: listType === "picture"
    })
  }, downloadIcon, removeIcon);
  const extraContent = isFunction(customExtra) ? customExtra(file) : customExtra;
  const extra = extraContent && /* @__PURE__ */ reactExports.createElement("span", {
    className: `${prefixCls}-list-item-extra`
  }, extraContent);
  const listItemNameClass = clsx(`${prefixCls}-list-item-name`);
  const onPreviewKeyDown = (e2) => {
    if (e2.key === "Enter" || e2.key === " ") {
      e2.preventDefault();
      onPreview(file, e2);
    }
  };
  const fileName = file.url ? /* @__PURE__ */ reactExports.createElement("a", {
    key: "view",
    target: "_blank",
    rel: "noopener noreferrer",
    className: listItemNameClass,
    title: file.name,
    ...linkProps,
    href: file.url,
    onClick: (e2) => onPreview(file, e2)
  }, file.name, extra) : /* @__PURE__ */ reactExports.createElement("span", {
    key: "view",
    role: "button",
    tabIndex: 0,
    className: listItemNameClass,
    onClick: (e2) => onPreview(file, e2),
    onKeyDown: onPreviewKeyDown,
    title: file.name
  }, file.name, extra);
  const previewIcon = (isFunction(showPreviewIcon) ? showPreviewIcon(file) : showPreviewIcon) && (file.url || file.thumbUrl) ? /* @__PURE__ */ reactExports.createElement("a", {
    href: file.url || file.thumbUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: (e2) => onPreview(file, e2),
    title: locale2.previewFile
  }, isFunction(customPreviewIcon) ? customPreviewIcon(file) : customPreviewIcon || /* @__PURE__ */ reactExports.createElement(RefIcon$a, null)) : null;
  const pictureCardActions = (listType === "picture-card" || listType === "picture-circle") && mergedStatus !== "uploading" && /* @__PURE__ */ reactExports.createElement("span", {
    className: `${prefixCls}-list-item-actions`
  }, previewIcon, mergedStatus === "done" && downloadIcon, removeIcon);
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const dom = /* @__PURE__ */ reactExports.createElement("div", {
    className: listItemClassName,
    style: styles?.item
  }, icon, fileName, downloadOrDelete, pictureCardActions, showProgress && /* @__PURE__ */ reactExports.createElement(CSSMotion, {
    motionName: `${rootPrefixCls}-fade`,
    visible: mergedStatus === "uploading",
    motionDeadline: 2e3
  }, ({
    className: motionClassName
  }) => {
    const loadingProgress = "percent" in file ? /* @__PURE__ */ reactExports.createElement(Progress, {
      type: "line",
      percent: file.percent,
      "aria-label": file["aria-label"],
      "aria-labelledby": file["aria-labelledby"],
      ...progressProps
    }) : null;
    return /* @__PURE__ */ reactExports.createElement("div", {
      className: clsx(`${prefixCls}-list-item-progress`, motionClassName)
    }, loadingProgress);
  }));
  const message = file.response && typeof file.response === "string" ? file.response : file.error?.statusText || file.error?.message || locale2.uploadError;
  const item = mergedStatus === "error" ? /* @__PURE__ */ reactExports.createElement(Tooltip, {
    title: message,
    getPopupContainer: (node) => node.parentNode
  }, dom) : dom;
  return /* @__PURE__ */ reactExports.createElement("div", {
    className: clsx(`${prefixCls}-list-item-container`, className),
    style,
    ref
  }, itemRender ? itemRender(item, file, items, {
    download: onDownload.bind(null, file),
    preview: onPreview.bind(null, file),
    remove: onClose.bind(null, file)
  }) : item);
});
const InternalUploadList = (props, ref) => {
  const {
    listType = "text",
    previewFile = previewImage,
    onPreview,
    onDownload,
    onRemove,
    locale: locale2,
    iconRender,
    isImageUrl: isImgUrl = isImageUrl,
    prefixCls: customizePrefixCls,
    items = [],
    showPreviewIcon = true,
    showRemoveIcon = true,
    showDownloadIcon = false,
    removeIcon,
    previewIcon,
    downloadIcon,
    extra,
    progress = {
      size: [-1, 2],
      showInfo: false
    },
    appendAction,
    appendActionVisible = true,
    itemRender,
    disabled,
    classNames: uploadListClassNames,
    styles
  } = props;
  const [, forceUpdate] = useForceUpdate();
  const [motionAppear, setMotionAppear] = reactExports.useState(false);
  const isPictureCardOrCirle = ["picture-card", "picture-circle"].includes(listType);
  reactExports.useEffect(() => {
    if (!listType.startsWith("picture")) {
      return;
    }
    (items || []).forEach((file) => {
      if (!(file.originFileObj instanceof File || file.originFileObj instanceof Blob) || file.thumbUrl !== void 0) {
        return;
      }
      file.thumbUrl = "";
      previewFile?.(file.originFileObj).then((previewDataUrl) => {
        file.thumbUrl = previewDataUrl || "";
        forceUpdate();
      });
    });
  }, [listType, items, previewFile]);
  reactExports.useEffect(() => {
    setMotionAppear(true);
  }, []);
  const onInternalPreview = (file, e2) => {
    if (!onPreview) {
      return;
    }
    e2?.preventDefault();
    return onPreview(file);
  };
  const onInternalDownload = (file) => {
    if (isFunction(onDownload)) {
      onDownload(file);
    } else if (file.url) {
      window.open(file.url);
    }
  };
  const onInternalClose = (file) => {
    onRemove?.(file);
  };
  const internalIconRender = (file) => {
    if (iconRender) {
      return iconRender(file, listType);
    }
    const isLoading = file.status === "uploading";
    if (listType.startsWith("picture")) {
      const loadingIcon = listType === "picture" ? /* @__PURE__ */ reactExports.createElement(RefIcon$2, null) : locale2.uploading;
      const fileIcon = isImgUrl?.(file) ? /* @__PURE__ */ reactExports.createElement(RefIcon$e, null) : /* @__PURE__ */ reactExports.createElement(RefIcon$f, null);
      return isLoading ? loadingIcon : fileIcon;
    }
    return isLoading ? /* @__PURE__ */ reactExports.createElement(RefIcon$2, null) : /* @__PURE__ */ reactExports.createElement(RefIcon$g, null);
  };
  const actionIconRender = (customIcon, callback, prefixCls2, title, acceptUploadDisabled) => {
    const btnProps = {
      type: "text",
      size: "small",
      title,
      onClick: (e2) => {
        callback();
        if (/* @__PURE__ */ reactExports.isValidElement(customIcon)) {
          customIcon.props.onClick?.(e2);
        }
      },
      className: `${prefixCls2}-list-item-action`,
      disabled: acceptUploadDisabled ? disabled : false
    };
    return /* @__PURE__ */ reactExports.isValidElement(customIcon) ? /* @__PURE__ */ reactExports.createElement(Button$1, {
      ...btnProps,
      icon: cloneElement(customIcon, {
        ...customIcon.props,
        onClick: () => {
        }
      })
    }) : /* @__PURE__ */ reactExports.createElement(Button$1, {
      ...btnProps
    }, /* @__PURE__ */ reactExports.createElement("span", null, customIcon));
  };
  reactExports.useImperativeHandle(ref, () => ({
    handlePreview: onInternalPreview,
    handleDownload: onInternalDownload
  }));
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("upload", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const listClassNames = clsx(`${prefixCls}-list`, `${prefixCls}-list-${listType}`, uploadListClassNames?.list);
  const listItemMotion = reactExports.useMemo(() => omit(initCollapseMotion(rootPrefixCls), ["onAppearEnd", "onEnterEnd", "onLeaveEnd"]), [rootPrefixCls]);
  const motionConfig = {
    ...isPictureCardOrCirle ? {} : listItemMotion,
    motionDeadline: 2e3,
    motionName: `${prefixCls}-${isPictureCardOrCirle ? "animate-inline" : "animate"}`,
    keys: _toConsumableArray(items.map((file) => ({
      key: file.uid,
      file
    }))),
    motionAppear
  };
  return /* @__PURE__ */ reactExports.createElement("div", {
    className: listClassNames,
    style: styles?.list
  }, /* @__PURE__ */ reactExports.createElement(CSSMotionList, {
    ...motionConfig,
    component: false
  }, ({
    key,
    file,
    className: motionClassName,
    style: motionStyle
  }) => /* @__PURE__ */ reactExports.createElement(ListItem, {
    key,
    locale: locale2,
    prefixCls,
    className: motionClassName,
    style: motionStyle,
    classNames: uploadListClassNames,
    styles,
    file,
    items,
    progress,
    listType,
    isImgUrl,
    showPreviewIcon,
    showRemoveIcon,
    showDownloadIcon,
    removeIcon,
    previewIcon,
    downloadIcon,
    extra,
    iconRender: internalIconRender,
    actionIconRender,
    itemRender,
    onPreview: onInternalPreview,
    onDownload: onInternalDownload,
    onClose: onInternalClose
  })), appendAction && /* @__PURE__ */ reactExports.createElement(CSSMotion, {
    ...motionConfig,
    visible: appendActionVisible,
    forceRender: true
  }, ({
    className: motionClassName,
    style: motionStyle
  }) => cloneElement(appendAction, (oriProps) => ({
    className: clsx(oriProps.className, motionClassName),
    style: {
      ...motionStyle,
      // prevent the element has hover css pseudo-class that may cause animation to end prematurely.
      pointerEvents: motionClassName ? "none" : void 0,
      ...oriProps.style
    }
  }))));
};
const UploadList = /* @__PURE__ */ reactExports.forwardRef(InternalUploadList);
const LIST_IGNORE = `__LIST_IGNORE_${Date.now()}__`;
const InternalUpload = (props, ref) => {
  const config = useComponentConfig("upload");
  const {
    fileList,
    defaultFileList,
    onRemove,
    showUploadList = true,
    listType = "text",
    onPreview,
    onDownload,
    onChange,
    onDrop,
    previewFile,
    disabled: customDisabled,
    locale: propLocale,
    iconRender,
    isImageUrl: isImageUrl2,
    progress: customProgress,
    prefixCls: customizePrefixCls,
    className,
    type = "select",
    children,
    style,
    itemRender,
    maxCount,
    data = {},
    multiple = false,
    hasControlInside = true,
    action = "",
    accept: customAccept,
    supportServerRender = true,
    rootClassName,
    styles,
    classNames
  } = props;
  const disabled = reactExports.useContext(DisabledContext);
  const mergedDisabled = customDisabled ?? disabled;
  const customRequest = props.customRequest || config.customRequest;
  const mergedProgress = config.progress || customProgress ? {
    ...config.progress,
    ...customProgress
  } : void 0;
  const mergedAccept = fallbackProp(customAccept, config.accept, "");
  const [internalFileList, setMergedFileList] = useControlledState(defaultFileList, fileList);
  const mergedFileList = internalFileList || [];
  const [dragState, setDragState] = reactExports.useState("drop");
  const uploadRef = reactExports.useRef(null);
  const wrapRef = reactExports.useRef(null);
  reactExports.useMemo(() => {
    const timestamp = Date.now();
    (fileList || []).forEach((file, index) => {
      if (!file.uid && !Object.isFrozen(file)) {
        file.uid = `__AUTO__${timestamp}_${index}__`;
      }
    });
  }, [fileList]);
  const onInternalChange = (file, changedFileList, event) => {
    let cloneList = _toConsumableArray(changedFileList);
    let exceedMaxCount = false;
    if (maxCount === 1) {
      cloneList = cloneList.slice(-1);
    } else if (maxCount) {
      exceedMaxCount = cloneList.length > maxCount;
      cloneList = cloneList.slice(0, maxCount);
    }
    reactDomExports.flushSync(() => {
      setMergedFileList(cloneList);
    });
    const changeInfo = {
      file,
      fileList: cloneList
    };
    if (event) {
      changeInfo.event = event;
    }
    if (!exceedMaxCount || file.status === "removed" || // We should ignore event if current file is exceed `maxCount`
    cloneList.some((f) => f.uid === file.uid)) {
      reactDomExports.flushSync(() => {
        onChange?.(changeInfo);
      });
    }
  };
  const mergedBeforeUpload = async (file, fileListArgs) => {
    const {
      beforeUpload
    } = props;
    let parsedFile = file;
    if (beforeUpload) {
      const result = await beforeUpload(file, fileListArgs);
      if (result === false) {
        return false;
      }
      delete file[LIST_IGNORE];
      if (result === LIST_IGNORE) {
        Object.defineProperty(file, LIST_IGNORE, {
          value: true,
          configurable: true
        });
        return false;
      }
      if (isPlainObject(result)) {
        parsedFile = result;
      }
    }
    return parsedFile;
  };
  const onBatchStart = (batchFileInfoList) => {
    const filteredFileInfoList = batchFileInfoList.filter((info) => !info.file[LIST_IGNORE]);
    if (!filteredFileInfoList.length) {
      return;
    }
    const objectFileList = filteredFileInfoList.map((info) => file2Obj(info.file));
    let newFileList = _toConsumableArray(mergedFileList);
    objectFileList.forEach((fileObj) => {
      newFileList = updateFileList(fileObj, newFileList);
    });
    objectFileList.forEach((fileObj, index) => {
      let triggerFileObj = fileObj;
      if (!filteredFileInfoList[index].parsedFile) {
        const {
          originFileObj
        } = fileObj;
        let clone;
        try {
          clone = new File([originFileObj], originFileObj.name, {
            type: originFileObj.type
          });
        } catch {
          clone = new Blob([originFileObj], {
            type: originFileObj.type
          });
          clone.name = originFileObj.name;
          clone.lastModifiedDate = /* @__PURE__ */ new Date();
          clone.lastModified = (/* @__PURE__ */ new Date()).getTime();
        }
        clone.uid = fileObj.uid;
        triggerFileObj = clone;
      } else {
        fileObj.status = "uploading";
      }
      onInternalChange(triggerFileObj, newFileList);
    });
  };
  const onSuccess = (response, file, xhr) => {
    try {
      if (typeof response === "string") {
        response = JSON.parse(response);
      }
    } catch {
    }
    if (!getFileItem(file, mergedFileList)) {
      return;
    }
    const targetItem = file2Obj(file);
    targetItem.status = "done";
    targetItem.percent = 100;
    targetItem.response = response;
    targetItem.xhr = xhr;
    const nextFileList = updateFileList(targetItem, mergedFileList);
    onInternalChange(targetItem, nextFileList);
  };
  const onProgress = (e2, file) => {
    if (!getFileItem(file, mergedFileList)) {
      return;
    }
    const targetItem = file2Obj(file);
    targetItem.status = "uploading";
    targetItem.percent = e2.percent;
    const nextFileList = updateFileList(targetItem, mergedFileList);
    onInternalChange(targetItem, nextFileList, e2);
  };
  const onError = (error, response, file) => {
    if (!getFileItem(file, mergedFileList)) {
      return;
    }
    const targetItem = file2Obj(file);
    targetItem.error = error;
    targetItem.response = response;
    targetItem.status = "error";
    const nextFileList = updateFileList(targetItem, mergedFileList);
    onInternalChange(targetItem, nextFileList);
  };
  const handleRemove = (file) => {
    let currentFile;
    Promise.resolve(isFunction(onRemove) ? onRemove(file) : onRemove).then((ret) => {
      if (ret === false) {
        return;
      }
      const removedFileList = removeFileItem(file, mergedFileList);
      if (removedFileList) {
        currentFile = {
          ...file,
          status: "removed"
        };
        mergedFileList?.forEach((item) => {
          const matchKey = currentFile.uid !== void 0 ? "uid" : "name";
          if (item[matchKey] === currentFile[matchKey] && !Object.isFrozen(item)) {
            item.status = "removed";
          }
        });
        uploadRef.current?.abort(currentFile);
        onInternalChange(currentFile, removedFileList);
      }
    });
  };
  const onFileDrop = (e2) => {
    setDragState(e2.type);
    if (e2.type === "drop") {
      onDrop?.(e2);
    }
  };
  reactExports.useImperativeHandle(ref, () => ({
    onBatchStart,
    onSuccess,
    onProgress,
    onError,
    fileList: mergedFileList,
    upload: uploadRef.current,
    nativeElement: wrapRef.current
  }));
  const {
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = useComponentConfig("upload");
  const prefixCls = getPrefixCls("upload", customizePrefixCls);
  const mergedProps = {
    ...props,
    listType,
    showUploadList,
    type,
    multiple,
    hasControlInside,
    supportServerRender,
    disabled: mergedDisabled
  };
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, styles], {
    props: mergedProps
  });
  const rcUploadProps = {
    onBatchStart,
    onError,
    onProgress,
    onSuccess,
    ...props,
    customRequest,
    data,
    multiple,
    action,
    accept: mergedAccept,
    supportServerRender,
    prefixCls,
    disabled: mergedDisabled,
    beforeUpload: mergedBeforeUpload,
    onChange: void 0,
    hasControlInside
  };
  delete rcUploadProps.className;
  delete rcUploadProps.style;
  if (!children || mergedDisabled) {
    delete rcUploadProps.id;
  }
  const wrapperCls = `${prefixCls}-wrapper`;
  const [hashId, cssVarCls] = useStyle(prefixCls, wrapperCls);
  const [contextLocale] = useLocale("Upload", localeValues.Upload);
  const {
    showRemoveIcon,
    showPreviewIcon,
    showDownloadIcon,
    removeIcon,
    previewIcon,
    downloadIcon,
    extra
  } = typeof showUploadList === "boolean" ? {} : showUploadList;
  const realShowRemoveIcon = typeof showRemoveIcon === "undefined" ? !mergedDisabled : showRemoveIcon;
  const renderUploadList = (button, buttonVisible) => {
    if (!showUploadList) {
      return button;
    }
    return /* @__PURE__ */ reactExports.createElement(UploadList, {
      classNames: mergedClassNames,
      styles: mergedStyles,
      prefixCls,
      listType,
      items: mergedFileList,
      previewFile,
      onPreview,
      onDownload,
      onRemove: handleRemove,
      showRemoveIcon: realShowRemoveIcon,
      showPreviewIcon,
      showDownloadIcon,
      removeIcon,
      previewIcon,
      downloadIcon,
      iconRender,
      extra,
      locale: {
        ...contextLocale,
        ...propLocale
      },
      isImageUrl: isImageUrl2,
      progress: mergedProgress,
      appendAction: button,
      appendActionVisible: buttonVisible,
      itemRender,
      disabled: mergedDisabled
    });
  };
  const mergedRootCls = clsx(wrapperCls, className, rootClassName, hashId, cssVarCls, contextClassName, mergedClassNames.root, {
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-picture-card-wrapper`]: listType === "picture-card",
    [`${prefixCls}-picture-circle-wrapper`]: listType === "picture-circle"
  });
  const mergedRootStyle = {
    ...mergedStyles.root
  };
  const mergedStyle = {
    ...contextStyle,
    ...style
  };
  if (type === "drag") {
    const dragCls = clsx(hashId, prefixCls, `${prefixCls}-drag`, {
      [`${prefixCls}-drag-uploading`]: mergedFileList.some((file) => file.status === "uploading"),
      [`${prefixCls}-drag-hover`]: dragState === "dragover",
      [`${prefixCls}-disabled`]: mergedDisabled,
      [`${prefixCls}-rtl`]: direction === "rtl"
    }, mergedClassNames.trigger);
    return /* @__PURE__ */ reactExports.createElement("span", {
      className: mergedRootCls,
      ref: wrapRef,
      style: mergedRootStyle
    }, /* @__PURE__ */ reactExports.createElement("div", {
      className: dragCls,
      style: {
        ...mergedStyle,
        ...mergedStyles.trigger
      },
      onDrop: onFileDrop,
      onDragOver: onFileDrop,
      onDragLeave: onFileDrop
    }, /* @__PURE__ */ reactExports.createElement(Upload$2, {
      ...rcUploadProps,
      ref: uploadRef,
      className: `${prefixCls}-btn`
    }, /* @__PURE__ */ reactExports.createElement("div", {
      className: `${prefixCls}-drag-container`
    }, children))), renderUploadList());
  }
  const uploadBtnCls = clsx(prefixCls, `${prefixCls}-select`, {
    [`${prefixCls}-disabled`]: mergedDisabled,
    [`${prefixCls}-hidden`]: !children
  }, mergedClassNames.trigger);
  const uploadButton = /* @__PURE__ */ reactExports.createElement("div", {
    className: uploadBtnCls,
    style: {
      ...mergedStyle,
      ...mergedStyles.trigger
    }
  }, /* @__PURE__ */ reactExports.createElement(Upload$2, {
    ...rcUploadProps,
    ref: uploadRef
  }));
  if (listType === "picture-card" || listType === "picture-circle") {
    return /* @__PURE__ */ reactExports.createElement("span", {
      className: mergedRootCls,
      ref: wrapRef,
      style: mergedRootStyle
    }, renderUploadList(uploadButton, !!children));
  }
  return /* @__PURE__ */ reactExports.createElement("span", {
    className: mergedRootCls,
    ref: wrapRef,
    style: mergedRootStyle
  }, uploadButton, renderUploadList());
};
const Upload$1 = /* @__PURE__ */ reactExports.forwardRef(InternalUpload);
const Dragger = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    style,
    height,
    hasControlInside = false,
    children,
    ...restProps
  } = props;
  const mergedStyle = {
    ...style,
    height
  };
  return /* @__PURE__ */ reactExports.createElement(Upload$1, {
    ref,
    hasControlInside,
    ...restProps,
    style: mergedStyle,
    type: "drag"
  }, children);
});
const Upload = Upload$1;
Upload.Dragger = Dragger;
Upload.LIST_IGNORE = LIST_IGNORE;
export {
  Button$1 as B,
  ConfigProvider as C,
  Form as F,
  Input as I,
  Modal as M,
  Radio as R,
  Select as S,
  Upload as U
};
