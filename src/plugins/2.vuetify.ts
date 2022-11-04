// CSS import here is needed otherwise icons won't display
import '@mdi/font/css/materialdesignicons.css';
import { mdi } from 'vuetify/lib/iconsets/mdi';

import { defineNuxtPlugin } from '#app';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'dark',
        },
        icons: {
            defaultSet: 'mdi',
            sets: {
                mdi,
            },
        },
    });

    nuxtApp.vueApp.use(vuetify);
});
