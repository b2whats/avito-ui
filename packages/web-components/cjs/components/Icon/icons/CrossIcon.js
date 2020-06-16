"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CrossIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var CrossIcon = function CrossIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 28 28",
    name: "cross"
  }), (0, _core2.jsx)("path", {
    d: "M14,12.9393398 L20.4696699,6.46966991 C20.7625631,6.1767767 21.2374369,6.1767767 21.5303301,6.46966991 C21.8232233,6.76256313 21.8232233,7.23743687 21.5303301,7.53033009 L15.0606602,14 L21.5303301,20.4696699 C21.8232233,20.7625631 21.8232233,21.2374369 21.5303301,21.5303301 C21.2374369,21.8232233 20.7625631,21.8232233 20.4696699,21.5303301 L14,15.0606602 L7.53033009,21.5303301 C7.23743687,21.8232233 6.76256313,21.8232233 6.46966991,21.5303301 C6.1767767,21.2374369 6.1767767,20.7625631 6.46966991,20.4696699 L12.9393398,14 L6.46966991,7.53033009 C6.1767767,7.23743687 6.1767767,6.76256313 6.46966991,6.46966991 C6.76256313,6.1767767 7.23743687,6.1767767 7.53033009,6.46966991 L14,12.9393398 Z"
  }));
};

exports.CrossIcon = CrossIcon;
CrossIcon.category = 'component';
//# sourceMappingURL=CrossIcon.js.map