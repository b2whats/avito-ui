```jsx
import { Stack } from '../../';
const initialState = { checked: false }
const r = (i) => console.log(i)
const onChange = ({ target }) => {
  setState(state => ({ checked: target.checked }))
};


<Stack space='m' column>
  <Checkbox checked={state.checked} value='value' name='name' onChange={onChange} label='label' size='s'/>
  <Checkbox checked={state.checked} label='label' onChange={onChange}/>
  <Checkbox checked={state.checked} label='label' size='l' onChange={onChange}/>
</Stack>
```

```jsx
import { Stack } from '../../';
const initialState = { checked: false }
const onChange = ({ target }) => {
  setState(state => ({ checked: target.checked }))
};


<Stack space='m'>
  <Checkbox checked={state.checked} onChange={onChange}/>
  <Checkbox checked={state.checked} onChange={onChange} variant='secondary'/>
  <Checkbox checked={state.checked} onChange={onChange} variant='success'/>
  <Checkbox checked={state.checked} onChange={onChange} variant='warning'/>
  <Checkbox checked={state.checked} onChange={onChange} variant='error'/>
</Stack>
```

```jsx
import { Stack } from '../../';
const initialState = { checked: false }
const onChange = ({ target }) => {
  setState(state => ({ checked: target.checked }))
};


<Stack space='m'>
  <Checkbox checked={state.checked} onChange={onChange} disabled/>
  <Checkbox checked={state.checked} onChange={onChange} variant='secondary' disabled/>
  <Checkbox checked={state.checked} onChange={onChange} variant='success' disabled/>
  <Checkbox checked={state.checked} onChange={onChange} variant='warning' disabled/>
  <Checkbox checked={state.checked} onChange={onChange} variant='error' disabled/>
</Stack>
```

```jsx
import { Stack } from '../../';
const initialState = { checked: true }
const onChange = ({ target }) => {
  setState(state => ({ checked: target.checked }))
};


<Stack space='m'>
  <Checkbox checked={state.checked} onChange={onChange} disabled/>
  <Checkbox checked={state.checked} onChange={onChange} variant='secondary' disabled/>
  <Checkbox checked={state.checked} onChange={onChange} variant='success' disabled/>
  <Checkbox checked={state.checked} onChange={onChange} variant='warning' disabled/>
  <Checkbox checked={state.checked} onChange={onChange} variant='error' disabled/>
</Stack>
```

```jsx
import { Stack, Icon } from '../../';

<Stack space='m' column align='baseline'>
  <Checkbox label='label' size='s' labelPosition='start'/>
  <Checkbox label='label' labelPosition='start'/>
  <Checkbox label='label' size='l' labelPosition='start'/>
</Stack>
```

```jsx
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
                id dolor maximus eleifend nec in nunc. Integer quis lacinia leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
                id dolor maximus eleifend nec in nunc. Integer quis lacinia leo.`;
  
  <Checkbox label={text}/>
```