import { CrossIcon } from "../Icon/icons/";
export var textareaTheme = {
  deletePlaceholderOnFocus: true,
  defaultProps: {
    variant: 'primary',
    size: 'm'
  },
  scheme: {
    IconClear: {
      component: CrossIcon,
      props: {
        color: 'gray28',
        area: 10,
        visible: function visible(props) {
          return Boolean(props.clearable);
        },
        size: function size(props) {
          return props.size;
        }
      }
    },
    Textarea: {
      style: {
        focus: true,
        lineHeight: 'normal',
        minHeight: function minHeight(props) {
          return props.size;
        }
      }
    }
  }
};
//# sourceMappingURL=theme.js.map