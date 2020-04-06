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

    if (isServer) {
      plugins.push([
        'module-resolver',
        {
          alias: {
            '@avito/mobile-components': './packages/mobile-components/src',
            '@avito/tokens': './packages/tokens/src',
            '@avito/icons': './packages/icons/src',
            '@avito/core': './packages/core/src',
            'rsg-components': './node_modules/react-styleguidist/lib/client/rsg-components/',
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
