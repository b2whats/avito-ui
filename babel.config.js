const path = require('path')
const { DEBUG, BABEL_ENV, NODE_ENV, TARGET } = process.env
const isProduction = NODE_ENV === 'production'
const isTest = NODE_ENV === 'test'
const isServer = TARGET === 'server'
const isBundleCheck = TARGET === 'bundle'

const config = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 1 version'],
        },
        loose: true,
        modules: BABEL_ENV === 'cjs' || NODE_ENV === 'test' ? 'commonjs' : false,
        debug: Boolean(DEBUG),
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop',
  ],
  plugins: (() => {
    let plugins = [
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
    ]

    if (isServer || isBundleCheck) {
      const packagePath = tail => (isServer ? './packages/' : '../') + tail
      plugins.push([
        'module-resolver',
        {
          alias: {
            '@avito/mobile-components': packagePath('mobile-components/src'),
            '@avito/tokens': packagePath('tokens/src'),
            '@avito/icons': packagePath('icons/src'),
            '@avito/core': packagePath('core/src'),
          },
        },
      ])
    }

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
