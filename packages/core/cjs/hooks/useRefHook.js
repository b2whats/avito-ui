"use strict";

exports.__esModule = true;
exports.useRefHook = useRefHook;

var _react = require("react");

function useRefHook() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  var ref = (0, _react.useRef)(null);
  var setRef = (0, _react.useCallback)(function (node) {
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