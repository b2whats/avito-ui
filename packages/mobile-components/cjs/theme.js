"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.theme = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _tokens = require("@avito/tokens");

var _theme = require("./components/Avatar/theme");

var _theme2 = require("./components/Button/theme");

var _theme3 = require("./components/Checkbox/theme");

var _theme4 = require("./components/Icon/theme");

var _theme5 = require("./components/Input/theme");

var _theme6 = require("./components/Link/theme");

var _theme7 = require("./components/Radio/theme");

var _theme8 = require("./components/Switcher/theme");

var _theme9 = require("./components/Text/theme");

var _theme10 = require("./components/Textarea/theme");

var _theme11 = require("./components/Toggle/theme");

var _theme12 = require("./components/Tooltip/theme");

var theme = (0, _extends2["default"])({}, _tokens.mobile, {
  Avatar: _theme.avatarTheme,
  Button: _theme2.buttonTheme,
  Checkbox: _theme3.checkboxTheme,
  Icon: _theme4.iconTheme,
  Input: _theme5.inputTheme,
  Radio: _theme7.radioTheme,
  Switcher: _theme8.switcherTheme,
  Text: _theme9.textTheme,
  Textarea: _theme10.textareaTheme,
  Toggle: _theme11.toggleTheme,
  Tooltip: _theme12.tooltipTheme,
  Link: _theme6.linkTheme
});
exports.theme = theme;
//# sourceMappingURL=theme.js.map