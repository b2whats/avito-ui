"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.VisibleIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var VisibleIcon = function VisibleIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "visible"
  }), (0, _core2.jsx)("path", {
    d: "M1.047 11.59A12 12 0 0112 4.5a12 12 0 0110.953 7.09 1 1 0 010 .82A12 12 0 0112 19.5a12 12 0 01-10.953-7.09 1 1 0 010-.82zM12 17a5 5 0 100-10 5 5 0 000 10zm3-5a3 3 0 11-6 0 3 3 0 016 0z"
  }));
};

exports.VisibleIcon = VisibleIcon;
VisibleIcon.platform = 'mobile';
//# sourceMappingURL=VisibleIcon.js.map