"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.createComponentTheme = void 0;

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var cache = new WeakMap();
var defaultKey = {};

var createComponentTheme = function createComponentTheme(componentName, componentTheme) {
  return function (theme, override) {
    if (override === void 0) {
      override = defaultKey;
    }

    var cursor = cache;
    var globalComponentTheme = theme[componentName] || defaultKey;

    if (!cursor.has(componentTheme)) {
      cursor.set(componentTheme, new WeakMap());
    }

    cursor = cursor.get(componentTheme);

    if (!cursor.has(globalComponentTheme)) {
      cursor.set(globalComponentTheme, new WeakMap());
    }

    cursor = cursor.get(globalComponentTheme);

    if (!cursor.has(override)) {
      cursor.set(override, _deepmerge["default"].all([componentTheme, globalComponentTheme, override]));
    }

    return cursor.get(override);
  };
};

exports.createComponentTheme = createComponentTheme;
//# sourceMappingURL=createComponentTheme.js.map