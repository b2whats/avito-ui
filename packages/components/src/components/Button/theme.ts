import { ComponentTheme } from '../../theme/'

export type ButtonTheme = {
  backgroundColor: string,
  fontSize: string,
}

export const buttonTheme: ComponentTheme<ButtonTheme> = ({ palette }) => ({
  fontSize: '16px',
  backgroundColor: palette.red[50],
})
