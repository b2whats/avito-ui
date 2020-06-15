## Размеры

`size` — размер инпута: `s`, `m` или `l`.

```jsx
<Stack spacing='m' column width={250}>
  <Input size='s' placeholder='Маленький' />
  <Input placeholder='Средний (по умолчанию)' />
  <Input size='l' placeholder='Большой' />
</Stack>
```

Инпут занимает всю ширину родителя, если не указан явный `width` в пикселях или процентах. Ширину по сетке задают через `Grid + Box`.

```jsx
<Stack spacing='m' column>
  <Input width={200} placeholder='200px' />
  <Input width={0.5} placeholder='50%' />
  <Grid spacing='s'>
    <Box width={6/12}><Input placeholder='6 колонок' /></Box>
    <Box width={4/12}><Input placeholder='4 колонки' /></Box>
    <Box width={2/12}><Input placeholder='2 колонки' /></Box>
  </Grid>
</Stack>
```

## Состояния

`variant` — семантический цвет инпута.

```jsx
<Stack spacing='m' width={250} column>
  <Input placeholder="primary" />
  <Input placeholder="secondary" variant='secondary' />
  <Input placeholder="success" variant='success' />
  <Input placeholder="warning" variant='warning' />
  <Input placeholder="error" variant='error' />
</Stack>
```

`disabled` отключает инпут, `readOnly` — отключает редактирование, но оставляет фокусировку. Сочетание с `error` / `warning` / `success` абсурдно и вряд ли хорошо сработает.

```jsx
<Stack spacing='m' width={250} column>
  <Input value="enabled" />
  <Input readOnly value="readOnly" />
  <Input disabled value="disabled со значением" />
</Stack>
```

::: platform web
## Пресет

`preset='inverse'` — белый инпут для размещения на цветном фоне (десктоп / пик)

```jsx { "props": { "style": { "background": "#f5f5f5" } } }
<Stack column spacing='s' width={250}>
  <Input preset='inverse' placeholder="inverse" />
  <Input preset='inverse' value="disabled" disabled />
</Stack>
```
:::


## Очистка

`clearable` добавляет в конце инпута крестик очистки. `true` показывает крестик только при фокусе, `'always'` — всегда.

```jsx
<Stack spacing='m' column width={250}>
  <Input placeholder="clearable" value="clearable" clearable />
  <Input placeholder="clearable='always'" value="clearable='always'" clearable='always' />
</Stack>
```

## Иконки

`iconBefore` и `iconAfter` — слоты для иконок. Крестик из `clearable` заменяет `iconAfter`, когда виден.

```jsx
import { DeliveryIcon, HelpIcon, SportIcon } from '@avito/icons'
import { Spinner } from '../Spinner/'
const help = event => {
  event.stopPropagation()

  alert('help')
};

<Stack spacing='m' column width={250}>
  <Input iconBefore={ <DeliveryIcon /> } value='в начале' />
  <Input iconBefore={ <DeliveryIcon color='red300' /> } value="цветная" />
  <Input iconAfter={ <Spinner /> } value="спиннер" />
  <Input iconAfter={ <SportIcon /> } value="clearable" clearable value='clearable' />
</Stack>
```

Иконки в компоненте могут быть кликабельные, чтобы иконка вела себя как кнопка, необходимо прерывать собыие клика по ней, чтобы `input`
не получал фокус.
Не забывайте у кликабельных иконок устанавливать область клика `area`: `number` для мобильных устройств

```jsx
import { DeliveryIcon, HelpIcon, SportIcon } from '@avito/icons'
import { Spinner } from '../Spinner'
const [active, activeToggle] = useState(false)
const onIconClick = prevent => event => {
  prevent && event.preventDefault()

  activeToggle(active => !active)
};

<Stack spacing='m' column>
  <Input
    iconAfter={ <HelpIcon color={active ? 'yellow500' : 'gray28' } onClick={onIconClick(false)} area={10} /> }
    value="с действием по клику с получением фокуса"
  />
  <Input
    iconAfter={ <HelpIcon color={active ? 'yellow500' : 'gray28' } onClick={onIconClick(true)} area={10} /> }
    value="с действием по клику без установки фокуса"
  />
</Stack>
```

## Префиикс и постфикс

`prefix` и `postfix` — слоты для постоянно видимого текста вокруг инпута. Сочетаются с иконками.

```jsx
import { DeliveryIcon, HelpIcon } from '@avito/icons';

<Stack column spacing='s' width={250}>
  <Input placeholder='Укажите цену,' postfix='₽' clearable />
  <Input prefix='от' clearable />
  <Input iconBefore={ <DeliveryIcon /> } prefix="до" postfix='₽' iconAfter={ <HelpIcon /> } />
  <Input
    prefix={<Text color='blue500'>синий</Text>}
    value="кто?"
  />
</Stack>
```

## Браузерная вадидация

Стандартные свойства `type (text, number, phone, email)` и `required` работают как обычно.

