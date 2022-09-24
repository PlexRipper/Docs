import { defineNuxtConfig } from 'nuxt';
import vuetify from 'vite-plugin-vuetify';
import { fileURLToPath } from 'url';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // Doc: https://v3.nuxtjs.org/api/configuration/nuxt.config#srcdir
    srcDir: 'src/',
    ssr: true,
    target: "static",
    modules: [
        '@nuxt/content',
        '@nuxt/image-edge',
        '@pinia/nuxt',
        async (options, nuxt) => {
            // @ts-ignore
            // Source: https://www.the-koi.com/projects/how-to-set-up-a-project-with-nuxt3-and-vuetify3-with-a-quick-overview/
            nuxt.hooks.hook('vite:extendConfig', (config) => config.plugins.push(vuetify()));
        },
    ],
    content: {
        documentDriven: true,
    },
    css: ['vuetify/styles', 'mdi/css/materialdesignicons.min.css', '@/assets/scss/style.scss'],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
        ssr: {
            noExternal: ['vuetify'], // add the vuetify vite plugin
        },
    },
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
    // https://v1.image.nuxtjs.org/configuration/
    image: {
        dir: 'assets/img',
    },
    alias: {
        img: fileURLToPath(new URL('./src/assets/img', import.meta.url)),
        const: fileURLToPath(new URL('./src/common/constants', import.meta.url)),
        store: fileURLToPath(new URL('./src/store', import.meta.url)),
        components: fileURLToPath(new URL('./src/components', import.meta.url)),
    },
});
