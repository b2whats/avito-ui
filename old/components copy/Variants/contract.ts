import React from 'react'
import { Theme, Tokens } from '../../../packages/components/src/theme'
import { Spaces, Dimensions, Shadows, Position, Fonts } from '../../../packages/components/src/styled-system'

export type VariantsColor = 'contrast' | 'contrast-light' | 'colored' | 'transparent'

export interface VariantsProps extends Spaces, Dimensions, Shadows, Position, Fonts {
  children?: React.ReactNode,
  /** Цвет текста в обычном состояни */
  color?: VariantsColor,
  /** Цвет текста в состояни ховера */
  colorHover?: VariantsColor,
  /** Цвет текста в нажатом состояни */
  colorActive?: VariantsColor,
  /** Цвет текста в активном состояни */
  colorChecked?: VariantsColor,
  /** Цвет текста в состояни фокуса */
  colorFocus?: VariantsColor,
  /** Цвет текста в неактивном состояни */
  colorDisabled?: VariantsColor,
  /** Цвет границ в обычном состояни */
  border?: VariantsColor,
  /** Цвет границ в состояни ховера */
  borderHover?: VariantsColor,
  /** Цвет границ в нажатом состояни */
  borderActive?: VariantsColor,
  /** Цвет границ в активном состояни */
  borderChecked?: VariantsColor,
  /** Цвет границ в состояни фокуса */
  borderFocus?: VariantsColor,
  /** Цвет границ в неактивном состояни */
  borderDisabled?: VariantsColor,
  /** Цвет фона в обычном состояни */
  background?: VariantsColor,
  /** Цвет фона в состояни ховера */
  backgroundHover?: VariantsColor,
  /** Цвет фона в нажатом состояни */
  backgroundActive?: VariantsColor,
  /** Цвет фона в активном состояни */
  backgroundChecked?: VariantsColor,
  /** Цвет фона в состояни фокуса */
  backgroundFocus?: VariantsColor,
  /** Цвет фона в неактивном состояни */
  backgroundDisabled?: VariantsColor,
  /** Скругление границ */
  borderRadius?: string,
  /** Толщина границ */
  borderWidth?: string,
  /** Стиль границ */
  borderStyle?: 'solid' | 'dotted' | 'dashed',
  /** Цветовые варианты */
  variant?: keyof Tokens['variants'],
  /** Фокус */
  focus?: boolean,
  /** Модификатор соседнего селектора для применяемых стлей */
  adjacentSelector?: string,
  /** Класс */
  className?: string,
  /** @ignore */
  as?: string,
  /** @ignore */
  theme?: Theme,
}