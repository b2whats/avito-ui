"use strict";

exports.__esModule = true;
exports.textareaTheme = void 0;

var _core = require("@avito/core");

var _Icon = require("../Icon/");

var textareaTheme = {
  scheme: {
    Textarea: {
      style: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 3,
        color: 'black',
        placeholderColor: 'gray40',
        colorDisabled: 'gray64',
        bgDisabled: 'gray4',
        fontSize: function fontSize(props) {
          return props.size;
        }
      },
      size: _core.dsl.styleMap({
        s: {
          px: 4,
          py: 7
        },
        m: {
          px: 10,
          py: 6
        },
        l: {
          px: 12,
          py: 8
        }
      }),
      variant: _core.dsl.styleMap('borderColor', {
        primary: 'gray20',
        secondary: 'gray8',
        success: 'green500',
        warning: 'orange500',
        error: 'red500'
      })
    },
    IconClear: {
      component: _Icon.CrossIcon
    }
  }
};
exports.textareaTheme = textareaTheme;
//# sourceMappingURL=theme.js.map