Установите пакет с компонентами и его зависимости
::: platform mobile
```bash static
npm install @avito/mobile-components @avito/icons 
```
:::
::: platform web
```bash static
npm install @avito/web-components @avito/icons 
```
:::

Добавьте в ваше приложение тему для компонентов с помощью `ThemeProvider`
::: platform mobile
```jsx static
import { ThemeProvider } from "@avito/mobile-components"

// Используйте это в корне вашего приложения
<ThemeProvider>{props.children}</ThemeProvider>
```
:::
::: platform web
```jsx static
import { ThemeProvider } from "@avito/web-components"

// Используйте это в корне вашего приложения
<ThemeProvider>{props.children}</ThemeProvider>
```
:::

Токены уже вклчены в `ThemeProvider`, отдельно их добавлять не нужно, расширенная настройка будет описана в разделе "Настройка темы"

## Использование компонентов
::: platform mobile
Просто импортируйте компоненты по имени из `@avito/mobile-components`
```jsx static
import { Button } from "@avito/mobile-components"

```
:::
::: platform web
Просто импортируйте компоненты по имени из `@avito/web-components`
```jsx static
import { Button } from "@avito/web-components"

```
:::