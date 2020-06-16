"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Page = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledSystem = require("../../styled-system/");

var _theme = require("../../theme/");

var _core = require("@emotion/core");

var pageClassName = (0, _styledSystem.createClassName)(function (_, props, _ref) {
  var font = _ref.font;
  return (0, _extends2["default"])({
    display: 'block',
    smoothing: font.smoothing,
    color: font.defaultColor,
    lineHeight: font.defaultLineHeight,
    fontFamily: font.fontFamily,
    fontSize: font.defaultFontSize
  }, props);
});

var Page = function Page(_ref2) {
  var children = _ref2.children,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref2, ["children"]);
  var theme = (0, _theme.useTheme)();
  var pageStyle = pageClassName(props, theme);
  return (0, _core.jsx)("div", {
    css: pageStyle
  }, children);
};

exports.Page = Page;
//# sourceMappingURL=Page.js.map