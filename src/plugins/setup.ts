import Log from 'consola';
import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin(() => {
    Log.level = 5;
})