"use strict";

exports.__esModule = true;
exports.inputTheme = void 0;

var _theme = require("../../theme");

var _icons = require("../Icon/icons/");

var inputTheme = {
  defaultProps: {
    variant: 'primary',
    size: 'm'
  },
  deletePlaceholderOnFocus: true,
  scheme: {
    IconBefore: {
      props: {
        color: 'gray28'
      },
      size: _theme.dsl.propMap('size', {
        s: 's',
        m: 's',
        l: 'm'
      })
    },
    IconAfter: {
      props: {
        color: 'gray28'
      },
      clearable: {
        component: _icons.CrossIcon,
        props: {
          area: 10
        }
      },
      size: _theme.dsl.propMap('size', {
        s: 's',
        m: 's',
        l: 'm'
      })
    },
    Prefix: {},
    Postfix: {
      props: {
        ml: 4
      }
    },
    InputField: {},
    Input: {
      style: {
        focus: true
      },
      size: _theme.dsl.styleMap('height', {
        s: 's',
        m: 'm',
        l: 'l'
      })
    }
  }
};
exports.inputTheme = inputTheme;
//# sourceMappingURL=theme.js.map