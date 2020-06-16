import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import React, { useEffect, useState, useCallback } from 'react';
import { filterProps, useRefHook, uiComponent, useWindowSize, foldThemeParams, createClassName } from '@avito/core';
import { segmentButtonTheme } from "./theme";
import { jsx as ___EmotionJSX } from "@emotion/core";
var groupClassName = createClassName(function (themeStyle, props) {
  return _extends({
    display: 'flex',
    width: 1,
    shrink: false
  }, themeStyle, props);
}, function (textRules) {
  return "\n    position: relative;\n\n    " + textRules + "\n  ";
});
var buttonClassName = createClassName(function (themeStyle) {
  return _extends({
    display: 'inline-block',
    position: 'relative',
    grow: true,
    height: 1
  }, themeStyle);
}, function (textRules) {
  return "\n    padding: 0px;\n    margin: 0px;\n    border: 0px;\n    background: transparent;\n    font-family: inherit;\n    font-size: inherit;\n    outline: 0;\n    cursor: pointer;\n    user-select: none;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n\n    &::-moz-focus-inner {\n      border: 0;\n    }\n\n    " + textRules + "\n  ";
});
var slideClassName = createClassName(function (themeStyle) {
  return _extends({
    display: 'inline-block',
    height: 1
  }, themeStyle);
}, function (textRules) {
  return "\n    position: absolute;\n    left: 0;\n    transition: transform .2s ease-in;\n    " + textRules + "\n  ";
});
export var SegmentButton = uiComponent('SegmentButton', segmentButtonTheme)(function (_ref, _ref2) {
  var options = _ref.options,
      name = _ref.name,
      onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, ["options", "name", "onChange"]);

  var theme = _ref2.theme,
      tokens = _ref2.tokens;
  props.value = !props.value && options && options.length > 0 ? options[0].value : props.value;
  var windowSize = useWindowSize();

  var _useRefHook = useRefHook(),
      ref = _useRefHook[0],
      setRef = _useRefHook[1];

  var _useState = useState({}),
      geometry = _useState[0],
      setGeometry = _useState[1];

  useEffect(function () {
    if (!ref.current) return;
    var geometry = {};
    var buttons = ref.current.querySelectorAll('[type=button]');
    buttons.forEach(function (node) {
      geometry[node.value] = {
        transform: "translateX(" + node.offsetLeft + "px)",
        width: node.offsetWidth,
        height: node.offsetHeight
      };
    });
    setGeometry(geometry);
  }, [windowSize.innerWidth]);

  var _foldThemeParams = foldThemeParams(props, theme),
      Group = _foldThemeParams.Group,
      Button = _foldThemeParams.Button,
      Slide = _foldThemeParams.Slide;

  var groupStyle = groupClassName(props, tokens, Group.style);
  var buttonStyle = buttonClassName(props, tokens, Button.style);
  var slideStyle = slideClassName(props, tokens, Slide.style);

  var _onClick = function onClick(value) {
    if (value === props.value) return;
    onChange && onChange({
      name: name,
      value: value
    });
  };

  var onKeyDown = useCallback(function (event) {
    var next = event.currentTarget;
    var exit = ref.current.children.length;

    do {
      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          event.preventDefault();
          next = next.nextElementSibling || ref.current.firstChild;
          break;

        case 'ArrowUp':
        case 'ArrowLeft':
          event.preventDefault();
          next = next.previousElementSibling || ref.current.lastChild;
          break;
      }
    } while (next && (next.disabled || next.type !== 'button') && exit--);

    if (next) {
      next.focus();
      next.click();
    }
  }, []);
  return ___EmotionJSX("div", _extends({
    ref: setRef,
    css: groupStyle,
    role: "radiogroup"
  }, filterProps(props)), ___EmotionJSX("div", {
    css: slideStyle,
    style: geometry[props.value]
  }), options && options.map(function (item) {
    var checked = item.value === props.value;
    return ___EmotionJSX("button", {
      key: item.value,
      css: buttonStyle,
      type: "button",
      value: item.value,
      onClick: function onClick() {
        return _onClick(item.value);
      },
      onKeyDown: onKeyDown,
      role: "radio",
      "aria-checked": checked,
      disabled: props.disabled || item.disabled,
      tabIndex: checked ? 0 : -1
    }, item.text);
  }));
});
//# sourceMappingURL=SegmentButton.js.map