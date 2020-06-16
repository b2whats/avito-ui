"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FavoritesIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var FavoritesIcon = function FavoritesIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 250 250",
    name: "favorites"
  }), (0, _core2.jsx)("path", {
    d: "M213.754 110.017L124.967 206.379L36.0429 109.805C20.093 92.0926 21.5555 64.3803 39.4804 48.2304C47.5178 40.9929 57.9052 36.993 68.7176 36.993C81.1175 36.993 92.9799 42.2804 101.255 51.4679L124.992 75.2052L148.742 51.4679C157.017 42.2804 168.879 36.993 181.267 36.993C192.092 36.993 202.479 40.9929 210.529 48.2304C219.216 56.0553 224.329 66.7928 224.941 78.4552C225.541 90.1301 221.579 101.33 213.754 110.017M227.254 29.6555C199.029 4.25571 155.567 6.5307 130.155 34.743C128.292 36.818 126.567 38.9805 124.992 41.2054C123.43 38.9805 121.705 36.818 119.842 34.743C94.4299 6.5307 50.9678 4.25571 22.743 29.6555C-5.4693 55.0678 -7.74429 98.53 17.6555 126.742L115.805 233.266C116.042 233.516 116.28 233.754 116.53 233.991C121.605 238.666 129.517 238.354 134.192 233.266L232.329 126.742C257.754 98.53 255.466 55.0678 227.254 29.6555"
  }));
};

exports.FavoritesIcon = FavoritesIcon;
FavoritesIcon.platform = 'mobile';
//# sourceMappingURL=FavoritesIcon.js.map