import deepmerge from 'deepmerge';
var cache = new WeakMap();
var defaultKey = {};
export var createComponentTheme = function createComponentTheme(componentName, componentTheme) {
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
      cursor.set(override, deepmerge.all([componentTheme, globalComponentTheme, override]));
    }

    return cursor.get(override);
  };
};
//# sourceMappingURL=createComponentTheme.js.map