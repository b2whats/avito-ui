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
        targets: {
          browsers: ['last 1 version'],
        },
        loose: true,
        modules: BABEL_ENV === 'cjs' || isServer || isTest ? 'commonjs' : false,
        debug: Boolean(DEBUG),
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
    [
      '@emotion/babel-preset-css-prop',
      {
        'sourceMap': isServer || isTest ? false : true,
      },
    ],
  ],
  plugins: (() => {
    let plugins = [
      '@babel/transform-runtime',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
    ]

    plugins.push([
      'module-resolver',
      {
        cwd: 'babelrc', // Установить корень проекта
        alias: isServer || isTest ? {
          '^@avito/([^/]+)$': './packages/\\1/src',
        } : {
          '^@avito/([^/]+)/src/(.+)': ([, name, path]) => `@avito/${name}/${BABEL_ENV}/${path}`,
        },
      },
    ])

    return plugins
  })(),
}

if (DEBUG) {
  console.log(
    `\n\nLoaded ${__dirname}/babel.config.js\n`,
    JSON.stringify(config, null, 2)
  )
}

module.exports = config
