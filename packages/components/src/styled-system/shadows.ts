import { Theme, Tokens } from '../theme'

type ShadowsProps = {
  theme: Theme,
  shadow?: keyof Tokens['shadows'] 
}

export const shadows = ({ shadow, theme: { shadows } }: ShadowsProps)=> (shadow && `
  box-shadow: ${shadows[shadow]};
`)