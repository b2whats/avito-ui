import { Theme, Tokens } from '../theme/'

type VariantKeys = keyof Tokens['variants']

type FocusProps = {
  theme: Theme,
  variant?: VariantKeys,
}

export const focus = ({ variant = 'primary', theme: { variants, focus } }: FocusProps): string => (`
  outline: none;
  &&:focus {
    box-shadow: ${focus} ${variants[`${variant}_focus`]};
    position: relative;
    z-index: 2;
  }
`)

export const focusProp = ({ variant = 'primary', theme: { variants, focus } }: FocusProps): string => (`
  outline: none;
  box-shadow: ${focus} ${variants[`${variant}_focus`]};
  position: relative;
  z-index: 2;
`)