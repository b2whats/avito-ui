"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DeliveryIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var DeliveryIcon = function DeliveryIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "delivery"
  }), (0, _core2.jsx)("path", {
    d: "M0 5a1 1 0 011-1h12a1 1 0 011 1v9h1V9a1 1 0 011-1h2.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V17a1 1 0 01-1 1h-2.05a2.5 2.5 0 11-4.9 0h-8.1a2.5 2.5 0 11-4.9 0H1a1 1 0 01-1-1V5z"
  }));
};

exports.DeliveryIcon = DeliveryIcon;
DeliveryIcon.platform = 'mobile';
//# sourceMappingURL=DeliveryIcon.js.map