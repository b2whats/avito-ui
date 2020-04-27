module.exports = {
  reporters: [
    'default',
    '@avito/ct/reporter',
  ],
  globalSetup: '@avito/ct/globalSetup',
  globalTeardown: '@avito/ct/globalTeardown',
  testRunner: '@avito/ct/runner',
  testEnvironment: '@avito/ct/env',
  setupFilesAfterEnv: [
    '@avito/ct/setup',
  ],
  transform: {
    '\\.(js|tsx?)$': 'babel-jest',
    '\\.css$': '@avito/ct/css-transformer',
  },
  transformIgnorePatterns: [ 
    'node_modules/(?!@avito/)',
  ],
}