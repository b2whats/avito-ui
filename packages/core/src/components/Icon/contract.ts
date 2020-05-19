import React from 'react'
import { DimensionProperties, SpaceProperties, ColorProperties, AlignProperties, BorderProperties, VisibilityProperties } from '../../styled-system/'

type MouseHandler = (event: React.MouseEvent<SVGSVGElement | HTMLButtonElement>) => void

export interface BaseIconProps extends BorderProperties, DimensionProperties, SpaceProperties, ColorProperties, AlignProperties, VisibilityProperties {
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
  /** Состояние disabled */
  disabled?: boolean
  /** Переопределиь тему компонента */
  override?: IconTheme

  onClick?: MouseHandler
}

export interface IconProps extends Omit<BaseIconProps, 'children' | 'name' | 'viewBox'> {}
