import { TextTheme, dsl } from '@avito/core'

export const textTheme = dsl.theme<TextTheme>()
  .mapProps(({ preset }) => {
    switch (preset) {
      case 'title':
        return {
          mb: 36,
          size: 'xxl',
        }
      case 'title-small':
        return {
          dense: true,
          bold: true,
          mb: 26,
          size: 'xl',
        }
      case 'heading-large':
        return {
          dense: true,
          bold: true,
          mb: 22,
          size: 'l',
        }
      case 'heading':
        return {
          dense: true,
          mb: 22,
          size: 'l',
        }
      case 'heading-small':
        return {
          mb: 16,
          size: 'm',
        }
    }
    return {}
  })
  .build()
