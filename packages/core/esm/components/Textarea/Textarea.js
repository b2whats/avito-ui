import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import React, { useState } from 'react';
import { useUncontrolledInputHook, useSyntheticChange } from "../../hooks/";
import { foldThemeParams, createClassName } from "../../styled-system/";
import { uiComponent } from "../../theme/";
import { invokeAll, clearValue } from "../../utils/";
import { TextareaCore } from "./TextareaCore";
import { textareaTheme } from "./theme";
import { jsx as ___EmotionJSX } from "@emotion/core";
var wrapperClassName = createClassName(function (themeStyle, props) {
  return _extends({
    display: 'flex',
    valign: 'top'
  }, themeStyle, props);
});
export var Textarea = uiComponent('Textarea', textareaTheme)(function (_ref, _ref2, _ref3) {
  var onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      props = _objectWithoutPropertiesLoose(_ref, ["onFocus", "onBlur"]);

  var theme = _ref2.theme,
      tokens = _ref2.tokens;
  var textareaRef = _ref3[0],
      setTextareaRef = _ref3[1];

  var _useState = useState(false),
      focus = _useState[0],
      setFocus = _useState[1];

  var _useSyntheticChange = useSyntheticChange.apply(void 0, useUncontrolledInputHook(props)),
      value = _useSyntheticChange[0],
      onChange = _useSyntheticChange[1];

  var hasClear = Boolean(props.clearable);
  props = _extends({}, props, {
    value: value,
    clearable: Boolean(value && !props.disabled && (props.clearable === 'always' || props.clearable && focus)),
    placeholder: theme.deletePlaceholderOnFocus && focus ? '' : props.placeholder
  });
  var handleFocus = invokeAll(function () {
    return setFocus(true);
  }, onFocus);
  var handleBlur = invokeAll(function () {
    return setFocus(false);
  }, onBlur);

  var handlePreventBlur = function handlePreventBlur(event) {
    if (event.target['tagName'] !== 'TEXTAREA') event.preventDefault();
  };

  var handleClear = function handleClear() {
    return clearValue(textareaRef.current);
  };

  var _foldThemeParams = foldThemeParams(props, theme),
      Textarea = _foldThemeParams.Textarea,
      IconClear = _foldThemeParams.IconClear;

  var wrapperStyle = wrapperClassName(props, tokens, Textarea.style);
  var elementState = (props.disabled ? 'disabled' : '') + " " + (focus ? 'focus' : '');
  return ___EmotionJSX("label", {
    css: wrapperStyle,
    "data-state": elementState,
    onMouseDown: handlePreventBlur
  }, ___EmotionJSX(TextareaCore, _extends({}, props, {
    onChange: onChange,
    ref: setTextareaRef,
    onFocus: handleFocus,
    onBlur: handleBlur
  })), hasClear && ___EmotionJSX(IconClear.component, _extends({}, IconClear.props, {
    valignSelf: undefined,
    onClick: handleClear
  })));
});
//# sourceMappingURL=Textarea.js.map