"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StarIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var StarIcon = function StarIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 14 14",
    name: "star"
  }), (0, _core2.jsx)("path", {
    d: "M7 10.54l-3.365 2.145a.35.35 0 01-.527-.383l1-3.863L1.03 5.902a.35.35 0 01.201-.62l3.983-.241 1.461-3.713a.35.35 0 01.652 0l1.46 3.713 3.984.242a.35.35 0 01.201.62l-3.08 2.536 1 3.863a.35.35 0 01-.526.383L7 10.54z"
  }));
};

exports.StarIcon = StarIcon;
StarIcon.platform = 'mobile';
//# sourceMappingURL=StarIcon.js.map