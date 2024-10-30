export interface Menus {
    name: string
    path: string
    match?: {
        name: string
        params?: {
            type: string
        }
    }[]
}

export function useCommonConst() {
    const menus: Menus[] = [{
        name: "首页",
        path: "/",
    }, {
        name: "考试",
        path: "/paper/1",
        match: [{
            name: "paper-page",
        }],
    }, {
        name: "拼团",
        path: "/list/group/1",
        match: [{
            name: "list-type-page",
            params: {
                type: "group",
            },
        }],
    }, {
        name: "秒杀",
        path: "/list/flashsale/1",
        match: [{
            name: "list-type-page",
            params: {
                type: "flashsale",
            },
        }],
    }, {
        name: "直播",
        path: "/list/live/1",
        match: [{
            name: "list-type-page",
            params: {
                type: "live",
            },
        }],
    }, {
        name: "专栏",
        path: "/list/column/1",
        match: [{
            name: "list-type-page",
            params: {
                type: "column",
            },
        }],
    }, {
        name: "电子书",
        path: "/list/book/1",
        match: [{
            name: "list-type-page",
            params: {
                type: "book",
            },
        }],
    }, {
        name: "社区",
        path: "/bbs/0/1",
        match: [{
            name: "bbs-bbs_id-page",
        }],
    }, {
        name: "课程",
        path: "/list/course/1",
        match: [{
            name: "list-type-page",
            params: {
                type: "course",
            },
        }],
    }]

    const userOptions = [{
        label: "用户中心",
        key: "center",
    }, {
        label: "退出",
        key: "logout",
    }]

    return {
        menus,
        userOptions,
    }
}
