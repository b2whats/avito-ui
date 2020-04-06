import React from 'react'
import { MarginProperties } from '../../styled-system/'
import { ButtonTheme } from './theme'

export interface ButtonProps extends MarginProperties {
  children?: React.ReactNode
  /** Размер кнопки */
  size: 's' | 'm' | 'l'
  /** Имя кнопки */
  name?: string
  /** Значение кнопки */
  value?: string | number
  /** Внешний вид кнопки */
  kind: 'default' | 'outline' | 'flat'
  /** Нажатое состояние кнопки */
  checked?: boolean
  /** Неактивная кнопка */
  disabled?: boolean
  /** Цветовые варианты кнопки */
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  /** Действие которое совершает кнопка */
  type?: 'button' | 'submit' | 'reset'
  /** Кнопка со спиннером */
  loading?: boolean
  /** Квадратная круглая и вытянутая форма с закругленными углами */
  shape: 'pill' | 'square' | 'circle'
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
  preset?: 'primary' | 'accent' | 'secondary' | 'default' | 'defaultOnSurface' | 'defaultDark' | 'outline' | 'pay' | 'appInstall' | 'linkIncreased'
  /** Ссылка на дом ноду */
  ref?: (node: HTMLButtonElement | HTMLAnchorElement | null) => void
  /** Переопределиь тему компонента */
  override?: Partial<ButtonTheme>

  onClick?(event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void
  onKeyDown?(event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>): void
}

