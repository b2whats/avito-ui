"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.LocationIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var LocationIcon = function LocationIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "location"
  }), (0, _core2.jsx)("path", {
    d: "M11.998 2a8 8 0 00-6.552 12.59l5.741 7.993a1 1 0 001.625 0l5.734-7.985c2.54-3.629 1.661-8.617-1.958-11.151a7.967 7.967 0 00-4.59-1.448zM15 10a3 3 0 11-6 0 3 3 0 016 0z"
  }));
};

exports.LocationIcon = LocationIcon;
LocationIcon.platform = 'mobile';
//# sourceMappingURL=LocationIcon.js.map