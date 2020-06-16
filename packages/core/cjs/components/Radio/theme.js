"use strict";

exports.__esModule = true;
exports.radioTheme = void 0;

var _icons = require("../Icon/icons/");

var radioTheme = {
  defaultProps: {
    variant: 'primary',
    size: 'm',
    shape: 'circle'
  },
  scheme: {
    Switch: {
      style: {
        color: 'white',
        bgDisabled: 'gray4'
      }
    },
    Icon: {
      checked: {
        component: _icons.RadioCheckedIcon
      }
    }
  }
};
exports.radioTheme = radioTheme;
//# sourceMappingURL=theme.js.map