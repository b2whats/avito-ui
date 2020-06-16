import _extends from "@babel/runtime/helpers/esm/extends";
import { useRef } from 'react';
import { useRifm } from 'rifm';
export function useSyntheticChange(value, _onChange, options) {
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
  var target = useRef(null);
  var rifmProps = useRifm(_extends({
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