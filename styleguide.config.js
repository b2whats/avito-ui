const path = require('path')

const { parse } = require('react-docgen-typescript').withCustomConfig('./tsconfig.json', {
  // Фильтр для параметров которые определяются в реакте, что бы не захламлять документацию
  propFilter: (prop, component) => {
    if (prop.parent == null) {
      return true
    }

    return prop.parent.fileName.indexOf('node_modules') < 0
  },
})

module.exports = {
  styles: ({ mq }) => ({
    Code: {
      code: {
        color: '#e83e8c',
        background: 'rgba(232, 62, 140, 0.1)',
        padding: '2px 4px',
        borderRadius: '4px',
      },
    },
    StyleGuide: {
      // Move mobile menu to top
      [mq.small]: {
        root: {
          display: 'flex',
          flexDirection: 'column-reverse',
        },
      },
      // Prevent overflow
      content: {
        maxWidth: '100%',
      },
    },
  }),
  styleguideDir: 'public',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguidist/Wrapper'),
    ComponentsListRenderer: path.join(__dirname, 'styleguidist/ComponentsList'),
    StyleGuideRenderer: path.join(__dirname, 'styleguidist/components/StyleGuideRenderer'),
    ReactComponent: path.join(__dirname, 'styleguidist/components/ReactComponent'),
    TableOfContentsRenderer: path.join(__dirname, 'styleguidist/components/TableOfContentsRenderer'),
    Examples: path.join(__dirname, 'styleguidist/components/Examples'),
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
  require: [path.resolve(__dirname, 'styleguidist/setup.ts')],
  skipComponentsWithoutExample: true,
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.tsx?$/, '.md')
  },
  pagePerSection: true,
  sections: [{
    name: 'Компоненты',
    components: ['packages/{core,mobile-components,web-components}/src/components/**/[A-Z]*.tsx'],
  }, {
    name: 'Токены',
    sections: [{
      name: 'Палитра',
      content: './palette.md',
    }],
  }],
  propsParser: (inputPath, ...rest) => {
    // include platform-specific prop extensions
    const coreRE = /\/core\//
    const toContract = (p, pack) => p.replace(coreRE, `/${pack}/`).replace(/\/[a-zA-Z]+\.tsx$/, '/contract.ts')
    const withContracts = (Array.isArray(inputPath) ? inputPath : [inputPath]).reduce((acc, frag) => {
      return acc.concat(coreRE.test(frag)
        ? [frag, toContract(frag, 'web-components'), toContract(frag, 'mobile-components')]
        : frag)
    }, [])
    return parse(withContracts, ...rest)
  },
  webpackConfig: {
    resolve: {
      extensions: [ '.tsx', '.ts', '.js', '.json' ],
      mainFields: ['browser', 'module', 'main'],
      alias: {
        // переопределил ReactComponent - стандартный Renderer отвалился
        'rsg-components/ReactComponent/ReactComponentRenderer': path.resolve(__dirname, 'node_modules/react-styleguidist/lib/client/rsg-components/ReactComponent/ReactComponentRenderer'),
        'rsg-components/Examples/ExamplesRenderer': path.resolve(__dirname, 'node_modules/react-styleguidist/lib/client/rsg-components/Examples/ExamplesRenderer'),
        '@avito/icons$': path.resolve(__dirname, 'packages/icons/src/'),
        '@avito/tokens$': path.resolve(__dirname, 'packages/tokens/src/'),
        '@avito/core$': path.resolve(__dirname, 'packages/core/src/'),
      },
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