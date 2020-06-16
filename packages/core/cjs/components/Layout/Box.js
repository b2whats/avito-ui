"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Box = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledSystem = require("../../styled-system/");

var _theme = require("../../theme/");

var _utils = require("../../utils/");

var _core = require("@emotion/core");

var boxClassName = (0, _styledSystem.createClassName)(function (_, props) {
  return (0, _extends2["default"])({
    display: 'inline-flex',
    shrink: false
  }, props);
});

var Box = function Box(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["children"]);
  var theme = (0, _theme.useTheme)();
  var boxStyle = boxClassName(props, theme);
  return (0, _core.jsx)("div", (0, _extends2["default"])({
    css: boxStyle
  }, (0, _utils.filterProps)(props)), children);
};

exports.Box = Box;
//# sourceMappingURL=Box.js.map