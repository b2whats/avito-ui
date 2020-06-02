Чекмарк используют для выделения выбранных элементов списка.

```js
import { ListItem } from '../List'

const [values, setValue] = useState({ 0: true, 1: true })
const items = ['Жизнь', 'Работа', 'Карьера', 'Кое-что другое']
const disable = 1
const toggle = index => setValue({ ...values, [index]: !values[index] });

<div>
  {items.map((item, i) => (
    <ListItem
      label={item}
      disabled={i === disable}
      after={<Checkmark checked={values[i]} disabled={i === disable} />}
      onClick={() => toggle(i)}
      key={i}
    />
  ))}
</div>
```

## Состояния

Чекмарк без `checked` не показывается, но занимает место. `disabled` делает выбранный чекмарк серым.

```js
<Stack spacing='m'>
  <Box borderWidth={1} borderColor='gray12'>
    <Checkmark />
  </Box>
  <Checkmark checked />
  <Checkmark checked disabled />
</Stack>
```

## Цвета

`variant` поддерживает все семантические цвета. Любой другой цвет можно передать в `color`.

```js
<Stack spacing='m'>
  <Checkmark checked variant='primary' />
  <Checkmark checked variant='secondary' />
  <Checkmark checked variant='success' />
  <Checkmark checked variant='warning' />
  <Checkmark checked variant='error' />
  <Checkmark checked color='purple300' />
</Stack>
```

---

Все пропы [Icon](#/Компоненты/Icon) тоже работают