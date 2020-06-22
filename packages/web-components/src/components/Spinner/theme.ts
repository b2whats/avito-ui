import { SpinnerTheme, DeepPartial } from '@avito/core'
import { SpinnerIcon } from '../Icon'

export const spinnerTheme: DeepPartial<SpinnerTheme> = {
  defaultProps: {
    speed: 1,
  },
  scheme: {
    Spinner: {
      component: SpinnerIcon,
    },
  },
}
