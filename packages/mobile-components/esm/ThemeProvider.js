import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { ThemeProvider as BaseThemeProvider } from '@avito/core';
import { theme } from "./theme";
import { jsx as ___EmotionJSX } from "@emotion/core";
export var ThemeProvider = function ThemeProvider(props) {
  return ___EmotionJSX(BaseThemeProvider, _extends({
    defaultTheme: theme
  }, props));
};
//# sourceMappingURL=ThemeProvider.js.map