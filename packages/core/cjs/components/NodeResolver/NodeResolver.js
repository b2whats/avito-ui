"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.NodeResolver = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@emotion/core");

var NodeResolver = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children;
  var nodes = (0, _react.useRef)(null);

  var setRef = function setRef(node) {
    if (nodes.current) {
      if (nodes.current.anchor.nextSibling === nodes.current.nextElement) return;
      nodes.current.nextElement = nodes.current.anchor.nextSibling;
    } else if (node) {
      var _nodes$current = nodes.current = {
        tmp: node,
        parent: node.parentNode,
        anchor: document.createComment('anchor'),
        nextElement: null
      },
          tmp = _nodes$current.tmp,
          parent = _nodes$current.parent,
          anchor = _nodes$current.anchor;

      if (parent && parent.contains(tmp)) {
        parent.replaceChild(anchor, tmp);
        nodes.current.nextElement = anchor.nextSibling;
      }
    }

    if (!ref) return;
    var nextElement = nodes.current && nodes.current.nextElement;

    if (typeof ref === 'function') {
      ref(nextElement);
    } else if (typeof ref === 'object') {
      ref.current = nextElement;
    }
  };

  (0, _react.useEffect)(function () {
    return function () {
      if (!nodes.current) return;
      var _nodes$current2 = nodes.current,
          tmp = _nodes$current2.tmp,
          parent = _nodes$current2.parent,
          anchor = _nodes$current2.anchor;

      if (parent && tmp && anchor) {
        parent.replaceChild(tmp, anchor);
      }

      nodes.current = null;
    };
  }, []);
  return (0, _core.jsx)(_react["default"].Fragment, null, (0, _core.jsx)("span", {
    ref: setRef,
    hidden: true
  }), children);
});
exports.NodeResolver = NodeResolver;
NodeResolver.displayName = 'NodeResolver';
//# sourceMappingURL=NodeResolver.js.map