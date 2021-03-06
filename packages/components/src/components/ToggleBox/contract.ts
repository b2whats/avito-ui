import React from 'react'
import { Theme, Tokens } from '../../theme'
import { Spaces } from '../../styled-system'

export interface ToggleBoxProps extends Spaces {
  children?(checked: boolean | 'mixed'): React.ReactNode,
  /** Размер */
  size?: 's' | 'm' | 'l',
  /** Поведение */
  mode: 'checkbox' | 'radio',
  /** Поведение */
  kind?: 'checkbox' | 'radio' | 'switch',
  /** Имя елемента */
  name?: string,
  /** Значение елемента */
  value?: string | number,
  /** Состояние елемента */
  checked?: boolean,
  /** Неопределенное состояние елемента */
  indeterminate?: boolean,
  /** Текст лейбла */
  label?: string,
  /** Позиция лейбла */
  labelPosition?: 'start' | 'end',
  /** Неактивное состояние */
  disabled?: boolean,
  /** Цветовые варианты */
  variant: keyof Tokens['variants'],
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
  theme?: Theme,
}