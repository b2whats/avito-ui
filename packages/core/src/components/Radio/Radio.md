## Интерактивный пример

```js
import { Group } from '../Layout/'
const [state, setState] = useState(1)
const onChange = ({ value }) => {
  setState(value)
};

<Group spacing='m' mode='radio' column value={state} onChange={onChange}>
  <Radio value={1} label='Teкст рядом' />
  <Radio value={2} label='Teкст рядом' />
</Group>
```


## Состояния

Кроме `checked`, радио-кнопка бывает `disabled`:

```js
import { Text } from '../Text/';

<Stack spacing='m' column>
  <Stack spacing='m'>
    <Text width={0.2}>Обычный</Text>
    <Radio label='Не выбран' />
    <Radio checked label='Выбран' />
  </Stack>
  <Stack spacing='m'>
    <Text width={0.2}>disabled</Text>
    <Radio disabled label='Не выбран' />
    <Radio checked disabled label='Выбран' />
  </Stack>
</Stack>
```

`variant` — семантический цвет, `error` / `warning` / `success`:
```js
import { Text } from '../Text/';

<Stack spacing='m' column>
  <Stack spacing='m'>
    <Text width={0.2}>error</Text>
    <Radio variant='error' label='Не выбран' />
    <Radio checked variant='error' label='Выбран' />
  </Stack>
  <Stack spacing='m'>
    <Text width={0.2}>warning</Text>
    <Radio variant='warning' label='Не выбран' />
    <Radio checked variant='warning' label='Выбран' />
  </Stack>
  <Stack spacing='m'>
    <Text width={0.2}>success</Text>
    <Radio variant='success' label='Не выбран' />
    <Radio checked variant='success' label='Выбран' />
  </Stack>
</Stack>
```

:::platform web
## Размер

`size` — размер чекбокса: `s` / `m` (по умолчанию) / `l`

```js
const [state, setState] = useState(false);

<Stack spacing='m' column>
  <Radio size='s' label='Маленький'/>
  <Radio size='m' label='Стандартный'/>
  <Radio size='l' label='Большой'/>
</Stack>
```
:::


## Положение текста

`labelPosition="start"` меняет контрол и лейбл местами

```js
<Stack spacing='m' column>
  <Radio label='После контрола'/>
  <Radio label='До контрола' labelPosition='start'/>
</Stack>
```
