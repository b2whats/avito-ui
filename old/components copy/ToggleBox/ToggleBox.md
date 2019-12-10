```jsx
import { Stack } from '../../';

<Stack space='m' column>
  <ToggleBox label='label' size='s'/>
  <ToggleBox label='label'/>
  <ToggleBox label='label' size='l'/>
</Stack>
```

```jsx
import { Stack } from '../../';

<Stack space='m' column align='baseline'>
  <ToggleBox label='label' size='s' labelPosition='start'/>
  <ToggleBox label='label' labelPosition='start'/>
  <ToggleBox label='label' size='l' labelPosition='start'/>
</Stack>
```

```jsx
import { Stack } from '../../';

<Stack space='m' column>
  <ToggleBox/>
  <ToggleBox variant='secondary'/>
  <ToggleBox variant='success'/>
  <ToggleBox variant='warning'/>
  <ToggleBox variant='error'/>
</Stack>
```

```jsx
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
                id dolor maximus eleifend nec in nunc. Integer quis lacinia leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
                id dolor maximus eleifend nec in nunc. Integer quis lacinia leo.`;
  
  <ToggleBox label={text}/>
```