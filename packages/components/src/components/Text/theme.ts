import { ComponentTheme } from '../../theme/'

export type TextTheme = {
  fontSize: string,
  fontFamily: string,
  lineHeight: number,
}

export const textTheme: ComponentTheme<TextTheme> = ({ fontSize, fontFamily }) => ({
  fontSize,
  fontFamily,
  lineHeight: 1.5,
})
