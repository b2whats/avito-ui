"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.InputNumber = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _formatters = require("../../formatters");

var _hooks = require("../../hooks");

var _utils = require("../../utils");

var _Input = require("./Input");

var _core = require("@emotion/core");

var InputNumber = function InputNumber(_ref) {
  var _ref$onChange = _ref.onChange,
      _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["onChange"]);

  var outerValue = numberOrEmpty(props.value); // Буферизация промежуточных значений "-" или "99."

  var _useState = (0, _react.useState)(outerValue),
      stringValue = _useState[0],
      setStringValue = _useState[1];

  (0, _hooks.useIsomorphicLayoutEffect)(function () {
    if (!numericEquals(outerValue, stringValue)) {
      setStringValue(String(outerValue));
    }
  }, [outerValue]);
  var formatter = (0, _react.useMemo)(function () {
    return _formatters.numberFormatter.setup(props);
  }, _formatters.numberFormatter.settingKeys.map(function (k) {
    return props[k];
  }));
  return (0, _core.jsx)(_Input.Input, (0, _extends2["default"])({
    inputMode: inputMode(formatter.settings),
    mask: formatter
  }, props, {
    value: stringValue,
    onChange: function onChange(event) {
      setStringValue(event.value || '');
      var numericValue = numberOrEmpty(event.value);

      if (!numericEquals(numericValue, outerValue)) {
        _onChange((0, _extends2["default"])({}, event, {
          value: numericValue
        }));
      }
    },
    onKeyDown: (0, _utils.invokeAll)(props.onKeyDown, function (e) {
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

exports.InputNumber = InputNumber;

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