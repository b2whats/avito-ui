import _extends from "@babel/runtime/helpers/esm/extends";
import { dsl, Spinner } from '@avito/core';
import { SwitcherIcon } from "../Icon";
export var switcherTheme = {
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
        variant: dsl.styleMap({
          primary: _extends({}, fillStyle('blue500', 'blue700'), {
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
      component: SwitcherIcon,
      loading: {
        component: Spinner
      }
    }
  }
};

function fillStyle(bg, bgActive) {
  return {
    bg: bg,
    bgActive: bgActive
  };
}
//# sourceMappingURL=theme.js.map