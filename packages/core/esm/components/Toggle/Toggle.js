import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import React, { useEffect, useState } from 'react';
import { usePrevent3DTouch } from "../../hooks/";
import { foldThemeParams, createClassName } from "../../styled-system/";
import { uiComponent } from "../../theme/";
import { filterProps, invokeAll } from "../../utils/";
import { useGroupHook } from "../Layout/";
import { Text } from "../Text/";
import { toggleTheme } from "./theme";
import { jsx as ___EmotionJSX } from "@emotion/core";
var toggleClassName = createClassName(function (_, props) {
  return _extends({
    display: 'inline-flex',
    valign: 'baseline'
  }, props, {
    shape: undefined
  });
}, function (textRules) {
  return "\n    position: relative;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n\n    & > input {\n      clip: rect(0, 0, 0, 0);\n      height: 1px;\n      position: absolute;\n      white-space: nowrap;\n      width: 1px;\n      margin: -1px;\n      border-width: 0;\n      border-style: initial;\n      border-color: initial;\n      border-image: initial;\n      overflow: hidden;\n      padding: 0;\n    }\n\n    &[aria-disabled] {\n      pointer-events: none;\n    }\n\n    " + textRules + "\n  ";
});
var switchClassName = createClassName(function (themeStyle, props) {
  return _extends({
    display: 'inline-flex',
    shrink: false,
    shape: props.shape,
    adjacentSelector: 'input',
    variant: props.variant
  }, themeStyle);
}, function (textRules) {
  return "\n    transition: background-color 0.2s ease 0s;\n    -webkit-user-select: none;\n\n    &::before {\n      content: 'x';\n      width: 0px;\n      overflow: hidden;\n      align-self: center;\n      color: transparent;\n    }\n\n    " + textRules + "\n  ";
});
export var Toggle = uiComponent('Toggle', toggleTheme)(function (_ref, _ref2, _ref3) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "children"]);

  var theme = _ref2.theme,
      tokens = _ref2.tokens;
  var ref = _ref3[0],
      setRef = _ref3[1];
  var groupProps = useGroupHook(ref, props); // Uncontrolled input for demos

  if (tokens._demo && !groupProps.onChange && groupProps.mode === 'checkbox') {
    var _useState = useState(groupProps.checked || false),
        _checked = _useState[0],
        _onChange = _useState[1];

    groupProps.checked = _checked;

    groupProps.onChange = function (v) {
      return _onChange(v.checked);
    };
  }

  useEffect(function () {
    if (props.indeterminate !== undefined && ref.current) {
      ref.current.indeterminate = props.indeterminate;
    }
  }, [props.indeterminate]);
  var checked = groupProps.indeterminate ? 'mixed' : Boolean(groupProps.checked);
  var aria = {
    role: groupProps.role || groupProps.mode,
    'aria-checked': checked,
    'aria-invalid': groupProps.variant === 'error',
    'aria-disabled': groupProps.disabled,
    'aria-busy': groupProps.loading
  };

  var preventFocus = function preventFocus(event) {
    event.preventDefault();
  };

  var preventLabelClick = invokeAll(function (event) {
    return event.stopPropagation();
  }, groupProps.onClick);

  var onChange = function onChange() {
    var value = {
      name: groupProps.name,
      value: groupProps.value,
      checked: !groupProps.checked,
      type: aria.role
    };
    groupProps.onChange && groupProps.onChange(value);
  };

  var _foldThemeParams = foldThemeParams(groupProps, theme),
      Toggle = _foldThemeParams.Toggle,
      Switch = _foldThemeParams.Switch,
      Icon = _foldThemeParams.Icon,
      Label = _foldThemeParams.Label;

  var toggleStyle = toggleClassName(groupProps, tokens, Toggle.style);
  var switchStyle = switchClassName(groupProps, tokens, Switch.style);

  var label = props.label && ___EmotionJSX(Text, _extends({}, Label.props, {
    crop: true
  }), props.label);

  return ___EmotionJSX("label", _extends({
    ref: usePrevent3DTouch(),
    css: toggleStyle
  }, aria, {
    onMouseDown: preventFocus
  }), props.labelPosition === 'start' && label, ___EmotionJSX("input", _extends({}, filterProps(groupProps), {
    ref: setRef,
    type: props.mode,
    onChange: onChange,
    onClick: preventLabelClick
  })), ___EmotionJSX("div", {
    css: switchStyle,
    className: className
  }, children && children({
    checked: checked,
    loading: props.loading,
    Icon: Icon
  })), props.labelPosition === 'end' && label);
});
//# sourceMappingURL=Toggle.js.map