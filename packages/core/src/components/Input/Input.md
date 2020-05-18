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
  <Input inline width={0.5} placeholder='50%' />
  <Grid spacing='s' debug>
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
import { Spinner } from '../Spinner'
const help = e => {
  e.stopPropagation()
  alert('help')
};

<Stack spacing='m' column width={250}>
  <Input iconBefore={ <DeliveryIcon /> } value='в начале' />
  <Input iconBefore={ <DeliveryIcon color='red300' /> } value="цветная" />
  <Input iconAfter={ <Spinner /> } value="спиннер" />
  <Input
    iconAfter={ <HelpIcon colorHover='red300' onClick={help} /> }
    value="с действием по клику"
  />
  <Input iconAfter={ <SportIcon /> } value="clearable" clearable value='clearable' />
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
  //event.preventDefault()
  console.log('onFavoriteClick', event.target)
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
