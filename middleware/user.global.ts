export default defineNuxtRouteMiddleware(async () => {
    await useRefreshUserInfo()
})
