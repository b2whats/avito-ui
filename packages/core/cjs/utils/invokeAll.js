"use strict";

exports.__esModule = true;
exports.invokeAll = invokeAll;

function invokeAll() {
  for (var _len = arguments.length, callbacks = new Array(_len), _key = 0; _key < _len; _key++) {
    callbacks[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return callbacks.forEach(function (cb) {
      return cb ? cb.apply(void 0, args) : null;
    });
  };
}
//# sourceMappingURL=invokeAll.js.map