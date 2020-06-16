"use strict";

exports.__esModule = true;
exports.checkboxTheme = void 0;

var _core = require("@avito/core");

var _Icon = require("../Icon");

var checkboxTheme = {
  defaultProps: {
    size: 's'
  },
  scheme: {
    Icon: {
      checked: {
        component: _Icon.CheckboxCheckedIcon
      },
      indeterminate: {
        component: _Icon.CheckboxIndeterminateIcon
      }
    },
    Switch: {
      style: {
        borderRadius: 3
      },
      size: _core.dsl.styleMap('height', {
        s: 16,
        m: 18,
        l: 22
      })
    }
  }
};
exports.checkboxTheme = checkboxTheme;
//# sourceMappingURL=theme.js.map