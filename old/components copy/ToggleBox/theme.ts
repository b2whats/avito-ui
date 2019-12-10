import { ComponentTheme } from '../../../packages/components/src/theme'
import { PresetType } from '../../../packages/components/src/utils'
import { TextProps } from '../Text/contract'
import { ToggleBoxProps } from './contract'
import { VariantsProps } from '../Variants/contract'

export type ToggleBoxTheme = {
  preset: {
    Switch: PresetType<ToggleBoxProps, VariantsProps, 'size' | 'variant' | 'kind'>,
    Text: PresetType<ToggleBoxProps, TextProps, 'size' | 'labelPosition'>,
  },
}

export const toggleBoxTheme: ComponentTheme<ToggleBoxTheme> = (_, override) => {

  const preset: ToggleBoxTheme['preset'] = {
    Switch: {
      style: {
        border: 'contrast',
        borderHover: 'contrast',
        borderDisabled: 'contrast',
        backgroundDisabled: 'contrast-light',
        focus: true,
      },
      checked: {
        color: 'contrast-light',
        background: 'colored',
        backgroundHover: 'colored',
        backgroundDisabled: 'contrast',
      },
      size: {
        s: {
          style: {
            width: 14,
            height: 14,
          },
        },
        m: {
          style: {
            width: 16,
            height: 16,
          },
        },
        l: {
          style: {
            width: 20,
            height: 20,
          },
        },
      },
      variant: {
        error: {
          style: {
            border: 'colored',
            borderHover: 'colored',
          },
        },
      },
      kind: {
        checkbox: {
          style: {
            borderRadius: '3px',
            borderWidth: '1px',
            borderStyle: 'solid',
          },
          checked: {
            borderWidth: '0px',
          },
        },
        radio: {
          style: {
            borderRadius: '50%',
            borderWidth: '1px',
            borderStyle: 'solid',
          },
          checked: {
            borderWidth: '0px',
          },
        },
      },
    },
    Text: {
      style: {
        kind: 'label',
        lineHeight: 's',
      },
      size: {
        l: {
          style: {
            size: 'l',
          },
        },
      },
      labelPosition: {
        start: {
          style: {
            mr: 's',
          },
        },
        end: {
          style: {
            ml: 's',
          },
        },
      },
    },
  }

  return {
    preset,
    ...override,
  } as ToggleBoxTheme
}
