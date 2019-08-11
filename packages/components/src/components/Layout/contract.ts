import { Spaces, SpaceValues, Dimensions } from '../../styled-system'
import { Theme } from '../../theme'
import { ReactText } from 'react'

type Align = 'start' | 'center' | 'end' | 'baseline' | 'stretch'
type Justify = 'start' | 'center' | 'end' | 'space-between' | 'space-around'
type Display = 'inline' | 'block' | 'flex' | 'inline-flex'

export interface GridProps extends Spaces, Dimensions {
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

export interface BoxProps extends Spaces, Dimensions {
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

export interface StackProps extends Spaces, Dimensions {
  /** Содержание */
  children?: React.ReactNode,
  /** Отступ между дочерними блоками */
  space?: SpaceValues,
  /** Вертикальный ритм */
  column?: boolean,
  /** Добавляет скролл */
  scroll?: boolean,
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

type onChangeProps = {
  name?: string,
  type: string,
  value?: ReactText | ReactText[] | null,
}

export interface GroupProps extends Spaces, Dimensions {
  /** Содержание */
  children?: React.ReactNode,
  /** Блочное поведение */
  block?: boolean,
  /** Вертикальный ритм */
  column?: boolean,
  /** Имя группы */
  name?: string,
  /** Режим для события onClick */
  mode?: 'checkbox' | 'radio',
  /** Выбранные элементы */
  value?: ReactText | ReactText[] | null,

  /** Событие изменения значения */
  onChange?: (props: onChangeProps) => void,
}