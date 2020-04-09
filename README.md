Установить зависимости после клонирования
```sh
  yarn install
  # lerna bootstrap
```
Выполнить скрипты во всех пакетах
```sh
  lerna run build
```

Выполнить произвольный скрипт во всех пакетах
```sh
  lerna exec -- yarn remove dep-name
```

Установить зависимость в нужный скоуп

```sh
  lerna add @avito/tokens --scope @avito/mobile-components
  OR
  lerna add lodash --scope @avito/mobile-components
  OR
  # yarn workspace @avito/tokens add @avito/mobile-components
```

Установить зависимость в корень рабочей области (флаг -W)
```sh
  yarn add eslint -DW 
```

#Попробовать

npm-run-all - для запуска линтинга параллельно

# tsconfig.json
```json
{ 
  // Устанавливает директорию для резолва абсолютных модулей
  // Нужно для директивы `path`
  "baseUrl": "./packages",
  // Сообщить компилятору как мы должны резолвить импорты модулей
  // необходимо что бы в редакторе правильно происходило перемещение к исходному коду импорта
  "paths": {
    "@avito/*": ["*/src"],
  },
}
```

# Размер бандла

Размер библиотеки (десктопная и мобильная версии) проверяем пакетом `@avito/bundle-analyzer`.

```sh
yarn workspace @avito/bundle-analyzer ...
```
- `build` — собрать полные бандлы в `packages/bundle/dist` и график размера в `stats.html`
- `size:compressed` — размеры бандлов после standalone gzip.

#Readme
https://itnext.io/how-to-set-up-a-typescript-monorepo-with-lerna-c6acda7d4559
https://medium.com/mitterio/multirepo-to-lerna-js-monorepo-80f6657cb443
https://airbnb.io/enzyme/CONTRIBUTING.html
