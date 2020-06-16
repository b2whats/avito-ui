"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CheckIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var CheckIcon = function CheckIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "check"
  }), (0, _core2.jsx)("path", {
    d: "M18.226 6.367a1 1 0 011.548 1.266l-9 11a1 1 0 01-1.481.074l-5-5a1 1 0 111.414-1.414l4.219 4.219 8.3-10.145z"
  }));
};

exports.CheckIcon = CheckIcon;
CheckIcon.platform = 'mobile';
//# sourceMappingURL=CheckIcon.js.map