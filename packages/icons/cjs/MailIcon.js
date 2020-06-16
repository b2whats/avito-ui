"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.MailIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _core2 = require("@emotion/core");

var MailIcon = function MailIcon(props) {
  return (0, _core2.jsx)(_core.Icon, (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24",
    name: "mail"
  }), (0, _core2.jsx)("path", {
    d: "M2.109 4.546C2 4.76 2 5.04 2 5.6v1.756l10 4.546 10-4.546V5.6c0-.56 0-.84-.109-1.054a1 1 0 00-.437-.437C21.24 4 20.96 4 20.4 4H3.6c-.56 0-.84 0-1.054.109a1 1 0 00-.437.437zM22 9.553l-9.586 4.357a1 1 0 01-.828 0L2 9.553V18.4c0 .56 0 .84.109 1.054a1 1 0 00.437.437C2.76 20 3.04 20 3.6 20h16.8c.56 0 .84 0 1.054-.109a1 1 0 00.437-.437C22 19.24 22 18.96 22 18.4V9.553z"
  }));
};

exports.MailIcon = MailIcon;
MailIcon.platform = 'mobile';
//# sourceMappingURL=MailIcon.js.map