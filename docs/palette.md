```jsx
import { Stack, Box, Text } from '@avito/core'
import { tokens } from '@avito/tokens'

const getLightness = color => color.match(/[0-9]+$/) ? Number(color.match(/[0-9]+$/)) : NaN
const byHue = hue => Object.keys(tokens.palette)
  .filter(k => k.startsWith(hue))
  .sort((a, b) => getLightness(a) - getLightness(b))
const hues = ['blue', 'green', 'red', 'yellow', 'purple', 'orange']
const Color = ({ name, fullLabel, isDark, noHex }) => {
  const l = getLightness(name)
  isDark = isDark == null ? (l >= 800 || (l > 50 && l < 100)) : isDark
  return (
    <Box width={80} height={60} bg={name} color={ isDark ? 'white' : 'black' } align="center" valign='middle' column>
      <Text size='s' >
        { fullLabel ? name : l }
      </Text>
      {!noHex && <Text size='xs'>{ tokens.palette[name] }</Text>}
    </Box>
  )
};

<Stack spacing='m' column>
  <Text>gray# — оттенки серого без прозрачности</Text>
  <Stack wrap>
    {byHue('gray').map(color => <Color key={color} name={color} />)}
  </Stack>

  <Text>black# — оттенки серого через прозрачность</Text>
  <Stack wrap>
    <Color name="white" fullLabel />
    {byHue('black').filter(k => k !== 'black').map(color => <Color key={color} name={color} noHex />)}
    <Color name="black" fullLabel isDark />
  </Stack>

  <Text>Цвета</Text>
  {hues.map(hue =>
    <Stack key={hue} wrap>
      <Text valignSelf="middle" width={80} color={`${hue}700`}>{hue}</Text>
      {byHue(hue).map(color => <Color key={color} name={color} />)}
    </Stack>
  )}
</Stack>
```