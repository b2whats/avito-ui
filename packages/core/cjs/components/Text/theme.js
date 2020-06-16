"use strict";

exports.__esModule = true;
exports.textTheme = void 0;

var _theme = require("../../theme");

var textTheme = {
  scheme: {
    Text: {
      style: {
        lineHeight: 'normal',
        fontSize: function fontSize(p) {
          return p.size;
        }
      },
      dense: {
        style: {
          lineHeight: 'dense'
        }
      },
      variant: _theme.dsl.styleMap('color', {
        primary: 'blue500',
        secondary: 'gray52',
        error: 'red500',
        success: 'green500',
        warning: 'yellow500'
      })
    }
  }
};
exports.textTheme = textTheme;
//# sourceMappingURL=theme.js.map