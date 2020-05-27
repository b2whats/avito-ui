import { Placement, StrictModifiers } from '@popperjs/core'
import { TargetWidthModifier } from './modifiers/'
import { PositionerTheme } from './theme'

type Modifiers = StrictModifiers extends object ? Required<StrictModifiers> : never
type FindByName<Union, Name> = Union extends { name: Name, options: any } ? Union['options'] | false : never
type TargetProps = {
  handleToggle: (open: boolean) => void
}
export interface PositionerProps {
  children: React.ReactNode
  target?: React.ReactNode | ((props: TargetProps) => React.ReactNode)
  /* Позиция target */
  placement?: Placement
  /* Смещение target оносиельно reference */
  offset?: FindByName<Modifiers, 'offset'>
  /* Перемещение при нехватке места */
  flip?: FindByName<Modifiers, 'flip'>
  /* Параметры для срелки */
  arrow?: FindByName<Modifiers, 'arrow'>
  /* Стилевые параметры для target */
  targetWidth?: TargetWidthModifier['options']
  /* Параметры для переполнения */
  preventOverflow?: FindByName<Modifiers, 'preventOverflow'>
  /* Параметры для скррытия target когда reference вышел за область видимости */
  hide?: FindByName<Modifiers, 'hide'>
  /* Описывает стратегию позиционирования */
  strategy?: 'fixed' | 'absolute',
  /* Отрендерить в контексте портала */
  usePortal?: boolean
  /* Стратегия появления target элемента */
  trigger?: 'click' | 'hover'
  /* Показать или спрятать target  */
  open?: boolean
  /* Задержка при появлении ms */
  delay?: number
  /* Стратегия появления target элемента */
  animation?: 'fade'
  /* Позволяе переопределить все модификаторы popper, другие параметры перестают влиять */
  modifiers?: StrictModifiers[]
  /** Переопределиь тему компонента */
  override?: PositionerTheme

  /** Событие клика вне target и reference */
  onOutsideClick?: () => void
  /* Событие появления target */
  onOpen: () => void
  /* Событие закрытия target */
  onClose: () => void
}