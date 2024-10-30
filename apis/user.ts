import type { AsyncDataOptions } from "#app"
import FanRequest from "~/utils/request"
import type { ILoginForm, ILoginResponse, IUserInfoResponse } from "~/apis/types/user"

class UsersModule extends FanRequest {
    /**
     * 用户登录
     * @param data
     * @param asyncDataOptions
     */
    async login(data: ILoginForm, asyncDataOptions?: AsyncDataOptions<ILoginResponse>) {
        return useAsyncData("login", () => this.post<ILoginResponse>(`/login`, { body: data }), asyncDataOptions)
    }

    /**
     * 用户注册
     * @param data
     * @param asyncDataOptions
     */
    async register(data: ILoginForm, asyncDataOptions?: AsyncDataOptions<ILoginResponse>) {
        return useAsyncData("register", () => this.post<ILoginResponse>("/reg", { body: data }), asyncDataOptions)
    }

    /**
     * 退出登录
     * @param data
     * @param asyncDataOptions
     */
    async logout(data = {}, asyncDataOptions?: AsyncDataOptions<string>) {
        return useAsyncData("logout", () => this.post<string>("/logout", { body: data }), asyncDataOptions)
    }

    /**
     * 获取用户信息
     * @param data
     */
    async getUserInfo(data = {}) {
        return this.get<IUserInfoResponse>("/getinfo", { query: data })
    }
    // async getUserInfo(data = {}, asyncDataOptions?: AsyncDataOptions<IUserInfoResponse>) {
    //     return useAsyncData("getinfo", () => this.get<IUserInfoResponse>("/getinfo", { query: data }), asyncDataOptions)
    // }
}

export default UsersModule