```jsx
import { Button } from '../Button';

<form onSubmit={e => e.preventDefault() || alert('valid')}>
  <Stack column spacing='s' width={250}>
    <Input required placeholder="required" />
    <Input type="number" placeholder="number" />
    <Input type="phone" placeholder="phone" />
    <Input type="email" placeholder="email" />
    <Button type="submit">Проверить</Button>
  </Stack>
</form>
```

## Форматирование и маски

`mask` управляет форматированием текста в инпуте. Мы предоставляем `numberFormatter`, который разбивает числа на разряды. Обратите внимание на `type="tel"`. В `onChange` приходит не реакт-событие — в `value` лежит значение без форматирования, а форматированное значение все еще можно достать через `target`.

```jsx
import { numberFormatter } from '@avito/core';
const [value, setValue] = useState('9999');

<Stack spacing='s'>
  <Input
    type='tel'
    mask={numberFormatter}
    value={value}
    onChange={e => setValue(e.value === '' ? null : Number(e.value))} />
  <Input
    value={value}
    onChange={e => setValue(e.value)} />
</Stack>
```

Другие форматы чисел задаются через `numberFormatter.configure`:

```jsx
import { useMemo } from 'react'
import { Checkbox } from '../Checkbox'
import { numberFormatter } from '@avito/core'

const [value, setValue] = useState('9999')
const [config, setConfig] = useState({
  maxIntDigits: 15,
  maxFracDigits: 0,
  positiveOnly: false,
})
const customNumberFormatter = useMemo(
  () => numberFormatter.setup(config),
  [config.maxIntDigits, config.maxFracDigits, config.positiveOnly]);

<Stack spacing='s'>
  <Stack column spacing='s'>
    <Stack column>
      <Text>maxIntDigits</Text>
      <Input
        type='number'
        min={1}
        max={999}
        value={config.maxIntDigits}
        onChange={e => setConfig({ ...config, maxIntDigits: e.value })} />
    </Stack>
    <Stack column>
      <Text>maxFracDigits</Text>
      <Input
        type='number'
        min={0}
        max={999}
        value={config.maxFracDigits}
        onChange={e => setConfig({ ...config, maxFracDigits: e.value })} />
    </Stack>
    <Checkbox
      label="positiveOnly"
      checked={config.positiveOnly}
      onChange={e => setConfig({ ...config, positiveOnly: e.checked })} />
  </Stack>
  <Stack column spacing='s'>
    <Text mb={0}>Форматированные числа</Text>
    <Input type='tel' mask={customNumberFormatter} value={value} onChange={e => setValue(e.value)} />

    <Text mb={0}>value внутри</Text>
    <Input value={value} onChange={e => setValue(e.value)} />
  </Stack>
</Stack>
```

Внутри используем `rifm`, так что вы можете задать любой другой формат, создав свою маску с <a href="https://github.com/realadvisor/rifm/#api" target='blank'>rifm-опцями</a>. Например, так можно отформатировать номер карты (4 группы по 4 цифры):

```jsx
import { useMemo } from 'react'

const digits = str => str.replace(/[^\d]+/gi, '')
const cardFormatter = useMemo(() => ({
  format: str => digits(str).substring(0, 16).replace(/.{4}(?=.)/g, s => `${s} `)
}), []);
const cardMask = useMemo(() => ({
  ...cardFormatter,
  replace: str => digits(str).padEnd(16, '_').replace(/.{4}(?=.)/g, s => `${s} `)
}), []);

<Stack column spacing='s' width={250}>
  <Input mask={cardFormatter} />
  <Input mask={cardMask} />
</Stack>
```

## Кейс: поисковая строка

```jsx
import { Stack } from '../Layout/'
import { Spinner } from '../Spinner/'
import { SearchIcon, StarIcon } from '@avito/icons'

const [state, setState] = useState({ value: 'пивко', favorite: false })
const onChange = ({ target }) => {
  setState(state => ({ ...state, value: target.value }))
}

const onFavoriteClick = (event) => {
  event.preventDefault()

  setState(state => ({ ...state, favorite: !state.favorite }))
};

const renderIcon = ({loading, focus, iconProps}) => (loading
  ? <Spinner {...iconProps}/>
  : <SearchIcon {...iconProps} />);

<Stack column spacing='s'>
  <Input
    iconBefore={renderIcon}
    placeholder='Поиск'
    clearable
  />

  <Input
    iconBefore={renderIcon}
    placeholder='Поиск'
    value={state.value}
    clearable='always'
    onChange={onChange}
  />

  <Input
    iconBefore={renderIcon}
    loading
    placeholder='Поиск'
    value={state.value}
    clearable='always'
    onChange={onChange}
  />

  <Input
    iconBefore={renderIcon}
    iconAfter={
      <StarIcon
        color={state.favorite ? 'yellow500' : 'gray28' }
        onClick={onFavoriteClick}
      />
    }
    placeholder='Поиск'
    value={state.value}
    clearable
    onChange={onChange}
  />
</Stack>
```
