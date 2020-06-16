"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.PendingIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var PendingIcon = function PendingIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "pending"
  }), (0, _core2.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-3.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM8.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
  }));
};

exports.PendingIcon = PendingIcon;
PendingIcon.platform = 'mobile';
//# sourceMappingURL=PendingIcon.js.map