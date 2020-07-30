import { ComponentTheme, Slot } from '../../styled-system/'
import { dsl } from '../../theme'
import { IconProps } from '../Icon/contract'
import { SpinnerProps } from '../Spinner/contract'
import { TextProps } from '../Text/contract'
import { ButtonProps } from './contract'


export type ButtonTheme = ComponentTheme<ButtonProps, {
  Button: Slot<never>
  IconBefore: Slot<IconProps>
  Text: Slot<TextProps>
  IconAfter: Slot<IconProps>
  Spinner: Slot<SpinnerProps>
}>

export const buttonTheme: ButtonTheme = dsl.theme<ButtonTheme>()
  .defaultProps({
    size: 'm',
    type: 'button',
  })
  // FIXME: can't expand shorthands of createClassName maps
  .mapProps(({ shape }) => (shape === 'circle' || shape === 'square') ? { p: 'none' } : {})
  .slot('Spinner', slot => slot.switch('size', {
    s: {
      props: {
        size: 's',
      },
    },
    m: {
      props: {
        size: 'm',
      },
    },
    l: {
      props: {
        size: 'l',
      },
    },
  }))
  .slot('IconBefore', slot => slot.switch('size', {
    s: {
      props: {
        size: 's',
      },
    },
    m: {
      props: {
        size: 's',
      },
    },
    l: {
      props: {
        size: 'm',
      },
    },
  }))
  .slot('IconAfter', slot => slot.switch('size', {
    s: {
      props: {
        size: 's',
      },
    },
    m: {
      props: {
        size: 's',
      },
    },
    l: {
      props: {
        size: 'm',
      },
    },
  }))
  .slot('Text', slot => [
    {
      props: {
        crop: true,
        valignSelf: 'middle',
        size: 'm',
        ml: -1,
      },
    },
    slot.if('iconBefore', {
      props: {
        ml: 6,
      },
    }),
    slot.if('iconAfter', {
      props: {
        mr: 6,
      },
    }),
  ])
  .slot('Button', slot => [
    {
      style: {
        borderRadius: 5,
        px: 16,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'transparent',
        focus: false,
      },
    },
    slot.switch('size', {
      s: {
        style: {
          py: 4,
          minHeight: 's',
        },
      },
      m: {
        style: {
          py: 6,
          minHeight: 'm',
        },
      },
      l: {
        style: {
          py: 8,
          minHeight: 'l',
        },
      },
    }),
    slot.if(props => props.iconBefore && props.children, {
      style: {
        pl: 12,
      },
    }),
    slot.if(props => props.iconAfter && props.children, {
      style: {
        pr: 12,
      },
    }),
  ])
  .build()
