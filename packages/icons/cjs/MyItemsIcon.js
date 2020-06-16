"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.MyItemsIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var MyItemsIcon = function MyItemsIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "my-items"
  }), (0, _core2.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 3.286C20 2.576 19.424 2 18.714 2H5.286C4.576 2 4 2.576 4 3.286v17.428C4 21.424 4.576 22 5.286 22h13.428c.71 0 1.286-.576 1.286-1.286V3.286zM12 18H6v2h6v-2zm-6-4h12v2H6v-2zM18 4H6v8h12V4z"
  }));
};

exports.MyItemsIcon = MyItemsIcon;
MyItemsIcon.platform = 'mobile';
//# sourceMappingURL=MyItemsIcon.js.map