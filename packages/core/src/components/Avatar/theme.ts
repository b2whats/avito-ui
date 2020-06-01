import { ComponentTheme, Slot } from '../../styled-system'
import { BoxProps } from '../Layout'
import { AvatarProps } from './contract'

export type AvatarTheme = ComponentTheme<AvatarProps, {
  Wrapper: Slot,
  Badge: Slot<BoxProps>,
}>

export const avatarTheme: AvatarTheme = {
  defaultProps: {
    size: 20,
  },
  scheme: {
    Wrapper: {
      style: {
        color: 'white',
        align: 'center',
        valignSelf: 'middle',
        width: p => p.size,
        height: p => p.size,
        borderRadius: 'circle',
      },
      isFallback: {
        style: {
          bg: 'gray4',
        },
      },
    },
    Badge: {
      props: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: p => p.size / 4,
        height: p => p.size / 4,
      },
    },
  },
}
