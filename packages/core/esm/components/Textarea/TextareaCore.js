import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _taggedTemplateLiteralLoose from "@babel/runtime/helpers/esm/taggedTemplateLiteralLoose";

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  resize: none;\n  box-sizing: border-box;\n  overflow: auto;\n  width: 100%;\n  min-height: 1em;\n  height: 100%;\n  padding: 0px;\n  margin: 0px;\n  border-width: 0;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: inherit;\n  color: inherit;\n  outline: none;\n  background-color: transparent;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  -webkit-text-fill-color: currentcolor;\n\n  &[disabled] {\n    cursor: inherit;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { useEffect, useLayoutEffect } from 'react';
import { useRefHook } from "../../hooks/";
import { css } from "../../styled-system/";
import { filterProps, invokeAll } from "../../utils/";
import { jsx as ___EmotionJSX } from "@emotion/core";
var textareaStyle = css(_templateObject());
export var TextareaCore = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var maxRows = _ref.maxRows,
      autoSize = _ref.autoSize,
      resizable = _ref.resizable,
      props = _objectWithoutPropertiesLoose(_ref, ["maxRows", "autoSize", "resizable"]);

  var _useRefHook = useRefHook(ref),
      textarea = _useRefHook[0],
      setRef = _useRefHook[1];

  props = _extends({}, props, {
    ref: setRef,
    autoCorrect: 'off',
    spellCheck: false
  });

  var resize = function resize() {
    var node = textarea.current;
    if (!node) return; // Placeholder создает скрол когда не помещается, поэтому когда текста в нем очень много, высота высчиывается исходя из количества строк placeholder
    // То есть при первоначальном вводе текста текстовое поле сожмется до минимальной ширины

    var placeholder = node.placeholder,
        value = node.value;

    if (value) {
      node.style.height = 'auto';
      node.style.height = node.scrollHeight + "px";
    } else {
      node.placeholder = '';
      node.style.height = 'auto';
      node.style.height = node.scrollHeight + "px";
      node.placeholder = placeholder;
    }
  };

  var preventClick = invokeAll(function (event) {
    if (event.detail === 0) event.stopPropagation();
  }, props.onClick);
  useLayoutEffect(function () {
    var node = textarea.current;
    if (!node) return;
    node.style.resize = resizable ? 'auto' : 'none';

    if (maxRows) {
      var _window$getComputedSt = window.getComputedStyle(node),
          lineHeight = _window$getComputedSt.lineHeight,
          paddingTop = _window$getComputedSt.paddingTop,
          paddingBottom = _window$getComputedSt.paddingBottom,
          borderTopWidth = _window$getComputedSt.borderTopWidth,
          borderBottomWidth = _window$getComputedSt.borderBottomWidth;

      node.style.maxHeight = "calc(" + maxRows + " * " + lineHeight + " + " + paddingTop + " + " + paddingBottom + " + " + borderTopWidth + " + " + borderBottomWidth + ")";
    }
  }, [maxRows, resizable]);
  useEffect(function () {
    autoSize && resize();
  }, [autoSize, props.value]);
  return ___EmotionJSX("textarea", _extends({
    css: textareaStyle
  }, filterProps(props), {
    onClick: preventClick
  }));
});
//# sourceMappingURL=TextareaCore.js.map