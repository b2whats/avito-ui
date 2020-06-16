import { useCallback, useRef } from 'react';
export function useRefHook() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  var ref = useRef(null);
  var setRef = useCallback(function (node) {
    ref.current = node;
    refs.forEach(function (ref) {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(node);
      } else {
        ref.current = node;
      }
    });
  }, []);
  return [ref, setRef];
}
//# sourceMappingURL=useRefHook.js.map