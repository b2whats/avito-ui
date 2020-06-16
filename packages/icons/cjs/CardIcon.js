"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CardIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var CardIcon = function CardIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "card"
  }), (0, _core2.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 8H2V5.282c0-.446.046-.607.134-.77a.909.909 0 01.378-.378c.163-.088.324-.134.77-.134h17.436c.446 0 .608.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77V8zm0 3v7.718c0 .446-.046.608-.134.77a.908.908 0 01-.378.378c-.162.088-.324.134-.77.134H3.282c-.446 0-.607-.046-.77-.134a.908.908 0 01-.378-.378c-.088-.162-.134-.324-.134-.77V11h20z"
  }));
};

exports.CardIcon = CardIcon;
CardIcon.platform = 'mobile';
//# sourceMappingURL=CardIcon.js.map