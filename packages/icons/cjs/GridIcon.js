"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.GridIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var GridIcon = function GridIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "grid"
  }), (0, _core2.jsx)("path", {
    d: "M6 8v8H3a1 1 0 100 2h3v3a1 1 0 102 0v-3h8v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V8h3a1 1 0 100-2h-3V3a1 1 0 10-2 0v3H8V3a1 1 0 00-2 0v3H3a1 1 0 000 2h3zm10 8H8V8h8v8z"
  }));
};

exports.GridIcon = GridIcon;
GridIcon.platform = 'mobile';
//# sourceMappingURL=GridIcon.js.map