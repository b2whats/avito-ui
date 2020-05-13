```jsx
import { Box } from './';

<Stack spacing='m' debug>
  <Stack spacing='m' inline debug>
    123
  </Stack>
  <Stack spacing='m' debug>
    456
  </Stack>
</Stack>
```

```jsx
import { Box } from './';

<Stack spacing='m' debug column>
  <Stack spacing='m' debug>
    123
  </Stack>
  <Stack spacing='m' debug>
    456
  </Stack>
</Stack>
```

```jsx
import { Box } from './';

<Stack spacing='m' debug inline onMouseUp={() => console.log('up stack')}>
  <Box p='s' onMouseUp={() => console.log('up1')}>1</Box>
  <Box mr='xl' p='s' onMouseUp={() => console.log('up2')}>2</Box>
  <Box p='s' onMouseUp={() => console.log('up3')}>3</Box>
  <Box p='s' onMouseUp={() => console.log('up4')}>4</Box>
</Stack>
```

```jsx
import { Box } from './';

<div>
<Stack spacing='m' debug>
  <Box p='s'>1</Box>
  <Box p='s'>2</Box>
  <Box p='s'>3</Box>
  <Box p='s'>4</Box>
</Stack>
<Stack spacing='m' debug>
  <Box p='s'>1</Box>
  <Box p='s'>2</Box>
  <Box p='s'>3</Box>
  <Box p='s'>4</Box>
</Stack>
</div>
```

```jsx
import { Box } from './';

<Stack spacing='m' p='m' debug>
  <Box p='s'>1</Box>
  <Box mr='l' p='s'>2</Box>
  <Box p='s'>3</Box>
  <Box p='s'>4</Box>
</Stack>
```

```jsx
import { Box } from './';

<Stack spacing='m' scroll debug>
  <Box height={50} width={1/3} p='s'>1</Box>
  <Box width={1/3}>2</Box>
  <Box width={1/3}>3</Box>
  <Box width={1/3}>4</Box>
  <Box width={1/3}>5</Box>
  <Box width={1/3}>6</Box>
  <Box width={1/3}>7</Box>
</Stack>
```

```jsx
import { Box } from './';

<Stack spacing='m' column debug>
  <Box height={50}>1</Box>
  <Box height={50}>2</Box>
  <Box height={50}>3</Box>
  <Box height={50}>4</Box>
</Stack>
```

```jsx
import { Box } from './';

<Stack spacing='m' column height={200} scroll debug>
  <Box height={50}>1</Box>
  <Box height={50}>2</Box>
  <Box height={50}>3</Box>
  <Box height={50}>4</Box>
  <Box height={50}>5</Box>
  <Box height={50}>6</Box>
  <Box height={50}>7</Box>
</Stack>
```

```jsx
import { Box } from './';

<Stack>
  <Stack spacing='s' debug>
    <Box p='s'>1</Box>
    <Box p='s'>2</Box>
    <Box p='s'>3</Box>
  </Stack>
  <Stack ml='xxl' spacing='s' debug>
    <Box p='s'>1</Box>
    <Box p='s'>2</Box>
    <Box p='s'>3</Box>
  </Stack>
</Stack>
```