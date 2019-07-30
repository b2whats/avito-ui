import { Theme, Tokens } from '../theme/'

type VariantKeys = keyof Tokens['variants']

type FocusProps = {
  theme: Theme,
  variant: VariantKeys,
}

export const focus = ({ variant = 'primary', theme: { variants, focus } }: FocusProps): string => (`
  outline: none;
  &:focus {
    box-shadow: white 0px 0px 0px 1px, ${focus} ${variants[`${variant}_focus`]};
    position: relative;
  }
`)