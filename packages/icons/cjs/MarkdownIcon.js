"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.MarkdownIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var MarkdownIcon = function MarkdownIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 16 16",
    name: "markdown"
  }), (0, _core2.jsx)("path", {
    d: "M9 2a1 1 0 00-2 0v8.586L4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L9 10.586V2z"
  }));
};

exports.MarkdownIcon = MarkdownIcon;
MarkdownIcon.platform = 'mobile';
//# sourceMappingURL=MarkdownIcon.js.map