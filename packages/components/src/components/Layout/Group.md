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

<!-- ```jsx
import { Button, Checkbox } from '../../'
initialState = { value: undefined };

<div>
  <Group name='radio' mode='radio' value={state.value} onChange={(props) => setState({ value: props.value })}>
    <Button value={0}>One</Button>
    <Button value={1}>Two</Button>
    <Button value={2}>Three</Button>
  </Group>

  <Group name='radio' mode='radio' value={state.value} onChange={(props) => setState({ value: props.value })}>
    <Checkbox value={0} label='One' />
    <Checkbox value={1} label='Two' />
    <Checkbox value={2} label='Three' />
  </Group>
</div>
``` -->

```jsx
import { Button } from '../../'
initialState = { value: undefined };

<Group name='checkbox' mode='checkbox' value={state.value} onChange={(props) => setState({ value: props.value })}>
  <Button kind='outline' value={0}>One</Button>
  <Button kind='outline' value={1}>Two</Button>
  <Button kind='outline' value={2}>Three</Button>
</Group>
```