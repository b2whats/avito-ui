import { TextProps } from '../Text/'
export interface LinkProps extends TextProps {
  /** Адресс ссылки */
  href?: string
  /** Цветовые варианты ссылки */
  variant?: 'primary' | 'secondary'
  /** Наследование стилей от родителя */
  inherit?: boolean
  /** Убрать состояние посещенной ссылки */
  noVisited?: boolean
}