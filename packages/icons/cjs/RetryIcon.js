"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.RetryIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var RetryIcon = function RetryIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "retry"
  }), (0, _core2.jsx)("path", {
    d: "M12 8.002a1 1 0 001.514.857l5-3a1 1 0 000-1.715l-5-3A1 1 0 0012 2.002v2a9 9 0 109 9 1 1 0 00-2 0 7 7 0 11-7-7v2z"
  }));
};

exports.RetryIcon = RetryIcon;
RetryIcon.platform = 'mobile';
//# sourceMappingURL=RetryIcon.js.map