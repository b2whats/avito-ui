"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.LightOnIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var LightOnIcon = function LightOnIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "light-on"
  }), (0, _core2.jsx)("path", {
    d: "M18 11c.89 0 1.337 1.077.707 1.707l-9 9c-.707.707-1.9.053-1.683-.924L9.754 13H6c-.89 0-1.337-1.077-.707-1.707l9-9c.707-.708 1.9-.053 1.683.924L14.246 11H18z"
  }));
};

exports.LightOnIcon = LightOnIcon;
LightOnIcon.platform = 'mobile';
//# sourceMappingURL=LightOnIcon.js.map