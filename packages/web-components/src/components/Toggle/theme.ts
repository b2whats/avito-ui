import { ToggleTheme, dsl, Colors } from '@avito/core'
import { controlOutlineVariants } from '../../utils'

export const toggleTheme = dsl.theme<ToggleTheme>()
  .defaultProps({
    size: 's',
  })
  .slot('Label', slot => [
    {
      props: {
        size: props => props.size,
        valignSelf: 'middle',
      },
    },
    slot.switch('labelPosition', {
      start: {
        props: {
          mr: props => props.size === 's' ? 6 : 8,
        },
      },
      end: {
        props: {
          ml: props => props.size === 's' ? 6 : 8,
        },
      },
    }),
    slot.if('disabled', {
      props: {
        color: 'gray40',
      },
    }),
  ])
  .slot('Switch', slot => [
    {
      style: {
        bg: 'white',
        colorDisabled: 'gray4',
        borderColorDisabled: 'gray20',
        borderStyle: 'solid',
        borderWidth: 1,
        focus: true,
      },
    },
    slot.switch('variant',
      controlOutlineVariants
    ),
    slot.if('checked', [
      {
        style: {
          bgDisabled: 'gray20',
        },
      },
      slot.switch('variant', dsl.styleMap({
        primary: fill('blue500', 'blue600'),
        secondary: fill('blue500', 'blue600'),
        success: fill('green500', 'green600'),
        warning: fill('orange500', 'orange600'),
        error: fill('red500', 'red600'),
      })),
    ]),
    slot.if(props => !props.checked, {
      style: {
        bgDisabled: 'gray4',
      },
    }),
  ])
  .slot('Toggle', {
    style: {
      cursor: 'pointer',
    },
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
