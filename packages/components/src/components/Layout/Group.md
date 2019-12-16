```jsx
import { Button, Stack } from '../../';

<Stack column space='m'>
  <Group>
    <Button>One 1</Button>
    <Button>Two 2</Button>
    <Button>Three 3</Button>
  </Group>
  <Group>
    <Button kind='outline'>One 1</Button>
    <Button kind='outline'>Two 2</Button>
    <Button kind='outline'>Three 3</Button>
  </Group>
  <Group block>
    <Button>One 1</Button>
    <Button>Two 2</Button>
    <Button>Three 3</Button>
  </Group>
  <Group block>
    <Button kind='outline'>One 1</Button>
    <Button kind='outline'>Two 2</Button>
    <Button kind='outline'>Three 3</Button>
  </Group>
</Stack>
```

```jsx
import { Button, Stack } from '../../';

<Stack space='m'>
  <Group column>
    <Button>One 1</Button>
    <Button>Two 2</Button>
    <Button>Three 3</Button>
  </Group>
  <Group column>
    <Button kind='outline'>One 1</Button>
    <Button kind='outline'>Two 2</Button>
    <Button kind='outline'>Three 3</Button>
  </Group>
  <Group column width={1/3}>
    <Button kind='outline'>One 1</Button>
    <Button kind='outline'>Two 2</Button>
    <Button kind='outline'>Three 3</Button>
  </Group>
</Stack>
```

```jsx
import { Button, Stack } from '../../';

<Stack space='m' column>
  <Group column block>
    <Button>One 1</Button>
    <Button>Two 2</Button>
    <Button>Three 3</Button>
  </Group>
  <Group column block>
    <Button kind='outline'>One 1</Button>
    <Button kind='outline'>Two 2</Button>
    <Button kind='outline'>Three 3</Button>
  </Group>
</Stack>
```

```jsx
import { Stack, Checkbox, Radio } from '../../'
initialState = { radio: undefined, checkbox: undefined };
const onChange = ({ name, value }) => {
  console.log(name, value)
    setState({ [name]: value });
}

<Stack column space='m'>
  <Group name='radio' mode='radio' value={state.radio} space='l' onChange={onChange}>
    <Radio value={0} label='One' />
    <Radio value={1} label='Two' />
    <Radio value={2} label='Three' />
  </Group>
  <Group name='checkbox' mode='checkbox' value={state.checkbox} space='l' onChange={onChange}>
    <Checkbox value={0} label='One' />
    <Checkbox value={1} label='Two' />
    <Checkbox value={2} label='Three' />
  </Group>
</Stack>
```

```jsx
import { Button, Stack } from '../../'
initialState = { radio: 6, checkbox: undefined };
const onChange = ({ name, value }) => {
    setState({ [name]: value });
}
<Stack column space='m'>
  <Group name='checkbox' mode='checkbox' space={10} value={state.checkbox} onChange={onChange}>
    <Button preset='default' value={0}>One</Button>
    <Button preset='default' value={1}>Two</Button>
    <Button preset='default' value={2}>Three</Button>
  </Group>
  <Group name='radio' mode='radio' space={10} value={state.radio} onChange={onChange}>
    <Button preset='default' value={0} shape='square'>1</Button>
    <Button preset='default' value={1} shape='square'>2</Button>
    <Button preset='default' value={2} shape='square'>3</Button>
    <Button preset='default' value={3} shape='square'>4</Button>
    <Button preset='default' value={4} shape='square'>5</Button>
    <Button preset='default' value={5} shape='square'>6</Button>
    <Button preset='default' value={6} shape='square'>7</Button>
  </Group>
  <Group name='radio' mode='radio' space={10} value={state.radio} p={3} scroll width={200} onChange={onChange}>
    <Button preset='default' value={0} shape='square'>1</Button>
    <Button preset='default' value={1} shape='square'>2</Button>
    <Button preset='default' value={2} shape='square'>3</Button>
    <Button preset='default' value={3} shape='square'>4</Button>
    <Button preset='default' value={4} shape='square'>5</Button>
    <Button preset='default' value={5} shape='square'>6</Button>
    <Button preset='default' value={6} shape='square'>7</Button>
  </Group>
  <Group name='radio' mode='radio' space={10} value={state.radio} p={3} scroll disabled width={200} onChange={onChange}>
    <Button preset='default' value={0} shape='square'>1</Button>
    <Button preset='default' value={1} shape='square'>2</Button>
    <Button preset='default' value={2} shape='square'>3</Button>
    <Button preset='default' value={3} shape='square'>4</Button>
    <Button preset='default' value={4} shape='square'>5</Button>
    <Button preset='default' value={5} shape='square'>6</Button>
    <Button preset='default' value={6} shape='square'>7</Button>
  </Group>
</Stack>
```