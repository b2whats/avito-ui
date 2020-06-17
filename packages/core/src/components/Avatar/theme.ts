import { ComponentTheme, Slot } from '../../styled-system'
import { IconProps } from '../Icon/'
import { UserIcon, CompanyUserIcon, ShopUserIcon } from '../Icon/icons/'
import { BoxProps } from '../Layout'
import { AvatarProps } from './contract'

export type AvatarTheme = ComponentTheme<AvatarProps, {
  Wrapper: Slot
  Badge: Slot<BoxProps>
  Fallback: Slot<IconProps>
}>

export const avatarTheme: AvatarTheme = {
  defaultProps: {
    size: 20,
    type: 'person',
  },
  scheme: {
    Wrapper: {
      style: {
        color: 'white',
        align: 'center',
        valignSelf: 'middle',
        width: p => p.size,
        height: p => p.size,
        shape: 'circle',
        overlayDisabled: 'rgba(255, 255, 255, 0.5)',
        fontSize: p => 0.6 * p.size,
      },
      isFallback: {
        style: {
          bg: 'gray4',
          color: 'gray28',
          valign: 'middle',
          align: 'center',
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
    Fallback: {
      component: UserIcon,
      props: {
        size: p => 0.48 * p.size,
      },
      type: {
        company: {
          component: CompanyUserIcon,
        },
        shop: {
          component: ShopUserIcon,
        },
      },
    },
  },
}
