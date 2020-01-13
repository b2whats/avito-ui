```js
import { Stack } from '../../';
const initialState = { checked: false, loading: false };
const onChange = ({ checked }) => {
    setState({ checked: checked });
}
const onLoadingChange = ({ checked }) => {
    setState({ checked: checked, loading: true });

    setTimeout(() => {
      setState({ loading: false });
    }, 2000)
}

const longText = 'Французская художница, входившая в круг художников в Париже, ставших известными как импрессионисты.';

<Stack spacing='m'>
  <Stack spacing='m' column width={300}>
    <Switcher checked={state.checked} onChange={onChange} label='Teкст рядом' />
    <Switcher checked={state.checked} onChange={onLoadingChange} label='Teкст рядом' loading={state.loading} />
    <Switcher checked={state.checked} onChange={onLoadingChange} label='Teкст рядом' loading />
    <Switcher checked={state.checked} onChange={onChange} variant='secondary' label='Teкст рядом' />
    <Switcher checked={state.checked} onChange={onChange} variant='success' label='Teкст рядом' />
    <Switcher checked={state.checked} onChange={onChange} variant='warning' label='Teкст рядом' />
    <Switcher checked={state.checked} onChange={onChange} variant='error' label='Teкст рядом' />
    <Switcher checked={state.checked} onChange={onChange} label='Teкст рядом' labelPosition='start'/>
    <Switcher checked indeterminate label='Teкст рядом'/>
    <Switcher label='Teкст рядом' disabled/>
    <Switcher checked label='Teкст рядом' disabled/>
    <Switcher checked={state.checked} onChange={onChange} label='Teкст рядом' description={longText}/>
    <Switcher checked label='Teкст рядом' description={longText} disabled/>
    <Switcher checked label={longText} />
  </Stack>
</Stack>
```


