module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/strict',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/internal-regex': '^@avito/',
  },
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  rules: {
    'indent': ['error', 2, {
      'SwitchCase': 1,
      'flatTernaryExpressions': true,
      'ignoredNodes': ['ConditionalExpression'],
    }],
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
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-multi-spaces': ['error'],
    'array-bracket-spacing': ['error'],
    'block-spacing': ['error'],
    'func-call-spacing': ['error'],
    'key-spacing': ['error'],
    'space-infix-ops': ['error'],
    'space-in-parens': ['error'],
    // React
    'react/prop-types': 'off',
    'react/jsx-curly-spacing': ['error'],
    'react/jsx-equals-spacing': ['error'],
    'react/jsx-key': ['error'],
    'react/jsx-props-no-multi-spaces': ['error'],
    'react/jsx-tag-spacing': ['error'],
    'react/jsx-wrap-multilines': ['error'],
    // import
    'import/first': ['error'],
    'import/no-duplicates': ['error'],
    'no-restricted-imports': ['error', {
      'patterns': ['*/src'],
    }],
    'import/order': ['error', {
      groups: ['external', 'internal', 'parent', 'index', 'sibling'],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    }],
    'import/no-default-export': ['error'],
    // a11y
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
    'jsx-a11y/label-has-associated-control': ['error'],
    'jsx-a11y/label-has-for': ['off'], // it's deprecated
    // TS-specific
    '@typescript-eslint/type-annotation-spacing': ['error'],
    '@typescript-eslint/no-inferrable-types': ['error'],
    '@typescript-eslint/no-unused-vars': ['error', {
      'varsIgnorePattern': '^_',
      'argsIgnorePattern': '^_',
      'args': 'after-used',
      'ignoreRestSiblings': true,
    }],
    '@typescript-eslint/keyword-spacing': ['error'],
    '@typescript-eslint/comma-spacing': ['error'],
    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'none',
      },
      'singleline': {
        'delimiter': 'comma',
      },
    }],
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
}
