import { dsl } from '../../theme'
import { CardTheme } from '../Card/theme'

export const alertTheme = dsl.theme<CardTheme>()
  .slot('Card', slot => ({
    props: {
      pt: 20,
      pb: 22,
      px: 24,
      borderColor: props => props.variant ? 'transparent' : 'gray12',
      borderWidth: 1,
      bg: slot.mapped('variant', {
        primary: 'blue50',
        secondary: 'gray4',
        success: 'green100',
        warning: 'orange50',
        error: 'red100',
      }),
    },
  }))
  .slot('Close', {
    props: {},
  })
  .slot('Image', slot => ({
    props: {
      order: 0,
      size: 28,
      mr: 18,
      valignSelf: 'top',
      color: slot.mapped('variant', {
        primary: 'blue600',
        secondary: 'gray64',
        success: 'green600',
        warning: 'orange700',
        error: 'red500',
      }),
    },
  }))
  .slot('Content', {
    props: {
      p: 0,
    },
  })
  .build()
