"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
var _exportNames = {
  css: true,
  keyframes: true,
  styled: true
};
exports.styled = exports.keyframes = exports.css = void 0;

var _styled2 = _interopRequireDefault(require("@emotion/styled"));

var _core = require("@emotion/core");

exports.css = _core.css;
exports.keyframes = _core.keyframes;

var _getThemeStyle = require("./getThemeStyle");

Object.keys(_getThemeStyle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _getThemeStyle[key];
});
// TODO: посмотреть как в именованых экспортах можно привести тип
var styled = _styled2["default"];
exports.styled = styled;
//# sourceMappingURL=index.js.map