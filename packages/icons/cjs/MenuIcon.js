"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.MenuIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var MenuIcon = function MenuIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "menu"
  }), (0, _core2.jsx)("path", {
    d: "M21 6a1 1 0 00-1-1H4a1 1 0 000 2h16a1 1 0 001-1zm0 12a1 1 0 00-1-1h-8a1 1 0 100 2h8a1 1 0 001-1zm-1-7a1 1 0 110 2H8a1 1 0 110-2h12z"
  }));
};

exports.MenuIcon = MenuIcon;
MenuIcon.platform = 'mobile';
//# sourceMappingURL=MenuIcon.js.map