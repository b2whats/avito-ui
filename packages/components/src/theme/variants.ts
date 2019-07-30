import { ComputedTheme } from './'

export type VariantsTheme = {
  primary: string,
  secondary: string,
  error: string,
  success: string,
  warning: string,

  primary_focus: string,
  secondary_focus: string,
  success_focus: string,
  warning_focus: string,
  error_focus: string,


  primary_color_normal: string,
  primary_color_hover: string,
  primary_color_active: string,
  primary_color_disabled: string,

  primary_backgroundColor_normal: string,
  primary_backgroundColor_hover: string,
  primary_backgroundColor_active: string,
  primary_backgroundColor_selected: string,
  primary_backgroundColor_disabled: string,

  primary_borderColor_normal: string,
  primary_borderColor_hover: string,
  primary_borderColor_active: string,
  primary_borderColor_selected: string,
  primary_borderColor_disabled: string,


  secondary_color_normal: string,
  secondary_color_hover: string,
  secondary_color_active: string,
  secondary_color_disabled: string,

  secondary_backgroundColor_normal: string,
  secondary_backgroundColor_hover: string,
  secondary_backgroundColor_active: string,
  secondary_backgroundColor_selected: string,
  secondary_backgroundColor_disabled: string,

  secondary_borderColor_normal: string,
  secondary_borderColor_hover: string,
  secondary_borderColor_active: string,
  secondary_borderColor_selected: string,
  secondary_borderColor_disabled: string,


  success_color_normal: string,
  success_color_hover: string,
  success_color_active: string,
  success_color_disabled: string,

  success_backgroundColor_normal: string,
  success_backgroundColor_hover: string,
  success_backgroundColor_active: string,
  success_backgroundColor_disabled: string,

  success_borderColor_normal: string,
  success_borderColor_hover: string,
  success_borderColor_active: string,
  success_borderColor_disabled: string,


  warning_color_normal: string,
  warning_color_hover: string,
  warning_color_active: string,
  warning_color_disabled: string,

  warning_backgroundColor_normal: string,
  warning_backgroundColor_hover: string,
  warning_backgroundColor_active: string,
  warning_backgroundColor_disabled: string,

  warning_borderColor_normal: string,
  warning_borderColor_hover: string,
  warning_borderColor_active: string,
  warning_borderColor_disabled: string,


  error_color_normal: string,
  error_color_hover: string,
  error_color_active: string,
  error_color_disabled: string,

  error_backgroundColor_normal: string,
  error_backgroundColor_hover: string,
  error_backgroundColor_active: string,
  error_backgroundColor_disabled: string,

  error_borderColor_normal: string,
  error_borderColor_hover: string,
  error_borderColor_active: string,
  error_borderColor_disabled: string,
}

export const variantsTheme: ComputedTheme<VariantsTheme> = ({ variants, palette }, override) => {
  const defaultTheme = {
    primary_focus: palette.blue30,
    secondary_focus: palette.blue30,
    success_focus: palette[`${variants.success}30`],
    warning_focus: palette[`${variants.warning}30`],
    error_focus: palette[`${variants.error}30`],

    primary_color_normal: palette[`${variants.primary}50`],
    primary_color_hover: palette[`${variants.primary}70`],
    primary_color_active: palette[`${variants.primary}40`],
    primary_color_disabled: palette[`${variants.primary}20`],

    primary_backgroundColor_normal: palette[`${variants.primary}40`],
    primary_backgroundColor_hover: palette[`${variants.primary}50`],
    primary_backgroundColor_active: palette[`${variants.primary}60`],
    primary_backgroundColor_disabled: palette[`${variants.primary}20`],

    primary_borderColor_normal: palette[`${variants.primary}40`],
    primary_borderColor_hover: palette[`${variants.primary}50`],
    primary_borderColor_active: palette[`${variants.primary}60`],
    primary_borderColor_disabled: palette[`${variants.primary}20`],

  
    secondary_color_normal: palette[`${variants.secondary}80`],
    secondary_color_hover: palette[`${variants.secondary}90`],
    secondary_color_active: palette[`${variants.secondary}90`],
    secondary_color_disabled: palette[`${variants.secondary}30`],

    secondary_backgroundColor_normal: palette[`${variants.secondary}20`],
    secondary_backgroundColor_hover: palette[`${variants.secondary}30`],
    secondary_backgroundColor_active: palette[`${variants.secondary}40`],
    secondary_backgroundColor_disabled: palette[`${variants.secondary}10`],

    secondary_borderColor_normal: palette[`${variants.secondary}40`],
    secondary_borderColor_hover: palette[`${variants.secondary}50`],
    secondary_borderColor_active: palette[`${variants.secondary}60`],
    secondary_borderColor_disabled: palette[`${variants.secondary}20`],

  
    success_color_normal: palette[`${variants.success}50`],
    success_color_hover: palette[`${variants.success}70`],
    success_color_active: palette[`${variants.success}40`],
    success_color_disabled: palette[`${variants.success}20`],

    success_backgroundColor_normal: palette[`${variants.success}50`],
    success_backgroundColor_hover: palette[`${variants.success}60`],
    success_backgroundColor_active: palette[`${variants.success}70`],
    success_backgroundColor_disabled: palette[`${variants.success}20`],

    success_borderColor_normal: palette[`${variants.success}50`],
    success_borderColor_hover: palette[`${variants.success}60`],
    success_borderColor_active: palette[`${variants.success}70`],
    success_borderColor_disabled: palette[`${variants.success}20`],

  
    warning_color_normal: palette[`${variants.warning}50`],
    warning_color_hover: palette[`${variants.warning}70`],
    warning_color_active: palette[`${variants.warning}40`],
    warning_color_disabled: palette[`${variants.warning}20`],

    warning_backgroundColor_normal: palette[`${variants.warning}40`],
    warning_backgroundColor_hover: palette[`${variants.warning}50`],
    warning_backgroundColor_active: palette[`${variants.warning}60`],
    warning_backgroundColor_disabled: palette[`${variants.warning}20`],

    warning_borderColor_normal: palette[`${variants.warning}40`],
    warning_borderColor_hover: palette[`${variants.warning}50`],
    warning_borderColor_active: palette[`${variants.warning}60`],
    warning_borderColor_disabled: palette[`${variants.warning}20`],

  
    error_color_normal: palette[`${variants.error}50`],
    error_color_hover: palette[`${variants.error}70`],
    error_color_active: palette[`${variants.error}40`],
    error_color_disabled: palette[`${variants.error}20`],

    error_backgroundColor_normal: palette[`${variants.error}40`],
    error_backgroundColor_hover: palette[`${variants.error}50`],
    error_backgroundColor_active: palette[`${variants.error}60`],
    error_backgroundColor_disabled: palette[`${variants.error}20`],

    error_borderColor_normal: palette[`${variants.error}40`],
    error_borderColor_hover: palette[`${variants.error}50`],
    error_borderColor_active: palette[`${variants.error}60`],
    error_borderColor_disabled: palette[`${variants.error}20`],
  } as VariantsTheme

  return {
    ...variants,
    ...defaultTheme,
    ...override,
  }
}
