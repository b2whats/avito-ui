Ссылка повторяет все параметры компонента `Text`

### Цветовые схемы

```jsx
import { Stack } from '../Layout/';
import { Text } from '../Text/';
const sureVisited = location.href;

<Stack spacing={12} wrap>
  <Stack column spacing={10}>
    <Text mb={15}>Primary</Text>
    <Link href='__'>Normal</Link>
    <Link href='__' underline>Underline</Link>
    <Link href={sureVisited}>Visited</Link>
    <Link href={sureVisited} noVisited>noVisited</Link>
  </Stack>
  <Stack column spacing={10}>
    <Text mb={15}>Secondary</Text>
    <Link href='__' variant='secondary'>Normal</Link>
    <Link href='__' variant='secondary' underline>Underline</Link>
    <Link href={sureVisited} variant='secondary'>Visited</Link>
    <Link href={sureVisited} variant='secondary' noVisited>noVisited</Link>
  </Stack>
  <Stack column spacing={10}>
    <Text mb={15}>Inherit</Text>
    <Link href='__' inherit>Normal</Link>
    <Link href={sureVisited} inherit>Visited</Link>
    <Link href={sureVisited} inherit noVisited>noVisited</Link>
  </Stack>
</Stack>
```
