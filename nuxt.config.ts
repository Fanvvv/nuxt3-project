// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { NaiveUiResolver } from "unplugin-vue-components/resolvers"

export default defineNuxtConfig({
    devtools: { enabled: true },
    build: {
        transpile:
            process.env.NODE_ENV === "production" ? ["naive-ui", "vueuc", "@css-render/vue3-ssr", "juggle/resize-observer"] : ["@juggle/resize-observer"],
    },
    runtimeConfig: {
        public: {
            apiBaseUrl: process.env.API_BASE_URL,
            appid: process.env.APP_ID,
        },
    },
    vite: {
        optimizeDeps: {
            include: process.env.NODE_ENV === "development" ? ["naive-ui", "vueuc", "date-fns-tz/esm/formatInTimeZone"] : [],
        },
        plugins: [
            AutoImport({
                imports: [
                    {
                        "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"],
                    },
                ],
            }),
            Components({
                resolvers: [NaiveUiResolver()],
            }),
        ],
    },
})
