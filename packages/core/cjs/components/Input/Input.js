"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Input = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _hooks = require("../../hooks/");

var _styledSystem = require("../../styled-system/");

var _theme = require("../../theme/");

var _utils = require("../../utils/");

var _Text = require("../Text/");

var _InputCore = require("./InputCore");

var _theme2 = require("./theme");

var _core = require("@emotion/core");

var inputClassName = (0, _styledSystem.createClassName)(function (themeStyle, props) {
  return (0, _extends2["default"])({
    display: 'flex',
    width: 1
  }, themeStyle, props);
}, function (textRules) {
  return "\n    position: relative;\n    font-family: inherit;\n    align-items: center;\n\n    " + textRules + "\n  ";
});
var inputFieldClassName = (0, _styledSystem.createClassName)(function (themeStyle) {
  return (0, _extends2["default"])({
    display: 'flex',
    valign: 'middle',
    grow: true
  }, themeStyle);
}, function (textRules) {
  return "\n    height: 100%;\n    overflow: hidden;\n\n    " + textRules + "\n  ";
});
var Input = (0, _theme.uiComponent)('Input', _theme2.inputTheme)(function (_ref, _ref2, _ref3) {
  var onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      mask = _ref.mask,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["onFocus", "onBlur", "mask"]);
  var theme = _ref2.theme,
      tokens = _ref2.tokens;
  var inputRef = _ref3[0],
      setRef = _ref3[1];

  var renderCore = props.renderCore || function (p) {
    return (0, _core.jsx)(_InputCore.InputCore, p);
  };

  var _useState = (0, _react.useState)(false),
      focus = _useState[0],
      setFocus = _useState[1];

  var _useUncontrolledInput = (0, _hooks.useUncontrolledInputHook)(props),
      safeValue = _useUncontrolledInput[0],
      safeOnChange = _useUncontrolledInput[1];

  var _useSyntheticChange = (0, _hooks.useSyntheticChange)(safeValue, safeOnChange, mask),
      value = _useSyntheticChange[0],
      onChange = _useSyntheticChange[1];

  var clearable = Boolean(value && !props.disabled && !props.readOnly && (props.clearable === 'always' || props.clearable && focus));
  props = (0, _extends2["default"])({}, props, {
    value: value,
    clearable: clearable,
    // apply iconAfter theme if clearable
    iconAfter: clearable ? true : props.iconAfter,
    placeholder: _theme2.inputTheme.deletePlaceholderOnFocus && focus ? '' : props.placeholder
  });
  var handleFocus = (0, _utils.invokeAll)(function () {
    return setFocus(true);
  }, onFocus);
  var handleBlur = (0, _utils.invokeAll)(function () {
    return setFocus(false);
  }, onBlur); // Отменяем моргание фокуса при повторных кликах внутри контейнера с инпутом
  // Проверка нужна что бы не блокировать выделениие в самом инпуте

  var handlePreventBlur = function handlePreventBlur(event) {
    if (event.target !== inputRef.current) event.preventDefault();
  };

  var handleClear = function handleClear() {
    return (0, _utils.clearValue)(inputRef.current);
  };

  var _foldThemeParams = (0, _styledSystem.foldThemeParams)(props, theme),
      Input = _foldThemeParams.Input,
      IconBefore = _foldThemeParams.IconBefore,
      IconAfter = _foldThemeParams.IconAfter,
      InputField = _foldThemeParams.InputField,
      Prefix = _foldThemeParams.Prefix,
      Postfix = _foldThemeParams.Postfix;

  var inputStyle = inputClassName(props, tokens, Input.style);
  var inputFieldStyle = inputFieldClassName(props, tokens, InputField.style);

  var renderIconSlot = function renderIconSlot(icon, iconProps) {
    return typeof icon === 'function' ? icon((0, _extends2["default"])({}, props, {
      iconProps: iconProps,
      focus: focus,
      handleClear: handleClear
    })) : /*#__PURE__*/(0, _react.isValidElement)(icon) ? (0, _core.jsx)(icon.type, (0, _extends2["default"])({}, iconProps, icon.props)) : undefined;
  };

  var textColor = function textColor(activeColor) {
    return focus || props.value ? activeColor : Input.style.placeholderColor;
  };

  var renderTextSlot = function renderTextSlot(text, textProps) {
    return typeof text === 'string' ? (0, _core.jsx)(_Text.Text, (0, _extends2["default"])({}, textProps, {
      color: textColor(),
      pre: true
    }), text) : typeof text === 'function' ? text((0, _extends2["default"])({}, props, {
      focus: focus
    })) : /*#__PURE__*/_react["default"].isValidElement(text) ? (0, _core.jsx)(text.type, (0, _extends2["default"])({}, textProps, text.props, {
      color: textColor(text.props.color)
    })) : undefined;
  };

  var iconAfter = renderIconSlot(IconAfter.component ? (0, _core.jsx)(IconAfter.component, null) : props.iconAfter, clearable ? (0, _extends2["default"])({}, IconAfter.props, {
    onClick: handleClear
  }) : IconAfter.props);
  var elementState = (props.disabled ? 'disabled' : '') + " " + (focus ? 'focus' : '');
  return (// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    (0, _core.jsx)("label", {
      css: inputStyle,
      "data-state": elementState,
      onMouseDown: handlePreventBlur
    }, props.iconBefore && renderIconSlot(props.iconBefore, IconBefore.props), (0, _core.jsx)("div", {
      css: inputFieldStyle
    }, props.prefix && renderTextSlot(props.prefix, Prefix.props), renderCore((0, _extends2["default"])({}, props, {
      onChange: onChange,
      autoSize: Boolean(props.postfix),
      ref: setRef,
      onFocus: handleFocus,
      onBlur: handleBlur
    })), props.postfix && renderTextSlot(props.postfix, Postfix.props)), iconAfter)
  );
});
exports.Input = Input;
//# sourceMappingURL=Input.js.map