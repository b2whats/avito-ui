import React, { forwardRef, useRef, useEffect } from 'react';
import { jsx as ___EmotionJSX } from "@emotion/core";
export var NodeResolver = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children;
  var nodes = useRef(null);

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

  useEffect(function () {
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
  return ___EmotionJSX(React.Fragment, null, ___EmotionJSX("span", {
    ref: setRef,
    hidden: true
  }), children);
});
NodeResolver.displayName = 'NodeResolver';
//# sourceMappingURL=NodeResolver.js.map