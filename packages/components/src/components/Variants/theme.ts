import { ComponentTheme } from '../../theme'

export type VariantsTheme = {
  primary_focus: string,
  secondary_focus: string,
  success_focus: string,
  warning_focus: string,
  error_focus: string,

  primary_color_normal: string,
  primary_color_contrast: string,
  primary_color_contrast_disabled: string,
  primary_color_hover: string,
  primary_color_active: string,
  primary_color_focus: string,
  primary_color_disabled: string,

  secondary_color_normal: string,
  secondary_color_contrast: string,
  secondary_color_contrast_disabled: string,
  secondary_color_hover: string,
  secondary_color_active: string,
  secondary_color_focus: string,
  secondary_color_disabled: string,

  success_color_normal: string,
  success_color_contrast: string,
  success_color_contrast_disabled: string,
  success_color_hover: string,
  success_color_active: string,
  success_color_focus: string,
  success_color_disabled: string,

  warning_color_normal: string,
  warning_color_contrast: string,
  warning_color_contrast_disabled: string,
  warning_color_hover: string,
  warning_color_active: string,
  warning_color_focus: string,
  warning_color_disabled: string,

  error_color_normal: string,
  error_color_contrast: string,
  error_color_contrast_disabled: string,
  error_color_hover: string,
  error_color_active: string,
  error_color_focus: string,
  error_color_disabled: string,

  mixed_color_normal: boolean,
  mixed_color_hover: boolean,
  mixed_color_active: boolean,
  mixed_color_focus: boolean,
  mixed_color_disabled: boolean,


  gray_borderColor_normal: string,
  gray_borderColor_hover: string,
  gray_borderColor_active: string,
  gray_borderColor_focus: string,
  gray_borderColor_disabled: string,

  primary_borderColor_normal: string,
  primary_borderColor_hover: string,
  primary_borderColor_active: string,
  primary_borderColor_focus: string,
  primary_borderColor_disabled: string,

  secondary_borderColor_normal: string,
  secondary_borderColor_hover: string,
  secondary_borderColor_active: string,
  secondary_borderColor_focus: string,
  secondary_borderColor_disabled: string,

  success_borderColor_normal: string,
  success_borderColor_hover: string,
  success_borderColor_active: string,
  success_borderColor_focus: string,
  success_borderColor_disabled: string,

  warning_borderColor_normal: string,
  warning_borderColor_hover: string,
  warning_borderColor_active: string,
  warning_borderColor_focus: string,
  warning_borderColor_disabled: string,

  error_borderColor_normal: string,
  error_borderColor_hover: string,
  error_borderColor_active: string,
  error_borderColor_focus: string,
  error_borderColor_disabled: string,

  mixed_borderColor_normal: boolean,
  mixed_borderColor_hover: boolean,
  mixed_borderColor_active: boolean,
  mixed_borderColor_focus: boolean,
  mixed_borderColor_disabled: boolean,


  gray_backgroundColor_normal: string,
  gray_backgroundColor_hover: string,
  gray_backgroundColor_active: string,
  gray_backgroundColor_focus: string,
  gray_backgroundColor_disabled: string,

  primary_backgroundColor_normal: string,
  primary_backgroundColor_hover: string,
  primary_backgroundColor_active: string,
  primary_backgroundColor_focus: string,
  primary_backgroundColor_disabled: string,

  secondary_backgroundColor_normal: string,
  secondary_backgroundColor_hover: string,
  secondary_backgroundColor_active: string,
  secondary_backgroundColor_focus: string,
  secondary_backgroundColor_disabled: string,

  success_backgroundColor_normal: string,
  success_backgroundColor_hover: string,
  success_backgroundColor_active: string,
  success_backgroundColor_focus: string,
  success_backgroundColor_disabled: string,

  warning_backgroundColor_normal: string,
  warning_backgroundColor_hover: string,
  warning_backgroundColor_active: string,
  warning_backgroundColor_focus: string,
  warning_backgroundColor_disabled: string,

  error_backgroundColor_normal: string,
  error_backgroundColor_hover: string,
  error_backgroundColor_active: string,
  error_backgroundColor_focus: string,
  error_backgroundColor_disabled: string,

  mixed_backgroundColor_normal: boolean,
  mixed_backgroundColor_hover: boolean,
  mixed_backgroundColor_active: boolean,
  mixed_backgroundColor_focus: boolean,
  mixed_backgroundColor_disabled: boolean,
}

