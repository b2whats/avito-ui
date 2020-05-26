```js
import { Spinner } from '../Spinner/'
import { Button } from '../Button/'
import { Stack, Box } from '../Layout/'
const [props, setProps] = useState({ open: false, delay: 0, trigger: 'hover', animation: 'fade' })
const onToggleDelay = () => setProps(props => ({ ...props, delay: props.delay === 0 ? 3000 : 0}))
const onToggleTrigger = () => setProps(props => ({ ...props, trigger: props.trigger === 'hover' ? 'click' : 'hover' }))
const onToggleOpen = () => setProps(props => ({ ...props, open: !props.open }));
const onToggleAnimation = () => setProps(props => ({ ...props, animation: props.animation ? undefined : 'fade' }));
const onOutsideClick = React.useCallback(() => { console.log('onOutsideClick') }, []);

<Stack spacing='m' column>
  <Stack spacing='s'>
    <Button size='s' onClick={onToggleOpen}>{props.open ? 'Close' : 'Open'}</Button>
    <Button size='s' onClick={onToggleDelay}>Delay {props.delay === 0 ? 3000 : 0}</Button>
    <Button size='s' onClick={onToggleTrigger}>Trigger {props.trigger === 'hover' ? 'click' : 'hover'}</Button>
    <Button size='s' onClick={onToggleAnimation}>Animation {props.animation ? 'off' : 'on'}</Button>
  </Stack>
  <ScrollBox>
    <Positioner {...props} target={'Target'} onOutsideClick={onOutsideClick}>
      Reference
    </Positioner>
  </ScrollBox>
</Stack>
```
