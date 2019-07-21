import { ComponentTheme } from './'

export type VariantsTheme = {
  primary_color_normal: string,
  primary_color_hover: string,
  primary_color_active: string,
  primary_color_focus: string,

  secondary_color_normal: string,
  secondary_color_hover: string,
  secondary_color_active: string,
  secondary_color_focus: string,

  error_color_normal: string,
  error_color_hover: string,
  error_color_active: string,
  error_color_focus: string,

  success_color_normal: string,
  success_color_hover: string,
  success_color_active: string,
  success_color_focus: string,
  
  danger_color_normal: string,
  danger_color_hover: string,
  danger_color_active: string,
  danger_color_focus: string,

  
}

export const variantsTheme: ComponentTheme<VariantsTheme> = ({ variants, palette }, override) => {

  const defaultTheme: VariantsTheme = {
    primary_color_normal: palette[`${variants.primary}50`],
    primary_color_hover: palette[`${variants.primary}70`],
    primary_color_active: palette[`${variants.primary}40`],
    primary_color_focus: palette[`${variants.primary}40`],

    secondary_color_normal: palette[`${variants.secondary}50`],
    secondary_color_hover: palette[`${variants.secondary}70`],
    secondary_color_active: palette[`${variants.secondary}40`],
    secondary_color_focus: palette[`${variants.secondary}40`],
  
    error_color_normal: palette[`${variants.error}50`],
    error_color_hover: palette[`${variants.error}70`],
    error_color_active: palette[`${variants.error}40`],
    error_color_focus: palette[`${variants.error}40`],
  
    success_color_normal: palette[`${variants.success}50`],
    success_color_hover: palette[`${variants.success}70`],
    success_color_active: palette[`${variants.success}40`],
    success_color_focus: palette[`${variants.success}40`],
  
    danger_color_normal: palette[`${variants.danger}50`],
    danger_color_hover: palette[`${variants.danger}70`],
    danger_color_active: palette[`${variants.danger}40`],
    danger_color_focus: palette[`${variants.danger}40`],

    ...override,
  }

  return defaultTheme
}
