## Селект

```jsx
const options = [
  { label: 'Жизнь', value: 'life' },
  { label: 'Работа', value: 'job' },
  { label: 'Карьера', value: 'career' },
  { label: 'Кое-что другое', value: 'heroin' }
];

<Select
  options={options}
  getText={option => option.label}
  getValue={option => option.value}
  placeholder='Я выбираю'
/>
```
