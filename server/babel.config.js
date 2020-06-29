const path = require('path')

module.exports = {
  exclude: [/node_modules/],//, path.resolve(__dirname, 'test-out.js')],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        shippedProposals: true,
        loose: true,
        // forceAllTransforms: true,
        // useBuiltIns: 'entry',
        // corejs: 3,
        targets: {
          //ie: '11',
          chrome: '81',
          //safari: '9',
          // browsers: ['last 1 versions'],
        },
        debug: true,
      },
    ],
    '@babel/preset-typescript',
    ['@babel/preset-react', { useBuiltIns: true }],
  ],
  plugins: [
    ['@babel/transform-runtime',
      {
        'absoluteRuntime': true,
        //'corejs': 3,
        'helpers': true,
        'regenerator': false,
        'useESModules': true,
      },
    ],
  ],
}
