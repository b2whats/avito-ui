"use strict";

exports.__esModule = true;
exports.positionerTheme = void 0;
var positionerTheme = {
  defaultProps: {
    delayIn: 100,
    delayOut: 100,
    strategy: 'absolute',
    placement: 'bottom'
  },
  transitions: {
    fade: {
      initial: {
        opacity: 1
      },
      from: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      leave: {
        opacity: 0
      }
    }
  }
};
exports.positionerTheme = positionerTheme;
//# sourceMappingURL=theme.js.map