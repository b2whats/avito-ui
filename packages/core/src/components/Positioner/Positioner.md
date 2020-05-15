```js
import { Spinner } from '../Spinner/'
import { Button } from '../Button/'
import { Stack, Box } from '../Layout/'

const [state, setState] = useState(false)
const onToggle = () => setState(state => !state);

<Stack spacing='m'>
  <Positioner target={<Box>123</Box>} trigger='hover'>
    <Spinner />
  </Positioner>
  <Button onClick={onToggle}>Toggle</Button>
</Stack>
```
