import { PositionerProps, PositionerTheme } from '../Positioner/'

export interface TooltipProps extends Omit<PositionerProps, 'target'> {
  /** Контент */
  content?: React.ReactNode
  preset?: 'light' | 'attention' | 'dark'
  /** Переопределиь тему компонента */
  override?: PositionerTheme
  /* Добавляет крестик закрыития */
  onClose: () => void
}