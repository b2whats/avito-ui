import { ComponentTheme } from '../../theme/'
import { TextProps } from './contract'
import { IconProps } from '../Icon/contract'

type Preset = {
  Text: Partial<TextProps>,
  Point: Partial<IconProps>,
}

export type TextTheme = {
  size_xxxxxl_fontSize: string,
  size_xxxxl_fontSize: string,
  size_xxxl_fontSize: string,
  size_xxl_fontSize: string,
  size_xl_fontSize: string,
  size_l_fontSize: string,
  size_m_fontSize: string,
  size_s_fontSize: string,

  lineHeight_l: number,
  lineHeight_m: number,
  lineHeight_s: number,
  
  fontFamily: string,
  fontWeight: number,
  color: string,

  strike_offset: string,
  strike_height: string,

  underline_offset: string,
  underline_height: string,

  crop_top: number,
  crop_bottom: number,

  preset: {
    h1: Preset,
    h2: Preset,
    h3: Preset,
    h4: Preset,
    h5: Preset,
    h6: Preset,
    caption: Preset,
    p: Preset,
    li: Preset,
    label: Preset,
    none: Preset,
  },
}

type ComputedTextTheme = {
  crop_s_top: number,
  crop_s_bottom: number,
  crop_m_top: number,
  crop_m_bottom: number,
  crop_l_top: number,
  crop_l_bottom: number,
}

const computedFontSize = (base: number, ratio: number) => ({
  size_xxxxxl_fontSize: `${Math.ceil(base * ratio ** 6)}px`,
  size_xxxxl_fontSize: `${Math.ceil(base * ratio ** 5)}px`,
  size_xxxl_fontSize: `${Math.ceil(base * ratio ** 4)}px`,
  size_xxl_fontSize: `${Math.ceil(base * ratio ** 3)}px`,
  size_xl_fontSize: `${Math.ceil(base * ratio ** 2)}px`,
  size_l_fontSize: `${Math.ceil(base * ratio)}px`,
  size_m_fontSize: `${base}px`,
  size_s_fontSize: `${Math.ceil(base / ratio)}px`,
})

const computedCrop = (crop: number, targetHeight: number) => {
  const value = (crop + (targetHeight - 1) * 16) / 32 

  return Math.round(value * 10) / 10
}

export const textTheme: ComponentTheme<TextTheme & ComputedTextTheme> = ({ font, palette }, override) => {

  const defaultTheme: TextTheme = {
    ...computedFontSize(font.fontSize, font.sizeScale),
  
    fontFamily: font.fontFamily,
    fontWeight: font.fontWeight,
    color: palette.gray90,

    lineHeight_l: font.lineHeight + 0.1,
    lineHeight_m: font.lineHeight,
    lineHeight_s: font.lineHeight - 0.15,
  
    strike_offset: '4px',
    strike_height: '2px',

    underline_offset: '0px',
    underline_height: '1px',
  
    crop_top: 3,
    crop_bottom: 5,

    preset: {
      h1: {
        Text: {
          as: 'h1',
          size: 'xxxxxl',
          bold: true,
          mb: 'xl',
          lineHeight: 's',
        },
        Point: {
          mr: 's',
        },
      },
      h2: {
        Text: {
          as: 'h2',
          size: 'xxxxl',
          bold: true,
          mb: 'xl',
          lineHeight: 's',
        },
        Point: {
          mr: 's',
        },
      },
      h3: {
        Text: {
          as: 'h3',
          size: 'xxl',
          mb: 'm',
          lineHeight: 's',
        },
        Point: {
          mr: 's',
        },
      },
      h4: {
        Text: {
          as: 'h4',
          size: 'xl',
          mb: 's',
          lineHeight: 's',
        },
        Point: {
          mr: 's',
        },
      },
      h5: {
        Text: {
          as: 'h5',
          size: 'l',
          mb: 's',
          lineHeight: 's',
        },
        Point: {
          mr: 's',
        },
      },
      h6: {
        Text: {
          as: 'h6',
          size: 'm',
          mb: 's',
          lineHeight: 's',
        },
        Point: {
          mr: 's',
        },
      },
      caption: {
        Text: {
          as: 'div',
          size: 'm',
          mb: 's',
          lineHeight: 'm',
          color: 'gray50',
        },
        Point: {},
      },
      p: {
        Text: {
          as: 'p',
          size: 'm',
          mb: 's',
          lineHeight: 'm',
          light: true,
        },
        Point: {
          mr: 's',
        },
      },
      li: {
        Text: {
          as: 'li',
          size: 'm',
          lineHeight: 'm',
          light: true,
        },
        Point: {
          mr: 'm',
        },
      },
      label: {
        Text: {
          as: 'label',
          size: 'm',
          lineHeight: 'm',
          light: true,
        },
        Point: {},
      },
      none: {
        Text: {},
        Point: {},
      },
    },
    ...override,
  } as TextTheme

  const computedTheme = () => ({
    crop_s_top: computedCrop(defaultTheme.crop_top, defaultTheme.lineHeight_s),
    crop_s_bottom: computedCrop(defaultTheme.crop_bottom, defaultTheme.lineHeight_s),
    crop_m_top: computedCrop(defaultTheme.crop_top, defaultTheme.lineHeight_m),
    crop_m_bottom: computedCrop(defaultTheme.crop_bottom, defaultTheme.lineHeight_m),
    crop_l_top: computedCrop(defaultTheme.crop_top, defaultTheme.lineHeight_l),
    crop_l_bottom: computedCrop(defaultTheme.crop_bottom, defaultTheme.lineHeight_l),
  })

  return {
    ...defaultTheme,
    ...computedTheme(),
  }
}
