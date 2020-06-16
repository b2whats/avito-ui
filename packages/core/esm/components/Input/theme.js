import { dsl } from "../../theme";
import { CrossIcon } from "../Icon/icons/";
export var inputTheme = {
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
      size: dsl.propMap('size', {
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
        component: CrossIcon,
        props: {
          area: 10
        }
      },
      size: dsl.propMap('size', {
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
      size: dsl.styleMap('height', {
        s: 's',
        m: 'm',
        l: 'l'
      })
    }
  }
};
//# sourceMappingURL=theme.js.map