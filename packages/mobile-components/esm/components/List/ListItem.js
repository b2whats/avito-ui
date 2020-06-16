import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { isValidElement } from 'react';
import { useRefHook, useMeasure, foldThemeParams, uiComponent, Stack, Box, Text } from '@avito/core';
import { listItemTheme } from "./theme";
import { jsx as ___EmotionJSX } from "@emotion/core";
export var ListItem = uiComponent('ListItem', listItemTheme)(function (_ref, _ref2) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  var theme = _ref2.theme;

  // Необходимо прервать 3DTouch что бы он не прерывал событие клика
  // TODO: Протестировать на телефоне с HapticTouch
  //const setTouchRef = usePrevent3DTouch()
  var _useMeasure = useMeasure(),
      bounds = _useMeasure[0],
      setMeasureRef = _useMeasure[1];

  var _useRefHook = useRefHook(setMeasureRef),
      _ = _useRefHook[0],
      setRef = _useRefHook[1];

  var beforeValign = props.beforeValign === 'auto' ? bounds && listItemTheme.beforeTreshold < bounds.height ? 'top' : 'middle' : props.beforeValign;
  var afterValign = props.afterValign === 'auto' ? bounds && listItemTheme.afterTreshold < bounds.height ? 'top' : 'middle' : props.afterValign;

  var _foldThemeParams = foldThemeParams(props, theme),
      ListItem = _foldThemeParams.ListItem,
      Before = _foldThemeParams.Before,
      StackText = _foldThemeParams.StackText,
      Label = _foldThemeParams.Label,
      Caption = _foldThemeParams.Caption,
      Link = _foldThemeParams.Link,
      After = _foldThemeParams.After;

  var before = props.before && ___EmotionJSX(Box, _extends({}, Before.props, {
    valignSelf: beforeValign
  }), props.before);

  var after = props.after && ___EmotionJSX(Box, _extends({}, After.props, {
    valignSelf: afterValign
  }), props.after);

  var renderSlot = function renderSlot(Component, element, props) {
    return typeof element === 'string' && element ? ___EmotionJSX(Component, props, element) : typeof element === 'function' ? element(props) : /*#__PURE__*/isValidElement(element) ? ___EmotionJSX(element.type, _extends({}, props, element.props)) : undefined;
  };

  var preventFocus = function preventFocus(event) {
    event.preventDefault();
  };

  var events = props.onClick && !props.disabled && {
    onMouseDown: preventFocus,
    onClick: props.onClick,
    as: 'label'
  };
  return ___EmotionJSX(Stack, _extends({
    ref: setRef
  }, ListItem.props, props, events), before, ___EmotionJSX(Stack, _extends({
    column: true,
    grow: true
  }, StackText.props), renderSlot(Text, props.label, Label.props), renderSlot(Text, props.caption, Caption.props), renderSlot(Text, props.link, Link.props)), after);
});
//# sourceMappingURL=ListItem.js.map