"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Avatar = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _styledSystem = require("../../styled-system");

var _theme = require("../../theme");

var _utils = require("../../utils");

var _Text = require("../Text");

var _theme2 = require("./theme");

var _core = require("@emotion/core");

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  border-radius: inherit;\n  max-width: 100%;\n  max-height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var avatarClassName = (0, _styledSystem.createClassName)(function (themeStyle, props) {
  return (0, _extends2["default"])({
    display: 'inline-flex',
    position: 'relative',
    shrink: false,
    grow: false
  }, themeStyle, props);
}, function (textRules) {
  return "\n    user-select: none;\n    & *:nth-child(2) {\n      /* position badge above overlay */\n      z-index: 1;\n    }\n    " + textRules + "\n  ";
});
var imageClassName = (0, _styledSystem.css)(_templateObject());
var Avatar = (0, _theme.uiComponent)('Avatar', _theme2.avatarTheme)(function (props, _ref, _ref2) {
  var theme = _ref.theme,
      tokens = _ref.tokens;
  var _ = _ref2[0],
      setRef = _ref2[1];

  var _useState = (0, _react.useState)(props.src == null),
      isFallback = _useState[0],
      setFallback = _useState[1];

  var onError = function onError() {
    return setFallback(true);
  };

  (0, _react.useEffect)(function () {
    return setFallback(props.src == null);
  }, [props.src]);

  var _foldThemeParams = (0, _styledSystem.foldThemeParams)((0, _extends2["default"])({}, props, {
    isFallback: isFallback
  }), theme),
      Wrapper = _foldThemeParams.Wrapper,
      Badge = _foldThemeParams.Badge,
      Fallback = _foldThemeParams.Fallback;

  var Tag = props.as || 'span';
  var alt = props.alt || 'Пользователь';
  var aria = {
    role: props.onClick ? 'button' : 'img',
    'aria-disabled': props.disabled
  };

  var renderFallback = function renderFallback(children, fallbackProps) {
    return /*#__PURE__*/(0, _react.isValidElement)(children) ? (0, _core.jsx)(children.type, (0, _extends2["default"])({}, fallbackProps, children.props)) : typeof children === 'function' ? _react.Children.only(children(fallbackProps)) : typeof children === 'string' ? (0, _core.jsx)(_Text.Text, {
      crop: true
    }, children) : typeof props.alt === 'string' ? (0, _core.jsx)(_Text.Text, {
      crop: true
    }, props.alt[0].toUpperCase()) : (0, _core.jsx)(Fallback.component, fallbackProps);
  }; // FIXME put onClick on img / fallback for easier badge clicks?


  return (0, _core.jsx)(Tag, (0, _extends2["default"])({
    css: avatarClassName(props, tokens, Wrapper.style)
  }, aria, (0, _utils.filterProps)((0, _utils.omit)(props, 'src'))), isFallback ? renderFallback(props.children, Fallback.props) : (0, _core.jsx)("img", {
    css: imageClassName,
    draggable: "false",
    src: props.src,
    onError: onError,
    alt: alt
  }), props.badge && (0, _core.jsx)(props.badge.type, (0, _extends2["default"])({}, Badge.props, props.badge.props)));
});
exports.Avatar = Avatar;
//# sourceMappingURL=Avatar.js.map