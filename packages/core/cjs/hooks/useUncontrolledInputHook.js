"use strict";

exports.__esModule = true;
exports.useUncontrolledInputHook = void 0;

var _react = require("react");

var useUncontrolledInputHook = function useUncontrolledInputHook(props) {
  var value = props.value,
      onChange = props.onChange;

  if (!onChange) {
    var _useState = (0, _react.useState)(props.value),
        innerValue = _useState[0],
        setValue = _useState[1];

    onChange = function onChange(event) {
      return setValue(event.value);
    };

    (0, _react.useEffect)(function () {
      setValue(props.value);
    }, [props.value]);
    value = innerValue;
  }

  return [value, onChange];
};

exports.useUncontrolledInputHook = useUncontrolledInputHook;
//# sourceMappingURL=useUncontrolledInputHook.js.map