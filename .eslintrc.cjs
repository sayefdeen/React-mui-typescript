module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:jsdoc/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'standard',
    'standard-react',
    'prettier',
    'plugin:react/jsx-runtime',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh',     'react-refresh',
  'react',
  'react-hooks',
  'prettier',
  'eslint-plugin-import-helpers'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        alphabetize: { order: 'asc', ignoreCase: false },
        groups: [
          'module',
          '/^(constants|helpers|hooks|utils)/',
          '/^pages/',
          '/^components/',
          '/^public/',
          ['parent', 'sibling', 'index'],
        ],
        newlinesBetween: 'always',
      },
    ],
    'no-console': 0,
    'no-unused-vars': 2,
    'prefer-const': [
      2,
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-sort-props': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'warn',
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['src', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: { version: '18.2' },
  },
}
