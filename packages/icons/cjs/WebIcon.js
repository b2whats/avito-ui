"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.WebIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var WebIcon = function WebIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "web"
  }), (0, _core2.jsx)("path", {
    d: "M22 12c0 5.523-4.477 10-10 10l4.287-7.425A4.977 4.977 0 0017 12a4.978 4.978 0 00-1-3h5.542c.298.947.458 1.955.458 3zm-9.402 4.965l-2.77 4.798C5.348 20.771 2 16.777 2 12c0-1.822.487-3.53 1.339-5.002l4.283 7.419a4.999 4.999 0 004.976 2.548zM12 2a9.974 9.974 0 00-7.368 3.239l2.77 4.795A5.001 5.001 0 0112 7h8.662A9.996 9.996 0 0012 2zm3 10a3 3 0 11-6 0 3 3 0 016 0z"
  }));
};

exports.WebIcon = WebIcon;
WebIcon.platform = 'mobile';
//# sourceMappingURL=WebIcon.js.map