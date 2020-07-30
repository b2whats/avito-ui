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
  .slot('IconBefore', {
    size: dsl.propMap('mr', gapSize),
  })
  .slot('IconAfter', {
    size: dsl.propMap({
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
    }),
    clearable: {
      component: CrossIcon,
    },
  })
  .slot('Prefix', {
    size: dsl.propMap('mr', {
      s: 4,
      m: 6,
      l: 8,
    }),
  })
  .slot('Input', {
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
    size: dsl.styleMap({
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
    }),
    variant: controlOutlineVariants,
  })
  .build()
