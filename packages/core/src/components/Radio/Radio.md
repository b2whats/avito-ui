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
import { Group } from '../Layout/';
import { Text } from '../Text/';

<Stack spacing='m' column>
  <Group mode='radio' value={1} spacing='m'>
    <Text width={0.2}>Обычный</Text>
    <Radio value={0} label='Не выбран' />
    <Radio value={1} label='Выбран' />
  </Group>
  <Group mode='radio' value={1}  spacing='m'>
    <Text width={0.2}>disabled</Text>
    <Radio value={0} disabled label='Не выбран' />
    <Radio value={1} disabled label='Выбран' />
  </Group>
</Stack>
```

`variant` — семантический цвет, `error` / `warning` / `success`:
```js
import { Group } from '../Layout/';
import { Text } from '../Text/';

<Stack spacing='m' column>
  <Group mode='radio' value={1} spacing='m'>
    <Text width={0.2}>error</Text>
    <Radio value={0} variant='error' label='Не выбран' />
    <Radio value={1} variant='error' label='Выбран' />
  </Group>
  <Group mode='radio' value={1} spacing='m'>
    <Text width={0.2}>warning</Text>
    <Radio value={0} variant='warning' label='Не выбран' />
    <Radio value={1} variant='warning' label='Выбран' />
  </Group>
  <Group mode='radio' value={1} spacing='m'>
    <Text width={0.2}>success</Text>
    <Radio value={0} variant='success' label='Не выбран' />
    <Radio value={1} variant='success' label='Выбран' />
  </Group>
</Stack>
```

:::platform web
## Размер

`size` — размер радиокнопки: `s` / `m` / `l`

```js
import { Group } from '../Layout/';

<Group mode='radio' value={1} spacing='m' column>
  <Radio value={0} size='s' label='Маленький'/>
  <Radio value={1} size='m' label='Стандартный'/>
  <Radio value={2} size='l' label='Большой'/>
</Group>
```
:::


## Положение текста

`labelPosition="start"` меняет контрол и лейбл местами

```js
import { Group } from '../Layout/';

<Group mode='radio' value={1} spacing='m' column>
  <Radio value={0} label='После контрола'/>
  <Radio value={1} label='До контрола' labelPosition='start'/>
</Group>
```
