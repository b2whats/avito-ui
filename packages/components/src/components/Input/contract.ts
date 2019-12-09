import React from 'react'
import { MarginProperties } from '../../styled-system/'

export interface InputCoreProps {
  /** Автоматическая ширина поля */
  autoSize?: boolean,
  /** Id */
  id?: string,
  /** Имя */
  name?: string,
  /** Тип */
  type?: string,
  /** Значение */
  value?: string | number,
  /** Подсказка */
  placeholder?: string,
  /** Неактивное состояние */
  disabled?: boolean,
  /** Класс элемента */
  className?: string,
  /** Ссылка на дом ноду */
  innerRef?: (node: HTMLInputElement | null) => void,

  onClick?(event: React.MouseEvent<HTMLInputElement>): void,
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void,
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void,
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void,
  onKeyDown?(event: React.KeyboardEvent<HTMLInputElement>): void,
  onMouseDown?(event: React.MouseEvent<HTMLInputElement>): void,
}

export interface InputProps extends Omit<InputCoreProps, 'className'>, MarginProperties {
  /** Размер */
  size?: 's' | 'm' | 'l',
  /** Крестик очистки */
  clearable?: boolean | 'always',
  /** Состояние загрузки */
  loading?: boolean,
  /** Цветовые варианты */
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error',
  /** Иконка в начале */
  iconBefore?: string | React.ReactNode,
  /** Иконка в конце */
  iconAfter?: string | React.ReactNode,
  /** Иконка перед инпутом */
  prefix?: string | React.ReactNode,
  /** Иконка после инпута */
  postfix?: string | React.ReactNode,
  /** Инлайновое поведение */
  inline?: boolean,
  /** Ссылка на дом ноду */
  innerRef?: (node: HTMLInputElement | null) => void,
}
