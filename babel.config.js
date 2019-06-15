const { DEBUG, BABEL_ENV, NODE_ENV, TARGET } = process.env;
const isProduction = NODE_ENV === 'production';
const isTest = NODE_ENV === 'test';

const config = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 1 version']
        },
        loose: true,
        modules: BABEL_ENV === 'cjs' || NODE_ENV === 'test' ? 'commonjs' : false,
        debug: Boolean(DEBUG)
      }
    ],
    '@babel/preset-react',
    [
      "@emotion/babel-preset-css-prop",
      {
        "autoLabel": !isProduction,
        "labelFormat": "[local]",
        "useBuiltIns": false,
        "throwIfNamespace": true
      }
    ]
  ],
  plugins: (() => {
    let plugins = [
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import'
    ];

    if (isTest) {
      plugins.push('dynamic-import-node');
    }

    if (isProduction) {
      plugins.push(
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-react-inline-elements',
      );
    }

    return plugins;
  })()
};

if (DEBUG) {
  console.log(
    `\n\nLoaded ${__dirname}/babel.config.js\n`,
    JSON.stringify(config, null, 2)
  );
}

module.exports = config;
