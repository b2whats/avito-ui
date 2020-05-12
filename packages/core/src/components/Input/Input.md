```jsx
import { useState } from 'react'
import { Stack } from '../Layout/'
const [state, setState] = useState({ value: '', issetValue: 'Платье женское' })
const onChange = ({ target }) => {
  setState(state => ({ [target.name]: target.value }))
};
const onClick = ({ target }) => {
  console.log('user click')
};

<Stack column spacing={10}>
  <Input name='value' value={state.value} onClick={onClick} onChange={onChange} clearable='always' />
  <Input name='value' value={state.value} onChange={onChange} clearable='always'/>
  <Input name='value' placeholder='Подсказка' value={state.value} onChange={onChange}/>
  <Input name='issetValue' placeholder='Подсказка' value={state.issetValue} onChange={onChange}/>
  <Input name='value' value={state.issetValue} onChange={onChange} disabled/>
  <Input name='issetValue' value={state.issetValue} onChange={onChange} size='l' clearable='always'/>
  <Input name='value' value={state.value} onChange={onChange} size='s' clearable='always'/>
</Stack>
```

Варианты
```jsx
import { useState } from 'react'
import { Stack } from '../Layout/';
const [state, setState] = useState({ value: '', issetValue: 'Платье женское' })
const onChange = ({ target }) => {
  setState(state => ({ [target.name]: target.value }))
};

<Stack column spacing={10}>
  <Stack spacing={10}>
    <Input name='value' value={state.value} onChange={onChange} clearable/>
    <Input name='value' placeholder='Подсказка' value={state.value} onChange={onChange} clearable/>
    <Input name='value' placeholder='Подсказка' value={state.value} onChange={onChange} disabled/>
    <Input name='issetValue' value={state.issetValue} onChange={onChange} disabled/>
  </Stack>
  <Stack spacing={10}>
    <Input variant='secondary' name='value' value={state.value} onChange={onChange} clearable/>
    <Input variant='secondary'  name='value' placeholder='Подсказка' value={state.value} onChange={onChange} clearable/>
    <Input variant='secondary'  name='value' placeholder='Подсказка' value={state.value} onChange={onChange} disabled/>
    <Input variant='secondary'  name='issetValue' value={state.issetValue} onChange={onChange} disabled/>
  </Stack>
  <Stack spacing={10}>
    <Input variant='success' name='value' value={state.value} onChange={onChange} clearable/>
    <Input variant='success'  name='value' placeholder='Подсказка' value={state.value} onChange={onChange} clearable/>
    <Input variant='success'  name='value' placeholder='Подсказка' value={state.value} onChange={onChange} disabled/>
    <Input variant='success'  name='issetValue' value={state.issetValue} onChange={onChange} disabled/>
  </Stack>
  <Stack spacing={10}>
    <Input variant='warning' name='value' value={state.value} onChange={onChange} clearable/>
    <Input variant='warning'  name='value' placeholder='Подсказка' value={state.value} onChange={onChange} clearable/>
    <Input variant='warning'  name='value' placeholder='Подсказка' value={state.value} onChange={onChange} disabled/>
    <Input variant='warning'  name='issetValue' value={state.issetValue} onChange={onChange} disabled/>
  </Stack>
  <Stack spacing={10}>
    <Input variant='error' name='value' value={state.value} onChange={onChange} clearable/>
    <Input variant='error'  name='value' placeholder='Подсказка' value={state.value} onChange={onChange} clearable/>
    <Input variant='error'  name='value' placeholder='Подсказка' value={state.value} onChange={onChange} disabled/>
    <Input variant='error'  name='issetValue' value={state.issetValue} onChange={onChange} disabled/>
  </Stack>
</Stack>
```


Варианты
```jsx
import { useState } from 'react'
import { Stack, Grid, Box} from '../Layout/';
const [state, setState] = useState({ value: '', issetValue: 'Платье женское' })
const onChange = ({ target }) => {
  setState(state => ({ [target.name]: target.value }))
};

<Stack column spacing={10}>
  <Grid spacing={10}>
    <Box width={1/4}>
      <Input name='value' value={state.value} onChange={onChange} clearable/>
    </Box>
    <Box width={1/4}>
      <Input name='value' placeholder='Подсказка' value={state.value} onChange={onChange} clearable/>
    </Box>
    <Box width={1/4}>
      <Input name='value' placeholder='Подсказка' value={state.value} onChange={onChange} disabled/>
    </Box>
    <Box width={1/4}>
      <Input name='issetValue' value={state.issetValue} onChange={onChange} disabled/>
    </Box>
  </Grid>
</Stack>
```

