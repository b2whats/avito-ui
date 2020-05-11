## Состояние

```jsx
import { Stack } from '../Layout/'
const text = 'В 2017, 2018 и 2019 гг. в ООО «КЕХ еКоммерц» была проведена специальная оценка условий труда.';

<Stack column spacing={10}>
  <Textarea placeholder='Плэйсхолдер' />
  <Textarea placeholder='Неактивное с плэйсхолдером' disabled />
  <Textarea placeholder='Ошибка с плэйсхолдером' variant='error' />
  <Textarea value='Введенный текст' />
  <Textarea value='Неактивное с введенным текстом' disabled />
  <Textarea value='Ошибка с введенным текстом' variant='error' />
</Stack>
```

## Размер

```jsx
import { Stack } from '../Layout/'
const text = 'В 2017, 2018 и 2019 гг. в ООО «КЕХ еКоммерц» была проведена специальная оценка условий труда.';

<Stack column spacing={10}>
  <Textarea size='s' value={text} />
  <Textarea value={text} />
  <Textarea size='l' value={text} />
</Stack>
```

## Количество строк
```jsx
import { Stack } from '../Layout/';

<Stack column spacing={10}>
  <Textarea rows={1} value='1' />
  <Textarea rows={2} value='2\n2' />
  <Textarea rows={3} value='3\n3\n3' />
  <Textarea rows={4} value='4\n4\n4\n4' />
</Stack>
```

## Максимальное количество строк
```jsx
import { Stack } from '../Layout/';

<Stack column spacing={10}>
  <Textarea rows={4} maxRows={2} value='4(max2)\n4\n4\n4' />
</Stack>
```

## Вычисляемая высота
```jsx
import { Stack } from '../Layout/'
const [state, setState] = useState({ })
const onChange = ({ target }) => {
  setState(state => ({ ...state, [target.name]: target.value }))
};

<Stack column spacing={10}>
  <Textarea name='1' autoSize value={state['1']} onChange={onChange} />
  <Textarea name='2' autoSize maxRows={3} value={state['2']} onChange={onChange} />
  <Textarea name='3' autoSize rows={3} maxRows={5} value={state['3']} onChange={onChange} />
</Stack>
```

## Очищаемое поле
```jsx
import { Stack } from '../Layout/'
const [state, setState] = useState({ })
const onChange = ({ target }) => {
  setState(state => ({ ...state, [target.name]: target.value }))
};

<Stack column spacing={10}>
  <Textarea name='1' value={state['1']} clearable onChange={onChange} />
  <Textarea name='2' value={state['2']} clearable='always' onChange={onChange} />
</Stack>
```





```jsx
import { Stack } from '../Layout/'
const [state, setState] = useState({ value: '' })
const text = 'В 2017, 2018 и 2019 гг. в ООО «КЕХ еКоммерц» была проведена специальная оценка условий труда. В результате оценки установлено, что условия труда на рабочих местах соответствуют государственным нормативным требованиям охраны труда (2017, 2018, 2019), вредные и опасные производственные факторы на рабочих местах отсутствуют. В связи с этим дополнительные мероприятия по улучшению условий и охраны труда работников на данных рабочих местах не требуются.';
const onChange = ({ target }) => {
  setState(state => ({ value: target.value }))
};

<Stack column spacing={10}>
  <Textarea rows={3} placeholder='placeholder' value={state.value} onChange={onChange}/>
  <Textarea maxRows={5} autoSize placeholder='placeholder' value={state.value} clearable onChange={onChange}/>
  <Textarea autoSize placeholder={text} value={state.value} clearable='always' onChange={onChange}/>
  <Textarea autoSize maxRows={5} value={text} onChange={onChange}/>
  <Textarea autoSize value={text} onChange={onChange}/>
</Stack>
```