export const variantsTheme: ComponentTheme<VariantsTheme> = ({ palette, variants }, override) => {
  const { primary, secondary, success, warning, error } = variants

  const focus = {
    primary_focus: palette.blue30,
    secondary_focus: palette.blue30,
    success_focus: palette[`${success}30`],
    warning_focus: palette[`${warning}30`],
    error_focus: palette[`${error}30`],
  }

  const color = {
    mixed_color_normal: false,
    mixed_color_hover: true,
    mixed_color_active: true,
    mixed_color_focus: false,
    mixed_color_disabled: false,

    primary_color_normal: palette[`${primary}50`],
    primary_color_contrast: palette.white,
    primary_color_contrast_disabled: palette.white,
    primary_color_hover: palette[`${primary}70`],
    primary_color_active: palette[`${primary}80`],
    primary_color_focus: palette[`${primary}80`],
    primary_color_disabled: palette[`${primary}20`],

    secondary_color_normal: palette[`${secondary}60`],
    secondary_color_contrast: palette.black,
    secondary_color_contrast_disabled: palette.gray50,
    secondary_color_hover: palette[`${secondary}80`],
    secondary_color_active: palette[`${secondary}80`],
    secondary_color_focus: palette[`${secondary}80`],
    secondary_color_disabled: palette[`${secondary}30`],

    success_color_normal: palette[`${success}50`],
    success_color_contrast: palette.white,
    success_color_contrast_disabled: palette.white,
    success_color_hover: palette[`${success}70`],
    success_color_active: palette[`${success}80`],
    success_color_focus: palette[`${success}80`],
    success_color_disabled: palette[`${success}20`],

    warning_color_normal: palette[`${warning}50`],
    warning_color_contrast: palette.black,
    warning_color_contrast_disabled: palette.gray50,
    warning_color_hover: palette[`${warning}70`],
    warning_color_active: palette[`${warning}80`],
    warning_color_focus: palette[`${warning}80`],
    warning_color_disabled: palette[`${warning}20`],

    error_color_normal: palette[`${error}40`],
    error_color_contrast: palette.white,
    error_color_contrast_disabled: palette.white,
    error_color_hover: palette[`${error}60`],
    error_color_active: palette[`${error}70`],
    error_color_focus: palette[`${error}70`],
    error_color_disabled: palette[`${error}20`],
  }

  const border = {
    gray_borderColor_normal: palette.gray40,
    gray_borderColor_hover: palette.gray50,
    gray_borderColor_active: palette.gray50,
    gray_borderColor_focus: palette.gray60,
    gray_borderColor_disabled: palette.gray20,

    mixed_borderColor_normal: false,
    mixed_borderColor_hover: true,
    mixed_borderColor_active: false,
    mixed_borderColor_focus: true,
    mixed_borderColor_disabled: false,

    primary_borderColor_normal: palette[`${primary}40`],
    primary_borderColor_hover: palette[`${primary}50`],
    primary_borderColor_active: palette[`${primary}60`],
    primary_borderColor_focus: palette[`${primary}60`],
    primary_borderColor_disabled: palette[`${primary}20`],

    secondary_borderColor_normal: palette[`${secondary}40`],
    secondary_borderColor_hover: palette[`${secondary}50`],
    secondary_borderColor_active: palette[`${secondary}60`],
    secondary_borderColor_focus: palette[`${secondary}60`],
    secondary_borderColor_disabled: palette[`${secondary}20`],

    success_borderColor_normal: palette[`${success}50`],
    success_borderColor_hover: palette[`${success}60`],
    success_borderColor_active: palette[`${success}70`],
    success_borderColor_focus: palette[`${success}70`],
    success_borderColor_disabled: palette[`${success}20`],

    warning_borderColor_normal: palette[`${warning}40`],
    warning_borderColor_hover: palette[`${warning}50`],
    warning_borderColor_active: palette[`${warning}60`],
    warning_borderColor_focus: palette[`${warning}60`],
    warning_borderColor_disabled: palette[`${warning}20`],

    error_borderColor_normal: palette[`${error}40`],
    error_borderColor_hover: palette[`${error}50`],
    error_borderColor_active: palette[`${error}60`],
    error_borderColor_focus: palette[`${error}60`],
    error_borderColor_disabled: palette[`${error}20`],
  }

  const background = {
    gray_backgroundColor_normal: palette.white,
    gray_backgroundColor_hover: palette.gray10,
    gray_backgroundColor_active: palette.gray20,
    gray_backgroundColor_focus: palette.gray20,
    gray_backgroundColor_disabled: palette.white,

    mixed_backgroundColor_normal: false,
    mixed_backgroundColor_hover: false,
    mixed_backgroundColor_active: false,
    mixed_backgroundColor_focus: false,
    mixed_backgroundColor_disabled: false,

    primary_backgroundColor_normal: palette[`${primary}40`],
    primary_backgroundColor_hover: palette[`${primary}50`],
    primary_backgroundColor_active: palette[`${primary}60`],
    primary_backgroundColor_focus: palette[`${primary}60`],
    primary_backgroundColor_disabled: palette[`${primary}20`],

    secondary_backgroundColor_normal: palette[`${secondary}20`],
    secondary_backgroundColor_hover: palette[`${secondary}30`],
    secondary_backgroundColor_active: palette[`${secondary}40`],
    secondary_backgroundColor_focus: palette[`${secondary}40`],
    secondary_backgroundColor_disabled: palette[`${secondary}10`],

    success_backgroundColor_normal: palette[`${success}50`],
    success_backgroundColor_hover: palette[`${success}60`],
    success_backgroundColor_active: palette[`${success}70`],
    success_backgroundColor_focus: palette[`${success}70`],
    success_backgroundColor_disabled: palette[`${success}20`],

    warning_backgroundColor_normal: palette[`${warning}40`],
    warning_backgroundColor_hover: palette[`${warning}50`],
    warning_backgroundColor_active: palette[`${warning}60`],
    warning_backgroundColor_focus: palette[`${warning}60`],
    warning_backgroundColor_disabled: palette[`${warning}20`],

    error_backgroundColor_normal: palette[`${error}40`],
    error_backgroundColor_hover: palette[`${error}50`],
    error_backgroundColor_active: palette[`${error}60`],
    error_backgroundColor_focus: palette[`${error}60`],
    error_backgroundColor_disabled: palette[`${error}20`],
  }


  return {
    ...focus,
    ...color,
    ...border,
    ...background,
    ...override,
  } as VariantsTheme
}
