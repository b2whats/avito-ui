"use strict";

exports.__esModule = true;
exports.useWindowSize = useWindowSize;

var _react = require("react");

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

function useWindowSize() {
  var _useState = (0, _react.useState)(getSize()),
      windowSize = _useState[0],
      setWindowSize = _useState[1];

  (0, _react.useEffect)(function () {
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