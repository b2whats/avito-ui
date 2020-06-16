"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.OpenInNewIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var OpenInNewIcon = function OpenInNewIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "open-in-new"
  }), (0, _core2.jsx)("path", {
    d: "M21 13a1 1 0 10-2 0v6H5V5h6a1 1 0 100-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-6zm-8.293-.293L17.5 7.914l1.793 1.793c.63.63 1.707.184 1.707-.707V4a1 1 0 00-1-1h-5c-.89 0-1.337 1.077-.707 1.707L16.086 6.5l-4.793 4.793a1 1 0 001.414 1.414z"
  }));
};

exports.OpenInNewIcon = OpenInNewIcon;
OpenInNewIcon.platform = 'mobile';
//# sourceMappingURL=OpenInNewIcon.js.map