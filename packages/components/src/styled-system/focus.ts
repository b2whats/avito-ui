
import { Theme, Tokens } from '../theme/'

type VariantKeys = keyof Tokens['variants']

type FocusProps = {
  theme: Theme,
  variant: VariantKeys,
}

export const focus = ({ variant = 'primary', theme: { variants, focus } }: FocusProps): string => (`
  box-shadow: ${focus} ${variants[`${variant}_color_focus`]};
  position: relative;
`)