import React from 'react'
import { Variant, StyleProperties } from '../../styled-system'

import { CommonAttributes } from '../../utils/'

// export enum trick allows per-platform declaration merging
export enum ButtonPreset { primary, default }

export interface ButtonProps extends StyleProperties, Variant, CommonAttributes<HTMLButtonElement | HTMLLinkElement> {
  /** Размер кнопки */
  size?: 's' | 'm' | 'l'
  /** Имя кнопки */
  name?: string
  /** Значение кнопки */
  value?: string | number
  /** Внешний вид кнопки */
  kind?: 'fill' | 'outline' | 'flat'
  /** Нажатое состояние кнопки */
  checked?: boolean
  /** Неактивная кнопка */
  disabled?: boolean
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
  /** Вторая строка */
  multiline?: boolean
  /** Кнопка занимает всю ширину */
  block?: boolean
  /** Ссылка для перехода */
  href?: string
  /** Пресеты */
  preset?: keyof typeof ButtonPreset

  pressedOffset?: number
}
