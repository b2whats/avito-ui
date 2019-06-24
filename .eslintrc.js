module.exports =  {
  parser: '@typescript-eslint/parser',
  extends:  [
    'plugin:react/recommended',
  ],
  parserOptions:  {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures:  {
      jsx:  true,
    },
  },
  settings:  {
    react:  {
      version:  'detect',
    },
  },
  rules:  {
    "indent": ['error', 2],
    "react/prop-types": 'off',
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
}