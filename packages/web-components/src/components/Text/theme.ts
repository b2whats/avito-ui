import { TextTheme, TextProps, dsl } from '@avito/core'

const headingPreset = (size: TextProps['size']) => ({ size, bold: true })

export const textTheme: Partial<TextTheme> = {
  mapProps: ({ preset }) => {
    switch (preset) {
      case 'title': return headingPreset('xxxl')
      case 'title-small': return headingPreset('xxl')
      case 'heading-large': return headingPreset('xl')
      case 'heading': return headingPreset('l')
      case 'heading-small': return headingPreset('m')
    }
    return {}
  },
}
