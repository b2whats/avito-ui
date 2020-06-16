"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Spinner = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _styledSystem = require("../../styled-system/");

var _theme = require("../../theme/");

var _theme2 = require("./theme");

var _core = require("@emotion/core");

var Spinner = (0, _theme.uiComponent)('Spinner', _theme2.spinnerTheme)(function (_ref, _ref2) {
  var speed = _ref.speed,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["speed"]);
  var theme = _ref2.theme;

  var _foldThemeParams = (0, _styledSystem.foldThemeParams)(props, theme),
      Spinner = _foldThemeParams.Spinner;

  return (0, _core.jsx)(Spinner.component, (0, _extends2["default"])({}, Spinner.props, props, {
    spin: speed || true
  }));
});
exports.Spinner = Spinner;
//# sourceMappingURL=Spinner.js.map