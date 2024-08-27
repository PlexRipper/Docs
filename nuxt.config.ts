import { fileURLToPath } from 'url';
import { defineNuxtConfig } from 'nuxt/config';
import Aura from '@primevue/themes/aura';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	// Doc: https://v3.nuxtjs.org/api/configuration/nuxt.config#srcdir
	srcDir: 'src/',

	ssr: true, dev: false, content: {
		documentDriven: true, markdown: {
			anchorLinks: false,
		}, highlight: {
			theme: 'github-dark', preload: ['ts', 'js', 'css', 'json', 'bash'],
		},
	},

	app: {
		head: {
			script: [{ src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js' }, { src: 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js' }],
			noscript: [{ children: 'JavaScript is required' }],
			link: [{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
			}],
		},
	},

	css: ['@/assets/scss/style.scss'],

	modules: ['@nuxt/content', '@pinia/nuxt', '@nuxtjs/plausible', '@primevue/nuxt-module', '@nuxt/eslint', '@nuxt/icon'],

	primevue: {
		importTheme: { from: './assets/theme/primevue-theme.js' },
	},

	plausible: {
		autoOutboundTracking: true, // domain: 'plexripper.rocks'
	},

	/*
** Auto-import components
*  Doc: https://github.com/nuxt/components
*/
	components: {
		loader: true, dirs: [// Components directory
			{
				path: './components', pathPrefix: false, global: true, extensions: ['vue'],
			}],
	},

	alias: {
		img: fileURLToPath(new URL('./src/assets/img', import.meta.url)),
		const: fileURLToPath(new URL('./src/common/constants', import.meta.url)),
		store: fileURLToPath(new URL('./src/store', import.meta.url)),
		components: fileURLToPath(new URL('./src/components', import.meta.url)),
	}, eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
				arrowParens: true,
				blockSpacing: true,
				braceStyle: '1tbs',
				commaDangle: 'always-multiline',
				quotes: 'single',
				quoteProps: 'as-needed',
			},
		},
	}, compatibilityDate: '2024-08-26',
});
