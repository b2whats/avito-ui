"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.WalletIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var WalletIcon = function WalletIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "wallet"
  }), (0, _core2.jsx)("path", {
    d: "M19 7h3V5.282c0-.446-.046-.607-.134-.77a.908.908 0 00-.378-.378c-.162-.088-.324-.134-.77-.134H3.282c-.446 0-.607.046-.77.134a.909.909 0 00-.378.378c-.088.163-.134.324-.134.77v13.436c0 .446.046.608.134.77.087.163.215.291.378.378.163.088.324.134.77.134h17.436c.446 0 .608-.046.77-.134a.908.908 0 00.378-.378c.088-.162.134-.324.134-.77V17h-3a5 5 0 010-10zm4 2h-4a3 3 0 100 6h4a1 1 0 001-1v-4a1 1 0 00-1-1zm-4 4a1 1 0 100-2 1 1 0 000 2z"
  }));
};

exports.WalletIcon = WalletIcon;
WalletIcon.platform = 'mobile';
//# sourceMappingURL=WalletIcon.js.map