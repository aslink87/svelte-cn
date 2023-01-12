module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	// extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:prettier/recommended'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript'),
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	rules: {
		'import/no-extraneous-dependencies': 0,
		'import/prefer-default-export': 0,
	},
};
