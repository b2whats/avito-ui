## Интерактивный пример

```js
import { useState } from 'react'
import { Stack } from '../Layout/';
const [state, setState] = useState(false)
const onChange = ({ checked }) => {
  setState(checked);
};

<Checkbox checked={state} onChange={onChange} label='Teкст рядом' />
```

## Состояния

```js
import { useState } from 'react'
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
import { useState } from 'react'
import { Stack } from '../Layout/';
const [state, setState] = useState(false);

<Stack spacing='m' column>
  <Checkbox size='s' label='Маленький'/>
  <Checkbox size='m' label='Стандартный'/>
  <Checkbox size='l' label='Большой'/>
</Stack>
```
:::

## Форма

```js
import { useState } from 'react'
import { Stack } from '../Layout/';
const [state, setState] = useState(false);

<Stack spacing='m' column>
  <Checkbox checked label='Квадратный'/>
  <Checkbox checked shape='circle' label='Круглый' />
</Stack>
```

## Положение текста

```js
import { useState } from 'react'
import { Stack } from '../Layout/';
const [state, setState] = useState(false);

<Stack spacing='m' column>
  <Checkbox label='После контрола'/>
  <Checkbox label='До контрола' labelPosition='start'/>
</Stack>
```