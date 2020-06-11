import { ReactText } from 'react'
import { Theme } from '../../theme/'
import { SpaceProperties, DimensionProperties, ColorProperties, BorderProperties, LayoutProperties, TextProperties } from '../../styled-system/'

type LayoutProps = SpaceProperties & ColorProperties & DimensionProperties & BorderProperties & LayoutProperties & TextProperties

export interface GridProps extends LayoutProps {
  /** Горизонтальный отступ между дочерними блоками */
  spacing: keyof Theme['space'] | number
  /** Верикальный отступ между дочерними блоками */
  spacingY: keyof Theme['space'] | number
  /** Содержание */
  children?: React.ReactNode
  /** @ignore */
  debug?: boolean
}

export interface PageProps extends LayoutProps {
  /** Содержание */
  children?: React.ReactNode
}

export interface BoxProps extends LayoutProps {
  /** Содержание */
  children?: React.ReactNode
}

export interface StackProps extends LayoutProps {
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

type onChangeProps = {
  name?: string
  mode?: string
  type: string
  value?: ReactText | ReactText[] | null
}

export interface GroupProps extends LayoutProps {
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

  /** Событие изменения значения */
  onChange?: (props: onChangeProps) => void
}