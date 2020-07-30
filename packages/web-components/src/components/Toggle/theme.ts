import { ToggleTheme, dsl, Colors } from '@avito/core'
import { controlOutlineVariants } from '../../utils'

export const toggleTheme = dsl.theme<ToggleTheme>()
  .defaultProps({
    size: 's',
  })
  .slot('Label', slot => [
    {
      size: props => props.size,
      valignSelf: 'middle',
    },
    slot.switch('labelPosition', {
      start: {
        mr: props => props.size === 's' ? 6 : 8,
      },
      end: {
        ml: props => props.size === 's' ? 6 : 8,
      },
    }),
    slot.if('disabled', {
      color: 'gray40',
    }),
  ])
  .slot('Switch', slot => [
    {
      bg: 'white',
      colorDisabled: 'gray4',
      borderColorDisabled: 'gray20',
      borderStyle: 'solid',
      borderWidth: 1,
      focus: true,
    },
    slot.switch('variant',
      controlOutlineVariants
    ),
    slot.if('checked', [
      {
        bgDisabled: 'gray20',
      },
      slot.switch('variant', {
        primary: fill('blue500', 'blue600'),
        secondary: fill('blue500', 'blue600'),
        success: fill('green500', 'green600'),
        warning: fill('orange500', 'orange600'),
        error: fill('red500', 'red600'),
      }),
    ]),
    slot.if(props => !props.checked, {
      bgDisabled: 'gray4',
    }),
  ])
  .slot('Toggle', {
    cursor: 'pointer',
  })
  .build()

function fill(bg: Colors, hover: Colors) {
  return {
    bg,
    borderColor: bg,
    bgHover: hover,
    borderColorHover: hover,
  }
}
