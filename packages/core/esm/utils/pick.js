export var pick = function pick(obj) {
  var ret = {};
  var key;

  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
    key = _keys[_i];

    if (key in obj) {
      ret[key] = obj[key];
    }
  }

  return ret;
};
//# sourceMappingURL=pick.js.map