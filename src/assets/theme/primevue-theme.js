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
					0: 'rgb(0,0,0)',
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
					0: 'rgb(255,255,255)',
					10: 'rgb(183,181,181)',
					50: 'rgba(0,0,0,0.5)',
					100: 'rgba(0,0,0,0.10)',
					200: 'rgba(0,0,0,0.20)',
					300: 'rgba(0,0,0,0.30)',
					400: 'rgba(0,0,0,0.40)',
					500: 'rgba(0,0,0,0.50)',
					600: 'rgba(0,0,0,0.60)',
					700: 'rgba(0,0,0,0.70)',
					800: 'rgba(0,0,0,0.80)',
					900: 'rgba(0,0,0,0.85)',
					950: 'rgba(0,0,0,0.90)',
				},
				text: {
					color: '{surface.0}',
					hoverColor: '{surface.800}',
					mutedColor: '{surface.10}',
					hoverMutedColor: '{surface.600}',
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
