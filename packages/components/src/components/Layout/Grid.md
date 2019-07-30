```jsx
import { Box } from './';

<Grid space='s' spaceY='s' width={537} inline debug>
  <Box width={1/5} p='l' height={100}>
    <Grid space='s' debug>
      <Box width={1/3}>1</Box>
      <Box width={1/3}>2</Box>
      <Box width={1/3}>3</Box>
    </Grid>
  </Box>
  <Box width={1/5}>2</Box>
  <Box width={1/5}>3</Box>
  <Box width={1/5}>4</Box>
  <Box width={1/5}>5</Box>
  <Box grow height={100}>6</Box>
</Grid>
```

```jsx
import { Box } from './';

<div>
<Grid space='s' spaceY='s' debug>
  <Box width={1/5} p='l'>
    <Grid space='s' debug>
      <Box width={1/3}>1</Box>
      <Box width={1/3}>2</Box>
      <Box width={1/3}>3</Box>
    </Grid>
  </Box>
  <Box width={1/5}>2</Box>
  <Box width={1/5}>3</Box>
  <Box width={1/5}>4</Box>
  <Box width={1/5}>5</Box>
  <Box grow>6</Box>
</Grid>
<Grid space='s' spaceY='s' p='xl' debug>
  <Box width={1/5}>1</Box>
  <Box width={1/5}>2</Box>
  <Box width={1/5}>3</Box>
  <Box width={1/5}>4</Box>
  <Box width={1/5}>5</Box>
  <Box grow>6</Box>
</Grid>
</div>
```
