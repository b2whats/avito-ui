import React from 'react'
import { Theme, Tokens } from '../../../packages/components/src/theme'
import { Spaces } from '../../../packages/components/src/styled-system'

export interface InputBoxProps extends Spaces {
  children?: React.ReactNode,
  /** Размер */
  size?: 's' | 'm' | 'l',
  /** Имя елемента */
  name?: string,
  /** Значение елемента */
  value?: string | number,
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