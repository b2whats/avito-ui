```js
import { Spinner } from '../Spinner/'
import { Button } from '../Button/'
import { Stack, Box } from '../Layout/'
const [delay, setDelay] = useState(0)
const onToggleDelay = () => setDelay(delay => delay === 0 ? 3000 : 0)
const [test, setTest] = useState({ trigger: 'click', delay: 0 })
const onTest = () => setTest({ trigger: 'hover', delay: 3000 })
const [open, setOpen] = useState(false)
const onToggleOpen = () => setOpen(open => !open);

<Stack spacing='m'>

  <Positioner target={123} open={open} name='2' animation='fade'>
    123
  </Positioner>

  <Button onClick={onToggleOpen}>{open ? 'Close' : 'Open'}</Button>
  <Button onClick={onToggleDelay}>Delay {delay === 0 ? 3000 : 0}</Button>
  <Button onClick={onTest}>trigger and delay</Button>
</Stack>
```
