```js
import { Stack } from '../../';
const initialState = { checked: true };
const onChange = (event) => {
    setState({ checked: event.target.checked });
}

<Stack space='m'>
  <Switcher checked={state.checked} onChange={onChange} variant='primary' />
</Stack>
```


### Disabled 
```js

import { Stack } from '../../';

<Stack space='m'>
  <Switcher disabled variant='primary' />
  <Switcher disabled checked variant='primary' />
</Stack>
```