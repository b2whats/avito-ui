const path = require('path')

module.exports = {
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguidist/Wrapper'),
  },
  assetsDir: 'styleguidist/assets',
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: '/font.css',
        },
      ],
    },
  },
  styles: {
    Playground: {
      preview: {
        position: 'relative',
        marginTop: '15px',
      },
    },
  },
  require: [path.resolve(__dirname, 'styleguidist/setup.ts')],
  skipComponentsWithoutExample: true,
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.tsx?$/, '.md')
  },
  components: 'packages/components/src/components/**/[A-Z]*.tsx',
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', {
    // Фильтр для параметров которые определяются в реакте, что бы не захламлять документацию
    propFilter: (prop, component) => {
      if (prop.parent == null) {
        return true
      }

      return prop.parent.fileName.indexOf('node_modules') < 0
    },
  }).parse,
  webpackConfig: {
    resolve: {
      extensions: [ '.tsx', '.ts', '.js', '.json' ],
      mainFields: ['browser', 'module', 'main'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
}