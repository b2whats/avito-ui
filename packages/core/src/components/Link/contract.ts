import { TextProps } from '../Text/'

export interface LinkProps extends TextProps {
  download?: any
  /** Отношение между текущим документом и ссылкой */
  rel?: string
  /** Где будет открыта ссылка */
  target?: '_blank' | '_parent' | ' _self' | '_top'
  /** Тип документа по ссылке */
  type?: string
  /** referrer */
  referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'unsafe-url'
  /** Адресс ссылки */
  href?: string
  /** Цветовые варианты ссылки */
  variant?: 'primary' | 'secondary'
  /** Убрать состояние посещенной ссылки */
  noVisited?: boolean
}
