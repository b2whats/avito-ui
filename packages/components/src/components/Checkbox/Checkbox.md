```js
import { Stack } from '../../';
const initialState = { checked: true };
const onChange = (event) => {
    setState({ checked: event.target.checked });
}

<Stack space='m'>
  <Checkbox checked={state.checked} onChange={onChange} variant='primary' />
</Stack>
```

### Disabled 
```js

import { Stack } from '../../';

<Stack space='m'>
  <Checkbox disabled variant='primary' />
  <Checkbox disabled checked variant='primary' />
</Stack>
```

