"use strict";

exports.__esModule = true;
var _exportNames = {
  CheckmarkIcon: true,
  CheckboxCheckedIcon: true,
  CheckboxIndeterminateIcon: true
};
exports.CheckboxIndeterminateIcon = exports.CheckboxCheckedIcon = exports.CheckmarkIcon = void 0;

var _icons = require("@avito/core/icons");

Object.keys(_icons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _icons[key];
});

var _CheckmarkIcon = require("./icons/CheckmarkIcon");

exports.CheckmarkIcon = _CheckmarkIcon.CheckmarkIcon;

var _CheckboxCheckedIcon = require("./icons/CheckboxCheckedIcon");

exports.CheckboxCheckedIcon = _CheckboxCheckedIcon.CheckboxCheckedIcon;

var _CheckboxIndeterminateIcon = require("./icons/CheckboxIndeterminateIcon");

exports.CheckboxIndeterminateIcon = _CheckboxIndeterminateIcon.CheckboxIndeterminateIcon;
//# sourceMappingURL=index.js.map