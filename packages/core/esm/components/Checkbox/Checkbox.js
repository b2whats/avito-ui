import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { uiComponent } from "../../theme";
import { Toggle } from "../Toggle/";
import { checkboxTheme } from "./theme";
import { jsx as ___EmotionJSX } from "@emotion/core";
export var Checkbox = uiComponent('Checkbox', checkboxTheme)(function (props, _ref) {
  var theme = _ref.theme;
  return ___EmotionJSX(Toggle, _extends({}, props, {
    mode: "checkbox",
    override: theme
  }), function (_ref2) {
    var checked = _ref2.checked,
        Icon = _ref2.Icon;
    return checked && Icon && ___EmotionJSX(Icon.component, _extends({}, Icon.props, {
      size: "auto"
    }));
  });
});
//# sourceMappingURL=Checkbox.js.map