Поисковая строка
```jsx
import { useState } from 'react'
import { Stack } from '../Layout/'
import { Spinner } from '../Spinner/'
import { Icon } from '../Icon/'

const [state, setState] = useState({ value: '', favorite: false })
const onChange = ({ target }) => {
  setState(state => ({ ...state, value: target.value }))
}

const onFavoriteClick = (event) => {
  //event.preventDefault()
  console.log('onFavoriteClick', event.target)
  setState(state => ({ ...state, favorite: !state.favorite }))
};

<Stack column spacing='s'>
  <Input
    placeholder='Поиск'
    clearable
  />

  <Input
    placeholder='Поиск'
    value={state.value}
    clearable
  />

  <Input
    iconBefore={({loading, focus, iconProps}) => (loading
      ? <Spinner {...iconProps}/>
      : <Icon name='search' {...iconProps} />
    )}
    placeholder='Поиск'
    value={state.value}
    clearable='always'
    onChange={onChange}
  />

  <Input
    iconBefore={({loading, focus, iconProps}) => (loading
      ? <Spinner {...iconProps} />
      : <Icon name='search' {...iconProps} />
    )}
    loading
    placeholder='Поиск'
    value={state.value}
    clearable
    onChange={onChange}
  />

  <Input
    iconBefore={({loading, focus, iconProps}) => (loading
      ? <Spinner {...iconProps} />
      : <Icon name='search'  {...iconProps} />
    )}
    iconAfter={<Icon name='favorites' color={state.favorite ? 'blue300' : 'green300'} size='l' onClick={onFavoriteClick} />}
    placeholder='Поиск'
    value={state.value}
    clearable
    onChange={onChange}
    onClick={(event) => console.log('click', {...event})}
    
  />

  <Input
    iconAfter={<Icon name='favorites' color='blue300' size='l'/>}
    placeholder='Поиск'
    value={state.value}
    clearable
    onChange={onChange}
  />

  <div onClick={() => console.log('div click')}>
    <Input
      iconBefore={({loading, focus, iconProps}) => (loading
        ? <Spinner {...iconProps} />
        : <Icon name='search'  {...iconProps} />
      )}
      iconAfter={<Icon name='favorites' color={state.favorite ? 'blue300' : 'green300'} size='l' onClick={onFavoriteClick} />}
      placeholder='Поиск'
      value={state.value}
      clearable
      onChange={onChange}
      onClick={() => console.log('click')}
    />
  </div>

  <Input
    iconBefore={({loading, focus, iconProps}) => (loading
      ? <Spinner color='inherit' {...iconProps} />
      : <Icon name='search' color='inherit' {...iconProps} />
    )}
    iconAfter={<Icon name='favorites' color='blue300' colorHover='blue500' size='l'/>}
    placeholder='Поиск'
    value={state.value}
    clearable='always'
    onChange={onChange}
  />
</Stack>
```

Префиикс и постфикс

```jsx
import { useState, useCallback } from 'react'
import { Stack } from '../Layout/'
import { Spinner } from '../Spinner/'
import { Icon } from '../Icon/'
import { Text } from '../Text/'

const [state, setState] = useState({})
const onChange = useCallback(({ target }) => {
  setState(state => ({
    ...state,
    [target.name]: target.value
  }))
}, []);

<Stack column spacing='s'>
  <Input
    name='one'
    placeholder='Укажите цену,'
    postfix='₽'
    value={state.one}
    clearable
    onChange={onChange}
  />

  <Input
    name='two'
    prefix='от'
    value={state.two}
    clearable
    onChange={onChange}
  />

  <Input
    name='three'
    prefix={<Text color='blue500'>от</Text>}
    value={state.three}
    clearable
    onChange={onChange}
  />

</Stack>
```