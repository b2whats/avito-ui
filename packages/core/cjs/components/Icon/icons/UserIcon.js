"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.UserIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _core = require("@emotion/core");

var UserIcon = function UserIcon(props) {
  return (0, _core.jsx)(_.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "user"
  }), (0, _core.jsx)("path", {
    d: "M9.5 12.183c-1.253-.969-2-2.768-2-5.233C7.5 3.974 9.3 2 12 2s4.5 1.974 4.5 4.95c0 2.465-.747 4.264-2 5.233v.355a2 2 0 001.485 1.933l3.636.97c.503.134.936.349 1.288.634.353.285.625.64.81 1.054.185.414.281.887.281 1.409v1.18c0 .446-.046.608-.134.77a.908.908 0 01-.378.378c-.162.088-.324.134-.77.134H3.282c-.446 0-.607-.046-.77-.134a.908.908 0 01-.378-.378c-.088-.162-.134-.324-.134-.77v-1.18c0-.522.096-.995.281-1.41a2.82 2.82 0 01.81-1.053c.352-.285.785-.5 1.288-.635l3.636-.97A2 2 0 009.5 12.539v-.355z"
  }));
};

exports.UserIcon = UserIcon;
UserIcon.platform = 'mobile';
//# sourceMappingURL=UserIcon.js.map