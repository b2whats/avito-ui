import { ComponentTheme } from '../../theme/'
import { TextProps } from '../Text/contract'
import { VariantsProps } from '../Variants/contract'

type Preset = {
  Text: Partial<TextProps>,
}

export type ToggleTheme = {
  size_s: string,
  size_m: string,
  size_l: string,

  preset: {
    variants: {
      Switch: Partial<VariantsProps>
    },
    size: {
      s: Preset,
      m: Preset,
      l: Preset,
    },
  },
}

export const toggleTheme: ComponentTheme<ToggleTheme> = ({ font, variants }, override) => ({
  size_s: '14px',
  size_m: '16px',
  size_l: '20px',

  preset: {
    variants: {
      Switch: {
        border: 'colored',
        borderState: 'hover',
        color: 'contrast',
      },
    },
    size: {
      s: {
        Text: {
          kind: 'label',
          mx: 's',
          lineHeight: 's',
        },
      },
      m: {
        Text: {
          kind: 'label',
          mx: 's',
          lineHeight: 's',
        },
      },
      l: {
        Text: {
          kind: 'label',
          size: 'l',
          mx: 's',
          lineHeight: 's',
        },
      },
    },
  },
  ...override,
}) as ToggleTheme
