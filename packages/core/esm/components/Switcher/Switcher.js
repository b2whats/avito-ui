import _extends from "@babel/runtime/helpers/esm/extends";
import _taggedTemplateLiteralLoose from "@babel/runtime/helpers/esm/taggedTemplateLiteralLoose";

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  &::before {\n    transition: width .2s ease .05s;\n    width: 0%;\n  }\n\n  &::after {\n    content: '';\n    transition: width .2s ease .05s;\n    width: 100%;\n  }\n\n  input:active + &::before {\n    width: 20%;\n  }\n\n  input:checked + &::before {\n    width: 100%;\n  }\n\n  input:checked + &::after {\n    width: 0%;\n  }\n\n  input:checked:active + &::after {\n    width: 20%;\n  }\n\n  [aria-busy='true'] > &&::before,\n  [aria-busy='true'] > &&::after {\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import { css } from "../../styled-system/";
import { uiComponent } from "../../theme/";
import { Toggle } from "../Toggle/";
import { switcherTheme } from "./theme";
import { jsx as ___EmotionJSX } from "@emotion/core";

var circleStyle = function circleStyle(positionLoading) {
  return css(_templateObject(), positionLoading ? '' : 'width: 0%;');
};

export var Switcher = uiComponent('Switcher', switcherTheme)(function (props, _ref) {
  var theme = _ref.theme;
  return ___EmotionJSX(Toggle, _extends({
    css: circleStyle(theme.positionLoading)
  }, props, {
    mode: "checkbox",
    override: theme
  }), function (_ref2) {
    var Icon = _ref2.Icon;
    return Icon && ___EmotionJSX(Icon.component, _extends({}, Icon.props, {
      size: "auto"
    }));
  });
});
//# sourceMappingURL=Switcher.js.map