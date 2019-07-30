import React from 'react'
import { Theme, Tokens } from '../../theme/'
import { Space } from '../../styled-system/'

export interface ButtonProps extends Space {
  children?: React.ReactNode,
  /** Размер кнопки */
  size: 's' | 'm' | 'l',
  /** Внешний вид кнопки */
  kind: 'default' | 'outline' | 'flat',
  /** Кнопка как текст */
  rounded?: boolean,
  /** Неактивная кнопка */
  disabled?: boolean,
  /** Цветовые варианты кнопки */
  variant: keyof Tokens['variants'],
  /** Блочное поведение */
  block?: boolean,
  /** Действие которое совершает кнопка */
  type: 'button' | 'submit' | 'reset',
  /** Тег компонента */
  as?: 'a' | 'button',
  /** @ignore */
  theme: Theme,
}