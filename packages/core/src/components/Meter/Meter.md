## Использование

```jsx
import { Text } from '../Text/';
import { Button } from '../Button/'
import { Checkbox } from '../Checkbox/'
import { Input } from '../Input/'
const [state, setState] = useState({
  value: 0.5,
  variant: 'success',
  dynamic: false,
  dynamicValue: { success: 0.3, warning: 0.6, error: 1 },
  size: 'm',
  label: 'Лейбл',
  caption: 'Подсказка',
  children: 'Текст',
})

const params = propsToText('Meter', state, props => ({
  ...props,
  dynamic: props.dynamic ? props.dynamicValue : null,
  dynamicValue: null
}))

const onChange = ({ name, value, checked }) => {
  setState(updateObject(name, typeof checked === 'boolean' ? checked : isNumber(value) ? +value : value))
};


<Stack column>
  <Stack valign='middle' spacing={8} height='l'>
    <Text width={100}>Value</Text>
    <Input name='value' value={state.value} onChange={onChange} width={200}/>
    <Text>Значение от 0 до 1</Text>
  </Stack>
  <Stack valign='middle' spacing={8} height='l'>
    <Text width={100}>Size</Text>
    <Group mode='radio' name='size' onChange={onChange} value={state.size}>
      <Button size='s' value='s'>S</Button>
      <Button size='s' value='m'>M</Button>
    </Group>
  </Stack>
  <Stack valign='middle' spacing={8} height='l'>
    <Text width={100}>Disabled</Text>
    <Checkbox name='disabled' onChange={onChange} checked={state.disabled}/>
  </Stack>
  <Stack valign='middle' spacing={8} height='l'>
    <Text width={100}>Variant</Text>
    <Group mode='radio' name='variant' onChange={onChange} value={state.variant}>
      <Button size='s' value='success'>Success</Button>
      <Button size='s' value='warning'>Warning</Button>
      <Button size='s' value='error'>Error</Button>
    </Group>
  </Stack>
  <Stack valign='middle' spacing={8} height='l'>
    <Text width={100}>Label</Text>
    <Input name='label' value={state.label} onChange={onChange} width={200}/>
  </Stack>
  <Stack valign='middle' spacing={8} height='l'>
    <Text width={100}>Caption</Text>
    <Input name='caption' value={state.caption} onChange={onChange} width={200}/>
  </Stack>
  <Stack valign='middle' spacing={8} height='l'>
    <Text width={100}>children</Text>
    <Input name='children' value={state.children} onChange={onChange} width={200}/>
  </Stack>
  <Stack valign='middle' spacing={8} height='l'>
    <Text width={100}>Dynamic</Text>
    <Checkbox name='dynamic' onChange={onChange} checked={state.dynamic}/>
    {state.dynamic && (
      <Text pre>{JSON.stringify(state.dynamicValue)}</Text>
    )}
  </Stack>
  <Box bg='gray4' p={8}>
    <Text pre>{params}</Text>
  </Box> 

  <Meter mt={30} {...state} dynamic={state.dynamic ? state.dynamicValue : undefined} />
</Stack> 
```

```jsx
<Meter
  variant='success'
  value={0.4}
  label={<Text color='red500'>Красный лейбл</Text>}
  caption={<Text color='green500'>Зеленая подсказка</Text>}
/>
```

## Изменение цвета в зависимости от значения
Параметр `dynamicRange` позволяет вам установить автоматическое изменение цвета в зависимости от значения,
порядок свойств в объекте учитывается

```typescript static
{
  success?: number
  warning?: number
  error?: number
}
```

```jsx
<Meter
  size='s'
  value={0.4}
  dynamicRange={{ success: 0.3, warning: 0.6, error: 1 }}
/>
```
```jsx
<Meter
  size='s'
  value={0.4}
  dynamicRange={{ warning: 0.3, error: 0.6, success: 1 }}
/>
```