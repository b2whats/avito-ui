```jsx
import { Stack } from '../../';

<Stack space='m' column>
  <Toggle label='label' size='s'/>
  <Toggle label='label'/>
  <Toggle label='label' size='l'/>
</Stack>
```

```jsx
import { Stack } from '../../';

<Stack space='m' column align='baseline'>
  <Toggle label='label' size='s' labelPosition='start'/>
  <Toggle label='label' labelPosition='start'/>
  <Toggle label='label' size='l' labelPosition='start'/>
</Stack>
```

```jsx
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
                id dolor maximus eleifend nec in nunc. Integer quis lacinia leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
                id dolor maximus eleifend nec in nunc. Integer quis lacinia leo.`;
  
  <Toggle label={text}/>
```