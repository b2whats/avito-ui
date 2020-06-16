"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CheckmarkIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var CheckmarkIcon = function CheckmarkIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 20 20",
    name: "checkmark"
  }), (0, _core2.jsx)("path", {
    d: "M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
  }), (0, _core2.jsx)("path", {
    d: "M5.6123 10.4711L8.45819 13.317L14.3708 7.4043"
  }), (0, _core2.jsx)("path", {
    d: "M5.6123 10.4711L8.45819 13.317L14.3708 7.4043",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

exports.CheckmarkIcon = CheckmarkIcon;
CheckmarkIcon.category = 'component';
//# sourceMappingURL=CheckmarkIcon.js.map