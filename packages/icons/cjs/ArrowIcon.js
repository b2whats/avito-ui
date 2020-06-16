"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ArrowIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var ArrowIcon = function ArrowIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "arrow"
  }), (0, _core2.jsx)("path", {
    d: "M11 7.41421L5.70711 12.7071C5.31658 13.0976 4.68342 13.0976 4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071C19.3166 13.0976 18.6834 13.0976 18.2929 12.7071L13 7.41421L13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19L11 7.41421Z"
  }));
};

exports.ArrowIcon = ArrowIcon;
ArrowIcon.platform = 'mobile';
//# sourceMappingURL=ArrowIcon.js.map