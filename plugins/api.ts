import type { FetchOptions } from "ofetch"
import { $fetch } from "ofetch"
import UsersModule from "~/apis/user"

interface IApiInstance {
    users: UsersModule
}

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()

    const fetchOptions: FetchOptions = {
        baseURL: config.public.apiBaseUrl as string,
        headers: {
            appid: config.public.appid as string,
        },
    }

    const apiFecther = $fetch.create(fetchOptions)

    const modules: IApiInstance = {
        users: new UsersModule(apiFecther),
    }

    return {
        provide: {
            api: modules,
        },
    }
})
