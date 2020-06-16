import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { uiComponent, foldThemeParams } from '@avito/core';
import { checkmarkTheme } from "./theme";
import { jsx as ___EmotionJSX } from "@emotion/core";
export var Checkmark = uiComponent('Checkmark', checkmarkTheme)(function (props, _ref) {
  var theme = _ref.theme;

  var _foldThemeParams = foldThemeParams(props, theme),
      Icon = _foldThemeParams.Icon;

  return ___EmotionJSX(Icon.component, _extends({
    visible: Boolean(props.checked)
  }, Icon.props, props));
});
//# sourceMappingURL=Checkmark.js.map