import { ComponentTheme, Slot, IconProps } from '@avito/core'
import { CheckmarkIcon } from '../Icon'
import { CheckmarkProps } from './contract'

export type CheckmarkTheme = ComponentTheme<CheckmarkProps, { Icon: Slot<IconProps> }>

export const checkmarkTheme: CheckmarkTheme = {
  defaultProps: {
    variant: 'primary',
  },
  scheme: {
    Icon: {
      component: CheckmarkIcon,
      disabled: {
        props: {
          color: 'gray28',
        },
      },
    },
  },
}
