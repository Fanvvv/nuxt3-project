import { createDiscreteApi } from "naive-ui"
import type { IUserInfoResponse } from "~/apis/types/user"
import { useNuxtApp } from "#app"

// 用户信息
export const useUser = () => useState<IUserInfoResponse | null>("user", () => null)

// 刷新用户信息
export async function useRefreshUserInfo() {
    const { $api } = useNuxtApp()
    const token = useCookie("token")
    const user = useUser()
    if (token.value) {
        const data = await $api.users.getUserInfo()
        console.log(data)
        if (data)
            user.value = data
    }
}

// 退出登录
export async function useLogout() {
    const { $api } = useNuxtApp()
    await $api.users.logout()
    const user = useUser()
    user.value = null
    const token = useCookie("token")
    token.value = null
    const { message } = createDiscreteApi(["message"])
    message.success("退出登录成功")
    const route = useRoute()
    if (route.path !== "/")
        navigateTo("/", { replace: true })
}
