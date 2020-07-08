/* eslint-disable no-console */
const path = require('path')
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
    ['@babel/transform-runtime', { useESModules: BABEL_ENV === 'esm' }],
    ['module-resolver', {
      cwd: 'babelrc',
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
