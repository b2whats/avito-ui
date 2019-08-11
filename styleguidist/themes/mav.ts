import { createTokens } from '@avito/tokens'
import { createTheme } from '@avito/components'

const tokes = createTokens({
  sizes: {
    s_height: '28px',
    m_height: '36px',
    l_height: '48px',
  },
})

export default createTheme(tokes, {
  button: {
    default_shadow: true,
    outline_shadow: false,
    flat_shadow: true,
    
    preset: {
      kind: {
        default: {
          Text: {
            uppercase: true,
            bold: true,
          },
        },
        outline: {
          Text: {
            uppercase: true,
            bold: true,
          },
        },
        flat:{
          Text: {
            uppercase: true,
            bold: true,
          },
        },
      },
      size: {
        s: {
          Button: {
            px: 'm',
            py: 'xs',
          },
          Text: {
            size: 's',
            lineHeight: 's',
          },
        },
        m: {
          Button: {
            px: 'l',
            py: 's',
          },
          Text: {
            size: 's',
            lineHeight: 's',
          },
        },
        l: {
          Button: {
            px: 'm',
            py: 's',
          },
          Text: {
            size: 'm',
            lineHeight: 's',
          },
        },
      },
    },
  },
})