import { TextareaTheme, dsl } from '@avito/core'
import { controlOutlineVariants } from '../../utils'
import { CrossIcon } from '../Icon/'

export const textareaTheme = dsl.theme<TextareaTheme>()
  .defaultProps({
    size: 's',
  })
  .slot('Textarea', slot => [
    {
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
    slot.switch('size', {
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
    slot.switch('variant', controlOutlineVariants),
  ])
  .slot('IconClear', {
    component: CrossIcon,
  })
  .build()
