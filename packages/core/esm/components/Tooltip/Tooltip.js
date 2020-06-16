import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { foldThemeParams, createClassName } from "../../styled-system/";
import { uiComponent } from "../../theme/";
import { filterProps } from "../../utils/";
import { Positioner } from "../Positioner/";
import { tooltipTheme } from "./theme";
import { jsx as ___EmotionJSX } from "@emotion/core";
var tooltipClassName = createClassName(function (themeStyle, props) {
  return _extends({
    display: 'block'
  }, themeStyle, props, {
    minWidth: undefined,
    width: undefined,
    maxWidth: undefined
  });
});
var arrowClassName = createClassName(function (themeStyle) {
  return _extends({
    display: 'inline-block'
  }, themeStyle);
}, function (textRules, _, __, themeStyle) {
  return "\n    visibility: hidden;\n    background-color: inherit;\n\n    &::before {\n      content: '';\n      box-sizing: border-box;\n      width: 100%;\n      height: 100%;\n      transform: rotate(45deg);\n      display: inline-block;\n      vertical-align: top;\n      visibility: visible;\n      background-color: inherit;\n      border-radius: inherit;\n    }\n\n    [data-popper-placement^='top'] & {\n      bottom: -" + themeStyle.offset + "px;\n    }\n    [data-popper-placement^='bottom'] & {\n      top: -" + themeStyle.offset + "px;\n    }\n    [data-popper-placement^='left'] & {\n      right: -" + themeStyle.offset + "px;\n    }\n    [data-popper-placement^='right'] & {\n      left: -" + themeStyle.offset + "px;\n    }\n\n    " + textRules + "\n  ";
});
export var Tooltip = uiComponent('Tooltip', tooltipTheme)(function (_ref, _ref2) {
  var content = _ref.content,
      props = _objectWithoutPropertiesLoose(_ref, ["content"]);

  var theme = _ref2.theme,
      tokens = _ref2.tokens;
  if (!content) return props.children;

  var _foldThemeParams = foldThemeParams(props, theme),
      Tooltip = _foldThemeParams.Tooltip,
      Arrow = _foldThemeParams.Arrow,
      Close = _foldThemeParams.Close;

  var tooltipStyle = tooltipClassName(props, tokens, Tooltip.style);
  var arrowStyle = arrowClassName(props, tokens, Arrow.style);

  var target = function target(_ref3) {
    var close = _ref3.close;
    return ___EmotionJSX("div", _extends({
      css: tooltipStyle
    }, filterProps(props)), props.arrow && ___EmotionJSX("div", {
      css: arrowStyle,
      "data-popper-arrow": true
    }), props.closable && Close.component && ___EmotionJSX(Close.component, _extends({}, Close.props, {
      onClick: close
    })), content);
  };

  return ___EmotionJSX(Positioner, _extends({}, props, {
    target: target
  }), props.children);
});
//# sourceMappingURL=Tooltip.js.map