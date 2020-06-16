import { useCallback, useState } from 'react';
export var useMeasure = function useMeasure() {
  var _useState = useState(null),
      bounds = _useState[0],
      setBounds = _useState[1];

  var setRef = useCallback(function (node) {
    if (node !== null) {
      setBounds(node.getBoundingClientRect());
    }
  }, []);
  return [bounds, setRef];
};
//# sourceMappingURL=useMeasure.js.map