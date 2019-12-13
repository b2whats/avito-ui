import React from 'react'
import { MarginProperties, DimensionProperties, Theme } from '../../styled-system/'

type ChildrenProps = {
  state: boolean | 'mixed',
  press: boolean,
  loading?: boolean,
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
  /** Ссылка на дом ноду */
  innerRef?: (node: HTMLInputElement | null) => void,

  onClick?(event: React.MouseEvent<HTMLInputElement>): void,
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void,
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void,
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void,
  onKeyDown?(event: React.KeyboardEvent<HTMLInputElement>): void,


  /** @ignore */
  scheme?: string,
}