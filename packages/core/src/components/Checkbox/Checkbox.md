## Интерактивный пример

```js
import { Stack } from '../Layout/';
const [state, setState] = useState(false)
const onChange = ({ checked }) => {
  setState(checked);
};

<Checkbox checked={state} onChange={onChange} label='Teкст рядом' />
```

## Состояния

Кроме `checked`, чекбокс бывает `indeterminate` и `disabled`:

```js
import { Text } from '../Text/';

<Stack spacing='m' column>
  <Stack spacing='m'>
    <Text width={0.2}>Обычный</Text>
    <Checkbox label='Не выбран' />
    <Checkbox checked label='Выбран' />
  </Stack>
  <Stack spacing='m'>
    <Text width={0.2}>indeterminate</Text>
    <Checkbox indeterminate label='Не выбран' />
    <Checkbox checked indeterminate label='Выбран' />
  </Stack>
  <Stack spacing='m'>
    <Text width={0.2}>disabled</Text>
    <Checkbox disabled label='Не выбран' />
    <Checkbox checked disabled label='Выбран' />
  </Stack>
</Stack>
```

`variant` — семантический цвет, `error` / `warning` / `success`:
```js
import { Text } from '../Text/';

<Stack spacing='m' column>
  <Stack spacing='m'>
    <Text width={0.2}>error</Text>
    <Checkbox variant='error' label='Не выбран' />
    <Checkbox checked variant='error' label='Выбран' />
  </Stack>
  <Stack spacing='m'>
    <Text width={0.2}>warning</Text>
    <Checkbox variant='warning' label='Не выбран' />
    <Checkbox checked variant='warning' label='Выбран' />
  </Stack>
  <Stack spacing='m'>
    <Text width={0.2}>success</Text>
    <Checkbox variant='success' label='Не выбран' />
    <Checkbox checked variant='success' label='Выбран' />
  </Stack>
</Stack>
```

:::platform web
## Размер

`size` — размер чекбокса: `s` / `m` / `l`

```js
<Stack spacing='m' column>
  <Checkbox size='s' label='Маленький'/>
  <Checkbox size='m' label='Стандартный'/>
  <Checkbox size='l' label='Большой'/>
</Stack>
```
:::

## Положение текста

`labelPosition="start"` меняет чекбокс и лейбл местами

```js
import { Stack } from '../Layout/';
const [state, setState] = useState(false);

<Stack spacing='m' column>
  <Checkbox label='После контрола'/>
  <Checkbox label='До контрола' labelPosition='start'/>
</Stack>
```