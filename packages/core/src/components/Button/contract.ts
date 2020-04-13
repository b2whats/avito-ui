import React from 'react'
import { MarginProperties, DimensionProperties, ValignProperties } from '../../styled-system/'
import { ButtonTheme } from './theme'

type Element = HTMLButtonElement | HTMLLinkElement

// export enum trick allows per-platform declaration merging
export enum ButtonPreset { primary, default }

export interface ButtonProps extends MarginProperties, DimensionProperties, ValignProperties {
  children?: React.ReactNode
  /** Размер кнопки */
  size?: 's' | 'm' | 'l'
  /** Имя кнопки */
  name?: string
  /** Значение кнопки */
  value?: string | number
  /** Внешний вид кнопки */
  kind?: 'default' | 'outline' | 'flat'
  /** Нажатое состояние кнопки */
  checked?: boolean
  /** Неактивная кнопка */
  disabled?: boolean
  /** Цветовые варианты кнопки */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  /** Действие которое совершает кнопка */
  type?: 'button' | 'submit' | 'reset'
  /** Кнопка со спиннером */
  loading?: boolean
  /** Квадратная круглая и вытянутая форма с закругленными углами */
  shape?: 'pill' | 'square' | 'circle'
  /** Иконка слева */
  iconBefore?: React.ReactNode
  /** Иконка справа */
  iconAfter?: React.ReactNode
  /** Кнопка занимает всю ширину */
  block?: boolean
  /** Id елемента */
  id?: string
  /** Ссылка для перехода */
  href?: string
  /** Пресеты */
  preset?: keyof typeof ButtonPreset
  /** Ссылка на дом ноду */
  ref?: React.Ref<Element>
  /** Переопределиь тему компонента */
  override?: Partial<ButtonTheme>

  onClick?(event: React.MouseEvent<Element>): void
  onKeyDown?(event: React.KeyboardEvent<Element>): void
  onFocus?(event: React.FocusEvent<Element>): void
  onBlur?(event: React.FocusEvent<Element>): void
}

