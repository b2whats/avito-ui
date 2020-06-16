"use strict";

exports.__esModule = true;
var _exportNames = {
  Portal: true
};
exports.Portal = void 0;

var _Portal = require("./Portal");

exports.Portal = _Portal.Portal;

var _contract = require("./contract");

Object.keys(_contract).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _contract[key];
});
//# sourceMappingURL=index.js.map