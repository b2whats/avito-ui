import { Spaces, SpaceValues, Dimensions } from '../../styled-system'
import { Tokens } from '../../theme'
import { ReactText } from 'react'
import { SpaceProperties, DimensionProperties } from '../../styled-system/'

type Display = 'inline' | 'block' | 'flex' | 'inline-flex'

export interface GridProps extends SpaceProperties, DimensionProperties {
  /** Отступ между дочерними блоками */
  space: keyof Tokens['space'] | number,
  /** Отступ между дочерними блоками по вертикали */
  spaceY: keyof Tokens['space'] | number,
  /** Горизонтальное выравнивание дочерних блоков  */
  align?: 'left' | 'center' | 'right' | 'justify',
  /** Вертикальное выравнивание дочерних блоков  */
  valign?: 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch',
  /** Содержание */
  children?: React.ReactNode,
  /** @ignore */
  debug?: boolean,
}

export interface BoxProps extends SpaceProperties, DimensionProperties {
  /** Содержание */
  children?: React.ReactNode,
  /** Вертикальное выравнивание */
  valignSelf?: 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch',
  /** Уменьшать при нехватке пространства */
  shrink?: boolean,
  /** Занять все возможзное пространство */
  grow?: boolean,
  /** Определяет, как элемент должен быть показан в документе */
  display?: Display,
  /** Тень блока */
  //shadow?: keyof Tokens['shadows'],
  /** Цвет текста */
  color?: keyof Tokens['palette'],
  /** Цвет фона */
  backgroundColor?: keyof Tokens['palette'],
  /** Радиус */
  radius?: string,
}

export interface StackProps extends SpaceProperties, DimensionProperties {
  /** Содержание */
  children?: React.ReactNode,
  /** Отступ между дочерними блоками */
  space?: SpaceValues,
  /** Вертикальный ритм */
  column?: boolean,
  /** Добавляет скролл */
  scroll?: boolean,
  /** Горизонтальное выравнивание дочерних блоков  */
  align?: 'left' | 'center' | 'right' | 'justify',
  /** Вертикальное выравнивание дочерних блоков  */
  valign?: 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch',
  /** Инлайновое поведение */
  inline?: boolean,
  /** @ignore */
  debug?: boolean,
}

type onChangeProps = {
  name?: string,
  type: string,
  value?: ReactText | ReactText[] | null,
}

export interface GroupProps extends SpaceProperties, DimensionProperties {
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