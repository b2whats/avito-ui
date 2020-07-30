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
    slot.switch('size', dsl.propMap({
      s: {
        ml: gapSize.s,
        size: 'm',
      },
      m: {
        ml: gapSize.m,
        size: 'm',
      },
      l: {
        ml: gapSize.l,
        size: 'l',
      },
    } as const)),
    slot.if('clearable', {
      component: CrossIcon,
    }),
  ])
  .slot('Prefix', slot => slot.switch('size', dsl.propMap('mr', {
    s: 4,
    m: 6,
    l: 8,
  })))
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
      },
    },
    slot.switch('size', dsl.styleMap({
      s: {
        fontSize: 's',
        px: gapSize.s,
      },
      m: {
        fontSize: 'm',
        px: gapSize.m,
      },
      l: {
        fontSize: 'l',
        px: gapSize.l,
      },
    })),
    slot.switch('variant', controlOutlineVariants),
  ])
  .build()
