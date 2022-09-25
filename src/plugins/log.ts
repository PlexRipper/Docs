import Log from "consola";
import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin((nuxtApp) => {
    Log.level = 5;

    nuxtApp.vueApp.config.errorHandler = (error, context) => {
        Log.error(error, context)
    }
})