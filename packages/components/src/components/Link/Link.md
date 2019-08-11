```js
import { Text, Stack } from '../../'

const rand = () => parseInt(Math.random() * 1000000);

<Stack space='m'>
  <Link href={`http://example.com?${rand()}`} disabled>Click</Link>
  <Link href={`http://example.com?${rand()}`} variant='secondary'>Click</Link>
  <Link href={`http://example.com?${rand()}`} variant='success'>Click</Link>
  <Link href={`http://example.com?${rand()}`} variant='warning'>Click</Link>
  <Link href={`http://example.com?${rand()}`} variant='error'>Click</Link>
</Stack>
```

```js
import { Text } from '../../'

const rand = () => parseInt(Math.random() * 1000000);

<Text as='div'>
  <Link href={`http://example.com?${rand()}`} underline>Click</Link>
  <Text underline>
    Underline
  </Text>
  <Text preset='h3'>
    <Link href={`http://example.com?${rand()}`}>H3 link</Link>
  </Text>
</Text>
```