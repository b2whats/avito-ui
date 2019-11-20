import { ComponentTheme } from '../../theme/'

export type CheckboxTheme = {
  borderRadius: string,
  borderWidth: string,
  icon_color: string,
}

export const checkboxTheme: ComponentTheme<CheckboxTheme> = ({ font, palette }, override) => ({
  borderRadius: '3px',
  borderWidth: '1px',
  ...override,
}) as CheckboxTheme
