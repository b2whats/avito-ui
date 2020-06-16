import { useState, useEffect } from 'react';
export var useUncontrolledInputHook = function useUncontrolledInputHook(props) {
  var value = props.value,
      onChange = props.onChange;

  if (!onChange) {
    var _useState = useState(props.value),
        innerValue = _useState[0],
        setValue = _useState[1];

    onChange = function onChange(event) {
      return setValue(event.value);
    };

    useEffect(function () {
      setValue(props.value);
    }, [props.value]);
    value = innerValue;
  }

  return [value, onChange];
};
//# sourceMappingURL=useUncontrolledInputHook.js.map