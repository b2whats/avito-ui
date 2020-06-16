"use strict";

exports.__esModule = true;
var _exportNames = {
  SegmentButton: true
};
exports.SegmentButton = void 0;

var _SegmentButton = require("./SegmentButton");

exports.SegmentButton = _SegmentButton.SegmentButton;

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