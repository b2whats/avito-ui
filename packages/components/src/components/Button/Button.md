```js
import { Stack, Icon } from '../../';

<Stack spacing={10} column>
  <Stack spacing={10} wrap>
    <Button preset='primary' size='s'>Кнопка</Button>
    <Button preset='primary' size='s' iconBefore='search'>Кнопка</Button>
    <Button preset='primary' size='s' iconAfter='search'>Кнопка</Button>
    <Button preset='primary'>Кнопка</Button>
    <Button preset='primary' iconBefore='search'>Кнопка</Button>
    <Button preset='primary' iconAfter='search'>Кнопка</Button>
    <Button preset='primary' size='l'>Кнопка</Button>
    <Button preset='primary' size='l' iconBefore='search'>Кнопка</Button>
    <Button preset='primary' size='l' iconBefore={<Icon size='l' name='search'/>}>Кнопка</Button>
    <Button preset='primary' size='l' iconAfter='search'>Кнопка</Button>
    <Button preset='primary' disabled>Кнопка</Button>
    <Button preset='primary' size='s' loading>Кнопка</Button>
    <Button preset='primary' loading>Кнопка</Button>
    <Button preset='primary' size='l' loading>Кнопка</Button>
    <Button preset='primary' shape='pill'>Кнопка</Button>
    <Button preset='primary' shape='square' iconBefore='search' />
    <Button preset='primary' shape='circle' iconBefore='search' />
  </Stack>
  <Stack p={10} spacing={10} wrap>
    <Button preset='accent'>Кнопка</Button>
    <Button preset='accent' disabled>Кнопка</Button>
    <Button preset='accent' loading>Кнопка</Button>
    <Button preset='accent' shape='pill'>Кнопка</Button>
    <Button preset='accent' shape='square' iconBefore='search' />
    <Button preset='accent' shape='circle' iconBefore='search' />
  </Stack>
  <Stack p={10} spacing={10} wrap>
    <Button preset='secondary'>Кнопка</Button>
    <Button preset='secondary' disabled>Кнопка</Button>
    <Button preset='secondary' loading>Кнопка</Button>
    <Button preset='secondary' shape='pill'>Кнопка</Button>
    <Button preset='secondary' shape='square' iconBefore='search' />
    <Button preset='secondary' shape='circle' iconBefore='search' />
  </Stack>
  <Stack p={10} spacing={10} wrap>
    <Button preset='default'>Кнопка</Button>
    <Button preset='default' disabled>Кнопка</Button>
    <Button preset='default' loading>Кнопка</Button>
    <Button preset='default' shape='pill'>Кнопка</Button>
    <Button preset='default' shape='square' iconBefore='search' />
    <Button preset='default' shape='circle' iconBefore='search' />
  </Stack>
  <Stack p={10} spacing={10} backgroundColor='gray4' wrap>
    <Button preset='defaultOnSurface'>Кнопка</Button>
    <Button preset='defaultOnSurface' disabled>Кнопка</Button>
    <Button preset='defaultOnSurface' loading>Кнопка</Button>
    <Button preset='defaultOnSurface' shape='pill'>Кнопка</Button>
    <Button preset='defaultOnSurface' shape='square' iconBefore='search' />
    <Button preset='defaultOnSurface' shape='circle' iconBefore='search' />
  </Stack>
  <Stack p={10} spacing={10} backgroundColor='gray84' wrap>
    <Button preset='defaultDark'>Кнопка</Button>
    <Button preset='defaultDark' disabled>Кнопка</Button>
    <Button preset='defaultDark' loading>Кнопка</Button>
    <Button preset='defaultDark' shape='pill'>Кнопка</Button>
    <Button preset='defaultDark' shape='square' iconBefore='search' />
    <Button preset='defaultDark' shape='circle' iconBefore='search' />
  </Stack>
  <Stack p={10} spacing={10} wrap>
    <Button preset='outline'>Кнопка</Button>
    <Button preset='outline' disabled>Кнопка</Button>
    <Button preset='outline' loading>Кнопка</Button>
    <Button preset='outline' shape='pill'>Кнопка</Button>
    <Button preset='outline' shape='square' iconBefore='search' />
    <Button preset='outline' shape='circle' iconBefore='search' />
  </Stack>
  <Stack p={10} spacing={10} wrap>
    <Button preset='pay'>Кнопка</Button>
    <Button preset='pay' disabled>Кнопка</Button>
    <Button preset='pay' loading>Кнопка</Button>
    <Button preset='pay' shape='pill'>Кнопка</Button>
    <Button preset='pay' shape='square' iconBefore='search' />
    <Button preset='pay' shape='circle' iconBefore='search' />
  </Stack>
  <Stack p={10} spacing={10} wrap>
    <Button preset='appInstall'>Кнопка</Button>
    <Button preset='appInstall' disabled>Кнопка</Button>
    <Button preset='appInstall' loading>Кнопка</Button>
    <Button preset='appInstall' shape='pill'>Кнопка</Button>
    <Button preset='appInstall' shape='square' iconBefore='search' />
    <Button preset='appInstall' shape='circle' iconBefore='search' />
  </Stack>
  <Stack p={10} spacing={10} wrap>
    <Button preset='linkIncreased'>Кнопка</Button>
    <Button preset='linkIncreased' disabled>Кнопка</Button>
    <Button preset='linkIncreased' loading>Кнопка</Button>
    <Button preset='linkIncreased' shape='pill'>Кнопка</Button>
    <Button preset='linkIncreased' shape='square' iconBefore='search' />
    <Button preset='linkIncreased' shape='circle' iconBefore='search' />
  </Stack>
</Stack>
```


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

