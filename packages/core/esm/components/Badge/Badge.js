import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import { uiComponent } from "../../theme";
import { Box } from "../Layout";
import { badgeTheme } from "./theme";
import { jsx as ___EmotionJSX } from "@emotion/core";
export var Badge = uiComponent('Badge', badgeTheme)(function (_ref, _ref2, _ref3) {
  var gapSize = _ref.gapSize,
      gapColor = _ref.gapColor,
      props = _objectWithoutPropertiesLoose(_ref, ["gapSize", "gapColor"]);

  var tokens = _ref2.tokens;
  var _ = _ref3[0],
      setRef = _ref3[1];
  var shadow = gapSize && gapColor ? "0 0 0 " + gapSize + "px " + (tokens.palette[gapColor] || gapColor) + ";" : false;
  return ___EmotionJSX(Box, _extends({}, props, {
    shadow: shadow
  }), props.children);
});
//# sourceMappingURL=Badge.js.map