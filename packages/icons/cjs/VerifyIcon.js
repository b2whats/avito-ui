"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.VerifyIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var VerifyIcon = function VerifyIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "verify"
  }), (0, _core2.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21 2.833a.914.914 0 00-.682-.889C17.843 1.314 15.07 1 12 1c-3.07 0-5.843.314-8.318.944a.914.914 0 00-.682.89v11c0 3.494 2.943 6.492 8.632 9.086a.885.885 0 00.736 0C18.057 20.326 21 17.328 21 13.833v-11zm-4.419 4.353a1 1 0 00-1.395.233l-4.314 6.04-2.165-2.166a1 1 0 00-1.414 1.414l3 3a1 1 0 001.52-.126l5-7a1 1 0 00-.232-1.395z"
  }));
};

exports.VerifyIcon = VerifyIcon;
VerifyIcon.platform = 'mobile';
//# sourceMappingURL=VerifyIcon.js.map