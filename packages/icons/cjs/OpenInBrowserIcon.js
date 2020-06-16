"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.OpenInBrowserIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var OpenInBrowserIcon = function OpenInBrowserIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "open-in-browser"
  }), (0, _core2.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 12C2 6.477 6.477 2 12 2A10 10 0 112 12zm15.9 5.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 00-1-1H8v-2h2a1 1 0 001-1V7h2a2 2 0 002-2v-.41a7.984 7.984 0 012.9 12.8zM11 19.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.22.21-1.79L9 15v1a2 2 0 002 2v1.93z"
  }));
};

exports.OpenInBrowserIcon = OpenInBrowserIcon;
OpenInBrowserIcon.platform = 'mobile';
//# sourceMappingURL=OpenInBrowserIcon.js.map