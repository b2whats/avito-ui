import { createPortal } from 'react-dom';
var container = null;

if (typeof document !== 'undefined') {
  container = document.createElement('div');
  document.body.appendChild(container);
}

export var Portal = function Portal(_ref) {
  var _ref$active = _ref.active,
      active = _ref$active === void 0 ? true : _ref$active,
      children = _ref.children;
  if (!container || !children) return null;
  return active ? /*#__PURE__*/createPortal(children, container) : children;
};
//# sourceMappingURL=Portal.js.map