"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FavoritesItemFilledIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var FavoritesItemFilledIcon = function FavoritesItemFilledIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 36 36",
    name: "favotites-item-filled"
  }), (0, _core2.jsx)("g", null, (0, _core2.jsx)("g", {
    filter: "url(#favotites-item-filed_svg__filter0_dd)"
  }, (0, _core2.jsx)("path", {
    d: "M9.413 17.18A5.5 5.5 0 1118 10.337a5.5 5.5 0 118.587 6.843l-7.852 8.522a1 1 0 01-1.47 0L9.413 17.18z",
    fill: "#fff"
  }), (0, _core2.jsx)("path", {
    d: "M17.183 10.913l.817 1.16.817-1.16a4.5 4.5 0 117.03 5.594L18 25.024l-7.848-8.517a4.5 4.5 0 117.03-5.594z",
    stroke: "#fff",
    strokeWidth: 2
  })), (0, _core2.jsx)("defs", null, (0, _core2.jsx)("filter", {
    id: "favotites-item-filed_svg__filter0_dd",
    x: 0,
    y: 0,
    width: 36,
    height: 34.024,
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, (0, _core2.jsx)("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), (0, _core2.jsx)("feColorMatrix", {
    "in": "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), (0, _core2.jsx)("feOffset", {
    dy: 1
  }), (0, _core2.jsx)("feGaussianBlur", {
    stdDeviation: 1
  }), (0, _core2.jsx)("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
  }), (0, _core2.jsx)("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow"
  }), (0, _core2.jsx)("feColorMatrix", {
    "in": "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), (0, _core2.jsx)("feOffset", null), (0, _core2.jsx)("feGaussianBlur", {
    stdDeviation: 4
  }), (0, _core2.jsx)("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
  }), (0, _core2.jsx)("feBlend", {
    in2: "effect1_dropShadow",
    result: "effect2_dropShadow"
  }), (0, _core2.jsx)("feBlend", {
    "in": "SourceGraphic",
    in2: "effect2_dropShadow",
    result: "shape"
  })))));
};

exports.FavoritesItemFilledIcon = FavoritesItemFilledIcon;
FavoritesItemFilledIcon.platform = 'mobile';
//# sourceMappingURL=FavoritesItemFilledIcon.js.map