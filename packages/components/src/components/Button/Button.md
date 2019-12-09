```js
import { Stack, Icon } from '../../';

<div>
  <Button variant='primary' size='s' iconBefore='search' onClick={()=> console.log('click')}>Push Me</Button>
  <Button variant='primary' size='s' iconBefore='search'></Button>
  <Button variant='primary' size='s' iconBefore='search' shape='square'></Button>
  <Button variant='primary' size='s' iconBefore='search' shape='circle'></Button>
  <Button loading iconBefore='search'>Push Me</Button>
  <Button loading iconBefore='search' disabled>Push Me</Button>
  <Button as='a' href={`http://example.com`} variant='primary' size='s' iconBefore='search' disabled>Push Me</Button>
  <Button as='a' href={`http://example.com`} variant='primary' size='s' iconBefore='search' loading>Push Me</Button>
</div>
```

```js
import { Stack, Icon } from '../../';

<Stack space='m' column>
  <Stack space='m'>
    <Button variant='primary' size='s' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button variant='secondary' size='s' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button variant='success' size='s' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button variant='warning' size='s' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button variant='error' size='s' iconBefore='search' iconAfter='search'>Push Me</Button>
  </Stack>
  <Stack space='m'>
    <Button as='a' href={`http://example.com`} variant='primary' size='s' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button as='a' variant='secondary' size='s' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button as='a' variant='success' size='s' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button as='a' variant='warning' size='s' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button as='a' variant='error' size='s' iconBefore='search' iconAfter='search'>Push Me</Button>
  </Stack>
  <Stack space='m'>
    <Button variant='primary' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button variant='secondary' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button variant='success' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button variant='warning' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button variant='error' iconBefore='search' iconAfter='search'>Push Me</Button>
  </Stack>
  <Stack space='m'>
    <Button variant='primary' size='l' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button variant='secondary' size='l' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button variant='success' size='l' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button variant='warning' size='l' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button variant='error' size='l' iconBefore='search' iconAfter='search'>Push Me</Button>
  </Stack>
</Stack>
```

```js
import { Stack } from '../../';

<Stack space='m' column>
  <Stack space='m'>
    <Button kind='flat' variant='primary' size='s'>Push Me</Button>
    <Button kind='flat' variant='secondary' size='s'>Push Me</Button>
    <Button kind='flat' variant='success' size='s'>Push Me</Button>
    <Button kind='flat' variant='warning' size='s'>Push Me</Button>
    <Button kind='flat' variant='error' size='s'>Push Me</Button>
  </Stack>
  <Stack space='m'>
    <Button kind='flat' variant='primary'>Push Me</Button>
    <Button kind='flat' variant='secondary'>Push Me</Button>
    <Button kind='flat' variant='success'>Push Me</Button>
    <Button kind='flat' variant='warning'>Push Me</Button>
    <Button kind='flat' variant='error'>Push Me</Button>
  </Stack>
  <Stack space='m'>
    <Button kind='flat' variant='primary' size='l'>Push Me</Button>
    <Button kind='flat' variant='secondary' size='l'>Push Me</Button>
    <Button kind='flat' variant='success' size='l'>Push Me</Button>
    <Button kind='flat' variant='warning' size='l'>Push Me</Button>
    <Button kind='flat' variant='error' size='l'>Push Me</Button>
  </Stack>
</Stack>
```

```js
import { Stack } from '../../';

