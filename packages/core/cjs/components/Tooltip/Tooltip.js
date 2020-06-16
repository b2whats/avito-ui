"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Tooltip = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledSystem = require("../../styled-system/");

var _theme = require("../../theme/");

var _utils = require("../../utils/");

var _Positioner = require("../Positioner/");

var _theme2 = require("./theme");

var _core = require("@emotion/core");

var tooltipClassName = (0, _styledSystem.createClassName)(function (themeStyle, props) {
  return (0, _extends2["default"])({
    display: 'block'
  }, themeStyle, props, {
    minWidth: undefined,
    width: undefined,
    maxWidth: undefined
  });
});
var arrowClassName = (0, _styledSystem.createClassName)(function (themeStyle) {
  return (0, _extends2["default"])({
    display: 'inline-block'
  }, themeStyle);
}, function (textRules, _, __, themeStyle) {
  return "\n    visibility: hidden;\n    background-color: inherit;\n\n    &::before {\n      content: '';\n      box-sizing: border-box;\n      width: 100%;\n      height: 100%;\n      transform: rotate(45deg);\n      display: inline-block;\n      vertical-align: top;\n      visibility: visible;\n      background-color: inherit;\n      border-radius: inherit;\n    }\n\n    [data-popper-placement^='top'] & {\n      bottom: -" + themeStyle.offset + "px;\n    }\n    [data-popper-placement^='bottom'] & {\n      top: -" + themeStyle.offset + "px;\n    }\n    [data-popper-placement^='left'] & {\n      right: -" + themeStyle.offset + "px;\n    }\n    [data-popper-placement^='right'] & {\n      left: -" + themeStyle.offset + "px;\n    }\n\n    " + textRules + "\n  ";
});
var Tooltip = (0, _theme.uiComponent)('Tooltip', _theme2.tooltipTheme)(function (_ref, _ref2) {
  var content = _ref.content,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["content"]);
  var theme = _ref2.theme,
      tokens = _ref2.tokens;
  if (!content) return props.children;

  var _foldThemeParams = (0, _styledSystem.foldThemeParams)(props, theme),
      Tooltip = _foldThemeParams.Tooltip,
      Arrow = _foldThemeParams.Arrow,
      Close = _foldThemeParams.Close;

  var tooltipStyle = tooltipClassName(props, tokens, Tooltip.style);
  var arrowStyle = arrowClassName(props, tokens, Arrow.style);

  var target = function target(_ref3) {
    var close = _ref3.close;
    return (0, _core.jsx)("div", (0, _extends2["default"])({
      css: tooltipStyle
    }, (0, _utils.filterProps)(props)), props.arrow && (0, _core.jsx)("div", {
      css: arrowStyle,
      "data-popper-arrow": true
    }), props.closable && Close.component && (0, _core.jsx)(Close.component, (0, _extends2["default"])({}, Close.props, {
      onClick: close
    })), content);
  };

  return (0, _core.jsx)(_Positioner.Positioner, (0, _extends2["default"])({}, props, {
    target: target
  }), props.children);
});
exports.Tooltip = Tooltip;
//# sourceMappingURL=Tooltip.js.map