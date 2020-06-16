"use strict";

exports.__esModule = true;
exports.inputTheme = void 0;

var _core = require("@avito/core");

var inputTheme = {
  defaultProps: {
    kind: 'fill'
  },
  scheme: {
    IconBefore: {
      props: {
        ml: 10,
        mr: 8
      }
    },
    IconAfter: {
      size: _core.dsl.propMap('mx', {
        s: 8,
        m: 10,
        l: 10
      })
    },
    Prefix: {
      props: {
        mr: 4
      }
    },
    InputField: {
      size: _core.dsl.styleMap('px', {
        s: 12,
        m: 16,
        l: 16
      }),
      iconBefore: {
        style: {
          pl: 'none'
        }
      },
      iconAfter: {
        style: {
          pr: 'none'
        }
      }
    },
    Input: {
      style: {
        borderRadius: 5,
        color: 'black',
        colorDisabled: 'gray40',
        placeholderColor: 'gray48'
      },
      size: _core.dsl.styleMap('fontSize', {
        s: 12,
        m: 16,
        l: 16
      }),
      variant: _core.dsl.styleMap('bg', {
        primary: 'gray4',
        secondary: 'gray8',
        success: 'green50',
        warning: 'orange50',
        error: 'red50'
      })
    }
  }
};
exports.inputTheme = inputTheme;
//# sourceMappingURL=theme.js.map