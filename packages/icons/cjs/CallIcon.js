"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CallIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var CallIcon = function CallIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "call"
  }), (0, _core2.jsx)("path", {
    d: "M13.27 16.672L15.9 14.7a1 1 0 011.214.01l4.5 3.5a1 1 0 01.093 1.497l-2 2A1 1 0 0119 22C9.611 22 2 14.389 2 5a1 1 0 01.293-.707l2-2a1 1 0 011.496.093l3.5 4.5A1 1 0 019.3 8.1l-1.973 2.63a13.059 13.059 0 005.943 5.942z"
  }));
};

exports.CallIcon = CallIcon;
CallIcon.platform = 'mobile';
//# sourceMappingURL=CallIcon.js.map