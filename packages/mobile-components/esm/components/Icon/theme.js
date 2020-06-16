import _extends from "@babel/runtime/helpers/esm/extends";
export var iconTheme = {
  mapProps: function mapProps(_ref) {
    var onClick = _ref.onClick;
    return _extends({}, onClick && {
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
//# sourceMappingURL=theme.js.map