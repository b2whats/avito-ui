"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CropIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var CropIcon = function CropIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "crop"
  }), (0, _core2.jsx)("path", {
    d: "M4 2v2H2a1 1 0 000 2h2v13a1 1 0 001 1h11v-2H6V2a1 1 0 00-2 0zm14 4v16a1 1 0 102 0v-2h2a1 1 0 100-2h-2V5a1 1 0 00-1-1H8v2h10z"
  }));
};

exports.CropIcon = CropIcon;
CropIcon.platform = 'mobile';
//# sourceMappingURL=CropIcon.js.map