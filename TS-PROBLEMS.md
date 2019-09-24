## Проблема с keyof и получением типа по ключам из объекта
```ts
type Keys = { [index: string]: string, 'one': string, 'two': string }

keyof Keys // string | number
```

Объяснение
https://stackoverflow.com/questions/51808160/keyof-inferring-string-number-when-key-is-only-a-string?answertab=votes#tab-top

Как обойти
```ts
keyof Keys & string;
```

## Проблема с computed property template literal в объекте
```ts
type Palette = {
  red50: string,
  green50: string,
}

const palette: Palette = {
  red50: 'red',
  green50: 'green', 
}

const color = 'red'

const target = palette[`${color}50`]
```

Ошибка
Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Palette'.
No index signature with a parameter of type 'string' was found on type 'Palette'.ts(7053)

Объяснение
https://stackoverflow.com/questions/54458354/how-to-infer-type-of-object-element-accessed-via-computed-property

Как обойти
```ts
const target = palette[`${color}50` as keyof typeof palette]
```

Еще один способ прекратить вывод ошибок в вычисляемых ключах объекта это включить ключ suppressImplicitAnyIndexErrors
или создать хелпер https://medium.com/@_achou/dont-give-up-and-use-suppressimplicitanyindexerrors-ca6b208b9365

## Проблема с динамическим добавлением значений в объект
```ts
  type VariantsTheme = {
    a: number
  }

  const defaultTheme: VariantsTheme = {} // error Type '{}' is missing the following properties from type 'VariantsTheme': a  ....

  for (const variant in variants) {
    defaultTheme[variant] = 1
  }
```

Как обойти
```ts
  type VariantsTheme = {
    a: number
  }

  const defaultTheme = {} as VariantsTheme

  for (const variant in variants) {
    defaultTheme[variant] = 1
  }
```



```ts
type UnionToIntersect<U> =
  (U extends any
    ? (inp: U) => void
    : never
  ) extends ((out: infer I) => void)
    ? I
    : never
;

type FlattenObject<T> = T extends object ? {
  [K in keyof T]: T[K]
} : never;


type Te = {
  id: number;
  name: string;
  property?: string;
}



// type NonNullable<T> = T extends null | undefined ? never : T;

type B1<T, T2> = T extends string
  ? {
    [K in T]?: Partial<T2>
  } : never


type W = 'a' | 'b'
type WW = 'a' | 'b' | undefined

type W1 = B1<W>
type W2 = B2<WW>

type UnionToIntersect<U> =
  (U extends any
    ? (inp: U) => void
    : never
  ) extends ((out: infer I) => void)
    ? I
    : never
;

type FlattenObject<T> = T extends object ? {
  [K in keyof T]: T[K]
} : never;

type F1<T> = T extends object ? string : never;
type F2<T extends object> = string;

type FF1 = F1<{ a: string }>
type FFF1 = F1<string>

type FF2 = F2<{ a: string }>

type PropertyValue<T extends string, Type> ={
  [K in T]: Partial<Type>
}

// type PresetType<Props extends { [K in Prop]: Props[K] }, Type, Prop extends keyof Props> = {
//   style?: Partial<Type> 
// } & {
//   [Key in Prop]?: PropertyValue<NonNullable<Props[Key]>, Type>
// }

type PresetType<Props extends { [K in Prop]: Props[K] }, Type, Prop extends keyof Props> = {
  style?: Partial<Type> 
} & {
  [Key in Prop]?: NonNullable<Props[Key]> extends string ? {
    [Key2 in Props[Key]]?: PresetType<Props, Type, Exclude<Prop,Key>>
  } : never
}

type Pr = {
  kind?: 'a' | 'b',
  size: '1' | '2',
  some: 'c1'
}

const pr: Pr = {
  kind: 'a',
  size: '1',
  some: 'c1',
}

const test2: PresetType<Pr, Pr, 'kind' | 'size'> = {
  kind: {
  },
}

type B = B2<'a' | 'b' | undefined, string>

type A = 'a' | 'b' | undefined



type B<T> = T extends string
  ? {
    [K in T]?: string
  } : never


type C = B<A>

type C1 = {
  a?: string;
} | {
  b?: string;
}

type Q = UnionToIntersect<C>

type D = FlattenObject<Q>

type KA = A




const test: PresetType<TextProps, TextProps, 'kind'> = {
  kind: {
    h1: {
      lineHeight: 's',
    },
  },
}
```