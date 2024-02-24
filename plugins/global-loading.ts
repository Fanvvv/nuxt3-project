import type { LoadingBarApi } from "naive-ui"
import { createDiscreteApi } from "naive-ui"
import type { Ref } from "#imports"

export default defineNuxtPlugin((nuxtApp) => {
    const bar: Ref<LoadingBarApi | null> = ref(null)
    // 在浏览器中初始化和挂载Vue应用程序时调用
    nuxtApp.hook("app:mounted", () => {
        if (!bar.value) {
            const { loadingBar } = createDiscreteApi(["loadingBar"])
            bar.value = loadingBar
        }
    })
    // 在 Suspense 挂起事件上调用
    nuxtApp.hook("page:start", () => {
        bar.value?.start()
    })
    // 在 Suspense 解析事件上调用
    nuxtApp.hook("page:finish", () => {
        setTimeout(() => {
            bar.value?.finish()
        }, 150)
    })
    // 在发生致命错误时调用
    nuxtApp.hook("app:error", () => {
        if (process.client) {
            setTimeout(() => {
                bar.value?.finish()
            }, 150)
        }
    })
})
