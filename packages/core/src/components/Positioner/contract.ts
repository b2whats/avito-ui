import { Placement, StrictModifiers } from '@popperjs/core'
import { TransitionProps } from './theme'

type FindModifier<Name extends StrictModifiers['name']> = Extract<Required<StrictModifiers>, { name: Name }>['options']
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
  offset?: FindModifier<'offset'>
  /* Перемещение при нехватке места */
  flip?: FindModifier<'flip'>
  /* Параметры для срелки */
  arrow?: FindModifier<'arrow'>
  /* Ширина target */
  width?: TargetWidth
  /* Минимальная ширина target */
  minWidth?: TargetWidth
  /* Максимальная ширина target */
  maxWidth?: TargetWidth
  /* Параметры для переполнения */
  preventOverflow?: FindModifier<'preventOverflow'>
  /* Параметры для скрытия target когда reference вышел за область видимости */
  hide?: FindModifier<'hide'>
  /* Описывает стратегию позиционирования */
  strategy?: 'fixed' | 'absolute'
  /* Отрендерить в контексте портала */
  usePortal?: boolean
  /* Стратегия появления target элемента */
  trigger?: 'click' | 'hover'
  /* Показать или спрятать target */
  open?: boolean
  /* Спрятать target при нажатии Escape */
  closeOnEsc?: boolean
  /* Спрятать target при клике вне target и reference */
  closeOnOutsideClick?: boolean
  /* Спрятать target при клике в любом месте */
  closeOnClick?: boolean
  /* Спрятать target при скроле */
  closeOnScroll?: boolean
  /* Задержка при открытии ms */
  delayIn?: number
  /* Задержка при закрытии ms */
  delayOut?: number
  /* Анимация */
  animation?: 'fade' | TransitionProps
  /* Позиция в стеке */
  zIndex?: number

  /* Событие появления target */
  onOpen?: () => void
  /* Событие закрытия target */
  onClose?: () => void
}
