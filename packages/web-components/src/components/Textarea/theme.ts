import { DeepPartial, TextareaTheme } from '@avito/core'
import { CrossIcon } from '../Icon/'

export const textareaTheme: DeepPartial<TextareaTheme> = {
  scheme: {
    IconClear: {
      component: CrossIcon,
    },
  },
}