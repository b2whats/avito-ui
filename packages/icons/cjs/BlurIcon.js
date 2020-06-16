"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.BlurIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var BlurIcon = function BlurIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "blur"
  }), (0, _core2.jsx)("path", {
    d: "M16.5 3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-12 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6.5 6a2 2 0 11-4 0 2 2 0 014 0zm-6.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM21 16.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0-6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM16.5 21a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM9 22.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0-18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM11 9a2 2 0 11-4 0 2 2 0 014 0zm4 8a2 2 0 100-4 2 2 0 000 4zm2-8a2 2 0 11-4 0 2 2 0 014 0z"
  }));
};

exports.BlurIcon = BlurIcon;
BlurIcon.platform = 'mobile';
//# sourceMappingURL=BlurIcon.js.map