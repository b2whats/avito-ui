import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { foldThemeParams, createClassName } from "../../styled-system/";
import { uiComponent } from "../../theme/";
import { filterProps } from "../../utils/";
import { textTheme } from "./theme";
import { jsx as ___EmotionJSX } from "@emotion/core";
var textClassName = createClassName(function (themeStyle, props) {
  return _extends({
    display: props.width || props.height ? 'inline-block' : 'inline'
  }, themeStyle, props);
}, function (textRules, _ref, _ref2) {
  var strike = _ref.strike;
  var palette = _ref2.palette;
  return "\n    li& {\n      list-style: none;\n    }\n\n    a& {\n      text-decoration: none;\n    }\n\n    " + (strike ? "\n      position: relative;\n      white-space: nowrap;\n\n      &::after {\n        content: '';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        border-top: 0.075em solid " + (typeof strike === 'string' ? palette[strike] : 'currentcolor') + ";\n        height: calc(50% - 1px);\n        transform: rotateZ(-2deg);\n      }\n    " : '') + "\n\n    " + textRules + "\n  ";
});
export var Text = uiComponent('Text', textTheme)(function (_ref3, _ref4) {
  var children = _ref3.children,
      props = _objectWithoutPropertiesLoose(_ref3, ["children"]);

  var theme = _ref4.theme,
      tokens = _ref4.tokens;

  var _foldThemeParams = foldThemeParams(props, theme),
      Text = _foldThemeParams.Text;

  var textStyle = textClassName(props, tokens, Text.style);
  var Tag = props.as || 'span';
  return ___EmotionJSX(Tag, _extends({
    css: textStyle
  }, filterProps(props)), children);
});
//# sourceMappingURL=Text.js.map