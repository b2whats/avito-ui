import { ComponentTheme } from '../../theme/'
import { ButtonProps } from './contract'
import { TextProps } from '../Text/contract'

type Preset = {
  Button?: Partial<ButtonProps>,
  Text?: Partial<TextProps>, 
}

export type ButtonTheme = {
  borderRadius: string,

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

  solid_primary_borderColor_normal: string,
  solid_primary_borderColor_hover: string,
  solid_primary_borderColor_active: string,
  solid_primary_borderColor_disabled: string,
  solid_secondary_borderColor_normal: string,
  solid_secondary_borderColor_hover: string,
  solid_secondary_borderColor_active: string,
  solid_secondary_borderColor_disabled: string,
  solid_success_borderColor_normal: string,
  solid_success_borderColor_hover: string,
  solid_success_borderColor_active: string,
  solid_success_borderColor_disabled: string,
  solid_error_borderColor_normal: string,
  solid_error_borderColor_hover: string,
  solid_error_borderColor_active: string,
  solid_error_borderColor_disabled: string,
  solid_warning_borderColor_normal: string,
  solid_warning_borderColor_hover: string,
  solid_warning_borderColor_active: string,
  solid_warning_borderColor_disabled: string,
}

export const buttonTheme: ComponentTheme<ButtonTheme> = ({ palette, sizes, variants }, override) => {
  const defaultTheme = {
    borderRadius: '3px',

    size_s_height: sizes.s_height,
    size_m_height: sizes.m_height,
    size_l_height: sizes.l_height,

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

    flat_primary_backgroundColor_normal: palette.white,
    flat_primary_backgroundColor_hover: palette.gray10,
    flat_primary_backgroundColor_active: palette.gray20,
    flat_secondary_backgroundColor_normal: palette.white,
    flat_secondary_backgroundColor_hover: palette.gray10,
    flat_secondary_backgroundColor_active: palette.gray20,
    flat_success_backgroundColor_normal: palette.white,
    flat_success_backgroundColor_hover: palette.gray10,
    flat_success_backgroundColor_active: palette.gray20,
    flat_error_backgroundColor_normal: palette.white,
    flat_error_backgroundColor_hover: palette.gray10,
    flat_error_backgroundColor_active: palette.gray20,
    flat_warning_backgroundColor_normal: palette.white,
    flat_warning_backgroundColor_hover: palette.gray10,
    flat_warning_backgroundColor_active: palette.gray20,

    outline_primary_backgroundColor_normal: palette.white,
    outline_primary_backgroundColor_hover: palette.gray10,
    outline_primary_backgroundColor_active: palette.gray20,
    outline_secondary_backgroundColor_normal: palette.white,
    outline_secondary_backgroundColor_hover: palette.gray10,
    outline_secondary_backgroundColor_active: palette.gray20,
    outline_success_backgroundColor_normal: palette.white,
    outline_success_backgroundColor_hover: palette.gray10,
    outline_success_backgroundColor_active: palette.gray20,
    outline_error_backgroundColor_normal: palette.white,
    outline_error_backgroundColor_hover: palette.gray10,
    outline_error_backgroundColor_active: palette.gray20,
    outline_warning_backgroundColor_normal: palette.white,
    outline_warning_backgroundColor_hover: palette.gray10,
    outline_warning_backgroundColor_active: palette.gray20,

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
            py: 's',
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
            py: 'm',
          },
          Text: {
            size: 'm',
            lineHeight: 's',
          },
        }
      }
    }

  } as ButtonTheme

  return {
    ...defaultTheme,
    ...override,
  }
}
