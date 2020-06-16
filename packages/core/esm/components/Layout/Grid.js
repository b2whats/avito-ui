import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { createClassName } from "../../styled-system/";
import { useTheme } from "../../theme/";
import { jsx as ___EmotionJSX } from "@emotion/core";
// &::before хак против выпадания отрицательных margins из родителя для правильного задания высоты
var gridWrapperClassName = createClassName(function (_, props) {
  return _extends({
    display: 'block',
    width: 1
  }, props, {
    align: undefined,
    valign: undefined
  });
}, function (textRules, _ref) {
  var debug = _ref.debug;
  return "\n    &::before {\n      content: '';\n      display: table;\n    }\n\n    " + (debug ? "\n      outline: 1px solid red;\n    " : '') + "\n\n    " + textRules + "\n  ";
});
var gridClassName = createClassName(function (_, props) {
  return {
    display: 'flex',
    align: props.align,
    valign: props.valign
  };
}, function (textRules, _ref2, _ref3) {
  var spacing = _ref2.spacing,
      spacingY = _ref2.spacingY,
      debug = _ref2.debug;
  var space = _ref3.space,
      palette = _ref3.palette;
  return "\n    flex-wrap: wrap;\n\n    " + (spacing ? "\n      margin-left: -" + (space[spacing] || spacing) + "px;\n      & > * {\n        border-left: " + (space[spacing] || spacing) + "px solid transparent;\n        background-clip: padding-box;\n      }\n    " : '') + "\n    " + (spacingY ? "\n      margin-top: -" + (space[spacingY] || spacingY) + "px;\n      & > * {\n        margin-top: " + (space[spacingY] || spacingY) + "px;\n      }\n    " : '') + "\n\n    " + (debug ? "\n      & > * {\n        background-color: " + palette.blue200 + ";\n        background-clip: padding-box;\n      }\n\n      & > :nth-child(2n) {\n        background-color: " + palette.yellow200 + ";\n      }\n    " : '') + "\n\n    " + textRules + "\n  ";
});
export var Grid = function Grid(_ref4) {
  var children = _ref4.children,
      props = _objectWithoutPropertiesLoose(_ref4, ["children"]);

  var theme = useTheme();
  var gridWrapperStyle = gridWrapperClassName(props, theme);
  var gridStyle = gridClassName(props, theme);
  return ___EmotionJSX("div", {
    css: gridWrapperStyle
  }, ___EmotionJSX("div", {
    css: gridStyle
  }, children));
};
//# sourceMappingURL=Grid.js.map