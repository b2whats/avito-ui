import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { uiComponent } from "../../theme";
import { Toggle } from "../Toggle/";
import { radioTheme } from "./theme";
import { jsx as ___EmotionJSX } from "@emotion/core";
export var Radio = uiComponent('Radio', radioTheme)(function (props, _ref) {
  var theme = _ref.theme;
  return ___EmotionJSX(Toggle, _extends({}, props, {
    mode: "radio",
    override: theme
  }), function (_ref2) {
    var checked = _ref2.checked,
        Icon = _ref2.Icon;
    return checked && Icon && ___EmotionJSX(Icon.component, _extends({}, Icon.props, {
      size: "auto"
    }));
  });
});
//# sourceMappingURL=Radio.js.map