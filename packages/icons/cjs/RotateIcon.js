"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.RotateIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var RotateIcon = function RotateIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "rotate"
  }), (0, _core2.jsx)("path", {
    d: "M13 0a9 9 0 00-9 9H2c-.89 0-1.337 1.077-.707 1.707l3 3a1 1 0 001.414 0l3-3C9.337 10.077 8.891 9 8 9H6a7 7 0 1114 0 1 1 0 102 0 9 9 0 00-9-9zM7.293 16.707l5 5a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 0l-5 5a1 1 0 000 1.414z"
  }));
};

exports.RotateIcon = RotateIcon;
RotateIcon.platform = 'mobile';
//# sourceMappingURL=RotateIcon.js.map