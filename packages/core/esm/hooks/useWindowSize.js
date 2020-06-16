import { useState, useEffect } from 'react';

function getSize() {
  if (typeof window === 'undefined') {
    return {};
  }

  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth
  };
}

export function useWindowSize() {
  var _useState = useState(getSize()),
      windowSize = _useState[0],
      setWindowSize = _useState[1];

  useEffect(function () {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowSize;
}
//# sourceMappingURL=useWindowSize.js.map