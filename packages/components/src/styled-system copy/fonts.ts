import { Theme } from '../theme'

export type Fonts = {
  /** Имя шрифта */
  fontFamily?: string,
  /** Размер текста */
  fontSize?: 'inherit' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl' | 'xxxxxl',
  /** Коэффициент для высоты строки  */
  lineHeight?: 'inherit' | 'none' | 's' | 'm' | 'l',
  /** Расстояние между буквами */
  letterSpacing?: string,
  /** Начертание */
  weight?: 'inherit' | 'lighter' | 'normal' | 'bold',
  /** Курсивное начертание */
  italic?: boolean,
  /** Текст в верхнем регистре */
  uppercase?: boolean,
  /** Обрезка высоты строки у текста сверху и снизу */
  crop?: boolean,
  /** Текст без переносов */
  noWrap?: boolean,
}

type FontsProps = {
  theme: Theme,
} & Fonts

const computedCrop = (crop: number, lineHeight: number) => {
  const value = (crop + (lineHeight - 1) * 16) / 32 

  return Math.round(value * 10) / 10
}

export const fonts = ({ fontFamily, fontSize, lineHeight, weight, uppercase, letterSpacing, italic, noWrap, crop, theme: { font } }: FontsProps): string => {
  let css = ''

  fontFamily && (css += `font-family: ${fontFamily};`)
  fontSize && (css += `font-size: ${fontSize === 'inherit' ? 'inherit' : font[`fontSize_${fontSize}`] + 'px'};`)
  weight && (css += `font-weight: ${weight};`)
  uppercase && (css += 'text-transform: uppercase;')
  letterSpacing && (css += `letter-spacing: ${letterSpacing};`)
  italic && (css += 'font-style: italic;')
  noWrap && (css += 'white-space: nowrap;')

  if (lineHeight)  {
    lineHeight = lineHeight === 'none' ? 1 : font[`lineHeight_${lineHeight}`] || 'inherit'

    css += `line-height: ${lineHeight};`
  }


  crop && typeof lineHeight === 'number' && (css = `
    && {
      margin-top: 0;
      margin-bottom: 0;
      display: inline-block;
    }
    
    &::before, &::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    &::before { margin-bottom: -${computedCrop(font.crop_top, font[`lineHeight_${lineHeight}`])}em }
    &::after { margin-top: -${computedCrop(font.crop_bottom, font[`lineHeight_${lineHeight}`])}em }
  `)
  
  return css
}