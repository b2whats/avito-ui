const resolver = require('babel-plugin-module-resolver')
const resolve = require('enhanced-resolve')
const path = require('path')
const { DEBUG, BABEL_ENV, NODE_ENV, TARGET } = process.env
const isProduction = NODE_ENV === 'production'
const isTest = NODE_ENV === 'test'
const isServer = TARGET === 'server'

const resolverTs = resolve.create.sync({
  extensions: ['.ts', '.tsx', '.js', '.json'],
})

const updateExtension = (sourcePath, currentFile, opts) => {
  if (!sourcePath.startsWith('.')) return null

  const resolvedPath = resolverTs(path.dirname(currentFile), sourcePath)

  if (!resolvedPath.includes('index')) {
    return sourcePath + '.esm'
  }

  return null
}

const config = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 1 version'],
          ie: '11',
        },
        loose: true,
        modules: BABEL_ENV === 'cjs' || isServer || isTest ? 'commonjs' : false,
        debug: Boolean(DEBUG),
        useBuiltIns: 'entry',
        corejs: {
          version: 2,
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
    ['@babel/transform-runtime', {
      useESModules: BABEL_ENV === 'esm',
    }],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    ['module-resolver', {
      root: ['./'], // Установить корень проекта
      alias: isServer || isTest && {
        '^@avito/([^/]+)$': './packages/\\1/src',
      },
      resolvePath: BABEL_ENV === 'esm' && updateExtension,
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
