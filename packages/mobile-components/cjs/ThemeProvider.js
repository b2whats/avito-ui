"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ThemeProvider = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _theme = require("./theme");

var _core2 = require("@emotion/core");

var ThemeProvider = function ThemeProvider(props) {
  return (0, _core2.jsx)(_core.ThemeProvider, (0, _extends2["default"])({
    defaultTheme: _theme.theme
  }, props));
};

exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map