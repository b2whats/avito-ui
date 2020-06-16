"use strict";

exports.__esModule = true;
exports.tooltipTheme = void 0;

var _Icon = require("../Icon/");

var tooltipTheme = {
  defaultProps: {
    offset: {
      offset: [0, 10]
    },
    arrow: {
      padding: 10
    }
  },
  scheme: {
    Tooltip: {
      style: {
        bg: 'white',
        p: 16,
        shadow: '0 5px 17px 0 rgba(0,0,0,.15)'
      },
      preset: {
        attention: {
          style: {
            bg: 'blue100'
          }
        },
        dark: {
          style: {
            bg: 'gray84',
            color: 'white',
            rounded: 'm'
          }
        }
      }
    },
    Arrow: {
      style: {
        width: 10,
        height: 10,
        offset: 4
      }
    },
    Close: {
      component: _Icon.CrossIcon,
      props: {
        position: 'absolute',
        right: 0,
        top: 0,
        size: 's'
      }
    }
  }
};
exports.tooltipTheme = tooltipTheme;
//# sourceMappingURL=theme.js.map