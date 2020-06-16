import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import React, { isValidElement, useState } from 'react';
import { useUncontrolledInputHook, useSyntheticChange } from "../../hooks/";
import { foldThemeParams, createClassName } from "../../styled-system/";
import { uiComponent } from "../../theme/";
import { clearValue, invokeAll } from "../../utils/";
import { Text } from "../Text/";
import { InputCore } from "./InputCore";
import { inputTheme } from "./theme";
import { jsx as ___EmotionJSX } from "@emotion/core";
var inputClassName = createClassName(function (themeStyle, props) {
  return _extends({
    display: 'flex',
    width: 1
  }, themeStyle, props);
}, function (textRules) {
  return "\n    position: relative;\n    font-family: inherit;\n    align-items: center;\n\n    " + textRules + "\n  ";
});
var inputFieldClassName = createClassName(function (themeStyle) {
  return _extends({
    display: 'flex',
    valign: 'middle',
    grow: true
  }, themeStyle);
}, function (textRules) {
  return "\n    height: 100%;\n    overflow: hidden;\n\n    " + textRules + "\n  ";
});
export var Input = uiComponent('Input', inputTheme)(function (_ref, _ref2, _ref3) {
  var onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      mask = _ref.mask,
      props = _objectWithoutPropertiesLoose(_ref, ["onFocus", "onBlur", "mask"]);

  var theme = _ref2.theme,
      tokens = _ref2.tokens;
  var inputRef = _ref3[0],
      setRef = _ref3[1];

  var renderCore = props.renderCore || function (p) {
    return ___EmotionJSX(InputCore, p);
  };

  var _useState = useState(false),
      focus = _useState[0],
      setFocus = _useState[1];

  var _useUncontrolledInput = useUncontrolledInputHook(props),
      safeValue = _useUncontrolledInput[0],
      safeOnChange = _useUncontrolledInput[1];

  var _useSyntheticChange = useSyntheticChange(safeValue, safeOnChange, mask),
      value = _useSyntheticChange[0],
      onChange = _useSyntheticChange[1];

  var clearable = Boolean(value && !props.disabled && !props.readOnly && (props.clearable === 'always' || props.clearable && focus));
  props = _extends({}, props, {
    value: value,
    clearable: clearable,
    // apply iconAfter theme if clearable
    iconAfter: clearable ? true : props.iconAfter,
    placeholder: inputTheme.deletePlaceholderOnFocus && focus ? '' : props.placeholder
  });
  var handleFocus = invokeAll(function () {
    return setFocus(true);
  }, onFocus);
  var handleBlur = invokeAll(function () {
    return setFocus(false);
  }, onBlur); // Отменяем моргание фокуса при повторных кликах внутри контейнера с инпутом
  // Проверка нужна что бы не блокировать выделениие в самом инпуте

  var handlePreventBlur = function handlePreventBlur(event) {
    if (event.target !== inputRef.current) event.preventDefault();
  };

  var handleClear = function handleClear() {
    return clearValue(inputRef.current);
  };

  var _foldThemeParams = foldThemeParams(props, theme),
      Input = _foldThemeParams.Input,
      IconBefore = _foldThemeParams.IconBefore,
      IconAfter = _foldThemeParams.IconAfter,
      InputField = _foldThemeParams.InputField,
      Prefix = _foldThemeParams.Prefix,
      Postfix = _foldThemeParams.Postfix;

  var inputStyle = inputClassName(props, tokens, Input.style);
  var inputFieldStyle = inputFieldClassName(props, tokens, InputField.style);

  var renderIconSlot = function renderIconSlot(icon, iconProps) {
    return typeof icon === 'function' ? icon(_extends({}, props, {
      iconProps: iconProps,
      focus: focus,
      handleClear: handleClear
    })) : /*#__PURE__*/isValidElement(icon) ? ___EmotionJSX(icon.type, _extends({}, iconProps, icon.props)) : undefined;
  };

  var textColor = function textColor(activeColor) {
    return focus || props.value ? activeColor : Input.style.placeholderColor;
  };

  var renderTextSlot = function renderTextSlot(text, textProps) {
    return typeof text === 'string' ? ___EmotionJSX(Text, _extends({}, textProps, {
      color: textColor(),
      pre: true
    }), text) : typeof text === 'function' ? text(_extends({}, props, {
      focus: focus
    })) : /*#__PURE__*/React.isValidElement(text) ? ___EmotionJSX(text.type, _extends({}, textProps, text.props, {
      color: textColor(text.props.color)
    })) : undefined;
  };

  var iconAfter = renderIconSlot(IconAfter.component ? ___EmotionJSX(IconAfter.component, null) : props.iconAfter, clearable ? _extends({}, IconAfter.props, {
    onClick: handleClear
  }) : IconAfter.props);
  var elementState = (props.disabled ? 'disabled' : '') + " " + (focus ? 'focus' : '');
  return (// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    ___EmotionJSX("label", {
      css: inputStyle,
      "data-state": elementState,
      onMouseDown: handlePreventBlur
    }, props.iconBefore && renderIconSlot(props.iconBefore, IconBefore.props), ___EmotionJSX("div", {
      css: inputFieldStyle
    }, props.prefix && renderTextSlot(props.prefix, Prefix.props), renderCore(_extends({}, props, {
      onChange: onChange,
      autoSize: Boolean(props.postfix),
      ref: setRef,
      onFocus: handleFocus,
      onBlur: handleBlur
    })), props.postfix && renderTextSlot(props.postfix, Postfix.props)), iconAfter)
  );
});
//# sourceMappingURL=Input.js.map