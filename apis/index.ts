import type { AsyncDataOptions } from "#app"
import FanRequest from "~/utils/request"
import type { ICouponListResponse, IIndexResponse } from "~/apis/types"

class IndexModule extends FanRequest {
    /**
     * 获取首页数据
     * @param body
     * @param asyncDataOptions
     */
    async getIndexData(body = {}, asyncDataOptions?: AsyncDataOptions<IIndexResponse>) {
        return useAsyncData("index", () => this.get<IIndexResponse>(`/index`, body), asyncDataOptions)
    }

    /**
     * 获取优惠券列表
     * @param body
     *  @param asyncDataOptions
     */
    async getCouponList(body = {}, asyncDataOptions?: AsyncDataOptions<ICouponListResponse>) {
        return useAsyncData("couponList", () => this.get<ICouponListResponse>(`/coupon/list`, body), asyncDataOptions)
    }
}

export default IndexModule
