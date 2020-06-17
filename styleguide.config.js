const fs = require('fs')
const path = require('path')

const { parse } = require('react-docgen-typescript').withCustomConfig('./tsconfig.json', {
  // Фильтр для параметров которые определяются в реакте, что бы не захламлять документацию
  propFilter: (prop, component) => {
    if (!prop.parent) {
      throw new Error(`Prop ${prop.name} of ${component.name} must be declared via TS interface, not type - got ${JSON.stringify(prop, null, 2)}`)
    }
    return !/node_modules\/(?!@avito)/.test(prop.parent.fileName)
  },
  shouldRemoveUndefinedFromOptional: true,
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
    Table: {
      cell: {
        '&:last-child': {
          width: 'auto',
        },
      },
    },
  }),
  styleguideDir: 'public',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguidist/Wrapper'),
    ComponentsListRenderer: path.join(__dirname, 'styleguidist/ComponentsList'),
    PropsRenderer: path.join(__dirname, 'styleguidist/components/PropsRenderer'),
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
  updateExample(props, exampleFilePath) {
    const { settings = {}, lang } = props

    if (typeof settings.file === 'string') {
      const filepath = path.resolve(exampleFilePath, settings.file)

      settings.static = true

      delete settings.file
      return {
        content: fs.readFileSync(filepath, 'utf8'),
        settings,
        lang,
      }
    }

    return props
  },
  require: [path.resolve(__dirname, 'styleguidist/setup.ts')],
  context: {
    Stack: path.resolve(__dirname, './packages/core/src/components/Layout/Stack'),
    Grid: path.resolve(__dirname, './packages/core/src/components/Layout/Grid'),
    Box: path.resolve(__dirname, './packages/core/src/components/Layout/Box'),
    Text: path.resolve(__dirname, './packages/core/src/components/Text/Text'),
  },
  skipComponentsWithoutExample: true,
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.tsx?$/, '.md')
  },
  pagePerSection: true,
  sections: [{
    name: 'Токены',
    sectionDepth: 1,
    sections: [{
      name: 'Начало работы',
      content: './getting-started.md',
    }, {
      name: 'Палитра',
      content: './palette.md',
    }, {
      name: 'Настройка темы',
      content: './theme.md',
    }],
  }, {
    name: 'Компоненты',
    sectionDepth: 1,
    components: ['packages/{core,mobile-components,web-components}/src/components/**/[A-Z]*.tsx'],
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
      extensions: ['.tsx', '.ts', '.js', '.json'],
      mainFields: ['browser', 'module', 'main'],
      alias: {
        // переопределил ReactComponent - стандартный Renderer отвалился
        'rsg-components/ReactComponent/ReactComponentRenderer': path.resolve(__dirname, 'node_modules/react-styleguidist/lib/client/rsg-components/ReactComponent/ReactComponentRenderer'),
        'rsg-components/Examples/ExamplesRenderer': path.resolve(__dirname, 'node_modules/react-styleguidist/lib/client/rsg-components/Examples/ExamplesRenderer'),
        '@avito/icons$': path.resolve(__dirname, 'packages/icons/src/'),
        '@avito/tokens$': path.resolve(__dirname, 'packages/tokens/src/'),
        '@avito/core$': path.resolve(__dirname, 'packages/core/src/'),
        '@avito/mobile-components$': path.resolve(__dirname, 'packages/mobile-components/src/'),
        '@avito/web-components$': path.resolve(__dirname, 'packages/web-components/src/'),
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
