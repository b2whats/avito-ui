"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Grid = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledSystem = require("../../styled-system/");

var _theme = require("../../theme/");

var _core = require("@emotion/core");

// &::before хак против выпадания отрицательных margins из родителя для правильного задания высоты
var gridWrapperClassName = (0, _styledSystem.createClassName)(function (_, props) {
  return (0, _extends2["default"])({
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
var gridClassName = (0, _styledSystem.createClassName)(function (_, props) {
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

var Grid = function Grid(_ref4) {
  var children = _ref4.children,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref4, ["children"]);
  var theme = (0, _theme.useTheme)();
  var gridWrapperStyle = gridWrapperClassName(props, theme);
  var gridStyle = gridClassName(props, theme);
  return (0, _core.jsx)("div", {
    css: gridWrapperStyle
  }, (0, _core.jsx)("div", {
    css: gridStyle
  }, children));
};

exports.Grid = Grid;
//# sourceMappingURL=Grid.js.map