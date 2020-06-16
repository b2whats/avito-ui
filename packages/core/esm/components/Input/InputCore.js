import _extends from "@babel/runtime/helpers/esm/extends";
import _taggedTemplateLiteralLoose from "@babel/runtime/helpers/esm/taggedTemplateLiteralLoose";

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n  flex-shrink: 1;\n  display: inline-block;\n  position: relative;\n  visibility: hidden;\n  min-width: 5px;\n\n  &[data-value] {\n    width: auto;\n  }\n\n  &[data-value]::before {\n    content: attr(data-value);\n    display: inline-block;\n    white-space: pre;\n    padding-right: 2px;\n  }\n\n  @-moz-document url-prefix() {\n    & > input {\n      height: 100%;\n    }\n  }\n\n  & > input {\n    box-sizing: border-box;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    bottom: 0;\n    padding: 0px;\n    margin: 0px;\n    border-width: 0;\n    visibility: visible;\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n    color: inherit;\n    outline: none;\n    background-color: transparent;\n    -webkit-text-fill-color: currentcolor;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n\n  & > [disabled] {\n    cursor: inherit;\n  }\n\n  & > ::-webkit-inner-spin-button {\n    display: none\n  }\n  & > [type=number] {\n    -moz-appearance: textfield;\n  }\n\n  & > input:-webkit-autofill,\n  & > input:-webkit-autofill:hover,\n  & > input:-webkit-autofill:focus,\n  & > input:-webkit-autofill:active {\n    animation: ", " 0s forwards;\n  }\n\n  & > input::-ms-clear,\n  & > input::-ms-reveal {\n    display: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  100% {\n    background: transparent;\n    color: inherit;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import { css, keyframes } from "../../styled-system/";
import { filterProps, invokeAll } from "../../utils/";
import { jsx as ___EmotionJSX } from "@emotion/core";
var autofill = keyframes(_templateObject()); // @-moz-document url-prefix() - стили только дла FF

var inputField = css(_templateObject2(), autofill);
export var InputCore = /*#__PURE__*/React.forwardRef(function (props, ref) {
  props = _extends({
    type: 'text',
    autoCorrect: 'off',
    spellCheck: false
  }, props, {
    ref: ref
  }); // Прерываем всплытие события click вызванное триггером label, без отмены событие клика будет вызвано дважды
  // Когда мы триггерим клик по инпуту через лейбл в свойстве detail будет значение 0, так как клик был програмный

  var preventClick = invokeAll(function (event) {
    if (event.detail === 0) event.stopPropagation();
  }, props.onClick);
  var text = props.autoSize ? props.value || props.placeholder || '' : undefined;
  return ___EmotionJSX("div", {
    css: inputField,
    "data-value": text
  }, ___EmotionJSX("input", _extends({}, filterProps(props), {
    onClick: preventClick
  })));
});
InputCore.displayName = 'InputCore';
//# sourceMappingURL=InputCore.js.map