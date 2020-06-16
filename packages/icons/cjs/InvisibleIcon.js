"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.InvisibleIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var InvisibleIcon = function InvisibleIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "invisible"
  }), (0, _core2.jsx)("path", {
    d: "M12 19.5a12 12 0 01-10.953-7.09 1 1 0 010-.82 12.01 12.01 0 014.151-4.978L2.293 3.707a1 1 0 011.414-1.414l18 18a1 1 0 01-1.414 1.414l-3.295-3.295A11.98 11.98 0 0112 19.5zm1.293-4.792a3 3 0 01-4.001-4.001L7.828 9.243a5 5 0 006.929 6.929l-1.464-1.464zM12 4.5c-.995 0-1.968.122-2.903.355l2.195 2.195a5 5 0 015.658 5.658l3.407 3.406a12.008 12.008 0 002.596-3.705 1 1 0 000-.819A12 12 0 0012 4.5z"
  }));
};

exports.InvisibleIcon = InvisibleIcon;
InvisibleIcon.platform = 'mobile';
//# sourceMappingURL=InvisibleIcon.js.map