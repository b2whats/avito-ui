import { TextTheme, TextProps, dsl } from '@avito/core'

export const textTheme: TextTheme = {
  scheme: {
    Text: {
      preset: dsl.propMap({
        'title': headingPreset('xxxl'),
        'title-small': headingPreset('xxl'),
        'heading-large': headingPreset('xl'),
        'heading': headingPreset('l'),
        'heading-small': headingPreset('m'),
      }),
    },
  },
}

function headingPreset(size: TextProps['size']): TextProps {
  return {
    size,
    bold: true,
  }
}