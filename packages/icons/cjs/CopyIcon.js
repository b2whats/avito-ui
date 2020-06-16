"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CopyIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var CopyIcon = function CopyIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "copy"
  }), (0, _core2.jsx)("path", {
    d: "M17 4H6.282c-.446 0-.607.046-.77.134a.909.909 0 00-.378.378c-.088.163-.134.324-.134.77V19h-.718c-.446 0-.607-.046-.77-.134a.908.908 0 01-.378-.378c-.088-.162-.134-.324-.134-.77V3.282c0-.446.046-.607.134-.77a.909.909 0 01.378-.378c.163-.088.324-.134.77-.134h11.436c.446 0 .608.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77V4zM8.282 6h11.436c.446 0 .608.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v13.436c0 .446-.046.608-.134.77a.908.908 0 01-.378.378c-.162.088-.324.134-.77.134H8.282c-.446 0-.607-.046-.77-.134a.908.908 0 01-.378-.378c-.088-.162-.134-.324-.134-.77V7.282c0-.446.046-.607.134-.77a.909.909 0 01.378-.378c.163-.088.324-.134.77-.134z"
  }));
};

exports.CopyIcon = CopyIcon;
CopyIcon.platform = 'mobile';
//# sourceMappingURL=CopyIcon.js.map