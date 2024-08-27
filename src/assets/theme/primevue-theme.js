import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const MyPreset = definePreset(Aura, {
	semantic: {
		primary: {
			50: '{red.50}',
			100: '{red.100}',
			200: '{red.200}',
			300: '{red.300}',
			400: '{red.400}',
			500: '{red.500}',
			600: '{red.600}',
			700: '{red.700}',
			800: '{red.800}',
			900: '{red.900}',
			950: '{red.950}',
		},
		colorScheme: {
			light: {
				surface: {
					0: '#000000b3',
					50: '{zinc.50}',
					100: '{zinc.100}',
					200: '{zinc.200}',
					300: '{zinc.300}',
					400: '{zinc.400}',
					500: '{zinc.500}',
					600: '{zinc.600}',
					700: '{zinc.700}',
					800: '{zinc.800}',
					900: 'rgba(0,0,0,0.85)',
					950: '{zinc.950}',
				},
			},
			dark: {
				surface: {
					0: 'rgba(0,0,0,0.70)',
					50: '{slate.50}',
					100: '{slate.100}',
					200: '{slate.200}',
					300: '{slate.300}',
					400: '{slate.400}',
					500: '{slate.500}',
					600: '{slate.600}',
					700: '{slate.700}',
					800: 'rgba(0,0,0,0.80)',
					900: 'rgba(0,0,0,0.85)',
					950: 'rgba(0,0,0,0.90)',
				},
				panelmenu: {
					panel: {
						background: '#FFFFFF',
					},
				},
			},
		},
	},
});

export default {
	preset: MyPreset,
	options: {
		ripple: true,
		darkModeSelector: '.dark',
	},
	panelmenuPanelBackground: '#FFFFFF',
};
