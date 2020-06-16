import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import { foldThemeParams } from "../../styled-system/";
import { uiComponent } from "../../theme/";
import { spinnerTheme } from "./theme";
import { jsx as ___EmotionJSX } from "@emotion/core";
export var Spinner = uiComponent('Spinner', spinnerTheme)(function (_ref, _ref2) {
  var speed = _ref.speed,
      props = _objectWithoutPropertiesLoose(_ref, ["speed"]);

  var theme = _ref2.theme;

  var _foldThemeParams = foldThemeParams(props, theme),
      Spinner = _foldThemeParams.Spinner;

  return ___EmotionJSX(Spinner.component, _extends({}, Spinner.props, props, {
    spin: speed || true
  }));
});
//# sourceMappingURL=Spinner.js.map