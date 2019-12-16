```jsx
import { Stack, Text, Icon, Checkbox, Switcher } from '../../'
initialState = {}
const onChange = ({ name, checked }) => {
  console.log(name, checked)
    setState({ [name]: checked })
};

<Stack column width={300}>
  <ListItem
    label='Текст лейбла'
  />
  <ListItem
    label={<Text color='blue500'>Текст лейбла</Text>}
  />
  <ListItem
    label='Текст лейбла'
    before={<Icon name='copy'/>}
  />
  <ListItem
    label='Текст лейбла'
    before={<Icon size='l' name='copy'/>}
    caption='Текст подписи'
  />
  <ListItem
    label='Текст лейбла'
    before={<Checkbox name='check' checked={Boolean(state.check)} onChange={onChange}/>}
    caption='Текст подписи'
    interactive
  />
  <ListItem
    label='Текст лейбла'
    before={<Switcher name='check' checked={Boolean(state.check)} onChange={onChange}/>}
    caption='Текст подписи'
    interactive
  />
  <ListItem
    label='Текст лейбла'
    caption='Текст подписи'
  />
  <ListItem
    label='метро Щелковская, 600 м, Москва, Щёлковское шоссе, 49, подъезд 1'
    caption={<Text color='green500'>Текст подписи</Text>}
  />
  <ListItem
    label='метро Щелковская, 600 м, Москва, Щёлковское шоссе, 49, подъезд 1'
    caption={<Text color='green500'>Текст подписи</Text>}
  />
  <ListItem
    before={<Icon size='l' name='copy'/>}
    label='метро Щелковская, 600 м, Москва, Щёлковское шоссе, 49, подъезд 1'
    caption={<Text color='green500'>Текст подписи</Text>}
    onPress={(...args) => console.log('press', args)}
  />
</Stack>
```
