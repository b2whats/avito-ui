## Интерактивный пример

```js
import { Stack, Group } from '../Layout/'
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

```js
import { Stack } from '../Layout/'
const [state, setState] = useState(false);

<Stack spacing='m' column>
  <Radio label='Не выбран' />
  <Radio checked label='Выбран' />
  <Radio disabled label='`Неактивный' />
</Stack>
```

:::platform web
## Размер

```js
import { Stack } from '../Layout/'
const [state, setState] = useState(false);

<Stack spacing='m' column>
  <Radio size='s' label='Маленький'/>
  <Radio size='m' label='Стандартный'/>
  <Radio size='l' label='Большой'/>
</Stack>
```
:::


## Положение текста

```js
import { Stack } from '../Layout/'
const [state, setState] = useState(false);

<Stack spacing='m' column>
  <Radio label='После контрола'/>
  <Radio label='До контрола' labelPosition='start'/>
</Stack>
```