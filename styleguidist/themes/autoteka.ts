import { createTokens } from '@avito/tokens'
import { createTheme } from '@avito/components'

const tokes = createTokens({
  variants: {
    primary: 'blue',
    secondary: 'blue',
    error: 'blue',
    success: 'blue',
    warning: 'blue',
  },
})

export default createTheme(tokes, {

})