FROM registry.k.avito.ru/avito/service-node:12.16.1
ENV TZ Europe/Moscow

COPY . /app/

RUN yarn install
RUN yarn build