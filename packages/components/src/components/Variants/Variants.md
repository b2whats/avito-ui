```jsx
  import { Stack } from '../../'
  const state = 'hover active selected focus';

<Stack column space='m'>
  <Stack space='m'>
    <Variants>Text</Variants>
    <Variants border='gray' borderState={state}>Text</Variants>
  </Stack>
  <Stack space='m'>
    <Variants border='colored' borderState={state} variant='primary'>Text</Variants>
    <Variants border='colored' borderState={state} variant='secondary'>Text</Variants>
    <Variants border='colored' borderState={state} variant='success'>Text</Variants>
    <Variants border='colored' borderState={state} variant='warning'>Text</Variants>
    <Variants border='colored' borderState={state} variant='error'>Text</Variants>
  </Stack>
  <Stack space='m'>
    <Variants border='mixed' borderState={state} variant='primary'>Text</Variants>
    <Variants border='mixed' borderState={state} variant='secondary'>Text</Variants>
    <Variants border='mixed' borderState={state} variant='success'>Text</Variants>
    <Variants border='mixed' borderState={state} variant='warning'>Text</Variants>
    <Variants border='mixed' borderState={state} variant='error'>Text</Variants>
  </Stack>
</Stack>
```

```jsx
  import { Stack } from '../../'
  const state = 'hover active selected';

<Stack column space='m'>
  <Stack space='m'>
    <Variants>Text</Variants>
    <Variants background='gray' backgroundState={state}>Text</Variants>
  </Stack>
  <Stack space='m'>
    <Variants background='colored' backgroundState={state} focus variant='primary'>Text</Variants>
    <Variants background='colored' backgroundState={state} focus variant='secondary'>Text</Variants>
    <Variants background='colored' backgroundState={state} focus variant='success'>Text</Variants>
    <Variants background='colored' backgroundState={state} focus variant='warning'>Text</Variants>
    <Variants background='colored' backgroundState={state} focus variant='error'>Text</Variants>
  </Stack>
  <Stack space='m'>
    <Variants background='mixed' backgroundState={state} focus variant='primary'>Text</Variants>
    <Variants background='mixed' backgroundState={state} focus variant='secondary'>Text</Variants>
    <Variants background='mixed' backgroundState={state} focus variant='success'>Text</Variants>
    <Variants background='mixed' backgroundState={state} focus variant='warning'>Text</Variants>
    <Variants background='mixed' backgroundState={state} focus variant='error'>Text</Variants>
  </Stack>
</Stack>
```