import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { createClassName } from "../../styled-system/";
import { useTheme } from "../../theme/";
import { jsx as ___EmotionJSX } from "@emotion/core";
var pageClassName = createClassName(function (_, props, _ref) {
  var font = _ref.font;
  return _extends({
    display: 'block',
    smoothing: font.smoothing,
    color: font.defaultColor,
    lineHeight: font.defaultLineHeight,
    fontFamily: font.fontFamily,
    fontSize: font.defaultFontSize
  }, props);
});
export var Page = function Page(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["children"]);

  var theme = useTheme();
  var pageStyle = pageClassName(props, theme);
  return ___EmotionJSX("div", {
    css: pageStyle
  }, children);
};
//# sourceMappingURL=Page.js.map