```jsx
import { CopyIcon } from '@avito/icons'
import { Stack, Text, Checkbox, Switcher } from '../../'
const [state, setState] = useState({})

const onChange = ({ name, checked }) => {
  console.log('change', name, checked)
  setState({ [name]: checked })
};
const onClick = (event) => {
    console.log('click')
    console.debug({...event})
    setState({ check: !state.check })
};
const events = (name) => ({
  onClick: (event) => {
    console.log('click ' + name)
    //if (name === 'label') event.preventDefault()
  },
  onMouseDown: () => { console.log('mouse down ' + name)},
  onMouseUp: () => { console.log('mouse up ' + name)},
  onTouchStart: () => { console.log('touch start ' + name)},
  onTouchEnd: () => { console.log('touch end ' + name)},
});

<Stack column width={300}>
  <ListItem
    label='Текст лейбла'
    before={<Checkbox name='check' checked={Boolean(state.check)} />}
    caption='Текст подписи'
    onClick={onClick}
  />
  <ListItem
    label='Текст лейбла'
  />
  <ListItem
    label={<Text color='blue500'>Текст лейбла</Text>}
  />
  <ListItem
    label='Текст лейбла'
    before={<CopyIcon />}
  />
  <ListItem
    label='Текст лейбла'
    before={<CopyIcon size='l' />}
    caption='Текст подписи'
  />
  <ListItem
    label='Текст лейбла'
    before={<Checkbox name='check' checked={Boolean(state.check)} onChange={onChange}/>}
    caption='Текст подписи'
    onClick={() => { console.log(123)}}
  />
  <ListItem
    key={state.count}
    label='Текст лейбла'
    before={<Switcher name='check' checked={Boolean(state.check)} onChange={onChange}/>}
    caption='Текст подписи'
    onClick={() => {}}
  />
  <ListItem
    key={state.count + 'w'}
    label='Текст лейбла'
    after={<Switcher name='check' checked={Boolean(state.check)} onChange={onChange}/>}
    caption='Текст подписи'
    onClick={() => {}}
  />
  <ListItem
    label='Текст лейбла'
    before={<Switcher name='check' checked={Boolean(state.check)} onChange={onChange}/>}
    caption='Текст подписи'
  />
  <ListItem
    label='Текст лейбла'
    disabled
    before={<Switcher name='check' checked={Boolean(state.check)} onChange={onChange}/>}
    caption='Текст подписи'
    onClick={() => {}}
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
    before={<CopyIcon size='l'/>}
    label='метро Щелковская, 600 м, Москва, Щёлковское шоссе, 49, подъезд 1'
    caption={<Text color='green500'>Текст подписи</Text>}
    onClick={(...args) => console.log('press', args)}
  />
  <ListItem
    before={<CopyIcon size='l'/>}
    beforeValign='auto'
    label='метро Щелковская, 600 м, Москва, Щёлковское шоссе, 49, подъезд 1'
    caption={<Text color='green500'>Текст подписи</Text>}
    onClick={(...args) => console.log('press', args)}
  />
</Stack>
```