"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CartViewIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var CartViewIcon = function CartViewIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "cart-view"
  }), (0, _core2.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.316 20.949L9 19.054l5.684 1.895a1 1 0 00.632 0l6-2A1 1 0 0022 18V4a1 1 0 00-1.316-.949L15 4.946 9.316 3.05a1 1 0 00-.632 0l-6 2A1 1 0 002 6v14a1 1 0 001.316.949zM9 16.946l6 2V7.054l-6-2v11.892z"
  }));
};

exports.CartViewIcon = CartViewIcon;
CartViewIcon.platform = 'mobile';
//# sourceMappingURL=CartViewIcon.js.map