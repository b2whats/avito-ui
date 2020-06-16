"use strict";

exports.__esModule = true;
exports.radioTheme = void 0;

var _core = require("@avito/core");

var radioTheme = {
  defaultProps: {
    size: 's'
  },
  scheme: {
    Switch: {
      size: _core.dsl.styleMap('height', {
        s: 18,
        m: 22,
        l: 24
      })
    }
  }
};
exports.radioTheme = radioTheme;
//# sourceMappingURL=theme.js.map