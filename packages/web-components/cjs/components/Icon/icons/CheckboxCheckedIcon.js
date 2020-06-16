"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CheckboxCheckedIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var CheckboxCheckedIcon = function CheckboxCheckedIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 12 12",
    name: "checkbox-checked"
  }), (0, _core2.jsx)("path", {
    d: "M2,6 L4.5,8.5 L10,2.5",
    stroke: "currentColor",
    strokeWidth: "1.72",
    fill: "none",
    strokeLinecap: "round"
  }));
};

exports.CheckboxCheckedIcon = CheckboxCheckedIcon;
CheckboxCheckedIcon.category = 'component';
//# sourceMappingURL=CheckboxCheckedIcon.js.map