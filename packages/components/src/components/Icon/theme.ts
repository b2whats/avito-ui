import { ComponentTheme } from '../../theme/'

export type IconTheme = {
  size_s: string,
  size_m: string,
  size_l: string,
}

export const iconTheme: ComponentTheme<IconTheme> = (_, override) => ({
  size_s: '1em',
  size_m: '1.4em',
  size_l: '1.6em',

  ...override,
})