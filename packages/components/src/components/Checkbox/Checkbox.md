```js
import { Stack } from '../../';
const initialState = { checked: false };
const onChange = ({ checked }) => {
  console.log('onChange')
  setState({ checked });
}
const onPress = (event) => {
  console.log('onPress', event)
}
const longText = 'Французская художница, входившая в круг художников в Париже, ставших известными как импрессионисты.';

<Stack space='m'>
  <Stack space='m' column width={300}>
    <Checkbox checked={state.checked} onChange={onChange}  label='Teкст рядом' />
    <Checkbox checked={state.checked} onChange={onChange} label='Teкст рядом' shape='circle'/>
    <Checkbox checked={state.checked} onChange={onChange} variant='secondary' label='Teкст рядом' />
    <Checkbox checked={state.checked} onChange={onChange} variant='success' label='Teкст рядом' />
    <Checkbox checked={state.checked} onChange={onChange} variant='warning' label='Teкст рядом' />
    <Checkbox checked={state.checked} onChange={onChange} variant='error' label='Teкст рядом' />
    <Checkbox checked={state.checked} onChange={onChange} label='Teкст рядом' labelPosition='start'/>
    <Checkbox checked indeterminate label='Teкст рядом'/>
    <Checkbox label='Teкст рядом' disabled/>
    <Checkbox checked label='Teкст рядом' disabled/>
    <Checkbox checked={state.checked} onChange={onChange} label='Teкст рядом' description={longText}/>
    <Checkbox checked label='Teкст рядом' description={longText} disabled/>
    <Checkbox checked label={longText} />
  </Stack>
</Stack>
```


