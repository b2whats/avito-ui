"use strict";

exports.__esModule = true;
exports.toggleTheme = void 0;

var _core = require("@avito/core");

var toggleTheme = {
  scheme: {
    Label: {
      props: {
        size: function size(p) {
          return p.size;
        },
        valignSelf: 'middle'
      },
      labelPosition: {
        start: {
          props: {
            mr: function mr(p) {
              return p.size === 's' ? 6 : 8;
            }
          }
        },
        end: {
          props: {
            ml: function ml(p) {
              return p.size === 's' ? 6 : 8;
            }
          }
        }
      },
      disabled: {
        props: {
          color: 'gray40'
        }
      }
    },
    Switch: {
      style: {
        bg: 'white',
        colorDisabled: 'gray4',
        borderColorDisabled: 'gray20',
        borderStyle: 'solid',
        borderWidth: 1,
        focus: true
      },
      variant: _core.dsl.styleMap({
        primary: outline('gray20', 'gray28'),
        secondary: outline('gray4', 'gray10'),
        success: outline('green500', 'green600'),
        warning: outline('orange500', 'orange600'),
        error: outline('red500', 'red600')
      }),
      checked: {
        style: {
          bgDisabled: 'gray20'
        },
        variant: _core.dsl.styleMap({
          primary: fill('blue500', 'blue600'),
          secondary: fill('blue500', 'blue600'),
          success: fill('green500', 'green600'),
          warning: fill('orange500', 'orange600'),
          error: fill('red500', 'red600')
        })
      }
    }
  }
};
exports.toggleTheme = toggleTheme;

function outline(borderBase, bgHover) {
  return {
    borderColor: borderBase,
    borderColorHover: bgHover
  };
}

function fill(bg, hover) {
  return {
    bg: bg,
    borderColor: bg,
    bgHover: hover,
    borderColorHover: hover
  };
}
//# sourceMappingURL=theme.js.map