<Stack spacing='m' column>
  <Stack spacing='m'>
    <Button variant='primary' size='s' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button variant='secondary' size='s' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button variant='success' size='s' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button variant='warning' size='s' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button variant='error' size='s' iconBefore='search' iconAfter='search'>Push Me</Button>
  </Stack>
  <Stack spacing='m'>
    <Button as='a' href={`http://example.com`} variant='primary' size='s' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button as='a' variant='secondary' size='s' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button as='a' variant='success' size='s' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button as='a' variant='warning' size='s' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button as='a' variant='error' size='s' iconBefore='search' iconAfter='search'>Push Me</Button>
  </Stack>
  <Stack spacing='m'>
    <Button variant='primary' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button variant='secondary' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button variant='success' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button variant='warning' iconBefore='search' iconAfter='search'>Push Me</Button>
    <Button variant='error' iconBefore='search' iconAfter='search'>Push Me</Button>
  </Stack>
  <Stack spacing='m'>
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

<Stack spacing='m' column>
  <Stack spacing='m'>
    <Button kind='flat' variant='primary' size='s'>Push Me</Button>
    <Button kind='flat' variant='secondary' size='s'>Push Me</Button>
    <Button kind='flat' variant='success' size='s'>Push Me</Button>
    <Button kind='flat' variant='warning' size='s'>Push Me</Button>
    <Button kind='flat' variant='error' size='s'>Push Me</Button>
  </Stack>
  <Stack spacing='m'>
    <Button kind='flat' variant='primary'>Push Me</Button>
    <Button kind='flat' variant='secondary'>Push Me</Button>
    <Button kind='flat' variant='success'>Push Me</Button>
    <Button kind='flat' variant='warning'>Push Me</Button>
    <Button kind='flat' variant='error'>Push Me</Button>
  </Stack>
  <Stack spacing='m'>
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

<Stack spacing='m' column>
  <Stack spacing='m'>
    <Button kind='outline' variant='primary' size='s'>Push Me</Button>
    <Button kind='outline' variant='secondary' size='s'>Push Me</Button>
    <Button kind='outline' variant='success' size='s'>Push Me</Button>
    <Button kind='outline' variant='warning' size='s'>Push Me</Button>
    <Button kind='outline' variant='error' size='s'>Push Me</Button>
  </Stack>
  <Stack spacing='m'>
    <Button kind='outline' variant='primary'>Push Me</Button>
    <Button kind='outline' variant='secondary'>Push Me</Button>
    <Button kind='outline' variant='success'>Push Me</Button>
    <Button kind='outline' variant='warning'>Push Me</Button>
    <Button kind='outline' variant='error'>Push Me</Button>
  </Stack>
  <Stack spacing='m'>
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

<Stack spacing='m' column>
  <Stack spacing='m'>
    <Button variant='primary' disabled>Push Me</Button>
    <Button variant='secondary' disabled>Push Me</Button>
    <Button variant='success' disabled>Push Me</Button>
    <Button variant='warning' disabled>Push Me</Button>
    <Button variant='error' disabled>Push Me</Button>
  </Stack>
  <Stack spacing='m'>
    <Button kind='flat' variant='primary' disabled>Push Me</Button>
    <Button kind='flat' variant='secondary' disabled>Push Me</Button>
    <Button kind='flat' variant='success' disabled>Push Me</Button>
    <Button kind='flat' variant='warning' disabled>Push Me</Button>
    <Button kind='flat' variant='error' disabled>Push Me</Button>
  </Stack>
  <Stack spacing='m'>
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

<Stack spacing='m'>
  <Button variant='primary'>Push Me<br/>2</Button>
  <Button variant='secondary'>Push Me<br/>2</Button>
  <Button variant='success'>Push Me<br/>2</Button>
  <Button variant='warning'>Push Me<br/>2</Button>
  <Button variant='error'>Push Me<br/>2</Button>
</Stack>
```

```js
import { Stack } from '../../';

<Stack spacing='m' column>
  <Stack spacing='m'>
    <Button variant='primary' shape='pill'>Push Me</Button>
    <Button variant='secondary' shape='pill'>Push Me</Button>
    <Button variant='success' shape='pill'>Push Me</Button>
    <Button variant='warning' shape='pill'>Push Me</Button>
    <Button variant='error' shape='pill'>Push Me</Button>
  </Stack>
  <Stack spacing='m'>
    <Button kind='outline' variant='primary' shape='pill'>Push Me</Button>
    <Button kind='outline' variant='secondary' shape='pill'>Push Me</Button>
    <Button kind='outline' variant='success' shape='pill'>Push Me</Button>
    <Button kind='outline' variant='warning' shape='pill'>Push Me</Button>
    <Button kind='outline' variant='error' shape='pill'>Push Me</Button>
  </Stack>
  <Stack spacing='m'>
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

<Stack spacing='m' column>
  <Button variant='primary' block>Push Me</Button>
  <Button variant='secondary' block>Push Me</Button>
  <Button variant='success' block>Push Me</Button>
  <Button variant='warning' block>Push Me</Button>
  <Button variant='error' block>Push Me</Button>
</Stack>
```