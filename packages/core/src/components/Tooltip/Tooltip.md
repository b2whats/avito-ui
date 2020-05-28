```js
import { Text } from '../Text/'
import { Button } from '../Button/'
import { Stack, Box } from '../Layout/'
const i = useRef(0)
const [props, setProps] = useState({ open: true, delay: 0, trigger: 'click', animation: 'fade', placement: 'bottom', triggerIndex: 0, usePortal: false })
const onToggleDelay = () => setProps(props => ({ ...props, delay: props.delay === 0 ? 3000 : 0}))
const onToggleTrigger = () => setProps(props => ({ ...props, trigger: trigger[++i.current] || trigger[i.current = 0] }))
const onToggleOpen = () => setProps(props => ({ ...props, open: !props.open }));
const onToggleAnimation = () => setProps(props => ({ ...props, animation: props.animation ? undefined : 'fade' }))
const onTogglePortal = () => setProps(props => ({ ...props, usePortal: !props.usePortal }))
const onPlacementChange = (placement) => () => setProps(props => ({ ...props, placement }))
const onOutsideClick = React.useCallback(() => { console.log('onOutsideClick') }, [])

const text = 'Компонент Tooltip'
const trigger = ['click', 'hover', 'focus']
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
    <Button size='s' onClick={onToggleTrigger}>Trigger {trigger[i.current + 1] || trigger[0]}</Button>
    <Button size='s' onClick={onToggleAnimation}>Animation {props.animation ? 'off' : 'on'}</Button>
    <Button size='s' onClick={onTogglePortal}>usePortal {props.usePortal ? 'off' : 'on'}</Button>
  </Stack>
  <Text size='l'>Позиция</Text>
  <Stack spacing='xs' spacingCross='xs' wrap>
    {placement.map(position => (
      <Button key={position} size='s' width={125} onClick={onPlacementChange(position)}>{position}</Button>
    ))} 
  </Stack>
  <ScrollBox>
    <Tooltip {...props} content={<div onClick={() => console.log('click')}>{text}</div>} closeIcon closeWhenScrolling onOutsideClick={onOutsideClick}>
      <Box bg='gray8' width={200} height={150} align='center' valign='middle'>{props.trigger}</Box>
    </Tooltip>
  </ScrollBox>
</Stack>
```
