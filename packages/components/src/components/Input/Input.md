```jsx
import { Stack } from '../../';
const initialState = { value: '', issetValue: 'Платье женское' }
const onChange = ({ target }) => {
  setState(state => ({ [target.name]: target.value }))
};

<Stack column space={10}>
  <Input name='value' value={state.value} onChange={onChange} clearable/>
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
import { Stack } from '../../';
const initialState = { value: '', issetValue: 'Платье женское' }
const onChange = ({ target }) => {
  setState(state => ({ [target.name]: target.value }))
};

<Stack column space={10}>
  <Stack space={10}>
    <Input name='value' value={state.value} onChange={onChange} clearable/>
    <Input name='value' placeholder='Подсказка' value={state.value} onChange={onChange} clearable/>
    <Input name='value' placeholder='Подсказка' value={state.value} onChange={onChange} disabled/>
    <Input name='issetValue' value={state.issetValue} onChange={onChange} disabled/>
  </Stack>
  <Stack space={10}>
    <Input variant='secondary' name='value' value={state.value} onChange={onChange} clearable/>
    <Input variant='secondary'  name='value' placeholder='Подсказка' value={state.value} onChange={onChange} clearable/>
    <Input variant='secondary'  name='value' placeholder='Подсказка' value={state.value} onChange={onChange} disabled/>
    <Input variant='secondary'  name='issetValue' value={state.issetValue} onChange={onChange} disabled/>
  </Stack>
  <Stack space={10}>
    <Input variant='success' name='value' value={state.value} onChange={onChange} clearable/>
    <Input variant='success'  name='value' placeholder='Подсказка' value={state.value} onChange={onChange} clearable/>
    <Input variant='success'  name='value' placeholder='Подсказка' value={state.value} onChange={onChange} disabled/>
    <Input variant='success'  name='issetValue' value={state.issetValue} onChange={onChange} disabled/>
  </Stack>
  <Stack space={10}>
    <Input variant='warning' name='value' value={state.value} onChange={onChange} clearable/>
    <Input variant='warning'  name='value' placeholder='Подсказка' value={state.value} onChange={onChange} clearable/>
    <Input variant='warning'  name='value' placeholder='Подсказка' value={state.value} onChange={onChange} disabled/>
    <Input variant='warning'  name='issetValue' value={state.issetValue} onChange={onChange} disabled/>
  </Stack>
  <Stack space={10}>
    <Input variant='error' name='value' value={state.value} onChange={onChange} clearable/>
    <Input variant='error'  name='value' placeholder='Подсказка' value={state.value} onChange={onChange} clearable/>
    <Input variant='error'  name='value' placeholder='Подсказка' value={state.value} onChange={onChange} disabled/>
    <Input variant='error'  name='issetValue' value={state.issetValue} onChange={onChange} disabled/>
  </Stack>
</Stack>
```

Поисковая строка
```jsx
import { Spinner, Icon, Stack } from '../../';
const initialState = { value: '' }
const onChange = ({ target }) => {
  setState(state => ({ value: target.value }))
};

<Stack column space='s'>
  <Input
    iconBefore={({loading, focus, iconProps}) => (loading
      ? <Spinner {...iconProps}/>
      : <Icon name='search' {...iconProps} />
    )}
    placeholder='Поиск'
    value={state.value}
    clearable
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
    iconAfter={<Icon name='favorites' color='blue300' colorHover='blue500' size='l' onClick={() => console.log('Favorites click')}/>}
    placeholder='Поиск'
    value={state.value}
    clearable
    onChange={onChange}
  />

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
import { Spinner, Icon, Stack, Text } from '../../';
const initialState = { value: '' }
const onChange = ({ target }) => {
  setState(state => ({ value: target.value }))
};

<Stack column space='s'>
  <Input
    placeholder='Укажите цену,'
    postfix=' ₽'
    value={state.value}
    clearable
    onChange={onChange}
  />

  <Input
    prefix='от '
    value={state.value}
    clearable
    onChange={onChange}
  />

  <Input
    prefix={<Text color='blue500'>от </Text>}
    Prefix={(InputPrefixProps) => <Text color='blue500' onClick={InputPrefixProps.onClick(MyClickFn)}>от </Text>}
    value={state.value}
    clearable
    onChange={onChange}
  />

</Stack>
```


```jsx
import { Spinner, Icon, Text } from '../../';
const initialState = { value: '' }
const onChange = ({ target }) => {
  setState(state => ({ value: target.value }))
};

<div>
  <Icon name='cross' /><Text>QplgqopTev</Text> <Icon name='search' />
</div>
```

