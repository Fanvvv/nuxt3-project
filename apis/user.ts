import type { AsyncDataOptions } from "#app"
import FanRequest from "~/utils/request"

export interface ILoginForm {
    username: string
    password: string
    repassword?: string
}

export interface ILoginResponse {
    code: number
    data: {
        avatar: string
        created_time: string
        desc: string
        email: null
        id: number
        nickname: string
        phone: string
        sex: string
        status: number
        token: string
        updated_time: string
        username: string
        weixin_openid: null
    }
    msg: string
}

class UsersModule extends FanRequest {
    /**
     * 用户登录
     * @param body
     * @param asyncDataOptions
     */
    async login(body: ILoginForm, asyncDataOptions?: AsyncDataOptions<ILoginResponse>) {
        return useAsyncData("login", () => this.post<ILoginResponse>(`/login`, body), asyncDataOptions)
    }

    async register(body: ILoginForm, asyncDataOptions?: AsyncDataOptions<ILoginResponse>) {
        return useAsyncData("register", () => this.post<ILoginResponse>("/reg", body), asyncDataOptions)
    }
}

export default UsersModule
