import { InputTheme, dsl } from '@avito/core'
import { controlOutlineVariants } from '../../utils'
import { CrossIcon } from '../Icon/'

const gapSize = {
  s: 7,
  m: 10,
  l: 12,
}

export const inputTheme = dsl.theme<InputTheme>()
  .defaultProps({
    size: 's',
    kind: 'outline',
  })
  .slot('IconBefore', slot => ({
    mr: slot.mapped('size', gapSize),
  }))
  .slot('IconAfter', slot => [
    {
      size: props => props.size === 'l' ? 'l' : 'm',
      ml: slot.mapped('size', gapSize),
    },
    slot.if('clearable', {
      component: CrossIcon,
    }),
  ])
  .slot('Prefix', slot => ({
    mr: slot.mapped('size', { s: 4, m: 6, l: 8 }),
  }))
  .slot('Input', slot => [
    {
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 3,
      color: 'black',
      placeholderColor: 'gray40',
      colorDisabled: 'gray64',
      bgDisabled: 'gray4',
      cursor: 'text',
      fontSize: props => props.size,
      px: slot.mapped('size', gapSize),
    },
    slot.switch('variant', controlOutlineVariants),
  ])
  .build()
