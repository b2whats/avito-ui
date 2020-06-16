"use strict";

exports.__esModule = true;
var _exportNames = {
  Badge: true
};
exports.Badge = void 0;

var _Badge = require("./Badge");

exports.Badge = _Badge.Badge;

var _contract = require("./contract");

Object.keys(_contract).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _contract[key];
});

var _theme = require("./theme");

Object.keys(_theme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _theme[key];
});
//# sourceMappingURL=index.js.map