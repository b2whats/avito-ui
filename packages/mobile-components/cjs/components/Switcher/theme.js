"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.switcherTheme = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _core = require("@avito/core");

var _Icon = require("../Icon");

var switcherTheme = {
  defaultProps: {
    shape: 'pill'
  },
  scheme: {
    Switch: {
      style: {
        width: 48,
        height: 25,
        p: 3,
        focus: true,
        color: 'white',
        bg: 'gray12',
        bgActive: 'gray28',
        bgDisabled: 'gray4'
      },
      variant: {
        primary: {
          style: {
            bgDisabled: 'gray8'
          }
        }
      },
      checked: {
        style: {
          bgDisabled: 'gray28'
        },
        variant: _core.dsl.styleMap({
          primary: (0, _extends2["default"])({}, fillStyle('blue500', 'blue700'), {
            bgDisabled: 'blue300'
          }),
          secondary: fillStyle('gray48', 'gray56'),
          success: fillStyle('green500', 'green700'),
          warning: fillStyle('orange500', 'orange700'),
          error: fillStyle('red500', 'red700')
        })
      },
      loading: {
        style: {
          focus: false,
          align: 'center',
          color: 'gray28',
          bg: 'transparent',
          bgActive: 'transparent',
          bgDisabled: 'transparent'
        }
      }
    },
    Icon: {
      component: _Icon.SwitcherIcon,
      loading: {
        component: _core.Spinner
      }
    }
  }
};
exports.switcherTheme = switcherTheme;

function fillStyle(bg, bgActive) {
  return {
    bg: bg,
    bgActive: bgActive
  };
}
//# sourceMappingURL=theme.js.map