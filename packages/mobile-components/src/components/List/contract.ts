import { SpaceProperties, DimensionProperties, CommonAttributes } from '@avito/core'

export interface ListItemProps extends SpaceProperties, DimensionProperties, CommonAttributes {
  /** Контент до текста */
  before?: React.ReactNode
  /** Выравнивание контента до текста */
  beforeValign?: 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch' | 'auto'
  /** Контент после текста */
  after?: React.ReactNode
  /** Выравнивание контента после текста */
  afterValign?: 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch' | 'auto'
  /** Кастомный контент */
  children?: React.ReactNode
  /** Заголовок */
  label: React.ReactNode
  /** Подпись */
  caption?: React.ReactNode
  /** Ссылка */
  link?: React.ReactNode
  /** Неактивное состояние */
  disabled?: boolean
  /** Инлайновое поведение */
  inline?: boolean

  beforeTreshold?: number
  afterTreshold?: number
}
