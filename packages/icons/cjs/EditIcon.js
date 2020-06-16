"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.EditIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var EditIcon = function EditIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "edit"
  }), (0, _core2.jsx)("path", {
    d: "M3.02 15.804l-1 5a1 1 0 001.176 1.177l5-1a1 1 0 00.511-.274l9.793-9.793L13.086 5.5l-9.793 9.793a1 1 0 00-.274.51zM14.5 4.086L19.914 9.5l1.793-1.793a1 1 0 000-1.414l-4-4a1 1 0 00-1.414 0L14.5 4.086z"
  }));
};

exports.EditIcon = EditIcon;
EditIcon.platform = 'mobile';
//# sourceMappingURL=EditIcon.js.map