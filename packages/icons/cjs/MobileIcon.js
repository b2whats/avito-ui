"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.MobileIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var MobileIcon = function MobileIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "mobile"
  }), (0, _core2.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H6zm12 3H6v14h12V5z"
  }));
};

exports.MobileIcon = MobileIcon;
MobileIcon.platform = 'mobile';
//# sourceMappingURL=MobileIcon.js.map