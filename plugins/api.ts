import type { FetchOptions } from "ofetch"
import { $fetch } from "ofetch"
import UsersModule from "~/apis/user"
import IndexModule from "~/apis"

interface IApiInstance {
    users: UsersModule
    index: IndexModule
}

export default defineNuxtPlugin(() => {
    // 获取 nuxt.config.ts 中的配置
    const config = useRuntimeConfig()
    const fetchOptions: FetchOptions = {
        baseURL: config.public.apiBaseUrl as string,
        headers: {
            appid: config.public.appid as string,
        },
    }
    // 用户登录，默认传 token
    const token = useCookie("token")
    // 解决 HeadersInit 类型中没有 token 值，ts 报错的问题
    const headers = fetchOptions?.headers ? new Headers(fetchOptions.headers) : new Headers()
    if (token.value && !headers.has("token"))
        headers.set("token", token.value)

    fetchOptions.headers = headers
    const apiFetcher = $fetch.create(fetchOptions)

    const modules: IApiInstance = {
        users: new UsersModule(apiFetcher),
        index: new IndexModule(apiFetcher),
    }
    return {
        provide: {
            api: modules,
        },
    }
})
