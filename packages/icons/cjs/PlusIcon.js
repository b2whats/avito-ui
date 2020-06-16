"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.PlusIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var PlusIcon = function PlusIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 16 16",
    name: "plus"
  }), (0, _core2.jsx)("path", {
    d: "M7 7H1a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0V9h6a1 1 0 1 0 0-2H9V1a1 1 0 1 0-2 0v6z"
  }));
};

exports.PlusIcon = PlusIcon;
PlusIcon.platform = 'mobile';
//# sourceMappingURL=PlusIcon.js.map