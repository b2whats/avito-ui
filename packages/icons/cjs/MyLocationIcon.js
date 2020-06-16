"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.MyLocationIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var MyLocationIcon = function MyLocationIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "my-location"
  }), (0, _core2.jsx)("path", {
    d: "M2.649 10.939c-.86-.323-.867-1.536-.011-1.869l18-7c.81-.315 1.61.484 1.294 1.295l-7 18c-.333.856-1.546.848-1.868-.011l-2.84-7.575-7.575-2.84z"
  }));
};

exports.MyLocationIcon = MyLocationIcon;
MyLocationIcon.platform = 'mobile';
//# sourceMappingURL=MyLocationIcon.js.map