## Селект

```jsx
const options = [
  { label: 'Жизнь', value: 'life' },
  { label: 'Работа', value: 'job' },
  { label: 'Карьера', value: 'career' },
  { label: 'Кое-что другое', value: 'heroin' }
];

<Select
  options={options}
  getText={option => option.label}
  getValue={option => option.value}
  placeholder='Я выбираю'
/>
```

## Иконки

`iconBefore` и `iconAfter` — слоты для иконок.

```jsx
import { DeliveryIcon, HelpIcon, SportIcon } from '@avito/icons'
import { Spinner } from '@avito/core/';

<Stack spacing='m' column width={250}>
  <Select iconBefore={ <DeliveryIcon /> } value='в начале' />
  <Select iconBefore={ <DeliveryIcon color='red300' /> } value="цветная" />
  <Select iconAfter={ <Spinner /> } value="спиннер" />
</Stack>
```

Селект не поддерживает кликабельные иконки.

## Префиикс и постфикс

`prefix` и `postfix` — слоты для постоянно видимого текста вокруг значения. Сочетаются с иконками.

```jsx
import { DeliveryIcon, HelpIcon } from '@avito/icons';

<Stack column spacing='s' width={250}>
  <Select placeholder='Укажите цену,' postfix='₽' />
  <Select prefix='от' />
  <Select iconBefore={ <DeliveryIcon /> } prefix="до" postfix='₽' iconAfter={ <HelpIcon /> } />
  <Select
    prefix={<Text color='blue500'>синий</Text>}
    value="кто?"
  />
</Stack>
```

---

Также селект поддерживает большую часть свойств инпута.
