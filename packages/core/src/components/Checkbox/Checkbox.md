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

```js
import { Stack } from '../Layout/';
const [state, setState] = useState(false);

<Stack spacing='m' column>
  <Checkbox label='Не выбран' />
  <Checkbox checked label='Выбран' />
  <Checkbox indeterminate label='Не выбран, неопределенный' />
  <Checkbox checked indeterminate label='Выбран, неопределенный' />
  <Checkbox disabled label='Не выбран, неактивный' />
  <Checkbox checked disabled label='Выбран, неактивный' />
</Stack>
```

:::platform web
## Размер

```js
import { Stack } from '../Layout/';
const [state, setState] = useState(false);

<Stack spacing='m' column>
  <Checkbox size='s' label='Маленький'/>
  <Checkbox size='m' label='Стандартный'/>
  <Checkbox size='l' label='Большой'/>
</Stack>
```
:::

## Положение текста

```js
import { Stack } from '../Layout/';
const [state, setState] = useState(false);

<Stack spacing='m' column>
  <Checkbox label='После контрола'/>
  <Checkbox label='До контрола' labelPosition='start'/>
</Stack>
```