```js
import { Spinner } from '../Spinner/'
import { Button } from '../Button/'
import { Stack, Box } from '../Layout/'
const [props, setProps] = useState({ open: false, delayIn: 0, trigger: 'hover', animation: 'fade', change: false, visible: true })
const onToggleDelay = () => setProps(props => ({ ...props, delayIn: props.delayIn === 0 ? 3000 : 0}))
const onToggleTrigger = () => setProps(props => ({ ...props, trigger: props.trigger === 'hover' ? 'click' : 'hover' }))
const onToggleOpen = () => setProps(props => ({ ...props, open: !props.open }));
const onToggleAnimation = () => setProps(props => ({ ...props, animation: props.animation ? undefined : 'fade' }));
const onToggleChildren = () => setProps(props => ({ ...props, change: !props.change }));
const onToggleVisible = () => setProps(props => ({ ...props, visible: !props.visible }));
const onOutsideClick = React.useCallback(() => { console.log('onOutsideClick') }, []);



<Stack spacing='m' column>
  <Stack spacing='s' spacingCross='s' wrap>
    <Button size='s' onClick={onToggleOpen}>{props.open ? 'Close' : 'Open'}</Button>
    <Button size='s' onClick={onToggleDelay}>Delay {props.delayIn === 0 ? 3000 : 0}</Button>
    <Button size='s' onClick={onToggleTrigger}>Trigger {props.trigger === 'hover' ? 'click' : 'hover'}</Button>
    <Button size='s' onClick={onToggleAnimation}>Animation {props.animation ? 'off' : 'on'}</Button>
    <Button size='s' onClick={onToggleChildren}>Change children</Button>
    <Button size='s' onClick={onToggleVisible}>Change visible</Button>
  </Stack>
  <ScrollBox>
    {props.visible ? (
      <Positioner {...props} target={<div>'Target'</div>} closeOnEsc>
        {props.change ? <div>Reference 1</div> : <span>Reference 2</span>}
      </Positioner>
    ) : 'no positioner'}
  </ScrollBox>
</Stack>
```
