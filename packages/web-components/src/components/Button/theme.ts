import { ButtonTheme, StyleProperties, dsl } from '@avito/core'

const fillTheme = (hue: string): StyleProperties => ({
  bg: `${hue}500`,
  bgHover: `${hue}600`,
  bgActive: `${hue}700`,
  bgDisabled: `${hue}500`,
  focus: `${hue}100`,
})

export const buttonTheme = dsl.theme<ButtonTheme>()
  .defaultProps({
    size: 's',
    preset: 'default',
    pressedOffset: 1,
  })
  .mapProps(({ kind, preset }) => ({
    kind: kind || (preset === 'default' ? 'outline' : 'fill'),
  }))
  .slot('Button', slot => [
    slot.if('multiline', {
      py: 9,
    }),
    slot.if('disabled', {
      overlay: 'rgba(255,255,255,0.5)',
    }),
    slot.switch('size', {
      s: {
        px: 12,
        py: 5,
      },
      m: {
        px: 16,
        py: 8,
      },
      l: {
        px: 18,
        py: 11,
      },
    }),
    slot.if('multiline', {
      py: props => props.size === 'l' ? 12 : 9,
    }),
    slot.switch('preset', {
      default: {
        bg: 'white',
        bgHover: 'gray4',
        bgActive: 'gray12',
        bgDisabled: 'white',
        borderColor: 'gray20',
        color: 'black',
        focus: 'blue100',
      },
      primary: {
        ...fillTheme('blue'),
        color: 'white',
      },
      newDefault: {
        bg: 'gray8',
        bgHover: 'gray12',
        bgActive: 'gray20',
        bgDisabled: 'gray8',
        color: 'black',
        focus: 'blue100',
      },
      success: {
        ...fillTheme('green'),
        color: 'white',
      },
      warning: {
        ...fillTheme('orange'),
        color: 'black',
      },
      error: {
        ...fillTheme('red'),
        color: 'white',
      },
    }),
  ])
  .slot('Text', slot => [
    {
      // Ужатые строки для двустрочной кнопки - на 1 строку не влияет
      lineHeight: 1.1875,
      size: props => props.size,
    },
    slot.if('iconBefore', [
      {
        align: 'left',
        ml: slot.mapped('size', { s: 4, m: 6, l: 8 }),
      },
      slot.if('multiline', {
        ml: 10,
      }),
    ]),
    slot.if('iconAfter', [
      {
        align: 'left',
        mr: slot.mapped('size', { s: 4, m: 6, l: 8 }),
      },
      slot.if('multiline', {
        mr: 10,
      }),
    ]),
  ])
  .slot('IconBefore', slot => slot.if('children', {
    ml: -4,
  }))
  .slot('IconAfter', slot => slot.if('children', {
    mr: -4,
  }))
  .slot('Spinner', slot => [
    {
      variant: undefined,
    },
    slot.if(props => props.preset === 'default', {
      variant: 'primary',
    }),
  ])
  .build()
