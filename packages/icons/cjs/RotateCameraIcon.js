"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.RotateCameraIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var RotateCameraIcon = function RotateCameraIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "rotate-camera"
  }), (0, _core2.jsx)("path", {
    d: "M21 13c0-4.633-3.5-8.448-8-8.945V2c0-.89-1.077-1.337-1.707-.707l-3 3a1 1 0 000 1.414l3 3C11.923 9.337 13 8.891 13 8V6.07c3.392.486 6 3.404 6 6.93a1 1 0 102 0zM3 13c0 4.633 3.5 8.448 8 8.945V24c0 .89 1.077 1.337 1.707.707l3-3a1 1 0 000-1.414l-3-3c-.63-.63-1.707-.184-1.707.707v1.93A7.001 7.001 0 015 13a1 1 0 10-2 0z"
  }));
};

exports.RotateCameraIcon = RotateCameraIcon;
RotateCameraIcon.platform = 'mobile';
//# sourceMappingURL=RotateCameraIcon.js.map