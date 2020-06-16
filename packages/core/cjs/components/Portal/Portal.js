"use strict";

exports.__esModule = true;
exports.Portal = void 0;

var _reactDom = require("react-dom");

var container = null;

if (typeof document !== 'undefined') {
  container = document.createElement('div');
  document.body.appendChild(container);
}

var Portal = function Portal(_ref) {
  var _ref$active = _ref.active,
      active = _ref$active === void 0 ? true : _ref$active,
      children = _ref.children;
  if (!container || !children) return null;
  return active ? /*#__PURE__*/(0, _reactDom.createPortal)(children, container) : children;
};

exports.Portal = Portal;
//# sourceMappingURL=Portal.js.map