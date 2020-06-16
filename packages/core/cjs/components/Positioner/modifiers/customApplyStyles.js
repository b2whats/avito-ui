"use strict";

exports.__esModule = true;
exports.customApplyStyles = void 0;
var customApplyStyles = {
  effect: function effect(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        bottom: 'auto',
        right: 'auto',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }

    return function () {};
  }
};
exports.customApplyStyles = customApplyStyles;
//# sourceMappingURL=customApplyStyles.js.map