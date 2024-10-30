export interface ILoginForm {
    username: string
    password: string
    repassword?: string
}

export interface ILoginResponse {
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

export interface IUserInfoResponse {
    code: number
    data: UserInfoData
    msg: string
    [property: string]: any
}

export interface UserInfoData {
    avatar: string
    created_time: string
    desc: string
    email: string
    id: number
    nickname: string
    phone: string
    sex: string
    status: number
    updated_time: string
    username: string
    weixin_unionid: null
    [property: string]: any
}
