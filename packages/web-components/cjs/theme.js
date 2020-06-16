"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.theme = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _tokens = require("@avito/tokens");

var _theme = require("./components/Button/theme");

var _theme2 = require("./components/Checkbox/theme");

var _theme3 = require("./components/Icon/theme");

var _theme4 = require("./components/Input/theme");

var _theme5 = require("./components/Link/theme");

var _theme6 = require("./components/Radio/theme");

var _theme7 = require("./components/Switcher/theme");

var _theme8 = require("./components/Text/theme");

var _theme9 = require("./components/Textarea/theme");

var _theme10 = require("./components/Toggle/theme");

var _theme11 = require("./components/Tooltip/theme");

var theme = (0, _extends2["default"])({}, _tokens.web, {
  Button: _theme.buttonTheme,
  Checkbox: _theme2.checkboxTheme,
  Icon: _theme3.iconTheme,
  Input: _theme4.inputTheme,
  Radio: _theme6.radioTheme,
  Switcher: _theme7.switcherTheme,
  Text: _theme8.textTheme,
  Textarea: _theme9.textareaTheme,
  Toggle: _theme10.toggleTheme,
  Tooltip: _theme11.tooltipTheme,
  Link: _theme5.linkTheme
});
exports.theme = theme;
//# sourceMappingURL=theme.js.map