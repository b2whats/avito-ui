```jsx
import { Stack } from '../Layout/'
const initialState = { value: '' }
const text = 'В 2017, 2018 и 2019 гг. в ООО «КЕХ еКоммерц» была проведена специальная оценка условий труда. В результате оценки установлено, что условия труда на рабочих местах соответствуют государственным нормативным требованиям охраны труда (2017, 2018, 2019), вредные и опасные производственные факторы на рабочих местах отсутствуют. В связи с этим дополнительные мероприятия по улучшению условий и охраны труда работников на данных рабочих местах не требуются.';
const onChange = ({ target }) => {
  setState(state => ({ value: target.value }))
};

<Stack column spacing={10}>
  <Textarea rows={3} placeholder='placeholder' value={state.value} onChange={onChange}/>
  <Textarea maxRows={5} placeholder='placeholder' value={state.value} clearable onChange={onChange}/>
  <Textarea autoSize placeholder='placeholder' value={state.value} clearable='always' onChange={onChange}/>
  <Textarea autoSize maxRows={5} value={text} onChange={onChange}/>
  <Textarea autoSize value={text} onChange={onChange}/>
</Stack>
```
