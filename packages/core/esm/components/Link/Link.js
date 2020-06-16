import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import { foldThemeParams } from "../../styled-system";
import { uiComponent } from "../../theme";
import { Text } from "../Text/";
import { linkTheme } from "./theme";
import { jsx as ___EmotionJSX } from "@emotion/core";
export var Link = uiComponent('Link', linkTheme)(function (_ref, _ref2) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  var theme = _ref2.theme;

  if (props.noVisited) {
    props.colorVisited = undefined;
    props.bgVisited = undefined;
    props.borderColorVisited = undefined;
  }

  var _foldThemeParams = foldThemeParams(props, theme),
      Link = _foldThemeParams.Link;

  return ___EmotionJSX(Text, _extends({
    as: "a"
  }, Link.props, props), children);
});
//# sourceMappingURL=Link.js.map