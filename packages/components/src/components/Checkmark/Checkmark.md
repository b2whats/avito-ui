```js
import { Stack } from '../../';
const initialState = { checked: true };
const onChange = (event) => {
    setState({ checked: event.target.checked });
}

<Stack space='m'>
  <Checkmark checked={state.checked} onChange={onChange} variant='primary' />
</Stack>
```

### Disabled 
```js

import { Stack } from '../../';

<Stack space='m'>
  <Checkmark disabled variant='primary' />
  <Checkmark disabled checked variant='primary' />
</Stack>
```