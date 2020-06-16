"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.InfoIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var InfoIcon = function InfoIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "info"
  }), (0, _core2.jsx)("path", {
    d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1 15a1 1 0 102 0v-5a1 1 0 10-2 0v5zm2.5-9.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
  }));
};

exports.InfoIcon = InfoIcon;
InfoIcon.platform = 'mobile';
//# sourceMappingURL=InfoIcon.js.map