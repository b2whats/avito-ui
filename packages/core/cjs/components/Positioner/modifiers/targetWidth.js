"use strict";

exports.__esModule = true;
exports.targetWidth = void 0;
var targetWidth = {
  name: 'targetWidth',
  enabled: false,
  fn: function fn() {},
  phase: 'beforeWrite',
  requires: ['computeStyles'],
  effect: function effect(_ref) {
    var state = _ref.state,
        options = _ref.options;

    for (var _i = 0, _Object$entries = Object.entries(options); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _Object$entries[_i],
          property = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      if (value === 'reference') {
        state.elements.popper.style[property] = state.elements.reference.offsetWidth + "px";
      }

      if (typeof value === 'number') {
        state.elements.popper.style[property] = Math.abs(value) > 1 ? value + "px" : value * 100 + "%";
      }
    }

    return function () {};
  }
};
exports.targetWidth = targetWidth;
//# sourceMappingURL=targetWidth.js.map