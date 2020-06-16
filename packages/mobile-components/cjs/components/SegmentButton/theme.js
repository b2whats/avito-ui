"use strict";

exports.__esModule = true;
exports.segmentButtonTheme = void 0;
var segmentButtonTheme = {
  defaultProps: {
    size: 'm'
  },
  scheme: {
    Group: {
      style: {
        bg: 'gray4'
      },
      size: {
        s: {
          style: {
            borderRadius: 5,
            height: 32,
            p: 4
          }
        },
        m: {
          style: {
            borderRadius: 5,
            height: 44,
            p: 4
          }
        },
        l: {
          style: {
            borderRadius: 5,
            height: 50,
            p: 4
          }
        }
      }
    },
    Button: {
      style: {
        focus: true,
        borderRadius: 5,
        color: 'gray48',
        colorChecked: 'black',
        colorDisabled: 'gray24'
      }
    },
    Slide: {
      style: {
        borderRadius: 5,
        bg: 'white'
      }
    }
  }
};
exports.segmentButtonTheme = segmentButtonTheme;
//# sourceMappingURL=theme.js.map