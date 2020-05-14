## Интерактивный пример

```js
import { Stack } from '../Layout/';
const [state, setState] = useState(false)
const onChange = ({ checked }) => {
  setState(checked);
};

<Switcher checked={state} onChange={onChange} label='Teкст рядом' />
```

## Состояния

```js
import { Stack } from '../Layout/';
const [state, setState] = useState(false);

<Stack spacing='m' column>
  <Switcher label='Не выбран' checked={false} />
  <Switcher checked label='Выбран' />
  <Switcher disabled label='Не выбран, неактивный' checked={false} />
  <Switcher checked disabled label='Выбран, неактивный' />
</Stack>
```

## Положение текста

```js
import { Stack } from '../Layout/';
const [state, setState] = useState(false);

<Stack spacing='m' column>
  <Switcher label='После контрола' checked={false} />
  <Switcher label='До контрола' labelPosition='start' checked={false} />
</Stack>
```