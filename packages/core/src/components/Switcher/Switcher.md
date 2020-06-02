```js
import { Stack } from '../Layout/'
const [state, setState] = useState(false)
const onChange = ({ checked }) => setState(checked);

<Switcher checked={state} onChange={onChange} label='Teкст рядом' />
```

## Состояния

Кроме `checked`, свтичер бывает `loading` и `disabled`:

```js
import { Text } from '../Text/';

<Stack spacing='m' column>
  <Stack spacing='m'>
    <Text width={0.2}>Обычный</Text>
    <Switcher label='Не выбран' />
    <Switcher checked label='Выбран' />
  </Stack>
  <Stack spacing='m'>
    <Text width={0.2}>loading</Text>
    <Switcher loading label='Не выбран' />
    <Switcher checked loading label='Выбран' />
  </Stack>
  <Stack spacing='m'>
    <Text width={0.2}>disabled</Text>
    <Switcher disabled label='Не выбран' />
    <Switcher checked disabled label='Выбран' />
  </Stack>
</Stack>
```

`variant` — семантический цвет, `error` / `warning` / `success`:
```js
import { Text } from '../Text/';

<Stack spacing='m' column>
  <Stack spacing='m'>
    <Text width={0.2}>error</Text>
    <Switcher variant='error' label='Не выбран' />
    <Switcher checked variant='error' label='Выбран' />
  </Stack>
  <Stack spacing='m'>
    <Text width={0.2}>warning</Text>
    <Switcher variant='warning' label='Не выбран' />
    <Switcher checked variant='warning' label='Выбран' />
  </Stack>
  <Stack spacing='m'>
    <Text width={0.2}>success</Text>
    <Switcher variant='success' label='Не выбран' />
    <Switcher checked variant='success' label='Выбран' />
  </Stack>
</Stack>
```

:::platform web
## Размер

`size` — размер свитчера: `s` / `m` (по умолчанию) / `l`

```js
<Stack spacing='m' column>
  <Switcher size='s' label='Маленький'/>
  <Switcher size='m' label='Стандартный'/>
  <Switcher size='l' label='Большой'/>
</Stack>
```
:::


## Положение текста

`labelPosition="start"` меняет свитчер и лейбл местами

```js
<Stack spacing='m' column>
  <Switcher label='После контрола'/>
  <Switcher label='До контрола' labelPosition='start'/>
</Stack>
```
