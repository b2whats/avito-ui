"use strict";

exports.__esModule = true;
exports.buttonTheme = void 0;
var buttonTheme = {
  defaultProps: {
    size: 'm',
    type: 'button'
  },
  scheme: {
    Spinner: {
      size: {
        s: {
          props: {
            size: 's'
          }
        },
        m: {
          props: {
            size: 'm'
          }
        },
        l: {
          props: {
            size: 'l'
          }
        }
      }
    },
    IconBefore: {
      size: {
        s: {
          props: {
            size: 's'
          }
        },
        m: {
          props: {
            size: 's'
          }
        },
        l: {
          props: {
            size: 'm'
          }
        }
      }
    },
    IconAfter: {
      size: {
        s: {
          props: {
            size: 's'
          }
        },
        m: {
          props: {
            size: 's'
          }
        },
        l: {
          props: {
            size: 'm'
          }
        }
      }
    },
    Text: {
      props: {
        crop: true,
        valignSelf: 'middle',
        size: 'm',
        ml: -1
      },
      iconBefore: {
        props: {
          ml: 6
        }
      },
      iconAfter: {
        props: {
          mr: 6
        }
      }
    },
    Button: {
      style: {
        borderRadius: 3,
        px: 16,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'transparent',
        focus: false
      },
      size: {
        s: {
          style: {
            py: 4,
            minHeight: 's'
          }
        },
        m: {
          style: {
            py: 6,
            minHeight: 'm'
          }
        },
        l: {
          style: {
            py: 8,
            minHeight: 'l'
          }
        }
      },
      iconBefore: {
        children: {
          style: {
            pl: 12
          }
        }
      },
      iconAfter: {
        children: {
          style: {
            pr: 12
          }
        }
      }
    }
  }
};
exports.buttonTheme = buttonTheme;
//# sourceMappingURL=theme.js.map