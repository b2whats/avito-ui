```js
import { Select, Text, Stack } from '../../';

function Presentation(attrs) {
  const [selectedKey, setSelectedKey] = useState();

  return (
    <Select 
      title='Выбери меня'
      selectedKey={selectedKey}
      onChange={setSelectedKey}
      {...attrs} />
  );
}

const items = [
  { id: 1, title: 'Title 1' },
  { id: 2, title: 'Title 2' },
  { id: 3, title: 'Title 3' }
];

<Stack spacing={10} column>
  <Presentation items={items} />
  <Presentation items={items} required />
</Stack>

```