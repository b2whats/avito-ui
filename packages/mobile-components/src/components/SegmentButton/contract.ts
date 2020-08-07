import { MarginProperties, CommonAttributes } from '@avito/core'

type Options = {
  value: string | number
  text: string
  disabled?: boolean
}

export interface SegmentButtonProps extends MarginProperties, CommonAttributes<HTMLElement, number | string> {
  options?: Options[]
  /** Размер кнопки */
  size?: 's' | 'm' | 'l'
  /** Имя */
  name?: string
  /** Неактивный контрол */
  disabled?: boolean
  /** Выбранные элементы */
  value?: number | string
}

