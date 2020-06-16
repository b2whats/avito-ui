"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Switcher = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _styledSystem = require("../../styled-system/");

var _theme = require("../../theme/");

var _Toggle = require("../Toggle/");

var _theme2 = require("./theme");

var _core = require("@emotion/core");

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  &::before {\n    transition: width .2s ease .05s;\n    width: 0%;\n  }\n\n  &::after {\n    content: '';\n    transition: width .2s ease .05s;\n    width: 100%;\n  }\n\n  input:active + &::before {\n    width: 20%;\n  }\n\n  input:checked + &::before {\n    width: 100%;\n  }\n\n  input:checked + &::after {\n    width: 0%;\n  }\n\n  input:checked:active + &::after {\n    width: 20%;\n  }\n\n  [aria-busy='true'] > &&::before,\n  [aria-busy='true'] > &&::after {\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var circleStyle = function circleStyle(positionLoading) {
  return (0, _styledSystem.css)(_templateObject(), positionLoading ? '' : 'width: 0%;');
};

var Switcher = (0, _theme.uiComponent)('Switcher', _theme2.switcherTheme)(function (props, _ref) {
  var theme = _ref.theme;
  return (0, _core.jsx)(_Toggle.Toggle, (0, _extends2["default"])({
    css: circleStyle(theme.positionLoading)
  }, props, {
    mode: "checkbox",
    override: theme
  }), function (_ref2) {
    var Icon = _ref2.Icon;
    return Icon && (0, _core.jsx)(Icon.component, (0, _extends2["default"])({}, Icon.props, {
      size: "auto"
    }));
  });
});
exports.Switcher = Switcher;
//# sourceMappingURL=Switcher.js.map