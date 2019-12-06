import { ComponentTheme } from '../../theme'
import { PresetType } from '../../utils'
import { ButtonProps } from './contract'
import { TextProps } from '../../components copy/Text/contract'
import { VariantsProps } from '../../components copy/Variants/contract'

export type ButtonTheme = {
  preset: {
    Button: PresetType<ButtonProps, ButtonProps | VariantsProps, 'variant' | 'kind' | 'size'>
    Text: PresetType<ButtonProps, TextProps, 'kind' | 'size'>
  },

  default_press_offset: string,
  flat_press_offset: string,
  outline_press_offset: string,
}

export const buttonTheme: ComponentTheme<ButtonTheme> = (_, override) => {
  const defaultTheme = {
    default_press_offset: '1px',
    flat_press_offset: '1px',
    outline_press_offset: '1px',
  }

  const preset: ButtonTheme['preset'] = {
    Text: {
      style: {
        size: 'm',
        lineHeight: 'none',
      },
      size: {
        s: {
          style: {
            size: 's',
          },
        },
      },
      kind: {
        flat: {
          style: {
            uppercase: true,
          },
        },
      },
    },
    Button: {
      style: {
        borderRadius: '3px',
        borderWidth: '1px',
        borderStyle: 'solid',
        focus: true,
      },
      props: {

      },
      size: {
        s: {
          style: {
            px: 'm',
            py: 'xs',
            minHeight: 's',
          },
        },
        m: {
          style: {
            px: 'm',
            py: 's',
            minHeight: 'm',
          },
        },
        l: {
          style: {
            px: 'm',
            py: 's',
            minHeight: 'l',
          },
        },
      },
      variant: {
        secondary: {
          style: {
            color: 'contrast',
            colorDisabled: 'contrast',
          },
        },
        warning: {
          style: {
            color: 'contrast',
            colorDisabled: 'contrast',
          },
        },
      kind: {
        default: {
          style: {
            background: 'colored',
            backgroundHover: 'colored',
            backgroundActive: 'colored',
            backgroundChecked: 'colored',
            backgroundDisabled: 'colored',
            border: 'transparent',
            color: 'contrast-light',
            colorDisabled: 'contrast-light',
          },
          variant: {
            secondary: {
              style: {
                color: 'contrast',
                colorDisabled: 'contrast',
              },
            },
            warning: {
              style: {
                color: 'contrast',
                colorDisabled: 'contrast',
              },
            },
          },
        },
        outline: {
          style: {
            color: 'colored',
            colorHover: 'colored',
            colorActive: 'colored',
            colorDisabled: 'colored',
            border: 'contrast-light',
            borderHover: 'colored',
            borderActive: 'contrast-light',
            borderDisabled: 'contrast-light',
            background: 'contrast-light',
            backgroundHover: 'contrast-light',
            backgroundActive: 'contrast-light',
            backgroundChecked: 'contrast-light',
          },
        },
        flat: {
          style: {
            color: 'colored',
            colorHover: 'colored',
            colorActive: 'colored',
            colorDisabled: 'colored',
            border: 'transparent',
            background: 'contrast-light',
            backgroundHover: 'contrast-light',
            backgroundActive: 'contrast-light',
            backgroundChecked: 'contrast-light',
          },
        },
      },
    },
  }

  return {
    ...defaultTheme,
    preset,
    ...override,
  } as ButtonTheme
}
