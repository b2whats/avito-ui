```js
import { Stack } from '../../';

<Stack space='m'>
  <Spinner />
  <Spinner color='blue300' />
  <Spinner variant='primary' />
  <Spinner variant='secondary' />
  <Spinner variant='success' />
  <Spinner variant='warning' />
  <Spinner variant='error' />
</Stack>
```

### Размеры

```js
import { Stack } from '../../';

<Stack space='m'>
  <Spinner variant='primary' size='s' />
  <Spinner variant='secondary' size='m' />
  <Spinner variant='success' size='l' /> 
  <Spinner variant='warning' size={35} />
</Stack>
```

### Скорость

```js
import { Stack } from '../../';

<Stack space='m'>
  <Spinner />
  <Spinner speed={0.2}/>
  <Spinner speed={0.9}/> 
</Stack>
```

### Толщина

```js
import { Stack } from '../../';

<Stack space='m'>
  <Spinner />
  <Spinner thickness={1}/>
  <Spinner thickness={4}/> 
</Stack>
```
