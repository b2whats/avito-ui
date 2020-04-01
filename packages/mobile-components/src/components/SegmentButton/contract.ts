import { MarginProperties } from '../../styled-system/' 
import { SegmentButtonTheme } from './theme'

type onChangeProps = {
  name?: string,
  value?: number | string,
}

type Options = {
  value: string | number,
  text: string,
  disabled: boolean,
}

export interface SegmentButtonProps extends MarginProperties {
  options?: Options[] 
  /** Размер кнопки */
  size?: 's' | 'm' | 'l'
  /** Имя */
  name?: string
  /** Неактивный контрол */
  disabled?: boolean
  /** Выбранные элементы */
  value?: number | string
  /** Переопределиь тему компонента */
  override?: SegmentButtonTheme
  /** Событие изменения значения */
  onChange?: (props: onChangeProps) => void
}

