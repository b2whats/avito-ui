```js
import { Text } from '../Text/'
import { Button } from '../Button/'
import { Stack, Box } from '../Layout/'
const [props, setProps] = useState({ open: false, delay: 0, trigger: 'hover', animation: 'fade', placement: 'bottom' })
const onToggleDelay = () => setProps(props => ({ ...props, delay: props.delay === 0 ? 3000 : 0}))
const onToggleTrigger = () => setProps(props => ({ ...props, trigger: props.trigger === 'hover' ? 'click' : 'hover' }))
const onToggleOpen = () => setProps(props => ({ ...props, open: !props.open }));
const onToggleAnimation = () => setProps(props => ({ ...props, animation: props.animation ? undefined : 'fade' }))
const onPlacementChange = (placement) => () => setProps(props => ({ ...props, placement }))
const onOutsideClick = React.useCallback(() => { console.log('onOutsideClick') }, [])

const text = 'Компонент Tooltip'
const placement = [
  "auto", "auto-start", "auto-end",
  "top", "bottom", "right", "left", 
  "top-start", "top-end", "bottom-start",
  "bottom-end", "right-start", "right-end", "left-start", "left-end"
];

<Stack spacing='m' column>
  <Stack spacing='s'>
    <Button size='s' onClick={onToggleOpen}>{props.open ? 'Close' : 'Open'}</Button>
    <Button size='s' onClick={onToggleDelay}>Delay {props.delay === 0 ? 3000 : 0}</Button>
    <Button size='s' onClick={onToggleTrigger}>Trigger {props.trigger === 'hover' ? 'click' : 'hover'}</Button>
    <Button size='s' onClick={onToggleAnimation}>Animation {props.animation ? 'off' : 'on'}</Button>
  </Stack>
  <Text size='l'>Позиция</Text>
  <Stack spacing='xs' spacingCross='xs' wrap>
    {placement.map(position => (
      <Button key={position} size='s' width={125} onClick={onPlacementChange(position)}>{position}</Button>
    ))} 
  </Stack>
  <ScrollBox>
    <Tooltip {...props} content={text} closeIcon onOutsideClick={onOutsideClick}>
      <Box bg='gray8' width={200} height={150}></Box>
    </Tooltip>
  </ScrollBox>
</Stack>
```
