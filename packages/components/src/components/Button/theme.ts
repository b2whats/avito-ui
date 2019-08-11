import { ComponentTheme } from '../../theme/'
import { ButtonProps } from './contract'
import { TextProps } from '../Text/contract'

type Preset = {
  Button?: Partial<ButtonProps>,
  Text?: Partial<TextProps>, 
}

export type ButtonTheme = {
  borderRadius: string,
  borderWidth: string,

  size_s_height: string,
  size_m_height: string,
  size_l_height: string,

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

  default_primary_color_normal: string,
  default_primary_color_disabled: string,
  default_secondary_color_normal: string,
  default_secondary_color_disabled: string,
  default_success_color_normal: string,
  default_success_color_disabled: string,
  default_error_color_normal: string,
  default_error_color_disabled: string,
  default_warning_color_normal: string,
  default_warning_color_disabled: string,

  flat_press_offset: string,

  flat_primary_backgroundColor_normal: string,
  flat_primary_backgroundColor_hover: string,
  flat_primary_backgroundColor_active: string,
  flat_secondary_backgroundColor_normal: string,
  flat_secondary_backgroundColor_hover: string,
  flat_secondary_backgroundColor_active: string,
  flat_success_backgroundColor_normal: string,
  flat_success_backgroundColor_hover: string,
  flat_success_backgroundColor_active: string,
  flat_error_backgroundColor_normal: string,
  flat_error_backgroundColor_hover: string,
  flat_error_backgroundColor_active: string,
  flat_warning_backgroundColor_normal: string,
  flat_warning_backgroundColor_hover: string,
  flat_warning_backgroundColor_active: string,

  outline_press_offset: string,

  outline_primary_backgroundColor_normal: string,
  outline_primary_backgroundColor_hover: string,
  outline_primary_backgroundColor_active: string,
  outline_secondary_backgroundColor_normal: string,
  outline_secondary_backgroundColor_hover: string,
  outline_secondary_backgroundColor_active: string,
  outline_success_backgroundColor_normal: string,
  outline_success_backgroundColor_hover: string,
  outline_success_backgroundColor_active: string,
  outline_error_backgroundColor_normal: string,
  outline_error_backgroundColor_hover: string,
  outline_error_backgroundColor_active: string,
  outline_warning_backgroundColor_normal: string,
  outline_warning_backgroundColor_hover: string,
  outline_warning_backgroundColor_active: string,

  outline_primary_borderColor_normal: string,
  outline_primary_borderColor_hover: string,
  outline_primary_borderColor_active: string,
  outline_primary_borderColor_disabled: string,
  outline_secondary_borderColor_normal: string,
  outline_secondary_borderColor_hover: string,
  outline_secondary_borderColor_active: string,
  outline_secondary_borderColor_disabled: string,
  outline_success_borderColor_normal: string,
  outline_success_borderColor_hover: string,
  outline_success_borderColor_active: string,
  outline_success_borderColor_disabled: string,
  outline_error_borderColor_normal: string,
  outline_error_borderColor_hover: string,
  outline_error_borderColor_active: string,
  outline_error_borderColor_disabled: string,
  outline_warning_borderColor_normal: string,
  outline_warning_borderColor_hover: string,
  outline_warning_borderColor_active: string,
  outline_warning_borderColor_disabled: string,
}

