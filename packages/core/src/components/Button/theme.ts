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
  .slot('Spinner', {
    props: {
      size: props => props.size,
    },
  })
  .slot('IconBefore', {
    props: {
      size: props => props.size === 'l' ? 'm' : 's',
    },
  })
  .slot('IconAfter', {
    props: {
      size: props => props.size === 'l' ? 'm' : 's',
    },
  })
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
        minHeight: props => props.size,
      },
    },
    slot.switch('size', {
      s: {
        style: {
          py: 4,
        },
      },
      m: {
        style: {
          py: 6,
        },
      },
      l: {
        style: {
          py: 8,
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
