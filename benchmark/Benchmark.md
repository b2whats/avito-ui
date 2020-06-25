```jsx
import { Input, Text, Checkbox, Stack, Button } from '@avito/web-components';

<ProfilePlayground id="form" render={(key, props) =>
  <Stack key={key} {...props} spacing='s' valign='middle' mb='s'>
    <Text {...props}>form</Text>
    <Input {...props} key={key} value="999" />
    <Checkbox {...props} />
    <Button {...props}>button</Button>
  </Stack>
} />
```