export const buttonTheme: ComponentTheme<ButtonTheme> = ({ palette, sizes, variants }, override) => {
  const defaultTheme = {
    borderRadius: '3px',
    borderWidth: '1px',

    size_s_height: sizes.s_height,
    size_m_height: sizes.m_height,
    size_l_height: sizes.l_height,

    default_press_offset: '1px',
    flat_press_offset: '1px',
    outline_press_offset: '1px',

    default_primary_color_normal: palette.white,
    default_primary_color_disabled: palette.white,
    default_secondary_color_normal: palette.gray90,
    default_secondary_color_disabled: palette.gray50,
    default_success_color_normal: palette.white,
    default_success_color_disabled: palette.white,
    default_error_color_normal: palette.white,
    default_error_color_disabled: palette.white,
    default_warning_color_normal: palette.gray90,
    default_warning_color_disabled: palette.gray50,

    flat_primary_backgroundColor_normal: variants.input_backgroundColor_normal,
    flat_primary_backgroundColor_hover: variants.input_backgroundColor_hover,
    flat_primary_backgroundColor_active: variants.input_backgroundColor_active,
    flat_secondary_backgroundColor_normal: variants.input_backgroundColor_normal,
    flat_secondary_backgroundColor_hover: variants.input_backgroundColor_hover,
    flat_secondary_backgroundColor_active: variants.input_backgroundColor_active,
    flat_success_backgroundColor_normal: variants.input_backgroundColor_normal,
    flat_success_backgroundColor_hover: variants.input_backgroundColor_hover,
    flat_success_backgroundColor_active: variants.input_backgroundColor_active,
    flat_error_backgroundColor_normal: variants.input_backgroundColor_normal,
    flat_error_backgroundColor_hover: variants.input_backgroundColor_hover,
    flat_error_backgroundColor_active: variants.input_backgroundColor_active,
    flat_warning_backgroundColor_normal: variants.input_backgroundColor_normal,
    flat_warning_backgroundColor_hover: variants.input_backgroundColor_hover,
    flat_warning_backgroundColor_active: variants.input_backgroundColor_active,

    outline_primary_backgroundColor_normal: variants.input_backgroundColor_normal,
    outline_primary_backgroundColor_hover: variants.input_backgroundColor_hover,
    outline_primary_backgroundColor_active: variants.input_backgroundColor_active,
    outline_secondary_backgroundColor_normal: variants.input_backgroundColor_normal,
    outline_secondary_backgroundColor_hover: variants.input_backgroundColor_hover,
    outline_secondary_backgroundColor_active: variants.input_backgroundColor_active,
    outline_success_backgroundColor_normal: variants.input_backgroundColor_normal,
    outline_success_backgroundColor_hover: variants.input_backgroundColor_hover,
    outline_success_backgroundColor_active: variants.input_backgroundColor_active,
    outline_error_backgroundColor_normal: variants.input_backgroundColor_normal,
    outline_error_backgroundColor_hover: variants.input_backgroundColor_hover,
    outline_error_backgroundColor_active: variants.input_backgroundColor_active,
    outline_warning_backgroundColor_normal: variants.input_backgroundColor_normal,
    outline_warning_backgroundColor_hover: variants.input_backgroundColor_hover,
    outline_warning_backgroundColor_active: variants.input_backgroundColor_active,

    outline_primary_borderColor_normal: variants.input_borderColor_normal,
    outline_primary_borderColor_hover: variants.primary_borderColor_normal,
    outline_primary_borderColor_active: variants.input_borderColor_normal,
    outline_primary_borderColor_disabled: variants.input_borderColor_disabled,
    outline_secondary_borderColor_normal: variants.input_borderColor_normal,
    outline_secondary_borderColor_hover: variants.secondary_borderColor_normal,
    outline_secondary_borderColor_active: variants.input_borderColor_normal,
    outline_secondary_borderColor_disabled: variants.input_borderColor_disabled,
    outline_success_borderColor_normal: variants.input_borderColor_normal,
    outline_success_borderColor_hover: variants.success_borderColor_normal,
    outline_success_borderColor_active: variants.input_borderColor_normal,
    outline_success_borderColor_disabled: variants.input_borderColor_disabled,
    outline_error_borderColor_normal: variants.input_borderColor_normal,
    outline_error_borderColor_hover: variants.error_borderColor_normal,
    outline_error_borderColor_active: variants.input_borderColor_normal,
    outline_error_borderColor_disabled: variants.input_borderColor_disabled,
    outline_warning_borderColor_normal: variants.input_borderColor_normal,
    outline_warning_borderColor_hover: variants.warning_borderColor_normal,
    outline_warning_borderColor_active: variants.input_borderColor_normal,
    outline_warning_borderColor_disabled: variants.input_borderColor_disabled,

    preset: {
      kind: {
        default: {},
        outline: {},
        flat:{
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
  } as ButtonTheme

  return {
    ...defaultTheme,
    ...override,
  }
}
