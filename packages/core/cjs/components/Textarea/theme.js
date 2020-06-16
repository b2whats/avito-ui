"use strict";

exports.__esModule = true;
exports.textareaTheme = void 0;

var _icons = require("../Icon/icons/");

var textareaTheme = {
  deletePlaceholderOnFocus: true,
  defaultProps: {
    variant: 'primary',
    size: 'm'
  },
  scheme: {
    IconClear: {
      component: _icons.CrossIcon,
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
exports.textareaTheme = textareaTheme;
//# sourceMappingURL=theme.js.map