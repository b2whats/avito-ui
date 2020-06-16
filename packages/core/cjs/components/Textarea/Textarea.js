"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Textarea = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _hooks = require("../../hooks/");

var _styledSystem = require("../../styled-system/");

var _theme = require("../../theme/");

var _utils = require("../../utils/");

var _TextareaCore = require("./TextareaCore");

var _theme2 = require("./theme");

var _core = require("@emotion/core");

var wrapperClassName = (0, _styledSystem.createClassName)(function (themeStyle, props) {
  return (0, _extends2["default"])({
    display: 'flex',
    valign: 'top'
  }, themeStyle, props);
});
var Textarea = (0, _theme.uiComponent)('Textarea', _theme2.textareaTheme)(function (_ref, _ref2, _ref3) {
  var onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["onFocus", "onBlur"]);
  var theme = _ref2.theme,
      tokens = _ref2.tokens;
  var textareaRef = _ref3[0],
      setTextareaRef = _ref3[1];

  var _useState = (0, _react.useState)(false),
      focus = _useState[0],
      setFocus = _useState[1];

  var _useSyntheticChange = _hooks.useSyntheticChange.apply(void 0, (0, _hooks.useUncontrolledInputHook)(props)),
      value = _useSyntheticChange[0],
      onChange = _useSyntheticChange[1];

  var hasClear = Boolean(props.clearable);
  props = (0, _extends2["default"])({}, props, {
    value: value,
    clearable: Boolean(value && !props.disabled && (props.clearable === 'always' || props.clearable && focus)),
    placeholder: theme.deletePlaceholderOnFocus && focus ? '' : props.placeholder
  });
  var handleFocus = (0, _utils.invokeAll)(function () {
    return setFocus(true);
  }, onFocus);
  var handleBlur = (0, _utils.invokeAll)(function () {
    return setFocus(false);
  }, onBlur);

  var handlePreventBlur = function handlePreventBlur(event) {
    if (event.target['tagName'] !== 'TEXTAREA') event.preventDefault();
  };

  var handleClear = function handleClear() {
    return (0, _utils.clearValue)(textareaRef.current);
  };

  var _foldThemeParams = (0, _styledSystem.foldThemeParams)(props, theme),
      Textarea = _foldThemeParams.Textarea,
      IconClear = _foldThemeParams.IconClear;

  var wrapperStyle = wrapperClassName(props, tokens, Textarea.style);
  var elementState = (props.disabled ? 'disabled' : '') + " " + (focus ? 'focus' : '');
  return (0, _core.jsx)("label", {
    css: wrapperStyle,
    "data-state": elementState,
    onMouseDown: handlePreventBlur
  }, (0, _core.jsx)(_TextareaCore.TextareaCore, (0, _extends2["default"])({}, props, {
    onChange: onChange,
    ref: setTextareaRef,
    onFocus: handleFocus,
    onBlur: handleBlur
  })), hasClear && (0, _core.jsx)(IconClear.component, (0, _extends2["default"])({}, IconClear.props, {
    valignSelf: undefined,
    onClick: handleClear
  })));
});
exports.Textarea = Textarea;
//# sourceMappingURL=Textarea.js.map