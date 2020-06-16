"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Hamburger = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var Hamburger = function Hamburger(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "hamburger"
  }), (0, _core2.jsx)("path", {
    d: "M20 5C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5H20Z"
  }), (0, _core2.jsx)("path", {
    d: "M21 12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12Z"
  }), (0, _core2.jsx)("path", {
    d: "M21 18C21 17.4477 20.5523 17 20 17H4C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18Z"
  }));
};

exports.Hamburger = Hamburger;
Hamburger.platform = 'mobile';
//# sourceMappingURL=Hamburger.js.map