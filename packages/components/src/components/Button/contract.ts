import React from 'react'
import { Theme, Tokens } from '../../theme/'
import { Spaces, Dimensions } from '../../styled-system/'

export interface ButtonProps extends Spaces, Dimensions {
  children?: React.ReactNode,
  /** Размер кнопки */
  size: 's' | 'm' | 'l',
  /** Имя кнопки */
  name?: string,
  /** Значение кнопки */
  value?: string | number,
  /** Внешний вид кнопки */
  kind: 'default' | 'outline' | 'flat',
  /** Закругленные углы */
  rounded?: boolean,
  /** Неактивная кнопка */
  disabled?: boolean,
  /** Цветовые варианты кнопки */
  variant: keyof Tokens['variants'],
  /** Действие которое совершает кнопка */
  type?: 'button' | 'submit' | 'reset',
  /** Кнопка со спиннером */
  loading: boolean,
  /** Тег компонента */
  as?: 'a' | 'button',
  /** Id елемента */
  id?: string,
  /** Ссылка для перехода */
  href?: string,
  /** Ссылка на дом ноду */
  innerRef?: (node: HTMLButtonElement | HTMLLinkElement | null) => void,

  onClick?(event: React.MouseEvent<HTMLButtonElement | HTMLLinkElement>): void,
  onKeyDown?(event: React.KeyboardEvent<HTMLButtonElement | HTMLLinkElement>): void,
  
  /** @ignore */
  theme?: Theme,
}