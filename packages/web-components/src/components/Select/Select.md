Селект — `<select>` в дизайне инпута, но с нативными опциями. Основные параметры:
- `options` — массив опций,
- `getText` — текст опции (поле `label` по умолчанию),
- `getValue` — значение опции (поле `value` по умолчанию).

```jsx
const options = [
  { title: 'Жизнь', pk: 'life' },
  { title: 'Работа', pk: 'job' },
  { title: 'Карьера', pk: 'career' },
  { title: 'Кое-что другое', pk: 'heroin' }
];
const [value, setValue] = useState();

<Stack column spacing={5} width={250}>
  <Select
    value={value}
    onChange={e => setValue(e.target.value)}
    options={options}
    getText={option => option.title}
    getValue={option => option.pk}
    placeholder='Я выбираю...'
  />
  <Text>value={value === undefined ? String(value) : JSON.stringify(value)}</Text>
</Stack>
```

## Пустая опция

По умолчанию пользователь может снять выбор через специальную опцию "Не выбрано" (или текст из `placeholderOption`). В самом селекте при этом показывается текст из `placeholder`:

```jsx
const options = [{ label: 'Пирожок', value: 'pirozhok' }];
<Stack spacing='m' maxWidth={500}>
  <Select options={options} placeholder='Выбери еду' />
  <Select options={options} placeholder='Выбери еду' placeholderOption='Любая' />
</Stack>
```

При `clearable={false}` пустая опция показывается только когда нет `value`, потому что у `<select>` не может не быть выбранного значения:
```jsx
const options = [{ label: 'Рыбка', value: 'fish' }, { label: 'Пирожок', value: 'pirozhok' }];
<Stack spacing='m' maxWidth={500}>
  <Select options={options} clearable={false} />
  <Select options={options} clearable={false} value='pirozhok' />
</Stack>
```

## Иконки

`iconBefore` и `iconAfter` — слоты для иконок. Обратите внимание, что `iconAfter` закрывает стрелку — не увлекайтесь им.

```jsx
import { DeliveryIcon, HelpIcon, SportIcon } from '@avito/icons'
import { Spinner } from '@avito/core/';

<Stack spacing='m' column width={250}>
  <Select iconBefore={ <DeliveryIcon /> } />
  <Select iconBefore={ <DeliveryIcon color='red300' /> } />
  <Select iconAfter={ <Spinner /> } />
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
  <Select prefix={<Text color='blue500'>синий</Text>} />
</Stack>
```

---

Также селект поддерживает большую часть свойств инпута.
