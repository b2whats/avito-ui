import { Space, SpaceValues, Dimensions } from '../../styled-system'
import { Theme } from '../../theme'

type Align = 'start' | 'center' | 'end' | 'baseline' | 'stretch'
type Justify = 'start' | 'center' | 'end' | 'space-between' | 'space-around'
type Display = 'inline' | 'block' | 'flex' | 'inline-flex'

export interface GridProps extends Space, Dimensions {
  /** Отступ между дочерними блоками */
  space: SpaceValues,
  /** Отступ между дочерними блоками по вертикали */
  spaceY: SpaceValues,
  /** Вертикальное выравнивание дочерних блоков */
  align: Align,
  /** Содержание */
  children?: React.ReactNode,
  /** Горизонтальное выравнивание дочерних блоков */
  justify?: Justify,
  /** @ignore */
  theme?: Theme,
  /** @ignore */
  debug?: boolean,
}

export interface BoxProps extends Space, Dimensions {
  /** Содержание */
  children?: React.ReactNode,
  /** Вертикальное выравнивание */
  alignSelf: Align,
  /** Уменьшать при нехватке пространства */
  shrink: boolean,
  /** Занять все возможзное пространство */
  grow: boolean,
  /** Определяет, как элемент должен быть показан в документе */
  display: Display,
  /** @ignore */
  theme: Theme,
}

export interface StackProps extends Space, Dimensions {
  /** Содержание */
  children?: React.ReactNode,
  /** Отступ между дочерними блоками */
  space: SpaceValues,
  /** Вертикальный ритм */
  column?: boolean,
  /** Вертикальное выравнивание дочерних блоков */
  align?: Align,
  /** Горизонтальное выравнивание дочерних блоков */
  justify?: Justify,
  /** Инлайновое поведение */
  inline?: boolean,
  /** @ignore */
  theme?: Theme,
  /** @ignore */
  debug?: boolean,
}