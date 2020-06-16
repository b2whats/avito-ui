import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _taggedTemplateLiteralLoose from "@babel/runtime/helpers/esm/taggedTemplateLiteralLoose";

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  outline: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n  opacity: 0;\n\n  /* \u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043A\u043B\u0438\u043A */\n  pointer-events: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import { css, uiComponent, Text, Input, filterProps } from '@avito/core';
import { ChevronNarrowIcon } from '@avito/core/icons';
import { selectTheme } from "./theme";
import { jsx as ___EmotionJSX } from "@emotion/core";
var selectStyle = css(_templateObject());
export var Select = uiComponent('Select', selectTheme)(function (_ref, _ref2) {
  var _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$getValue = _ref.getValue,
      getValue = _ref$getValue === void 0 ? function (option) {
    return option.value;
  } : _ref$getValue,
      _ref$getText = _ref.getText,
      getText = _ref$getText === void 0 ? function (option) {
    return option.label;
  } : _ref$getText,
      _ref$placeholderOptio = _ref.placeholderOption,
      placeholderOption = _ref$placeholderOptio === void 0 ? 'Не выбрано' : _ref$placeholderOptio,
      _ref$clearable = _ref.clearable,
      clearable = _ref$clearable === void 0 ? true : _ref$clearable,
      placeholder = _ref.placeholder,
      value = _ref.value,
      props = _objectWithoutPropertiesLoose(_ref, ["options", "getValue", "getText", "placeholderOption", "clearable", "placeholder", "value"]);

  var theme = _ref2.theme;

  var renderCore = function renderCore(props) {
    var selectedOption = options.find(function (option) {
      return getValue(option) == props.value;
    });
    var textState = selectedOption ? {} : {
      'data-placeholder': true
    };
    return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(Text, _extends({
      truncate: true
    }, textState), selectedOption ? getText(selectedOption) : placeholder), !props.readOnly && ___EmotionJSX("select", _extends({}, filterProps(props), {
      css: selectStyle
    }), (!props.value || clearable) && ___EmotionJSX("option", {
      value: ""
    }, placeholderOption), options.map(function (option) {
      var value = getValue(option);
      return ___EmotionJSX("option", {
        key: value,
        value: value
      }, getText(option));
    })));
  };

  value = !value && !placeholderOption && options[0] ? getValue(options[0]) : value;
  return ___EmotionJSX(Input, _extends({
    iconAfter: ___EmotionJSX(ChevronNarrowIcon, {
      rotate: 180
    })
  }, props, {
    value: value,
    override: theme,
    renderCore: renderCore
  }));
});
//# sourceMappingURL=Select.js.map