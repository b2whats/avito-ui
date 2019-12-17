import React from 'react'
import { MarginProperties, DimensionProperties, Theme } from '../../styled-system/'

type ChildrenProps = {
  checked: boolean | 'mixed',
  active: boolean,
  loading?: boolean,
}

type onChangeProps = {
  name?: string,
  value?: string | number,
  checked: boolean,
  type: 'checkbox' | 'radio',
}

export interface ToggleProps extends MarginProperties, DimensionProperties {
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
  /** Переопределить тему */
  override?: object,
  /** Ссылка на дом ноду */
  innerRef?: (node: HTMLInputElement | null) => void,

  onClick?(): void,
  onChange?(props: onChangeProps): void,
  onMouseEnter?(): void,
  onMouseLeave?(): void,
  onKeyDown?(event: React.KeyboardEvent<HTMLInputElement>): void,
}