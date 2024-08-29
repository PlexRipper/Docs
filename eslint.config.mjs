import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt()
	.append({
		rules: {
			'vue/html-closing-bracket-newline': [
				'error',
				{
					singleline: 'never',
					multiline: 'never',
					selfClosingTag: {
						singleline: 'never',
						multiline: 'never',
					},
				},
			], // Reason: Opinionated not to have useless empty lines with just a closing tag
			'vue/component-name-in-template-casing': [
				'error',
				'PascalCase',
				{
					registeredComponentsOnly: false,
				},
			], // Reason: This ensures that the order of components is always the same
			'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
			'vue/html-closing-bracket-spacing': [
				'error',
				{
					startTag: 'never',
					endTag: 'never',
					selfClosingTag: 'always',
				},
			],
		},
	});
