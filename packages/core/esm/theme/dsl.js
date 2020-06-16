export var wrapValues = function wrapValues(wrapKey, map) {
  var res = {};

  for (var key in map) {
    var _res$key;

    res[key] = (_res$key = {}, _res$key[wrapKey] = map[key], _res$key);
  }

  return res;
};
export var propMap = function propMap(key, map) {
  return wrapValues('props', map ? wrapValues(key, map) : key);
};
export var styleMap = function styleMap(key, map) {
  return wrapValues('style', map ? wrapValues(key, map) : key);
};
export var dsl = {
  wrapValues: wrapValues,
  styleMap: styleMap,
  propMap: propMap
};
//# sourceMappingURL=dsl.js.map