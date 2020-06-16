"use strict";

exports.__esModule = true;
exports.checkmarkTheme = void 0;

var _Icon = require("../Icon");

var checkmarkTheme = {
  defaultProps: {
    variant: 'primary'
  },
  scheme: {
    Icon: {
      component: _Icon.CheckmarkIcon,
      disabled: {
        props: {
          color: 'gray28'
        }
      }
    }
  }
};
exports.checkmarkTheme = checkmarkTheme;
//# sourceMappingURL=theme.js.map