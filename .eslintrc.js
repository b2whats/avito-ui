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
    'indent': ['error', 2, { 'SwitchCase': 1, 'flatTernaryExpressions': true, 'ignoredNodes': ['ConditionalExpression'] }],
    'comma-dangle': ['error', {
      'functions': 'never',
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
    }],
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'semi': ['error', 'never'],
    'react/prop-types': 'off',
    'no-duplicate-imports': ['error'],
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
}
