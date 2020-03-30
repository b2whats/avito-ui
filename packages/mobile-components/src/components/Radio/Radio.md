```js
import { Stack } from '../../';
const initialState = { checked: false };
const onChange = ({ checked }) => {
    setState({ checked });
}
const longText = 'Французская художница, входившая в круг художников в Париже, ставших известными как импрессионисты.';

<Stack spacing='m'>
  <Stack spacing='m' column width={300}>
    <Radio checked={state.checked} onChange={onChange} label='Teкст рядом' />
    <Radio checked={state.checked} onChange={onChange} label='Teкст рядом' shape='square'/>
    <Radio checked={state.checked} onChange={onChange} variant='secondary' label='Teкст рядом' />
    <Radio checked={state.checked} onChange={onChange} variant='success' label='Teкст рядом' />
    <Radio checked={state.checked} onChange={onChange} variant='warning' label='Teкст рядом' />
    <Radio checked={state.checked} onChange={onChange} variant='error' label='Teкст рядом' />
    <Radio checked={state.checked} onChange={onChange} label='Teкст рядом' labelPosition='start'/>
    <Radio label='Teкст рядом' disabled/>
    <Radio checked label='Teкст рядом' disabled/>
    <Radio checked={state.checked} onChange={onChange} label='Teкст рядом' description={longText}/>
    <Radio checked label='Teкст рядом' description={longText} disabled/>
    <Radio checked label={longText} />
  </Stack>
</Stack>
```


