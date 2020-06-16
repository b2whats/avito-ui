"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Checkbox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _theme = require("../../theme");

var _Toggle = require("../Toggle/");

var _theme2 = require("./theme");

var _core = require("@emotion/core");

var Checkbox = (0, _theme.uiComponent)('Checkbox', _theme2.checkboxTheme)(function (props, _ref) {
  var theme = _ref.theme;
  return (0, _core.jsx)(_Toggle.Toggle, (0, _extends2["default"])({}, props, {
    mode: "checkbox",
    override: theme
  }), function (_ref2) {
    var checked = _ref2.checked,
        Icon = _ref2.Icon;
    return checked && Icon && (0, _core.jsx)(Icon.component, (0, _extends2["default"])({}, Icon.props, {
      size: "auto"
    }));
  });
});
exports.Checkbox = Checkbox;
//# sourceMappingURL=Checkbox.js.map