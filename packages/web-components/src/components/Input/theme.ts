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
  .slot('IconBefore', slot => slot.switch('size', dsl.propMap('mr', gapSize)))
  .slot('IconAfter', slot => [
    {
      props: {
        size: props => props.size === 'l' ? 'l' : 'm',
      },
    },
    slot.switch('size', dsl.propMap('ml', gapSize)),
    slot.if('clearable', {
      component: CrossIcon,
    }),
  ])
  .slot('Prefix', slot => ({
    props: {
      mr: slot.mapped('size', { s: 4, m: 6, l: 8 }),
    },
  }))
  .slot('Input', slot => [
    {
      style: {
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
    },
    slot.switch('variant', controlOutlineVariants),
  ])
  .build()
