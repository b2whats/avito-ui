import { Theme } from '../../theme/'
import { ReactText } from 'react'
import { SpaceProperties, DimensionProperties, ColorProperties } from '../../styled-system/'

type Display = 'inline' | 'block' | 'flex' | 'inline-flex' | 'inline-block'

export interface GridProps extends SpaceProperties, DimensionProperties {
  /** Отступ между дочерними блоками */
  spacing: keyof Theme['space'] | number
  /** Отступ между дочерними блоками по вертикали */
  spacingY: keyof Theme['space'] | number
  /** Горизонтальное выравнивание дочерних блоков  */
  align?: 'left' | 'center' | 'right' | 'justify'
  /** Вертикальное выравнивание дочерних блоков  */
  valign?: 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch'
  /** Вертикальное выравнивание */
  valignSelf?: 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch'
  /** Инлайновое поведение */
  inline?: boolean
  /** Содержание */
  children?: React.ReactNode
  /** @ignore */
  debug?: boolean
}

export interface PageProps extends SpaceProperties, DimensionProperties, ColorProperties {
  /** Содержание */
  children?: React.ReactNode
  /** Определяет, как элемент должен быть показан в документе */
  display?: Display
}

export interface BoxProps extends SpaceProperties, DimensionProperties, ColorProperties {
  /** Содержание */
  children?: React.ReactNode
  /** Вертикальное выравнивание */
  valignSelf?: 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch'
  /** Определяет как элемент должен быть показан в документе */
  display?: Display
  /** Тень блока */
  //shadow?: keyof Theme['shadows']
  /** Радиус */
  rounded?: 's' | 'm' | 'l' | 'circle' | number
}

export interface StackProps extends SpaceProperties, DimensionProperties, ColorProperties {
  /** Содержание */
  children?: React.ReactNode
  /** Горизонтальный отступ между дочерними блоками */
  spacing?: keyof Theme['space'] | number
  /** Вертикальный ритм */
  column?: boolean
  /** Добавляет скролл */
  scroll?: boolean
  /** Горизонтальное выравнивание дочерних блоков  */
  align?: 'left' | 'center' | 'right' | 'justify'
  /** Вертикальное выравнивание дочерних блоков  */
  valign?: 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch'
  /** Вертикальное выравнивание */
  valignSelf?: 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch'
  /** Инлайновое поведение */
  inline?: boolean
  /** Переносить блоки на следующие строки если не хватило места */
  wrap?: boolean
  /** Изменить тег */
  as?: string
  ref?: (node: HTMLElement | null) => void
  /** @ignore */
  debug?: boolean
}

type onChangeProps = {
  name?: string
  mode?: string
  type: string
  value?: ReactText | ReactText[] | null
}

export interface GroupProps extends SpaceProperties, DimensionProperties, ColorProperties {
  /** Содержание */
  children?: React.ReactNode
  /** Блочное поведение */
  block?: boolean
  /** Горизонтальный отступ между дочерними блоками */
  spacing?: keyof Theme['space'] | number
  /** Вертикальный ритм */
  column?: boolean
  /** Имя группы */
  name?: string
  /** Добавляет скролл */
  scroll?: boolean
  /** Неактивный контрол */
  disabled?: boolean
  /** Режим для события onClick */
  mode?: 'checkbox' | 'radio'
  /** Выбранные элементы */
  value?: ReactText | ReactText[] | null

  /** Событие изменения значения */
  onChange?: (props: onChangeProps) => void
}