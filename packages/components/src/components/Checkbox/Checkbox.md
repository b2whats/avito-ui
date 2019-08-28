```jsx
import { Stack } from '../../';
const initialState = { checked: false }
const onChange = ({ target }) => {
  console.log(target.checked, target.value, target.name)
  setState(state => ({ checked: target.checked }))
};


<Stack space='m' column>
  <Checkbox checked={state.checked} value='value' name='name' onChange={onChange} label='label' size='s'/>
  <Checkbox checked={state.checked} label='label' onChange={onChange}/>
  <Checkbox checked={state.checked} label='label' size='l' onChange={onChange}/>
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