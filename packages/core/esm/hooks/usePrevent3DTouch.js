import { useCallback, useRef } from 'react';

var noop = function noop() {};

export var usePrevent3DTouch = function usePrevent3DTouch() {
  if (typeof window !== 'undefined' && !('ontouchforcechange' in window.document)) {
    return noop;
  }

  var isPrevented = useRef(false);
  var prevent3DTouch = useCallback(function (event) {
    if (event.changedTouches[0].force > 0.2) {
      event.preventDefault();
      event.stopPropagation();
      isPrevented.current = true;
    }
  }, []);
  var restoreClick = useCallback(function (event) {
    if (isPrevented.current) {
      event.stopPropagation();
      event.currentTarget.click();
      isPrevented.current = false;
    }
  }, []);
  var ref = useRef(null);
  var setRef = useCallback(function (node) {
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
//# sourceMappingURL=usePrevent3DTouch.js.map