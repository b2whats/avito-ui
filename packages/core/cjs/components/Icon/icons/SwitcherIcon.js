"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SwitcherIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _core = require("@emotion/core");

var SwitcherIcon = function SwitcherIcon(props) {
  return (0, _core.jsx)(_.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 250 250",
    name: "switcher"
  }), (0, _core.jsx)("circle", {
    cx: "125",
    cy: "125",
    r: "125"
  }));
};

exports.SwitcherIcon = SwitcherIcon;
SwitcherIcon.category = 'component';
//# sourceMappingURL=SwitcherIcon.js.map