"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ShopIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var ShopIcon = function ShopIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 16 16",
    name: "shop"
  }), (0, _core2.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.999 10.552a.5.5 0 00.497.448H12.5a.5.5 0 00.48-.363l2-7A.5.5 0 0014.5 3H4.216L3.947.448A.5.5 0 003.45 0H.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1.6l.899 8.552zM4.5 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM11.5 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
  }));
};

exports.ShopIcon = ShopIcon;
ShopIcon.platform = 'mobile';
//# sourceMappingURL=ShopIcon.js.map