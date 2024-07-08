module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': ['error'],
    indent: ['error', 'tab'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    camelcase: ['error'],
    'no-tabs': 'off',
    'import/extensions': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        arrowParens: 'avoid',
        trailingComma: 'all',
        endOfLine: 'lf',
        useTabs: true,
        tabWidth: 4,
      },
      { usePrettierrc: true },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
