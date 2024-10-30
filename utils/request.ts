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
        options: FetchOptions<"json"> = {},
    ): Promise<T> {
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

    get<T>(url: string, options?: FetchOptions<"json">) {
        return this.call<T>("GET", url, options)
    }

    post<T>(url: string, options?: FetchOptions<"json">) {
        return this.call<T>("POST", url, options)
    }

    put<T>(url: string, options?: FetchOptions<"json">) {
        return this.call<T>("PUT", url, options)
    }

    delete<T>(url: string, options?: FetchOptions<"json">) {
        return this.call<T>("DELETE", url, options)
    }
}

export default FanRequest
