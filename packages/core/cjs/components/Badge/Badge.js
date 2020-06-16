"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Badge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _theme = require("../../theme");

var _Layout = require("../Layout");

var _theme2 = require("./theme");

var _core = require("@emotion/core");

var Badge = (0, _theme.uiComponent)('Badge', _theme2.badgeTheme)(function (_ref, _ref2, _ref3) {
  var gapSize = _ref.gapSize,
      gapColor = _ref.gapColor,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["gapSize", "gapColor"]);
  var tokens = _ref2.tokens;
  var _ = _ref3[0],
      setRef = _ref3[1];
  var shadow = gapSize && gapColor ? "0 0 0 " + gapSize + "px " + (tokens.palette[gapColor] || gapColor) + ";" : false;
  return (0, _core.jsx)(_Layout.Box, (0, _extends2["default"])({}, props, {
    shadow: shadow
  }), props.children);
});
exports.Badge = Badge;
//# sourceMappingURL=Badge.js.map