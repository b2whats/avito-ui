"use strict";

exports.__esModule = true;
exports.radioTheme = void 0;

var _core = require("@avito/core");

var radioTheme = {
  scheme: {
    Switch: {
      style: {
        bg: 'gray8',
        bgActive: 'gray12',
        height: 18,
        focus: false,
        mx: 1
      },
      checked: {
        style: {
          bgDisabled: 'gray28'
        },
        variant: _core.dsl.styleMap({
          primary: fillStyle('blue500', 'blue700'),
          secondary: fillStyle('gray48', 'gray56'),
          success: fillStyle('green500', 'green700'),
          warning: fillStyle('orange500', 'orange700'),
          error: fillStyle('red500', 'red700')
        })
      }
    }
  }
};
exports.radioTheme = radioTheme;

function fillStyle(bg, bgActive) {
  return {
    bg: bg,
    bgActive: bgActive
  };
}
//# sourceMappingURL=theme.js.map