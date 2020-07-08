/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// https://github.com/bahmutov/cypress-react-unit-test/blob/main/docs/recipes.md#your-babelrc-file
/**
 * @type {Cypress.PluginConfig}
 */
const webpack = require('@cypress/webpack-preprocessor')
const snapshots = require('cypress-image-snapshot/plugin')
const babelConfig = require('../../babel.config')

module.exports = (on, config) => {
  on(
    'file:preprocessor',
    webpack({
      webpackOptions: {
        resolve: {
          extensions: ['.js', '.ts', '.tsx'],
        },
        module: {
          rules: [
            {
              test: /\.(js|ts)x?$/,
              use: [
                {
                  loader: 'babel-loader',
                  options: babelConfig,
                },
              ],
            },
          ],
        },
      },
    })
  )
  snapshots.addMatchImageSnapshotPlugin(on, config)
  return config
}
