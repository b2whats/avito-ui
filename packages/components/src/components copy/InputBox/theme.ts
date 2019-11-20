import { ComponentTheme } from '../../theme'
import { PresetType } from '../../utils'
import { InputBoxProps } from './contract'
import { VariantsProps } from '../Variants/contract'

export type InputBoxTheme = {
  preset: {
    Container: PresetType<InputBoxProps, VariantsProps, 'size'>,
    StyledBox: PresetType<InputBoxProps, VariantsProps, 'size' | 'variant'>,
  },
}

export const inputBoxTheme: ComponentTheme<InputBoxTheme> = (_, override) => {

  const preset: InputBoxTheme['preset'] = {
    Container: {
      style: {
        borderRadius: '3px',
        background: 'contrast-light',
        backgroundDisabled: 'contrast-light',
      },
      size: {
        s: {
          style: {
            height: 's',
            fontSize: 's',
            px: 's',
          },
        },
        m: {
          style: {
            height: 'm',
            fontSize: 'm',
            px: 'm',
          },
        },
        l: {
          style: {
            fontSize: 'm',
            height: 'l',
            px: 'm',
          },
        },
      },      
    },
    StyledBox: {
      style: {
        borderStyle: 'solid',
        borderWidth: '1px',
        border: 'contrast',
        borderHover: 'contrast',
        borderDisabled: 'contrast',
        backgroundDisabled: 'contrast-light',
        focus: true,
      },
    },
  }

  return {
    preset,
    ...override,
  } as InputBoxTheme
}
