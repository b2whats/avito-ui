"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CrossIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _core = require("@emotion/core");

var CrossIcon = function CrossIcon(props) {
  return (0, _core.jsx)(_.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "cross"
  }), (0, _core.jsx)("path", {
    d: "M18.707 5.293a1 1 0 00-1.414 0L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 000-1.414z"
  }));
};

exports.CrossIcon = CrossIcon;
CrossIcon.category = 'component';
//# sourceMappingURL=CrossIcon.js.map