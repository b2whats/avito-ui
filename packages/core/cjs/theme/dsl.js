"use strict";

exports.__esModule = true;
exports.dsl = exports.styleMap = exports.propMap = exports.wrapValues = void 0;

var wrapValues = function wrapValues(wrapKey, map) {
  var res = {};

  for (var key in map) {
    var _res$key;

    res[key] = (_res$key = {}, _res$key[wrapKey] = map[key], _res$key);
  }

  return res;
};

exports.wrapValues = wrapValues;

var propMap = function propMap(key, map) {
  return wrapValues('props', map ? wrapValues(key, map) : key);
};

exports.propMap = propMap;

var styleMap = function styleMap(key, map) {
  return wrapValues('style', map ? wrapValues(key, map) : key);
};

exports.styleMap = styleMap;
var dsl = {
  wrapValues: wrapValues,
  styleMap: styleMap,
  propMap: propMap
};
exports.dsl = dsl;
//# sourceMappingURL=dsl.js.map