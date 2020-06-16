"use strict";

exports.__esModule = true;
exports.useIsomorphicLayoutEffect = void 0;

var _react = require("react");

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document ? _react.useLayoutEffect : _react.useEffect;
exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect;
//# sourceMappingURL=useIsomorphicLayoutEffect.js.map