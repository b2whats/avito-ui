"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.AvitoIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var AvitoIcon = function AvitoIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 85 85",
    name: "avito"
  }), (0, _core2.jsx)("circle", {
    cx: "60.65",
    cy: "60.55",
    r: "22.45",
    fill: "#97CF26"
  }), (0, _core2.jsx)("circle", {
    cx: "18.45",
    cy: "60.55",
    r: "10.45",
    fill: "#A169F7"
  }), (0, _core2.jsx)("circle", {
    cx: "60.65",
    cy: "18.35",
    r: "14.45",
    fill: "#FF6163"
  }), (0, _core2.jsx)("circle", {
    cx: "18.45",
    cy: "18.35",
    r: "18.45",
    fill: "#0AF"
  }));
};

exports.AvitoIcon = AvitoIcon;
AvitoIcon.platform = 'mobile';
//# sourceMappingURL=AvitoIcon.js.map