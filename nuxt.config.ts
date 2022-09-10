// noinspection JSUnusedGlobalSymbols

import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxt/content'],
	content: {
		documentDriven: true,
	},
	css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css'],
	build: {
		transpile: ['vuetify'],
	},
	vite: {
		define: {
			'process.env.DEBUG': false,
		},
	},
});
