import { Theme, Tokens } from '../theme'

export type Shadows = {
  shadow?: keyof Tokens['shadows']
}

type ShadowsProps = {
  theme: Theme,
} & Shadows

export const shadows = ({ shadow, theme: { shadows } }: ShadowsProps)=> (shadow && `
  box-shadow: ${shadows[shadow]};
`)