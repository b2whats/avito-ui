"use strict";

exports.__esModule = true;
exports.checkboxTheme = void 0;

var _core = require("@avito/core");

var _Icon = require("../Icon");

var checkboxTheme = {
  scheme: {
    Icon: {
      checked: {
        component: _Icon.CheckboxCheckedIcon
      },
      indeterminate: {
        component: _Icon.CheckboxIndeterminateIcon
      }
    },
    Switch: {
      style: {
        borderRadius: 2,
        height: 18,
        bg: 'gray8',
        bgActive: 'gray12'
      },
      shape: {
        circle: {
          style: {
            p: 1,
            height: 20
          }
        },
        square: {
          style: {
            mx: 1
          }
        }
      },
      checked: {
        style: {
          bgDisabled: 'gray28'
        },
        variant: _core.dsl.styleMap({
          primary: {
            bg: 'blue500',
            bgActive: 'blue700'
          },
          secondary: {
            bg: 'gray48',
            bgActive: 'gray56'
          },
          success: {
            bg: 'green500',
            bgActive: 'green700'
          },
          warning: {
            bg: 'orange500',
            bgActive: 'orange700'
          },
          error: {
            bg: 'red500',
            bgActive: 'red700'
          }
        })
      }
    }
  }
};
exports.checkboxTheme = checkboxTheme;
//# sourceMappingURL=theme.js.map