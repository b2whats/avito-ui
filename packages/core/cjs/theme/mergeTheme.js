"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.mergeTheme = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var cache = new WeakMap();
var defaultKey = {};

var mergeTheme = function mergeTheme(defaultTheme, globalOverride, localOverride) {
  if (globalOverride === void 0) {
    globalOverride = defaultKey;
  }

  if (localOverride === void 0) {
    localOverride = defaultKey;
  }

  var cursor = cache;

  if (!cursor.has(defaultTheme)) {
    cursor.set(defaultTheme, new WeakMap());
  }

  cursor = cursor.get(defaultTheme);

  if (!cursor.has(globalOverride)) {
    cursor.set(globalOverride, new WeakMap());
  }

  cursor = cursor.get(globalOverride);

  if (!cursor.has(localOverride)) {
    cursor.set(localOverride, mergeThemes([defaultTheme, globalOverride, localOverride]));
  }

  return cursor.get(localOverride);
};

exports.mergeTheme = mergeTheme;

function mergeThemes(themes) {
  var res = _deepmerge["default"].all(themes);

  res['mapProps'] = themes.map(function (t) {
    return t ? t.mapProps : null;
  }).reduce(function (composed, map) {
    return map ? function (props) {
      return (0, _extends2["default"])({}, props, map(composed(props)));
    } : composed;
  }, function (props) {
    return props;
  });
  return res;
}
//# sourceMappingURL=mergeTheme.js.map