// для юниона: true если все функции, false если функций нет, boolean для смешанных
type IsFunction<T> = T extends Function ? true : false
export type DeepPartial<T> = {
  // хитрая проверка на функцию или юнион с функцией
  [K in keyof T]?: (IsFunction<T[K]>) extends false ? DeepPartial<T[K]> : T[K]
}
