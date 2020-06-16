"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ListIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var ListIcon = function ListIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "list"
  }), (0, _core2.jsx)("path", {
    d: "M2.5 6a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM21 6a1 1 0 00-1-1H8a1 1 0 000 2h12a1 1 0 001-1zM4 13.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM21 12a1 1 0 00-1-1H8a1 1 0 100 2h12a1 1 0 001-1zm-1 5a1 1 0 110 2H8a1 1 0 110-2h12zM4 19.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
  }));
};

exports.ListIcon = ListIcon;
ListIcon.platform = 'mobile';
//# sourceMappingURL=ListIcon.js.map