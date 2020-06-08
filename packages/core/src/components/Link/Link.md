Ссылка повторяет все параметры компонента `Text`

### Цветовые схемы

```jsx
import { Stack } from '../Layout/';
import { Text } from '../Text/';

<Stack spacing={12} wrap>
  <Stack column spacing={10} align='center'>
    <Text mb={15}>Primary</Text>
    <Link href='#'>Normal</Link>
    <Link href='#' underline>Underline</Link>
    <Link href='https://www.google.com/'>Visited</Link>
    <Link href='https://www.google.com/' noVisited>noVisited</Link>
  </Stack>
  <Stack column spacing={10} align='center'>
    <Text mb={15}>Secondary</Text>
    <Link href='#' variant='secondary'>Normal</Link>
    <Link href='#' variant='secondary' underline>Underline</Link>
    <Link href='https://www.google.com/' variant='secondary'>Visited</Link>
    <Link href='https://www.google.com/' variant='secondary' noVisited>noVisited</Link>
  </Stack>
  <Stack column spacing={10} align='center'>
    <Text mb={15}>Inherit</Text>
    <Link href='#' inherit>Normal</Link>
    <Link href='https://www.google.com/' inherit>Visited</Link>
    <Link href='https://www.google.com/' inherit noVisited>noVisited</Link>
  </Stack>
</Stack>
```
