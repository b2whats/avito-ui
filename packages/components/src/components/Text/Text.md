### Size

```jsx
import { Stack } from '../../';

<Stack space={12}>
  <Stack column space={10}>
    <Text mb={15}>Normal</Text>
    <Text size='xs'>XS size</Text>
    <Text size='s'>S size</Text>
    <Text size='m'>M size</Text>
    <Text size='l'>L size</Text>
    <Text size='xl'>XL size</Text>
    <Text size='xxl'>XXL size</Text>
    <Text fontSize={50}>Custom size</Text>
  </Stack>
  <Stack column space={10}>
    <Text mb={15}>Bold</Text>
    <Text size='xs' bold>XS size</Text>
    <Text size='s' bold>S size</Text>
    <Text size='m' bold>M size</Text>
    <Text size='l' bold>L size</Text>
    <Text size='xl' bold>XL size</Text>
    <Text size='xxl' bold>XXL size</Text>
    <Text fontSize={50} bold>Custom size</Text>
  </Stack>
  <Stack column space={10}>
    <Text mb={15}>Italic</Text>
    <Text size='xs' italic>XS size</Text>
    <Text size='s' italic>S size</Text>
    <Text size='m' italic>M size</Text>
    <Text size='l' italic>L size</Text>
    <Text size='xl' italic>XL size</Text>
    <Text size='xxl' italic>XXL size</Text>
    <Text fontSize={50} italic>Custom size</Text>
  </Stack>
</Stack>
```

### Dense

```jsx
import { Stack } from '../../';
const text = 'Продажа двухкомнатных квартир вторичное жилье в Петропавловске-Камчатском 12 567 456';

<Stack space={12} column>
  <Stack space={10} width={600}>
    <Text size='m' bold>XS</Text>
    <Text size='xs'>{text}</Text>
    <Text size='xs' dense>{text}</Text>
  </Stack>
  <Stack space={10} width={600}>
    <Text size='m' bold>S</Text>
    <Text size='s'>{text}</Text>
    <Text size='s' dense>{text}</Text>
  </Stack>
  <Stack space={10} width={600}>
    <Text size='m' bold>M</Text>
    <Text size='m'>{text}</Text>
    <Text size='m' dense>{text}</Text>
  </Stack>
  <Stack space={10} width={800}>
    <Text size='m' bold>L</Text>
    <Text size='l'>{text}</Text>
    <Text size='l' dense>{text}</Text>
  </Stack>
  <Stack space={10}>
    <Text size='m' bold>XL</Text>
    <Text size='xl'>{text}</Text>
    <Text size='xl' dense>{text}</Text>
  </Stack>
  <Stack space={10}>
    <Text size='m' bold>XXL</Text>
    <Text size='xxl'>{text}</Text>
    <Text size='xxl' dense>{text}</Text>
  </Stack>
</Stack>
```

### Color

```jsx
import { Stack } from '../../';

<Stack space={12}>
  <Stack column space={10}>
    <Text>Variants </Text>
    <Text variant='primary'>variant primary</Text>
    <Text variant='default'>variant default</Text>
    <Text variant='success'>variant success</Text>
    <Text variant='warning'>variant warning</Text>
    <Text variant='error'>variant error</Text>
  </Stack>
  <Stack column space={10}>
    <Text>Custom </Text>
    <Text color='red70'>red70</Text>
    <Text color='blue30'>blue30</Text>
    <Text color='green60'>green60</Text>
  </Stack>
</Stack>
```

### Styles

```jsx
import { Stack } from '../../';

<Stack space={12}>
    <Text uppercase>uppercase</Text>
    <Text strike>strike normal</Text>
    <Text strike='red50'>strike color</Text>
    <Text underline>underline</Text>
    <Text underline='dashed'>underline</Text>
    <Text underline='dotted'>underline</Text>
    <Text letterSpacing={2}>letter-spacing</Text>
</Stack>
```
### Align

```jsx
import { Stack } from '../../';
const text = 'В 2017, 2018 и 2019 гг. в ООО «КЕХ еКоммерц» была проведена специальная оценка условий труда. В результате оценки установлено, что условия труда на рабочих местах соответствуют государственным нормативным требованиям охраны труда (2017, 2018, 2019), вредные и опасные производственные факторы на рабочих местах отсутствуют. В связи с этим дополнительные мероприятия по улучшению условий и охраны труда работников на данных рабочих местах не требуются.';

<Stack space={12} column>
    <Text align='left' block>left</Text>
    <Text align='center' block>center</Text>
    <Text align='right' block>right</Text>
    <Text align='justify' block>{text}</Text>
</Stack>
```

### Vertical align

```jsx
import { Stack } from '../../';
const text = 'В 2017, 2018 и 2019 гг. в ООО «КЕХ еКоммерц» была проведена специальная оценка условий труда. В результате оценки установлено, что условия труда на рабочих местах соответствуют государственным нормативным требованиям охраны труда (2017, 2018, 2019), вредные и опасные производственные факторы на рабочих местах отсутствуют. В связи с этим дополнительные мероприятия по улучшению условий и охраны труда работников на данных рабочих местах не требуются.';

<Stack space={12} height={100}>
    <Text>normal</Text>
    <Text valignSelf='top'>top</Text>
    <Text valignSelf='middle'>middle</Text>
    <Text valignSelf='bottom'>bottom</Text>
    <Text valignSelf='baseline'>baseline</Text>
</Stack>
```

### Custom

```jsx
import { Stack } from '../../';

<Stack space={12} column>
    <Text>
      Продажа двухкомнатных квартир вторичное жилье в Петропавловске-Камчатском 
      <Text color='gray50'>12 567 456</Text>
    </Text>
    <Stack space={12}>
      <CardDoc>
        <Text>Normal</Text>
      </CardDoc>
      <CardDoc>
        <Text crop>Crop</Text>
      </CardDoc>
    </Stack>
</Stack>
```