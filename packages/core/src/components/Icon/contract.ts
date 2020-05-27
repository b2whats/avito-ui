import React from 'react'
import { SpaceProperties, ColorProperties, AlignProperties, DimensionProperties, BorderProperties, LayoutProperties, VisibilityProperties } from '../../styled-system/'

type MouseHandler = (event: React.MouseEvent<SVGSVGElement | HTMLButtonElement>) => void
type StyleProps = AlignProperties & SpaceProperties & ColorProperties & DimensionProperties & BorderProperties & LayoutProperties & VisibilityProperties

export interface BaseIconProps extends StyleProps {
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
