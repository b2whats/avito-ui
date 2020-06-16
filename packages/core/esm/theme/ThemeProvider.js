import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import React, { useEffect } from 'react';
import { tokens } from '@avito/tokens';
import { isMobileSafari } from "../utils/";
import { mergeTheme } from "./mergeTheme";
import { useTheme } from "./useTheme";
import { jsx as ___EmotionJSX } from "@emotion/core";
export function ThemeProvider(_ref) {
  var _ref$defaultTheme = _ref.defaultTheme,
      defaultTheme = _ref$defaultTheme === void 0 ? tokens : _ref$defaultTheme,
      theme = _ref.theme,
      children = _ref.children;
  var globalTheme = useTheme();
  var currentTeme = mergeTheme(defaultTheme, globalTheme, theme);
  useEffect(function () {
    // необходимо для mobile safari что бы в нем работали состояния :active
    isMobileSafari && document.body.setAttribute('ontouchstart', '');
  }, []);
  return ___EmotionJSX(EmotionThemeProvider, {
    theme: currentTeme
  }, children);
}
//# sourceMappingURL=ThemeProvider.js.map