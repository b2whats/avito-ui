"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StatusErrorIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var StatusErrorIcon = function StatusErrorIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "status-error"
  }), (0, _core2.jsx)("path", {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM11 7a1 1 0 112 0v5a1 1 0 11-2 0V7zm2.5 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
  }));
};

exports.StatusErrorIcon = StatusErrorIcon;
StatusErrorIcon.platform = 'mobile';
//# sourceMappingURL=StatusErrorIcon.js.map