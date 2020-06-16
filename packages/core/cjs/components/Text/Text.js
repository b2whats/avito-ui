"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Text = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledSystem = require("../../styled-system/");

var _theme = require("../../theme/");

var _utils = require("../../utils/");

var _theme2 = require("./theme");

var _core = require("@emotion/core");

var textClassName = (0, _styledSystem.createClassName)(function (themeStyle, props) {
  return (0, _extends2["default"])({
    display: props.width || props.height ? 'inline-block' : 'inline'
  }, themeStyle, props);
}, function (textRules, _ref, _ref2) {
  var strike = _ref.strike;
  var palette = _ref2.palette;
  return "\n    li& {\n      list-style: none;\n    }\n\n    a& {\n      text-decoration: none;\n    }\n\n    " + (strike ? "\n      position: relative;\n      white-space: nowrap;\n\n      &::after {\n        content: '';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        border-top: 0.075em solid " + (typeof strike === 'string' ? palette[strike] : 'currentcolor') + ";\n        height: calc(50% - 1px);\n        transform: rotateZ(-2deg);\n      }\n    " : '') + "\n\n    " + textRules + "\n  ";
});
var Text = (0, _theme.uiComponent)('Text', _theme2.textTheme)(function (_ref3, _ref4) {
  var children = _ref3.children,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref3, ["children"]);
  var theme = _ref4.theme,
      tokens = _ref4.tokens;

  var _foldThemeParams = (0, _styledSystem.foldThemeParams)(props, theme),
      Text = _foldThemeParams.Text;

  var textStyle = textClassName(props, tokens, Text.style);
  var Tag = props.as || 'span';
  return (0, _core.jsx)(Tag, (0, _extends2["default"])({
    css: textStyle
  }, (0, _utils.filterProps)(props)), children);
});
exports.Text = Text;
//# sourceMappingURL=Text.js.map