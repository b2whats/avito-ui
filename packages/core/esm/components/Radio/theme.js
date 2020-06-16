import { RadioCheckedIcon } from "../Icon/icons/";
export var radioTheme = {
  defaultProps: {
    variant: 'primary',
    size: 'm',
    shape: 'circle'
  },
  scheme: {
    Switch: {
      style: {
        color: 'white',
        bgDisabled: 'gray4'
      }
    },
    Icon: {
      checked: {
        component: RadioCheckedIcon
      }
    }
  }
};
//# sourceMappingURL=theme.js.map