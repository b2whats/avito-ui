import { TextareaTheme, DeepPartial, dsl } from '@avito/core'
import { controlOutlineVariants } from '../../utils'
import { CrossIcon } from '../Icon/'

export const textareaTheme: DeepPartial<TextareaTheme> = {
  defaultProps: {
    size: 's',
  },
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
        cursor: 'text',
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
      variant: controlOutlineVariants,
    },
    IconClear: {
      component: CrossIcon,
    },
  },
}
