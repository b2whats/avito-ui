```js
import { Spinner } from '../Spinner/'
import { Button } from '../Button/'
import { Stack, Box } from '../Layout/'

const [state, setState] = useState(false)
const onToggle = () => setState(state => !state);

<Stack spacing='m'>
  <Positioner target={123} trigger='hover' animation='fade' >
    <Spinner />
  </Positioner>
  <Positioner target={123} trigger='click' animation='fade' >
    123
  </Positioner>
  <Button onClick={onToggle}>Toggle</Button>
</Stack>
```
