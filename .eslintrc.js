module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'standard'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		'comma-dangle': ['error', 'never'],
		indent: 'off',
		'no-tabs': 0,
		semi: ['error', 'never'],
		quotes: ['error', 'single'],
		'space-before-function-paren': [
			'error',
			{ anonymous: 'always', named: 'never' }
		]
	}
}
