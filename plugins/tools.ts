import type { DatumDatum } from "~/apis/types"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide("commonOpen", (item: DatumDatum) => {
        if (item.type === "webview")
            window.open(item.url)
        else if (item.type === "course")
            navigateTo(`/detail/course/${item.course_id}`)
    })
})
