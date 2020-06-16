"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TimeIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var TimeIcon = function TimeIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "time"
  }), (0, _core2.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-6.293 3.707a1 1 0 000-1.414L13 11.586V7a1 1 0 10-2 0v5a1 1 0 00.293.707l3 3a1 1 0 001.414 0z"
  }));
};

exports.TimeIcon = TimeIcon;
TimeIcon.platform = 'mobile';
//# sourceMappingURL=TimeIcon.js.map