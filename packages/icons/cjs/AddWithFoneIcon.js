"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.AddWithFoneIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var AddWithFoneIcon = function AddWithFoneIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "add-with-fone"
  }), (0, _core2.jsx)("path", {
    d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 6v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H8a1 1 0 110-2h3V8a1 1 0 112 0z"
  }));
};

exports.AddWithFoneIcon = AddWithFoneIcon;
AddWithFoneIcon.platform = 'mobile';
//# sourceMappingURL=AddWithFoneIcon.js.map