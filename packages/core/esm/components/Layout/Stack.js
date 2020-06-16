import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { createClassName } from "../../styled-system/";
import { useTheme } from "../../theme/";
import { filterProps } from "../../utils/";
import { jsx as ___EmotionJSX } from "@emotion/core";
var stackClassName = createClassName(function (_, props) {
  return _extends({
    display: 'flex',
    valign: !props.column ? 'top' : undefined
  }, props);
}, function (textRules, _ref, _ref2) {
  var column = _ref.column,
      scroll = _ref.scroll,
      spacing = _ref.spacing,
      spacingCross = _ref.spacingCross,
      debug = _ref.debug;
  var space = _ref2.space;
  return "\n    " + (scroll ? "overflow-" + (column ? 'y' : 'x') + ": auto;" : '') + ";\n\n    " + (spacing ? "\n      & > *:not(:last-child) { margin-" + (column ? 'bottom' : 'right') + ": " + (space[spacing] || spacing) + "px; }\n    " : '') + "\n\n    " + (spacingCross ? "\n      && > * { margin-" + (column ? 'right' : 'bottom') + ": " + (space[spacingCross] || spacingCross) + "px; }\n    " : '') + "\n\n    " + (debug ? "\n      outline: 1px solid red;\n      & > * {\n        background-color: #A1DFFF;\n      }\n\n      & > :nth-child(2n) {\n        background-color: #ffd173;\n      }\n    " : '') + "\n\n    " + textRules + "\n  ";
});
export var Stack = /*#__PURE__*/React.forwardRef(function (_ref3, ref) {
  var as = _ref3.as,
      children = _ref3.children,
      props = _objectWithoutPropertiesLoose(_ref3, ["as", "children"]);

  var theme = useTheme();
  var stackStyle = stackClassName(props, theme);
  var Tag = as || 'div';
  return ___EmotionJSX(Tag, _extends({
    ref: ref,
    css: stackStyle
  }, filterProps(props)), children);
});
Stack.displayName = 'Stack';
//# sourceMappingURL=Stack.js.map