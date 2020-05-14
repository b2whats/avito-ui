import { CheckboxTheme, DeepPartial, dsl } from '@avito/core'
import { CheckboxCheckedIcon, CheckboxIndeterminateIcon } from '../Icon'

export const checkboxTheme: DeepPartial<CheckboxTheme> = {
  defaultProps: {
    size: 's',
  },
  scheme: {
    Icon: {
      checked: {
        component: CheckboxCheckedIcon,
      },
      indeterminate: {
        component: CheckboxIndeterminateIcon,
      },
    },
    Label: {
      props: {
        size: p =>  p.size,
        valignSelf: 'middle',
      },
    },
    Switch: {
      style: {
        color: 'white',
        bg: 'white',
        bgDisabled: p => p.checked ? 'gray20' : 'gray4',
        borderColorDisabled: 'gray20',
        borderRadius: 3,
        borderStyle: 'solid',
        borderWidth: 1,
        focus: true,
      },
      size: dsl.styleMap('height', {
        s: 16,
        m: 18,
        l: 22,
      }),
      variant: {
        primary: variant('gray20', 'blue500'),
        secondary: variant('gray4', 'blue500'),
        success: variant('green500', 'green500'),
        warning: variant('orange500', 'orange500'),
        error: variant('red500', 'red500'),
      },
    },
  },
}

function variant(borderBase: string, bgChecked: string) {
  return {
    style: {
      borderColor: borderBase,
    },
    checked: {
      style: {
        borderColor: bgChecked,
        bg: bgChecked,
      },
    },
  }
}
