import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { createClassName } from "../../styled-system/";
import { useTheme } from "../../theme/";
import { filterProps } from "../../utils/";
import { jsx as ___EmotionJSX } from "@emotion/core";
var boxClassName = createClassName(function (_, props) {
  return _extends({
    display: 'inline-flex',
    shrink: false
  }, props);
});
export var Box = function Box(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  var theme = useTheme();
  var boxStyle = boxClassName(props, theme);
  return ___EmotionJSX("div", _extends({
    css: boxStyle
  }, filterProps(props)), children);
};
//# sourceMappingURL=Box.js.map