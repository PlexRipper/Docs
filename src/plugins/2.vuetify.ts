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
// http://localhost:4000/api/_content/query?_params={%22where%22:[{%22_path%22:%22--REGEX+/^%5C%5C/announcements/%22}],%22sort%22:[{%22_file%22:1,%22$numeric%22:true}]}&previewToken
// http://localhost:4000/api/_content/query?_params={%22where%22:[{%22_path%22:%22/announcements%22}],%22first%22:true,%22sort%22:[{%22_file%22:1,%22$numeric%22:true}]}&previewToken
