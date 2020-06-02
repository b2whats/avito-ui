import { CrossIcon } from '../Icon/'
import { TextareaTheme, DeepPartial, dsl } from '@avito/core'

export const textareaTheme: DeepPartial<TextareaTheme> = {
  scheme: {
    Textarea: {
      style: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 3,
        color: 'black',
        placeholderColor: 'gray40',
        colorDisabled: 'gray64',
        bgDisabled: 'gray4',
        fontSize: props => props.size,
      },
      size: dsl.styleMap({
        s: {
          px: 4,
          py: 7,
        },
        m: {
          px: 10,
          py: 6,
        },
        l: {
          px: 12,
          py: 8,
        },
      }),
      variant: dsl.styleMap('borderColor', {
        primary: 'gray20',
        secondary: 'gray8',
        success: 'green500',
        warning: 'orange500',
        error: 'red500',
      }),
    },
    IconClear: {
      component: CrossIcon,
    },
  },
}
