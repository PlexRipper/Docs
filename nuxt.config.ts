import vuetify from 'vite-plugin-vuetify';
import { defineNuxtConfig } from 'nuxt/config';
import { fileURLToPath } from 'url';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // Doc: https://v3.nuxtjs.org/api/configuration/nuxt.config#srcdir
    srcDir: 'src/',
    ssr: true,
    target: "static",
    content: {
        documentDriven: true,
        markdown: {
            anchorLinks: false,
        }
    },
    css: ['vuetify/styles', '@/assets/scss/style.scss'],
    build: {
        extractCSS: true,
        transpile: ['vuetify'],
    },
    vite: {
        ssr: {
            noExternal: ['vuetify'],
        },
        define: {
            'process.env.DEBUG': false,
        },
    },
    modules: [
        '@nuxt/content',
        '@pinia/nuxt',
        'vue-plausible',
        async (options, nuxt) => {
            // @ts-ignore
            // Source: https://www.the-koi.com/projects/how-to-set-up-a-project-with-nuxt3-and-vuetify3-with-a-quick-overview/
            nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(vuetify({ styles: 'sass' })));
        },
    ],
    /*
     ** Auto-import components
     *  Doc: https://github.com/nuxt/components
     */
    components: {
        loader: true,
        dirs: [
            // Components directory
            {
                path: './components',
                pathPrefix: false,
                global: true,
                extensions: ['vue'],
            },
        ],
    },
    alias: {
        img: fileURLToPath(new URL('./src/assets/img', import.meta.url)),
        const: fileURLToPath(new URL('./src/common/constants', import.meta.url)),
        store: fileURLToPath(new URL('./src/store', import.meta.url)),
        components: fileURLToPath(new URL('./src/components', import.meta.url)),
    },
});
