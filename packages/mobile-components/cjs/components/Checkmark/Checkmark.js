"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Checkmark = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _theme = require("./theme");

var _core2 = require("@emotion/core");

var Checkmark = (0, _core.uiComponent)('Checkmark', _theme.checkmarkTheme)(function (props, _ref) {
  var theme = _ref.theme;

  var _foldThemeParams = (0, _core.foldThemeParams)(props, theme),
      Icon = _foldThemeParams.Icon;

  return (0, _core2.jsx)(Icon.component, (0, _extends2["default"])({
    visible: Boolean(props.checked)
  }, Icon.props, props));
});
exports.Checkmark = Checkmark;
//# sourceMappingURL=Checkmark.js.map