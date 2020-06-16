"use strict";

exports.__esModule = true;
exports.inputTheme = void 0;

var _core = require("@avito/core");

var _Icon = require("../Icon/");

var gapSize = {
  s: 7,
  m: 10,
  l: 12
};
var inputTheme = {
  defaultProps: {
    kind: 'outline'
  },
  scheme: {
    IconBefore: {
      size: _core.dsl.propMap('mr', gapSize)
    },
    IconAfter: {
      size: _core.dsl.propMap({
        s: {
          ml: gapSize.s,
          size: 'm'
        },
        m: {
          ml: gapSize.m,
          size: 'm'
        },
        l: {
          ml: gapSize.l,
          size: 'l'
        }
      }),
      clearable: {
        component: _Icon.CrossIcon
      }
    },
    Prefix: {
      size: _core.dsl.propMap('mr', {
        s: 4,
        m: 6,
        l: 8
      })
    },
    Input: {
      style: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 3,
        color: 'black',
        placeholderColor: 'gray40',
        colorDisabled: 'gray64',
        bgDisabled: 'gray4'
      },
      size: _core.dsl.styleMap({
        s: {
          fontSize: 's',
          px: gapSize.s
        },
        m: {
          fontSize: 'm',
          px: gapSize.m
        },
        l: {
          fontSize: 'l',
          px: gapSize.l
        }
      }),
      variant: _core.dsl.styleMap('borderColor', {
        primary: 'gray20',
        // FIXME: How to style it?
        secondary: 'gray8',
        success: 'green500',
        warning: 'orange500',
        error: 'red500'
      })
    }
  }
};
exports.inputTheme = inputTheme;
//# sourceMappingURL=theme.js.map