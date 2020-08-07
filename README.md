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
  yarn workspace @avito/tokens add @avito/mobile-components
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


# Readme
https://itnext.io/how-to-set-up-a-typescript-monorepo-with-lerna-c6acda7d4559
https://medium.com/mitterio/multirepo-to-lerna-js-monorepo-80f6657cb443
https://airbnb.io/enzyme/CONTRIBUTING.html

# Тестирование

- `yarn test` — прогнать юниты + e2e.
- `yarn test:unit` — юниты на хелперы и компоненты.
- `yarn test:snap` — снепшоты тем. Обновляются флагом `-u`

Подробнее, e2e:

- `yarn test:browser` — прогнать e2e (подходит для CI).
- `yarn test:browser:open` — открыть интерактивный cypress.
- `yarn test:browser:updateSnapshots` — обновить скриншоты. __Интерактивный и ci-раннеры используют разные движки, так что скрины нужно записывать только так.__

Вид теста определяется по расширению:
- `*.cy.test.{ts.tsx}` — e2e (cypress использует моку, а не джест, осторожно с `<reference types>`)
- `*.snap.test.{ts.tsx}` — снепшоты (что-то ломкое)
- Другие `*.test.{ts,tsx}` считаем юнитами. `spec.ts` не поддерживаем.

Снепшоты тем и скрины работают с мок-пропами — например, packages/core/src/components/Button/mockProps.tsx
Мок = массив наборов пропов, который взаимодействуют между собой — например, `variant` + `disabled`, потому что оба влияют на цвет, но не `variant` + `size`. Для e2e указывают обязательные пропы (карточки без `children` пустоваты) и дополнительные наборы, которые не влияют на тему, но видны — `onClose` добавляет крестик на `Card`.
