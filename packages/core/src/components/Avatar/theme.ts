import { ComponentTheme, Slot } from '../../styled-system'
import { dsl } from '../../theme'
import { IconProps } from '../Icon/'
import { UserIcon, CompanyUserIcon, ShopUserIcon } from '../Icon/icons/'
import { AvatarProps } from './contract'

export type AvatarTheme = ComponentTheme<AvatarProps, {
  Wrapper: Slot
  Fallback: Slot<IconProps>
}>

export const avatarTheme = dsl.theme<AvatarTheme>()
  .defaultProps({
    size: 20,
    type: 'person',
  })
  .slot('Wrapper', slot => [
    {
      position: 'relative',
      shrink: false,
      grow: false,
      color: 'white',
      align: 'center',
      valignSelf: 'middle',
      width: props => props.size,
      height: props => props.size,
      shape: 'circle',
      overlayDisabled: 'rgba(255, 255, 255, 0.5)',
      fontSize: props => 0.6 * props.size,
      userSelect: false,
    },
    slot.if('isFallback', {
      bg: 'gray4',
      color: 'gray28',
      valign: 'middle',
      align: 'center',
    }),
  ])
  .slot('Fallback', slot => [
    {
      component: UserIcon,
      size: props => 0.48 * props.size,
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
