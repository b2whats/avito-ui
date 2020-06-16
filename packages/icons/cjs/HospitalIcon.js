"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.HospitalIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var HospitalIcon = function HospitalIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 16 16",
    name: "hospital"
  }), (0, _core2.jsx)("path", {
    d: "M10 6h4.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H10v4.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V10H1.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H6V1.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V6z"
  }));
};

exports.HospitalIcon = HospitalIcon;
HospitalIcon.platform = 'mobile';
//# sourceMappingURL=HospitalIcon.js.map