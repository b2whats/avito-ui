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