```js
import { Stack } from '../Layout/';

<Stack spacing='m'>
  <Icon name='search' size='l' />
  <Icon name='search' size='m' />
  <Icon name='search' size='s' />
</Stack>
```


```js
import { Stack } from '../Layout/';

<Stack spacing='m'>
  <Icon name='search' />
  <Icon name='search' color='blue50' />
  <Icon name='search' variant='primary' />
  <Icon name='search' variant='secondary' />
  <Icon name='search' variant='success' />
  <Icon name='search' variant='warning' />
  <Icon name='search' variant='error' />
</Stack>
```

### Кликабельная область
```js
import { Stack } from '../Layout/';
const onClick = () => {};

<Stack spacing='m'>
  <Icon name='search' variant='primary' onClick={onClick} />
  <Icon name='search' variant='error' onClick={onClick} />
</Stack>
```

### Размеры

```js
import { Stack } from '../Layout/';

<Stack spacing='m'>
  <Icon name='search' variant='primary' size='s' />
  <Icon name='search' variant='secondary' size='m' />
  <Icon name='search' variant='success' size='l' /> 
  <Icon name='search' variant='warning' size='35px' />
</Stack>
```