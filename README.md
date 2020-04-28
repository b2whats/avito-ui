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

# Деплой

Из своей ветки

```sh
  avito service push
```

Prod

```sh
  avito service deploy -e prod
```


# Размер бандла

Размер библиотеки (десктопная и мобильная версии) проверяем пакетом `@avito/bundle-analyzer`.

```sh
yarn workspace @avito/bundle-analyzer ...
```
- `build` — собрать полные бандлы в `packages/bundle/dist` и график размера в `stats.html`
- `size:compressed` — размеры бандлов после standalone gzip.

# Тестирование пакетов при сборке

Для проверки пакетов в других репозиториях можно выполнить следующие команды

```sh
yarn build:server
```
После сборки всех пакетов, эта команда соберет их в единый бандл. Можно посмотреть какие файлы попадут в бандл и работает ли tree-shaking

```sh
yarn server
```
Запустит серверный скрипт на порту `3000`, после открытия страницы в верхней части будет код серверного рендеринга,
в нижней то как компонент рендерится на клиенте

```sh
yarn test:server
```
Запускает тесты скриншотов, позволяет посмотреть как рендерятся компоненты в тестах


#Readme
https://itnext.io/how-to-set-up-a-typescript-monorepo-with-lerna-c6acda7d4559
https://medium.com/mitterio/multirepo-to-lerna-js-monorepo-80f6657cb443
https://airbnb.io/enzyme/CONTRIBUTING.html
