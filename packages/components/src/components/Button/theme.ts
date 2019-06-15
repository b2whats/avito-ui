import { ComponentTheme } from '../../theme/'
import { ButtonProps } from './contract'
import { TextProps } from '../Text/contract'
import { VariantsProps } from '../Variants/contract'

type Preset = {
  Button?: Partial<ButtonProps | VariantsProps>,
  Text?: Partial<TextProps>, 
}

export type ButtonTheme = {
  borderRadius: string,
  borderWidth: string,

  size_s_height: string,
  size_m_height: string,
  size_l_height: string,

  default_shadow: boolean,
  outline_shadow: boolean,
  flat_shadow: boolean,

  preset: {
    size: {
      s: Preset,
      m: Preset,
      l: Preset,
    },
    kind: {
      default: Preset,
      outline: Preset,
      flat: Preset,
    }
  },

  default_press_offset: string,
  flat_press_offset: string,
  outline_press_offset: string,
}

export const buttonTheme: ComponentTheme<ButtonTheme> = ({ palette, sizes, variants }, override) => {
  const defaultTheme: ButtonTheme = {
    borderRadius: '3px',
    borderWidth: '1px',

    size_s_height: sizes.s_height,
    size_m_height: sizes.m_height,
    size_l_height: sizes.l_height,

    default_press_offset: '1px',
    flat_press_offset: '1px',
    outline_press_offset: '1px',

    default_shadow: false,
    outline_shadow: false,
    flat_shadow: false,

    preset: {
      kind: {
        default: {
          Button: {
            background: 'colored',
            backgroundState: 'hover active selected',
            color: 'contrast',
            colorState: 'hover active selected',
            focus: true,
          },
        },
        outline: {
          Button: {
            border: 'mixed',
            borderState: 'hover active selected',
            background: 'gray',
            backgroundState: 'hover active selected',
            color: 'colored',
            colorState: 'hover active selected',
            focus: true,
          },
        },
        flat:{
          Button: {
            background: 'gray',
            backgroundState: 'hover active selected',
            color: 'colored',
            colorState: 'hover active selected',
            focus: true,
          },
          Text: {
            uppercase: true,
          },
        },
      },
      size: {
        s: {
          Button: {
            px: 'm',
            py: 'xs',
          },
          Text: {
            size: 's',
            lineHeight: 's',
          },
        },
        m: {
          Button: {
            px: 'm',
            py: 's',
          },
          Text: {
            size: 'm',
            lineHeight: 's',
          },
        },
        l: {
          Button: {
            px: 'm',
            py: 's',
          },
          Text: {
            size: 'm',
            lineHeight: 's',
          },
        },
      },
    },
  }

  return {
    ...defaultTheme,
    ...override,
  } as ButtonTheme
}
