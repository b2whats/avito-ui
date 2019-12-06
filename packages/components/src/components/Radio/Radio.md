```js
import { Stack } from '../../';
const initialState = { checked: true };
const onChange = (event) => {
    setState({ checked: event.target.checked });
}

<Stack space='m'>
  <Radio checked={state.checked} onChange={onChange} variant='primary' />
</Stack>
```

### Disabled 
```js

import { Stack } from '../../';

<Stack space='m'>
  <Radio disabled variant='primary' />
  <Radio disabled checked variant='primary' />
</Stack>
```