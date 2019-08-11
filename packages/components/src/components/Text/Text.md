```jsx

  <Text kind='h1' point>Push Me</Text>
  <Text kind='h2' point>Push Me</Text>
  <Text kind='h3' point>Push Me</Text>
  <Text kind='h4' point>Push Me</Text>
  <Text kind='h5' point>Push Me</Text>
  <Text kind='p' point>Push Me</Text>
  <Text kind='li' point>Push Me</Text>
```

```jsx
import Article from './Article.tsx'
import { Link } from '../../';

<div>
  <Text mx='xxl' kind='p'>Push Me</Text>
  <Text kind='p' align='center'>Push Me</Text>
  <Text kind='p' align='end'>Push Me</Text>
  <Text kind='p' align='justify'>
    Lorem ipsum dolor sit amet, <Link href='#'>consectetur</Link> adipiscing elit. Sed non purus
    id dolor maximus eleifend nec in nunc. Integer quis lacinia leo Me
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
    id dolor maximus eleifend nec in nunc. Integer quis lacinia leo Me
  </Text>

  <Text kind='p' size='s'>Push Me</Text>
  <Text kind='p'>Push Me</Text>
  <Text kind='p' size='l'>Push Me</Text>
  <Text kind='h1'>Push Me</Text>
  <Text kind='h2'>Push Me</Text>
  <Text kind='h3'>Push Me</Text>
  <Text kind='h4'>Push Me</Text>
  <Text kind='h5'>Push Me</Text>
  <Text kind='h6'>Push Me</Text>
  <Text kind='caption'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
    id dolor maximus eleifend nec in nunc. Integer quis lacinia leo
  </Text>

  <Text underline='solid'>Push Me</Text>
  <Text underline='dashed'>Push Me</Text>
  <Text underline='dotted'>Push Me</Text>

  <Text variant='primary'>Push Me</Text>
  <Text variant='secondary'>Push Me</Text>
  <Text variant='success'>Push Me</Text>
  <Text variant='danger'>Push Me</Text>
  <Text variant='error'>Push Me</Text>

  <Text color='green80'>Push Me</Text>
  <Text color='red70'>Push Me</Text>

  <Text bold>Push Me</Text>
  <Text as='strong' bold>Push Me</Text>
  <Text light>Push Me</Text>
  <Text italic>Push Me</Text>
  <Text as='em' italic>Push Me</Text>
  <Text uppercase>Push Me</Text>
  <Text italic bold>Push Me</Text>

  <Text strike='green40'>Push Me</Text>
  <Text truncate>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
    id dolor maximus eleifend nec in nunc. Integer quis lacinia leo.
  </Text>
  <Text truncate='50%'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
    id dolor maximus eleifend nec in nunc. Integer quis lacinia leo.
  </Text>
  <Text truncate='50%' strike>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
    id dolor maximus eleifend nec in nunc. Integer quis lacinia leo.
  </Text>
  <Text truncate='100px'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
    id dolor maximus eleifend nec in nunc. Integer quis lacinia leo.
  </Text>
  <Text truncate='100px' strike>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
    id dolor maximus eleifend nec in nunc. Integer quis lacinia leo.
  </Text>
  <CardDoc width='50%'>
    <Text crop lineHeight='s' size='s'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
      id dolor maximus eleifend nec in nunc. Integer quis lacinia leo.
    </Text>
  </CardDoc>
  <CardDoc width='50%'>
    <Text crop lineHeight='s' size='s'>
      2<br/>line
    </Text>
  </CardDoc>
  <CardDoc width='50%'>
    <Text crop lineHeight='m'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
      id dolor maximus eleifend nec in nunc. Integer quis lacinia leo.
    </Text>
  </CardDoc>
  <CardDoc width='50%'>
    <Text crop lineHeight='l' size='l'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
      id dolor maximus eleifend nec in nunc. Integer quis lacinia leo.
    </Text>
  </CardDoc>
  <CardDoc width='50%'>
    <Text crop kind='h1'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
      id dolor maximus eleifend nec in nunc. Integer quis lacinia leo.
    </Text>
  </CardDoc>
  <CardDoc width='50%'>
    <Text crop kind='h3'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
      id dolor maximus eleifend nec in nunc. Integer quis lacinia leo.
    </Text>
  </CardDoc>
  <CardDoc width='50%'>
    <Text truncate>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
      id dolor maximus eleifend nec in nunc. Integer quis lacinia leo.
    </Text>
  </CardDoc>
  <CardDoc>
    <Text crop truncate>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
      id dolor maximus eleifend nec in nunc. Integer quis lacinia leo.
    </Text>
  </CardDoc>
  <a href='https://www.modularscale.com/?14&px&1.25'>https://www.modularscale.com/?14&px&1.25</a>
  <a href='https://blog.prototypr.io/10-practical-steps-to-create-a-predictable-accessible-and-harmonious-typography-system-a-case-6c85d901bedd'>https://blog.prototypr.io/10-practical-steps-to-create-a-predictable-accessible-and-harmonious-typography-system-a-case-6c85d901bedd</a>

  https://codyhouse.co/ds/globals/typography

  https://medium.com/@marcintreder/design-system-sprint-4-managing-typography-303e335894ee

  https://styleguide.pivotal.io/modifiers/typography/

  https://type-scale.com/

  https://medium.com/codyhouse/create-your-design-system-part-1-typography-7c630d9092bd
  
  https://uxdesign.cc/a-better-way-to-create-typography-design-systems-689c851dc616

  https://archetypeapp.com/#

  https://design-system.pluralsight.com/core/typography/
</div> 
```