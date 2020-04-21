## Интерактивный пример

```js
import { useState } from 'react'
import { Stack } from '../Layout/';
const [state, setState] = useState(false)
const onChange = ({ value }) => {
  setState(value);
};

<Stack spacing='m' column>
  <Radio name='radio' value='1' checked={state === '1'} label='Teкст рядом' />
  <Radio name='radio' value='2' checked={state === '2'} label='Teкст рядом' />
</Stack>
```

## Состояния

```js
import { useState } from 'react'
import { Stack } from '../Layout/';
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
import { useState } from 'react'
import { Stack } from '../Layout/';
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
import { useState } from 'react'
import { Stack } from '../Layout/';
const [state, setState] = useState(false);

<Stack spacing='m' column>
  <Radio label='После контрола'/>
  <Radio label='До контрола' labelPosition='start'/>
</Stack>
```