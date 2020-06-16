"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TrashIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var TrashIcon = function TrashIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "trash"
  }), (0, _core2.jsx)("path", {
    d: "M15.5 3H20a1 1 0 110 2H4a1 1 0 010-2h4.5L9 2h6l.5 1zM5 7h14l-.894 12.514c-.037.524-.056.785-.17.984a1 1 0 01-.432.402c-.206.1-.469.1-.994.1H7.49c-.525 0-.788 0-.994-.1a1 1 0 01-.432-.402c-.114-.199-.133-.46-.17-.984L5 7z"
  }));
};

exports.TrashIcon = TrashIcon;
TrashIcon.platform = 'mobile';
//# sourceMappingURL=TrashIcon.js.map