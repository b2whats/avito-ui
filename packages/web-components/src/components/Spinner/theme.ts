import { SpinnerTheme, dsl } from '@avito/core'
import { SpinnerIcon } from '../Icon'

export const spinnerTheme = dsl.theme<SpinnerTheme>()
  .defaultProps({
    speed: 1,
    size: 's',
    variant: 'primary',
  })
  .slot('Spinner', {
    component: SpinnerIcon,
  })
  .build()
