import { dsl } from "../../theme";
export var textTheme = {
  scheme: {
    Text: {
      style: {
        lineHeight: 'normal',
        fontSize: function fontSize(p) {
          return p.size;
        }
      },
      dense: {
        style: {
          lineHeight: 'dense'
        }
      },
      variant: dsl.styleMap('color', {
        primary: 'blue500',
        secondary: 'gray52',
        error: 'red500',
        success: 'green500',
        warning: 'yellow500'
      })
    }
  }
};
//# sourceMappingURL=theme.js.map