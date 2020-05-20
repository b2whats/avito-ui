import { Placement, StrictModifiers } from '@popperjs/core'
import { MarginProperties } from '../../styled-system'
import { PositionerTheme } from './theme'

type Modifiers = StrictModifiers extends object ? Required<StrictModifiers> : never
type FindByName<Union, Name> = Union extends { name: Name, options: any } ? Union['options'] | false : never

export interface PositionerProps extends MarginProperties {
  children: React.ReactNode
  target?: React.ReactNode
  /* Позиция target */
  placement?: Placement
  /* Смещение target оносиельно reference */
  offset?: FindByName<Modifiers, 'offset'>
  /* Перемещение при нехватке места */
  flip?: FindByName<Modifiers, 'flip'>
  /* Параметры для срелки */
  arrow?: FindByName<Modifiers, 'arrow'>
  /* Параметры для переполнения */
  preventOverflow?: FindByName<Modifiers, 'preventOverflow'>
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
}