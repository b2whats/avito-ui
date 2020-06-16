"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Button = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _styledSystem = require("../../styled-system/");

var _theme = require("../../theme/");

var _utils = require("../../utils/");

var _Group = require("../Layout/Group");

var _Spinner = require("../Spinner/");

var _Text = require("../Text/");

var _theme2 = require("./theme");

var _core = require("@emotion/core");

var buttonClassName = (0, _styledSystem.createClassName)(function (themeStyle, props) {
  return (0, _extends2["default"])({
    display: 'inline-block',
    shrink: false
  }, themeStyle, props, (props.shape === 'circle' || props.shape === 'square') && {
    p: 'none'
  });
}, function (textRules, _ref, _, themeStyle) {
  var kind = _ref.kind;
  return "\n    font-family: inherit;\n    cursor: pointer;\n    text-align: center;\n    text-decoration: none;\n    margin: 0;\n    line-height: 0;\n    position: relative;\n    white-space: nowrap;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    &::-moz-focus-inner {\n      border: 0;\n    }\n\n    &[data-group] {\n      box-shadow: none;\n    }\n\n    &[data-group~='horizontal']:not([data-group~='last']):not([data-group~='spacing']) {\n      margin-right: " + (kind === 'outline' ? '-' : '') + themeStyle.borderWidth + "px;\n      border-bottom-right-radius: 0px;\n      border-top-right-radius: 0px;\n    }\n\n    &[data-group~='horizontal']:not([data-group~='first']):not([data-group~='spacing']) {\n      border-bottom-left-radius: 0px;\n      border-top-left-radius: 0px;\n    }\n\n    &[data-group~='vertical']:not([data-group~='last']):not([data-group~='spacing']) {\n      margin-bottom: " + (kind === 'outline' ? '-' : '') + themeStyle.borderWidth + "px;\n      border-bottom-left-radius: 0px;\n      border-bottom-right-radius: 0px;\n    }\n\n    &[data-group~='vertical']:not([data-group~='first']):not([data-group~='spacing']) {\n      border-top-left-radius: 0px;\n      border-top-right-radius: 0px;\n    }\n\n    a& {\n      display: inline-flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    & > [data-icon='spinner'] {\n      position: absolute;\n      margin: auto;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n    }\n\n    " + (themeStyle.pressedOffset ? "\n      &:not(:disabled):active > *, &[data-state~=active] > *  {\n        transform: translateY(1px);\n      }\n    " : '') + "\n\n    &[aria-busy='true'] > :not([data-icon='spinner']) {\n      visibility: hidden;\n    }\n\n    " + textRules + "\n  ";
});
var Button = (0, _theme.uiComponent)('Button', _theme2.buttonTheme)(function (props, _ref2, _ref3) {
  var theme = _ref2.theme,
      tokens = _ref2.tokens;
  var ref = _ref3[0],
      setRef = _ref3[1];
  props.type = props.href ? undefined : props.type;
  var groupProps = (0, _Group.useGroupHook)(ref, props);
  var aria = {
    'aria-checked': groupProps.checked,
    'aria-disabled': groupProps.disabled,
    'aria-busy': groupProps.loading
  };

  var _foldThemeParams = (0, _styledSystem.foldThemeParams)(groupProps, theme),
      Button = _foldThemeParams.Button,
      Text = _foldThemeParams.Text,
      IconBefore = _foldThemeParams.IconBefore,
      IconAfter = _foldThemeParams.IconAfter,
      Spinner = _foldThemeParams.Spinner;

  var buttonStyle = buttonClassName(groupProps, tokens, Button.style);
  var Tag = props.href ? 'a' : 'button';

  var renderIconSlot = function renderIconSlot(icon, iconProps) {
    return typeof icon === 'function' ? icon(iconProps) : /*#__PURE__*/(0, _react.isValidElement)(icon) ? (0, _core.jsx)(icon.type, (0, _extends2["default"])({}, iconProps, icon.props)) : undefined;
  };

  var renderTextSlot = function renderTextSlot(children, props) {
    return /*#__PURE__*/(0, _react.isValidElement)(children) ? (0, _core.jsx)(children.type, (0, _extends2["default"])({}, props, children.props)) : typeof children === 'function' ? children(props) : (0, _core.jsx)(_Text.Text, props, children);
  };

  return (0, _core.jsx)(Tag, (0, _extends2["default"])({
    css: buttonStyle,
    ref: setRef
  }, aria, (0, _utils.filterProps)(groupProps)), props.loading && (0, _core.jsx)(_Spinner.Spinner, Spinner.props), props.iconBefore && renderIconSlot(props.iconBefore, IconBefore.props), props.children && renderTextSlot(props.children, Text.props), props.iconAfter && renderIconSlot(props.iconAfter, IconAfter.props));
});
exports.Button = Button;
//# sourceMappingURL=Button.js.map