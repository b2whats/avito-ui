"use strict";

exports.__esModule = true;
exports.textareaTheme = void 0;

var _core = require("@avito/core");

var textareaTheme = {
  scheme: {
    Textarea: {
      style: {
        borderRadius: 5,
        placeholderColor: 'gray48',
        color: 'black',
        colorDisabled: 'gray40'
      },
      size: {
        s: {
          style: {
            fontSize: 12,
            px: 12,
            py: 10
          }
        },
        m: {
          style: {
            px: 16,
            py: 12,
            fontSize: 16
          }
        },
        l: {
          style: {
            px: 16,
            py: 16,
            fontSize: 16
          }
        }
      },
      variant: _core.dsl.styleMap('bg', {
        primary: 'gray4',
        secondary: 'gray8',
        success: 'green100',
        warning: 'orange100',
        error: 'red100'
      })
    }
  }
};
exports.textareaTheme = textareaTheme;
//# sourceMappingURL=theme.js.map