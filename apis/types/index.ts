export interface IIndexResponse {
    code: number
    data: IIndexResponseDatum[]
    msg: string
    [property: string]: any
}

export interface IIndexResponseDatum {
    beian?: string
    checked: boolean
    data: DatumDatum[]
    listType: string
    logo?: string
    more: boolean
    showMore: boolean
    title: string
    type: string
    [property: string]: any
}

export interface DatumDatum {
    content: string
    course_id: number | string
    course_title: string
    cover: string
    created_time: string
    id: number
    is_single: number
    name?: string
    page_id: number
    page_title: string
    price: string
    school_id: number
    src: string
    status: number
    sub_count: number
    t_price: string
    title: string
    try: string
    type: string
    updated_time: string
    url: string
    [property: string]: any
}

export interface IGroupListRequest {
    page?: string | number
    usable?: string | number
    limit?: string | number
}
export interface IGroupListResponse {
    code: number
    data: Data
    msg: string
    [property: string]: any
}

export interface Data {
    count: number
    rows: Row[]
    [property: string]: any
}

export interface Row {
    cover?: string
    end_time?: string
    group_id?: number
    id?: number
    price?: string
    start_time?: string
    t_price?: string
    title?: string
    type?: string
    [property: string]: any
}

export interface ICouponListResponse {
    code: number
    data: Datum[]
    msg: string
    [property: string]: any
}

export interface Datum {
    c_num?: number
    end_time?: string
    goods_id?: number
    id?: number
    isgetcoupon?: boolean
    price?: string
    received_num?: number
    start_time?: string
    type?: string
    value?: Value
    [property: string]: any
}

export interface Value {
    id: number
    title: string
    [property: string]: any
}
