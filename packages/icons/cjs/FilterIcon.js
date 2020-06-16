"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FilterIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var FilterIcon = function FilterIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "filter"
  }), (0, _core2.jsx)("path", {
    d: "M5.708 5a2.5 2.5 0 014.584 0H20a1 1 0 110 2h-9.708a2.5 2.5 0 01-4.584 0H4a1 1 0 010-2h1.708zm8 6a2.5 2.5 0 014.584 0H20a1 1 0 110 2h-1.708a2.5 2.5 0 01-4.584 0H4a1 1 0 110-2h9.708zM8 15.5A2.5 2.5 0 005.708 17H4a1 1 0 100 2h1.708a2.5 2.5 0 004.584 0H20a1 1 0 100-2h-9.708A2.5 2.5 0 008 15.5z"
  }));
};

exports.FilterIcon = FilterIcon;
FilterIcon.platform = 'mobile';
//# sourceMappingURL=FilterIcon.js.map