import { ComponentTheme, Slot } from '../../styled-system'
import { dsl } from '../../theme'
import { IconProps } from '../Icon/'
import { UserIcon, CompanyUserIcon, ShopUserIcon } from '../Icon/icons/'
import { BoxProps } from '../Layout'
import { AvatarProps } from './contract'

export type AvatarTheme = ComponentTheme<AvatarProps, {
  Wrapper: Slot
  Badge: Slot<BoxProps>
  Fallback: Slot<IconProps>
}>

export const avatarTheme = dsl.theme<AvatarTheme>()
  .defaultProps({
    size: 20,
    type: 'person',
  })
  .slot('Wrapper', slot => [
    {
      style: {
        color: 'white',
        align: 'center',
        valignSelf: 'middle',
        width: props => props.size,
        height: props => props.size,
        shape: 'circle',
        overlayDisabled: 'rgba(255, 255, 255, 0.5)',
        fontSize: props => 0.6 * props.size,
      },
    },
    slot.if('isFallback', {
      style: {
        bg: 'gray4',
        color: 'gray28',
        valign: 'middle',
        align: 'center',
      },
    }),
  ])
  .slot('Badge', {
    props: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: props => props.size / 4,
      height: props => props.size / 4,
    },
  })
  .slot('Fallback', slot => [
    {
      component: UserIcon,
      props: {
        size: props => 0.48 * props.size,
      },
    },
    slot.switch('type', {
      company: {
        component: CompanyUserIcon,
      },
      shop: {
        component: ShopUserIcon,
      },
    }),
  ])
  .build()
