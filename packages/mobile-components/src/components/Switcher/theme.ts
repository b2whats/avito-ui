import { SwitcherTheme, dsl, Colors, Spinner } from '@avito/core'
import { SwitcherIcon } from '../Icon'

export const switcherTheme = dsl.theme<SwitcherTheme>()
  .defaultProps({
    shape: 'pill',
  })
  .slot('Switch', slot => [
    {
      width: 48,
      height: 25,
      p: 3,
      focus: true,

      color: 'white',
      bg: 'gray12',
      bgActive: 'gray28',
      bgDisabled: 'gray4',
    },
    slot.if(props => props.variant === 'primary', {
      bgDisabled: 'gray8',
    }),
    slot.if('checked', [
      {
        bgDisabled: 'gray28',
      },
      slot.switch('variant', {
        primary: {
          ...fillStyle('blue500', 'blue700'),
          bgDisabled: 'blue300',
        },
        secondary: fillStyle('gray48', 'gray56'),
        success: fillStyle('green500', 'green700'),
        warning: fillStyle('orange500', 'orange700'),
        error: fillStyle('red500', 'red700'),
      }),
    ]),
    slot.if('loading', {
      focus: false,
      align: 'center',
      color: 'gray28',
      bg: 'transparent',
      bgActive: 'transparent',
      bgDisabled: 'transparent',
    }),
  ])
  .slot('Icon', slot => [
    {
      component: SwitcherIcon,
    },
    slot.if('loading', {
      component: Spinner,
    }),
  ])
  .build()

function fillStyle(bg: Colors, bgActive: Colors) {
  return { bg, bgActive }
}
