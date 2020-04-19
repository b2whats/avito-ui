```js
import { useState } from 'react'
import { Stack } from '../Layout/';
const [state, setState] = useState(false)
const onChange = ({ checked }) => {
  console.log('onChange', checked)
  setState(checked);
}
const onClick = (event) => {
  console.log('onClick', event.target.checked)
}
const longText = 'Французская художница, входившая в круг художников в Париже, ставших известными как импрессионисты.';

<Stack spacing='m' column>
  <div>
    <Checkbox checked={state} onChange={onChange} onClick={onClick} label='Teкст рядом' />
    <Checkbox checked={state} onChange={onChange} label='Teкст рядом' shape='circle'/>
  </div>
  <Stack spacing='m' column width={300}>
    <Checkbox checked={state} onChange={onChange}  label='Teкст рядом' />
    <Checkbox checked={state} onChange={onChange} label='Teкст рядом' shape='circle'/>
    <Checkbox checked={state} onChange={onChange} variant='secondary' label='Teкст рядом' />
    <Checkbox checked={state} onChange={onChange} variant='success' label='Teкст рядом' />
    <Checkbox checked={state} onChange={onChange} variant='warning' label='Teкст рядом' />
    <Checkbox checked={state} onChange={onChange} variant='error' label='Teкст рядом' />
    <Checkbox checked={state} onChange={onChange} label='Teкст рядом' labelPosition='start'/>
    <Checkbox checked indeterminate label='Teкст рядом'/>
    <Checkbox  indeterminate label='Teкст рядом'/>
    <Checkbox label='Teкст рядом' disabled/>
    <Checkbox checked label='Teкст рядом' disabled/>
    <Checkbox checked={state} onChange={onChange} label='Teкст рядом' />
    <Checkbox checked label='Teкст рядом' disabled/>
    <Checkbox checked label={longText} />
  </Stack>
</Stack>
```


