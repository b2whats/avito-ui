import { ReactText } from 'react'
import { StyleProperties } from '../../styled-system/'
import { Theme } from '../../theme/'
import { CommonAttributes } from '../../utils/'

export interface GridProps extends StyleProperties, CommonAttributes {
  /** Горизонтальный отступ между дочерними блоками */
  spacing: keyof Theme['space'] | number
  /** Верикальный отступ между дочерними блоками */
  spacingY: keyof Theme['space'] | number
  /** Содержание */
  children?: React.ReactNode
  /** @ignore */
  debug?: boolean
}

export interface PageProps extends StyleProperties {
  /** Содержание */
  children?: React.ReactNode
}

export interface BoxProps extends StyleProperties, CommonAttributes<HTMLDivElement> {
  /** Содержание */
  children?: React.ReactNode
}

export interface StackProps extends StyleProperties, CommonAttributes<HTMLDivElement> {
  /** Содержание */
  children?: React.ReactNode
  /** Отступ между дочерними блоками по главной оси */
  spacing?: keyof Theme['space'] | number
  /** Отступ между дочерними блоками по перпендикулярной оси */
  spacingCross?: keyof Theme['space'] | number
  /** Изменить тег */
  as?: string

  /** @ignore */
  debug?: boolean
}

export interface GroupProps extends StyleProperties, CommonAttributes<HTMLDivElement, ReactText | ReactText[] | null> {
  /** Содержание */
  children?: React.ReactNode
  /** Горизонтальный отступ между дочерними блоками */
  spacing?: keyof Theme['space'] | number
  /** Имя группы */
  name?: string
  /** Неактивный контрол */
  disabled?: boolean
  /** Режим для события onClick */
  mode?: 'checkbox' | 'radio'
  /** Выбранные элементы */
  value?: ReactText | ReactText[] | null
}
