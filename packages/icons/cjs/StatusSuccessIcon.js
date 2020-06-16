"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StatusSuccessIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var StatusSuccessIcon = function StatusSuccessIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "status-success"
  }), (0, _core2.jsx)("path", {
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-5.419-4.814a1 1 0 00-1.395.233l-4.314 6.04-2.165-2.166a1 1 0 00-1.414 1.414l3 3a1 1 0 001.52-.126l5-7a1 1 0 00-.232-1.395z"
  }));
};

exports.StatusSuccessIcon = StatusSuccessIcon;
StatusSuccessIcon.platform = 'mobile';
//# sourceMappingURL=StatusSuccessIcon.js.map