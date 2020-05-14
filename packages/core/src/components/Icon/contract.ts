import React from 'react'
import { SpaceProperties, ColorProperties, AlignProperties } from '../../styled-system/'
import { IconTheme } from './theme'

type MouseHandler = (event: React.MouseEvent<SVGSVGElement | HTMLButtonElement>) => void

export interface BaseIconProps extends SpaceProperties, ColorProperties, AlignProperties {
  children: React.ReactNode
  /** Имя */
  name: string,
  /** Размеры конейнера с иконкой */
  viewBox: string,
  /** Размер иконки */
  size?: number | 's' | 'm' | 'l' | 'auto'
  /** Поворот иконки */
  rotate?: number
  /** Вращение иконки */
  spin?: number | boolean
  /** Цветовые варианты иконок */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  /** Зона областии для клика */
  area?: number
  /** Добавляет тень для иконки */
  shadow?: boolean | string
  /** Переопределиь тему компонента */
  override?: IconTheme
  /** Состояние disabled */
  disabled?: boolean


  onClick?: MouseHandler
}

export interface IconProps extends Omit<BaseIconProps, 'children' | 'name' | 'viewBox'> {}