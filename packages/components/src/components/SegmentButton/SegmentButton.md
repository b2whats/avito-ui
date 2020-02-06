```js
import { Stack, Icon } from '../../'
initialState = { radio: undefined, radio2: undefined };
const onChange = ({ name, value }) => {
    setState({ [name]: value })
}
const options = [
  { value: 1, text: 'По алфавиту' },
  { value: 2, text: 'По линиям' },
];
const options2 = [
  { value: 1, text: 'Раз' },
  { value: 2, text: 'Два' },
  { value: 3, text: 'Три', disabled: true },
  { value: 4, text: 'Четыре' },
];

<Stack spacing={10} column>
  <SegmentButton size='s' options={options} name='radio' value={state.radio} onChange={onChange} />
  <SegmentButton options={options} name='radio' value={state.radio} onChange={onChange} />
  <SegmentButton size='l' options={options} name='radio' value={state.radio} onChange={onChange} />
  <SegmentButton options={options} name='radio' value={state.radio} onChange={onChange} disabled/>
  <SegmentButton options={options2} name='radio2' value={state.radio2} onChange={onChange} />
</Stack>
```

