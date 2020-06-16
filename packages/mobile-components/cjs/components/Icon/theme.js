"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.iconTheme = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var iconTheme = {
  mapProps: function mapProps(_ref) {
    var onClick = _ref.onClick;
    return (0, _extends2["default"])({}, onClick && {
      area: 5
    });
  },
  defaultProps: {
    size: 'm'
  },
  scheme: {
    Icon: {
      size: {
        s: {
          style: {
            height: 16
          }
        },
        m: {
          style: {
            height: 20
          }
        },
        l: {
          style: {
            height: 24
          }
        }
      },
      variant: {
        primary: {
          style: {
            color: 'blue500'
          }
        },
        secondary: {
          style: {
            color: 'gray52'
          }
        },
        error: {
          style: {
            color: 'red500'
          }
        },
        success: {
          style: {
            color: 'green500'
          }
        },
        warning: {
          style: {
            color: 'yellow500'
          }
        }
      }
    }
  }
};
exports.iconTheme = iconTheme;
//# sourceMappingURL=theme.js.map