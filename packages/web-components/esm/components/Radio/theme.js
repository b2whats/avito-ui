import { dsl } from '@avito/core';
export var radioTheme = {
  defaultProps: {
    size: 's'
  },
  scheme: {
    Switch: {
      size: dsl.styleMap('height', {
        s: 18,
        m: 22,
        l: 24
      })
    }
  }
};
//# sourceMappingURL=theme.js.map