import { ComponentTheme } from '../../theme/'

export type ButtonTheme = {
  backgroundColor: string,
  fontSize: string,
}

export const buttonTheme: ComponentTheme<ButtonTheme> = ({ palette }) => ({
  fontSize: '17px',
  backgroundColor: palette.red10,
})
