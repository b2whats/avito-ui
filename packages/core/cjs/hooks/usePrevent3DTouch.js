"use strict";

exports.__esModule = true;
exports.usePrevent3DTouch = void 0;

var _react = require("react");

var noop = function noop() {};

var usePrevent3DTouch = function usePrevent3DTouch() {
  if (typeof window !== 'undefined' && !('ontouchforcechange' in window.document)) {
    return noop;
  }

  var isPrevented = (0, _react.useRef)(false);
  var prevent3DTouch = (0, _react.useCallback)(function (event) {
    if (event.changedTouches[0].force > 0.2) {
      event.preventDefault();
      event.stopPropagation();
      isPrevented.current = true;
    }
  }, []);
  var restoreClick = (0, _react.useCallback)(function (event) {
    if (isPrevented.current) {
      event.stopPropagation();
      event.currentTarget.click();
      isPrevented.current = false;
    }
  }, []);
  var ref = (0, _react.useRef)(null);
  var setRef = (0, _react.useCallback)(function (node) {
    if (node) {
      node.addEventListener('touchforcechange', prevent3DTouch);
      node.addEventListener('touchend', restoreClick);
    } else if (ref.current) {
      ref.current.removeEventListener('touchforcechange', prevent3DTouch);
      ref.current.removeEventListener('touchend', restoreClick);
    }

    ref.current = node;
  }, []);
  return setRef;
};

exports.usePrevent3DTouch = usePrevent3DTouch;
//# sourceMappingURL=usePrevent3DTouch.js.map