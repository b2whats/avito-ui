import { Placement, StrictModifiers } from '@popperjs/core'
import { TransitionProps } from './theme'

type Modifiers = StrictModifiers extends object ? Required<StrictModifiers> : never
type FindByName<Union, Name> = Union extends { name: Name, options: any } ? Union['options'] | false : never
type TargetProps = {
  close: () => void
}
type TargetWidth = 'reference' | number

export interface PositionerProps {
  children: React.ReactElement
  target?: React.ReactNode | ((props: TargetProps) => React.ReactNode)
  /* Позиция target */
  placement?: Placement
  /* Смещение target относиельно reference */
  offset?: FindByName<Modifiers, 'offset'>
  /* Перемещение при нехватке места */
  flip?: FindByName<Modifiers, 'flip'>
  /* Параметры для срелки */
  arrow?: FindByName<Modifiers, 'arrow'>
  /* Ширина target */
  width?: TargetWidth
  /* Минимальная ширина target */
  minWidth?: TargetWidth
  /* Максимальная ширина target */
  maxWidth?: TargetWidth
  /* Параметры для переполнения */
  preventOverflow?: FindByName<Modifiers, 'preventOverflow'>
  /* Параметры для скрытия target когда reference вышел за область видимости */
  hide?: FindByName<Modifiers, 'hide'>
  /* Описывает стратегию позиционирования */
  strategy?: 'fixed' | 'absolute',
  /* Отрендерить в контексте портала */
  usePortal?: boolean
  /* Стратегия появления target элемента */
  trigger?: 'click' | 'hover'
  /* Показать или спрятать target  */
  open?: boolean
  /* Спрятать target при нажатии Escape */
  closeOnEsc?: boolean
  /* Спрятать target при клике вне target и reference */
  closeOnOutsideClick?: boolean
  /* Спрятать target при скроле */
  closeOnScroll?: boolean
  /* Задержка при открытии ms */
  delayIn?: number
  /* Задержка при закрытии ms */
  delayOut?: number
  /* Анимация */
  animation?: 'fade' | TransitionProps

  /* Событие появления target */
  onOpen: () => void
  /* Событие закрытия target */
  onClose: () => void
}