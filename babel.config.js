/*
eslint-disable
no-console
*/
const
path = require('path')
const { DEBUG, BABEL_ENV, NODE_ENV, TARGET } = process.env
const isProduction = NODE_ENV === 'production'
const isTest = NODE_ENV === 'test'
const isServer = TARGET === 'server'

const config = {
  presets: [
    [
      '@babel/preset-env',
      {
        shippedProposals: true,
        loose: true,
        modules: BABEL_ENV === 'cjs' || isServer || isTest ? 'commonjs' : false,
        debug: Boolean(DEBUG),
        useBuiltIns: 'entry',
        corejs: 3,
        targets: {
          safari: '9',
          ie: '11',
        },
      },
    ],
    '@babel/preset-typescript',
    ['@babel/preset-react', { useBuiltIns: true }],
    [
      '@emotion/babel-preset-css-prop',
      {
        'sourceMap': isServer || isTest ? false : true,
        'useBuiltIns': true,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/transform-runtime',
    ['module-resolver', {
      cwd: path.resolve(__dirname),
      alias: (isServer || isTest) && {
        '^@avito/core/icons$': './packages/core/src/components/Icon/icons',
        '^@avito/mobile-components/icons$': './packages/mobile-components/src/components/Icon',
        '^@avito/web-components/icons$': './packages/web-components/src/components/Icon',
        '^@avito/([^/]+)$': './packages/\\1/src',
      },
    }],
  ],
}

if (DEBUG) {
  console.log(
    `\n\nLoaded ${__dirname}/babel.config.js\n`,
    JSON.stringify(config, null, 2)
  )
}

module.exports = config



default-src 'self';
connect-src 'self' blob: https://mb.vtb24.ru  https://vo.vtb.ru wss://vo.vtb.ru wss://vo.vtb.ru/online/WebSocket https://sso-app.vtb.ru www.google-analytics.com https://api-maps.yandex.ru https://suggest-maps.yandex.ru https://*.maps.yandex.net https://yandex.ru https://*.taxi.yandex.net stats.g.doubleclick.net https://async-online.vtb.ru wss://async-online.vtb.ru https://headless-cms.vtb.ru https://cs.cache.api.vtb.ru;
script-src 'self'
'unsafe-eval'
'sha256-CAq7UT05dgnWbpqo7eGhvj2deJGjh0x07G/RGfusuQo='
www.googletagmanager.com
https://vo.vtb.ru
www.google-analytics.com
https://api-maps.yandex.ru
https://suggest-maps.yandex.ru
https://*.maps.yandex.net
https://yandex.ru
https://yastatic.net;
style-src
'self'
'unsafe-inline'
https://vo.vtb.ru;
font-src 'self' data: https://vo.vtb.ru https://fonts.gstatic.com;
img-src 'self'
data:
https://vo.vtb.ru
www.google.com/ads/ga-audiences
www.google.ru/ads/ga-audiences
stats.g.doubleclick.net
www.google-analytics.com
https://*.maps.yandex.net
api-maps.yandex.ru

https://yandex.ru
https://headless-cms.vtb.ru;
frame-src
blob:
*;
object-src 'self'
blob:
https://vo.vtb.ru;media-src
https://vo.vtb.ru;
frame-ancestors
https://online.vtb.ru
https://opefront.vtb24.ru;
report-uri
/services/shared/logging/policy-error;