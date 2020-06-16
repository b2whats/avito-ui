"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.HelpIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var HelpIcon = function HelpIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "help"
  }), (0, _core2.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-3a1 1 0 100-2 1 1 0 000 2zM8.912 8.313a1 1 0 001.372-.341A2 2 0 0114 9c0 .656-.226.97-1.14 1.732C11.525 11.845 11 12.573 11 14a1 1 0 102 0c0-.656.226-.97 1.14-1.732C15.475 11.155 16 10.427 16 9a4 4 0 00-7.43-2.059 1 1 0 00.342 1.372z"
  }));
};

exports.HelpIcon = HelpIcon;
HelpIcon.platform = 'mobile';
//# sourceMappingURL=HelpIcon.js.map