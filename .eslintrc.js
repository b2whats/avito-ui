module.exports =  {
  parser: '@typescript-eslint/parser',
  extends:  [
    'plugin:react/recommended',
    'plugin:import/typescript',
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
    'import/internal-regex': '^@avito/',
  },
  plugins: ['import'],
  rules:  {
    'indent': ['error', 2, { 'SwitchCase': 1, 'flatTernaryExpressions': true, 'ignoredNodes': ['ConditionalExpression'] }],
    'comma-dangle': ['error', {
      'functions': 'never',
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
    }],
    'eol-last': ['error'],
    'no-trailing-spaces': ['error'],
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'semi': ['error', 'never'],
    'max-len': ['error', {
      code: 120,
      ignoreStrings: true,
      ignoreRegExpLiterals: true,
      ignoreComments: true,
      ignoreTemplateLiterals: true,
    }],
    'react/prop-types': 'off',
    'no-duplicate-imports': ['error'],
    'import/first': ['error'],
    'import/order': ['error', {
      groups: ['external', 'internal', 'parent', 'index', 'sibling'],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    }],
    'import/no-default-export': ['error'],
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
}