<Stack space='m' column>
  <Stack space='m'>
    <Button kind='outline' variant='primary' size='s'>Push Me</Button>
    <Button kind='outline' variant='secondary' size='s'>Push Me</Button>
    <Button kind='outline' variant='success' size='s'>Push Me</Button>
    <Button kind='outline' variant='warning' size='s'>Push Me</Button>
    <Button kind='outline' variant='error' size='s'>Push Me</Button>
  </Stack>
  <Stack space='m'>
    <Button kind='outline' variant='primary'>Push Me</Button>
    <Button kind='outline' variant='secondary'>Push Me</Button>
    <Button kind='outline' variant='success'>Push Me</Button>
    <Button kind='outline' variant='warning'>Push Me</Button>
    <Button kind='outline' variant='error'>Push Me</Button>
  </Stack>
  <Stack space='m'>
    <Button kind='outline' variant='primary' size='l'>Push Me</Button>
    <Button kind='outline' variant='secondary' size='l'>Push Me</Button>
    <Button kind='outline' variant='success' size='l'>Push Me</Button>
    <Button kind='outline' variant='warning' size='l'>Push Me</Button>
    <Button kind='outline' variant='error' size='l'>Push Me</Button>
  </Stack>
</Stack>
```

```js
import { Stack } from '../../';

<Stack space='m' column>
  <Stack space='m'>
    <Button variant='primary' disabled>Push Me</Button>
    <Button variant='secondary' disabled>Push Me</Button>
    <Button variant='success' disabled>Push Me</Button>
    <Button variant='warning' disabled>Push Me</Button>
    <Button variant='error' disabled>Push Me</Button>
  </Stack>
  <Stack space='m'>
    <Button kind='flat' variant='primary' disabled>Push Me</Button>
    <Button kind='flat' variant='secondary' disabled>Push Me</Button>
    <Button kind='flat' variant='success' disabled>Push Me</Button>
    <Button kind='flat' variant='warning' disabled>Push Me</Button>
    <Button kind='flat' variant='error' disabled>Push Me</Button>
  </Stack>
  <Stack space='m'>
    <Button kind='outline' variant='primary' disabled>Push Me</Button>
    <Button kind='outline' variant='secondary' disabled>Push Me</Button>
    <Button kind='outline' variant='success' disabled>Push Me</Button>
    <Button kind='outline' variant='warning' disabled>Push Me</Button>
    <Button kind='outline' variant='error' disabled>Push Me</Button>
  </Stack>
</Stack>
```

```js
import { Stack } from '../../';

<Stack space='m'>
  <Button variant='primary'>Push Me<br/>2</Button>
  <Button variant='secondary'>Push Me<br/>2</Button>
  <Button variant='success'>Push Me<br/>2</Button>
  <Button variant='warning'>Push Me<br/>2</Button>
  <Button variant='error'>Push Me<br/>2</Button>
</Stack>
```

```js
import { Stack } from '../../';

<Stack space='m' column>
  <Stack space='m'>
    <Button variant='primary' shape='pill'>Push Me</Button>
    <Button variant='secondary' shape='pill'>Push Me</Button>
    <Button variant='success' shape='pill'>Push Me</Button>
    <Button variant='warning' shape='pill'>Push Me</Button>
    <Button variant='error' shape='pill'>Push Me</Button>
  </Stack>
  <Stack space='m'>
    <Button kind='outline' variant='primary' shape='pill'>Push Me</Button>
    <Button kind='outline' variant='secondary' shape='pill'>Push Me</Button>
    <Button kind='outline' variant='success' shape='pill'>Push Me</Button>
    <Button kind='outline' variant='warning' shape='pill'>Push Me</Button>
    <Button kind='outline' variant='error' shape='pill'>Push Me</Button>
  </Stack>
  <Stack space='m'>
    <Button kind='flat' variant='primary' shape='pill'>Push Me</Button>
    <Button kind='flat' variant='secondary' shape='pill'>Push Me</Button>
    <Button kind='flat' variant='success' shape='pill'>Push Me</Button>
    <Button kind='flat' variant='warning' shape='pill'>Push Me</Button>
    <Button kind='flat' variant='error' shape='pill'>Push Me</Button>
  </Stack>
</Stack>
```

```js
import { Stack } from '../../';

<Stack space='m' column>
  <Button variant='primary' block>Push Me</Button>
  <Button variant='secondary' block>Push Me</Button>
  <Button variant='success' block>Push Me</Button>
  <Button variant='warning' block>Push Me</Button>
  <Button variant='error' block>Push Me</Button>
</Stack>
```