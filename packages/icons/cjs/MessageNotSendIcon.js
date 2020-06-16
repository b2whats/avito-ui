"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.MessageNotSendIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var MessageNotSendIcon = function MessageNotSendIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 16 16",
    name: "message-not-send"
  }), (0, _core2.jsx)("path", {
    d: "M1 8a7 7 0 1014 0A7 7 0 001 8zm12.5 0a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-4.75.25a.75.75 0 01-1.5 0v-3.5a.75.75 0 011.5 0v3.5zM9 11a1 1 0 11-2 0 1 1 0 012 0z"
  }));
};

exports.MessageNotSendIcon = MessageNotSendIcon;
MessageNotSendIcon.platform = 'mobile';
//# sourceMappingURL=MessageNotSendIcon.js.map