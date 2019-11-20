import { Theme, Tokens } from '../theme'

type ColorsProps = {
  theme: Theme,
  color?: keyof Tokens['palette'] | string,
  bgColor?: keyof Tokens['palette'] | string,
}

export const colors = ({ color, bgColor, theme: { palette } }: ColorsProps)=> (`
  ${color ? `color: ${palette[color] || color};` : ''}
  ${bgColor ? `background-color: ${palette[bgColor] || bgColor};` : ''}
`)