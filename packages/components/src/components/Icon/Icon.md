```js
import { Stack } from '../../';

<Stack space='m'>
  <Icon name='search' />
  <Icon name='search' color='blue50' />
  <Icon name='search' variant='primary' />
  <Icon name='search' variant='secondary' />
  <Icon name='search' variant='success' />
  <Icon name='search' variant='warning' />
  <Icon name='search' variant='error' />
</Stack>
```

### Инвертированные
```js
import { Stack } from '../../';

<Stack space='m'>
  <Icon name='search' onClick={() => {}} inverted />
  <Icon name='search' color='blue50' onClick={() => {}} colorHover='blue30' />
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

<Stack space='m'>
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
        name='search' 
        variant='warning' 
        size='35px' 
        onMouseOver={onMouseOver} 
        onMouseOut={onMouseOut} />
    <span>{state.text}</span>
</div>

```