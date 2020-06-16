"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.HomeIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var HomeIcon = function HomeIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "home"
  }), (0, _core2.jsx)("path", {
    d: "M15 21v-6.286a.714.714 0 00-.714-.714H9.714a.714.714 0 00-.714.714V21a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 01.293-.707l8-8a1 1 0 011.414 0l8 8A1 1 0 0121 11v10a1 1 0 01-1 1h-4a1 1 0 01-1-1z"
  }));
};

exports.HomeIcon = HomeIcon;
HomeIcon.platform = 'mobile';
//# sourceMappingURL=HomeIcon.js.map