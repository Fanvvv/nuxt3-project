import type { $Fetch, FetchOptions } from "ofetch"
import { createDiscreteApi } from "naive-ui"

class FanRequest {
    private readonly $fetch

    constructor(fetcher: $Fetch) {
        this.$fetch = fetcher
    }

    async call<T>(
        method: string,
        url: string,
        data?: object,
        options: FetchOptions<"json"> = {},
    ): Promise<T> {
        if (method === "GET")
            options.query = data
        else
            options.body = data

        return this.$fetch<T>(
            url,
            {
                method,
                // 响应拦截器
                onResponse({ response }) {
                    if (response._data.code === 20000) {
                        return response._data = response._data.data
                    }
                    else {
                        const { message } = createDiscreteApi(["message"])
                        message.error(response._data.data || "服务端错误")
                    }
                },
                ...options,
            },
        )
    }

    get<T>(url: string, data?: object, options?: FetchOptions<"json">) {
        return this.call<T>("GET", url, data, options)
    }

    post<T>(url: string, data?: object, options?: FetchOptions<"json">) {
        return this.call<T>("POST", url, data, options)
    }

    put<T>(url: string, data?: object, options?: FetchOptions<"json">) {
        return this.call<T>("PUT", url, data, options)
    }

    delete<T>(url: string, data?: object, options?: FetchOptions<"json">) {
        return this.call<T>("DELETE", url, data, options)
    }
}

export default FanRequest
