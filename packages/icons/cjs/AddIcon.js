"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.AddIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var AddIcon = function AddIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "add"
  }), (0, _core2.jsx)("path", {
    d: "M11 11V3.993A.994.994 0 0112 3c.552 0 1 .445 1 .993V11h7.007c.548 0 .993.444.993 1 0 .552-.445 1-.993 1H13v7.007A.994.994 0 0112 21c-.552 0-1-.445-1-.993V13H3.993A.994.994 0 013 12c0-.552.445-1 .993-1H11z"
  }));
};

exports.AddIcon = AddIcon;
AddIcon.platform = 'mobile';
//# sourceMappingURL=AddIcon.js.map