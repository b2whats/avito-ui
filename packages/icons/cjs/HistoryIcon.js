"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.HistoryIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var HistoryIcon = function HistoryIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "history"
  }), (0, _core2.jsx)("path", {
    d: "M7.002 12H5a8 8 0 118 8 1 1 0 100 2c5.523 0 10-4.477 10-10S18.523 2 13 2 3 6.477 3 12H1.002a1 1 0 00-.858 1.514l3 5a1 1 0 001.715 0l3-5A1 1 0 007.002 12zm9.705 2.293L14 11.586V7a1 1 0 10-2 0v5a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414z"
  }));
};

exports.HistoryIcon = HistoryIcon;
HistoryIcon.platform = 'mobile';
//# sourceMappingURL=HistoryIcon.js.map