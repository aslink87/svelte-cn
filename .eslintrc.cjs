module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:prettier/recommended',
  ],
  plugins: ['import-no-duplicates-prefix-resolved-path', 'svelte3', '@typescript-eslint'],
  ignorePatterns: ['*.cjs'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'import/no-named-as-default': 0,
        'import/no-named-as-default-member': 0,
      },
    },
  ],
  settings: {
    'svelte3/typescript': () => require('typescript'),
    'import/parsers': {
      '@typescript-eslint/parser': ['.cjs', '.js', '.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte'],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/no-mutable-exports': 0,
    'import/prefer-default-export': 0,
    'import/extentions': 0,
    'import/first': 0,
    'no-param-reassign': 0,
  },
};
