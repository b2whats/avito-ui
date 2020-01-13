```js
import { Stack } from '../../';

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
import { Stack } from '../../';
const onClick = () => {};

<Stack spacing='m'>
  <Icon name='search' variant='primary' onClick={onClick} />
  <Icon name='search' variant='error' onClick={onClick} />
</Stack>
```

### Инвертированные
```js
import { Stack } from '../../';

<Stack spacing='m'>
  <Icon name='search' onClick={() => {}} inverted />
  <Icon name='search' color='blue500' onClick={() => {}} colorHover='blue300' />
  <Icon name='search' variant='primary' onClick={() => {}} inverted />
  <Icon name='search' variant='secondary' onClick={() => {}} inverted />
  <Icon name='search' variant='success' onClick={() => {}} inverted />
  <Icon name='search' variant='warning' onClick={() => {}} inverted />
  <Icon name='search' variant='error' onClick={() => {}} inverted />
</Stack>
```

### Размеры

```js
import { Stack } from '../../';

<Stack spacing='m'>
  <Icon name='search' variant='primary' size='s' />
  <Icon name='search' variant='secondary' size='m' />
  <Icon name='search' variant='success' size='l' /> 
  <Icon name='search' variant='warning' size='35px' />
</Stack>
```

### Наведение

```js
const initialState = { text: ' ' };
const onMouseOver = () => {
    setState({text: 'наведено'});
}
const onMouseOut = () => {
    setState({text: ' '});
}

<div>
    <Icon 
        name='call' 
        variant='warning' 
        size='35px' 
        onMouseOver={onMouseOver} 
        onMouseOut={onMouseOut} />
    <span>{state.text}</span>
</div>

```