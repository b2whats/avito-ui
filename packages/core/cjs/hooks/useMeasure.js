"use strict";

exports.__esModule = true;
exports.useMeasure = void 0;

var _react = require("react");

var useMeasure = function useMeasure() {
  var _useState = (0, _react.useState)(null),
      bounds = _useState[0],
      setBounds = _useState[1];

  var setRef = (0, _react.useCallback)(function (node) {
    if (node !== null) {
      setBounds(node.getBoundingClientRect());
    }
  }, []);
  return [bounds, setRef];
};

exports.useMeasure = useMeasure;
//# sourceMappingURL=useMeasure.js.map