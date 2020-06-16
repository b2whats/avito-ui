import _extends from "@babel/runtime/helpers/esm/extends";
import deepmerge from 'deepmerge';
var cache = new WeakMap();
var defaultKey = {};
export var mergeTheme = function mergeTheme(defaultTheme, globalOverride, localOverride) {
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

function mergeThemes(themes) {
  var res = deepmerge.all(themes);
  res['mapProps'] = themes.map(function (t) {
    return t ? t.mapProps : null;
  }).reduce(function (composed, map) {
    return map ? function (props) {
      return _extends({}, props, map(composed(props)));
    } : composed;
  }, function (props) {
    return props;
  });
  return res;
}
//# sourceMappingURL=mergeTheme.js.map