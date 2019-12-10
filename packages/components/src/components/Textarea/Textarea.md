```jsx
import { Stack } from '../../'
const initialState = { value: '' }
const onChange = ({ target }) => {
  setState(state => ({ value: target.value }))
};

<Stack column space={10}>
  <Textarea rows={3} placeholder='placeholder' value={state.value} onChange={onChange}/>
  <Textarea maxRows={5} placeholder='placeholder' value={state.value} clearable onChange={onChange}/>
  <Textarea maxRows={5} autoSize placeholder='placeholder' value={state.value} clearable='always' onChange={onChange}/>
</Stack>
```
