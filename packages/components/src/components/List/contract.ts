import { SpaceProperties, DimensionProperties } from '../../styled-system/'

export interface ListItemProps extends SpaceProperties, DimensionProperties {
  /** Контент до текста */
  before?: React.ReactNode,
  /** Выравнивание контента до текста */
  beforeValign?: 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch' | 'auto',
  /** Контент после текста */
  after?: React.ReactNode,
  /** Выравнивание контента после текста */
  afterValign?: 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch' | 'auto',
  /** Кастомный контент */
  children?: React.ReactNode,
  /** Заголовок */
  label: React.ReactNode,
  /** Подпись */
  caption?: React.ReactNode,
  /** Ссылка */
  link?: React.ReactNode,
  /** Неактивное состояние */
  disabled?: boolean,
  /** Обработка клика */
  interactive?: boolean,

  onClick?: () => void,
}