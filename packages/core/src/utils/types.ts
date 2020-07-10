import { ReactNode, FocusEventHandler, FormEventHandler, KeyboardEventHandler, MouseEventHandler, TouchEventHandler, UIEventHandler} from 'react'

// для юниона: true если все функции, false если функций нет, boolean для смешанных
type IsFunction<T> = T extends Function ? true : false
export type DeepPartial<T> = {
  // хитрая проверка на функцию или юнион с функцией
  [K in keyof T]?: (IsFunction<T[K]>) extends false ? DeepPartial<T[K]> : T[K]
}

export interface ChangePayload<Element, Value> {
  name?: string
  type?: string
  value?: Value
  checked?: boolean
  formattedValue?: string | number | null
  target?: Element
}

export type ChangeEventHandler<Value, T = Element> = (payload: ChangePayload<T, Value>) => void

export interface DOMAttributes {
  children?: ReactNode
  hidden?: boolean
  id?: string
  tabIndex?: number
  role?: string
  marker?: string
}

export interface EventAttributes<T, Value> {
  onChange?: ChangeEventHandler<Value, T>
  onClick?: MouseEventHandler<T>
  onFocus?: FocusEventHandler<T>
  onBlur?: FocusEventHandler<T>
  onSubmit?: FormEventHandler<T>
  onKeyDown?: KeyboardEventHandler<T>
  onKeyPress?: KeyboardEventHandler<T>
  onKeyUp?: KeyboardEventHandler<T>
  onMouseDown?: MouseEventHandler<T>
  onMouseEnter?: MouseEventHandler<T>
  onMouseLeave?: MouseEventHandler<T>
  onMouseMove?: MouseEventHandler<T>
  onMouseOut?: MouseEventHandler<T>
  onMouseOver?: MouseEventHandler<T>
  onMouseUp?: MouseEventHandler<T>
  onTouchCancel?: TouchEventHandler<T>
  onTouchEnd?: TouchEventHandler<T>
  onTouchMove?: TouchEventHandler<T>
  onTouchStart?: TouchEventHandler<T>
  onScroll?: UIEventHandler<T>
}

export interface CommonAttributes<T = HTMLDivElement, Value = string> extends DOMAttributes, EventAttributes<T, Value>{}
