export default defineNuxtRouteMiddleware((to) => {
    const { type, page } = to.params
    const { keyword } = to.query

    if (!keyword)
        return abortNavigation("搜索关键词不能为空")

    if (!(["course", "column"].includes(type as string)) || Number.isNaN(+page))
        return abortNavigation("页面不存在")
})
