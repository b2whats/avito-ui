import React from 'react'
import { IconProps } from '../Icon/contract'
import { MarginProperties, DimensionProperties, AlignProperties } from '../../styled-system/'

type ChildrenProps = {
  checked: boolean | 'mixed',
  loading?: boolean,
  iconProps?: IconProps

}

type onChangeProps = {
  name?: string,
  value?: string | number,
  checked: boolean,
  type: 'checkbox' | 'radio',
}

export interface ToggleProps extends MarginProperties, DimensionProperties, AlignProperties {
  children?(props: ChildrenProps): React.ReactNode,
  /** Размер */
  size?: 's' | 'm' | 'l',
  /** Поведение */
  mode: 'checkbox' | 'radio',
  /** Имя елемента */
  name?: string,
  /** Значение елемента */
  value?: string | number,
  /** Состояние елемента */
  checked?: boolean,
  /** Состояние загрузки */
  loading?: boolean,
  /** Неопределенное состояние елемента */
  indeterminate?: boolean,
  /** Квадратная, круглая и с закругленными углами */
  shape: 'square' | 'circle' | 'pill',
  /** Текст лейбла */
  label?: string,
  /** Текст подсказки */
  description?: string,
  /** Позиция лейбла */
  labelPosition?: 'start' | 'end',
  /** Цветовые варианты */
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error',
  /** Неактивное состояние */
  disabled?: boolean,
  /** Id елемента */
  id?: string,
  /** Класс елемента */
  className?: string,
  /** Позиция элемента при фокусе */
  tabIndex?: number,
  /** Переопределиь тему компонента */
  override?: object,

  onClick?(event: React.MouseEvent<HTMLInputElement>): void,
  onChange?(props: onChangeProps): void,
  onMouseEnter?(): void,
  onMouseLeave?(): void,
  onKeyDown?(event: React.KeyboardEvent<HTMLInputElement>): void,
}