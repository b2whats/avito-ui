import React from 'react'
import { MarginProperties } from '../../styled-system/' 

export interface ButtonProps extends MarginProperties {
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
  /** Нажатое состояние кнопки */
  checked?: boolean,
  /** Неактивная кнопка */
  disabled?: boolean,
  /** Цветовые варианты кнопки */
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error',
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
}