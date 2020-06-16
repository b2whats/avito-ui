"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.useSyntheticChange = useSyntheticChange;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _rifm = require("rifm");

function useSyntheticChange(value, _onChange, options) {
  var stringValue = value === null || value === undefined ? '' : String(value);

  if (!options) {
    return [stringValue, function (_ref) {
      var target = _ref.target;
      return _onChange({
        value: target.value,
        target: target,
        name: target.name
      });
    }];
  }

  var _options$parse = options.parse,
      parse = _options$parse === void 0 ? function (v) {
    return v;
  } : _options$parse;
  var target = (0, _react.useRef)(null);
  var rifmProps = (0, _rifm.useRifm)((0, _extends2["default"])({
    value: stringValue,
    onChange: function onChange(value) {
      return _onChange({
        value: parse(value),
        target: target.current
      });
    }
  }, options));
  return [rifmProps.value, function (e) {
    target.current = e.target;
    rifmProps.onChange(e);
  }];
}
//# sourceMappingURL=useSyntheticChange.js.map