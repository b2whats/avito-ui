"use strict";

exports.__esModule = true;
exports.omit = void 0;

var omit = function omit(obj) {
  var ret = {};
  var key;

  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  for (key in obj) {
    if (!keys.includes(key)) {
      ret[key] = obj[key];
    }
  }

  return ret;
};

exports.omit = omit;
//# sourceMappingURL=omit.js.map