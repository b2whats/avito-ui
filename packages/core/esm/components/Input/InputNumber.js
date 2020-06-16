import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useState, useMemo } from 'react';
import { numberFormatter } from "../../formatters";
import { useIsomorphicLayoutEffect } from "../../hooks";
import { invokeAll } from "../../utils";
import { Input } from "./Input";
import { jsx as ___EmotionJSX } from "@emotion/core";
export var InputNumber = function InputNumber(_ref) {
  var _ref$onChange = _ref.onChange,
      _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      props = _objectWithoutPropertiesLoose(_ref, ["onChange"]);

  var outerValue = numberOrEmpty(props.value); // Буферизация промежуточных значений "-" или "99."

  var _useState = useState(outerValue),
      stringValue = _useState[0],
      setStringValue = _useState[1];

  useIsomorphicLayoutEffect(function () {
    if (!numericEquals(outerValue, stringValue)) {
      setStringValue(String(outerValue));
    }
  }, [outerValue]);
  var formatter = useMemo(function () {
    return numberFormatter.setup(props);
  }, numberFormatter.settingKeys.map(function (k) {
    return props[k];
  }));
  return ___EmotionJSX(Input, _extends({
    inputMode: inputMode(formatter.settings),
    mask: formatter
  }, props, {
    value: stringValue,
    onChange: function onChange(event) {
      setStringValue(event.value || '');
      var numericValue = numberOrEmpty(event.value);

      if (!numericEquals(numericValue, outerValue)) {
        _onChange(_extends({}, event, {
          value: numericValue
        }));
      }
    },
    onKeyDown: invokeAll(props.onKeyDown, function (e) {
      var target = e.target;

      if (e.key === 'ArrowUp') {
        _onChange({
          value: (outerValue || 0) + 1,
          target: target
        });

        e.preventDefault();
      } else if (e.key === 'ArrowDown') {
        _onChange({
          value: (outerValue || 0) - 1,
          target: target
        });

        e.preventDefault();
      }
    })
  }));
};

function numberOrEmpty(v) {
  var numeric = Number(v);
  var isSafeCast = typeof v === 'number' || typeof v === 'string' && v !== '';
  return isSafeCast && !Number.isNaN(numeric) ? numeric : '';
}

function numericEquals(v1, v2) {
  return numberOrEmpty(v1) === numberOrEmpty(v2);
}
/**
 * Телефонная клавиатура с числами
 * https://css-tricks.com/everything-you-ever-wanted-to-know-about-inputmode/
 */


function inputMode(format) {
  if (!format.positiveOnly) {
    // наличие минуса на numeric / decimal не гарантировано
    return 'text';
  }

  return format.maxFracDigits ? 'decimal' : 'numeric';
}
//# sourceMappingURL=InputNumber.js.map