"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.NotificationsIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var NotificationsIcon = function NotificationsIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "notifications"
  }), (0, _core2.jsx)("path", {
    d: "M9.5 19.998h-5a1.5 1.5 0 01-1.299-2.25L5 14.631V9a7 7 0 0114 0v5.634l1.799 3.116A1.5 1.5 0 0119.5 20h-5a2.5 2.5 0 01-5 0v-.002z"
  }));
};

exports.NotificationsIcon = NotificationsIcon;
NotificationsIcon.platform = 'mobile';
//# sourceMappingURL=NotificationsIcon.js.map