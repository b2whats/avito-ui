```jsx
const initialState = { value: '' }
const onChange = ({ target }) => {
  setState(state => ({ value: target.value }))
};

<div>
  <Input placeholder='placeholder' value={state.value} onChange={onChange}/>
  <Input iconBefore='mail' placeholder='placeholder' value={state.value} clearable onChange={onChange}/>
</div>
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
      ? <Spinner color='inherit' {...iconProps}/>
      : <Icon name='search' color='inherit' {...iconProps} />
    )}
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
    loading
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
    iconAfter={<Icon name='favorites' color='blue30' colorHover='blue50' size='l' onClick={() => console.log('Favorites click')}/>}
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
    iconAfter={<Icon name='favorites' color='blue30' colorHover='blue50' size='l'/>}
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
    prefix={<Text color='blue50'>от </Text>}
    Prefix={(InputPrefixProps) => <Text color='blue50' onClick={InputPrefixProps.onClick(MyClickFn)}>от </Text>}
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

