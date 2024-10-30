import type { AsyncDataOptions } from "#app"
import FanRequest from "~/utils/request"
import type { ICouponListResponse, IGroupListRequest, IGroupListResponse, IIndexResponse } from "~/apis/types"

class IndexModule extends FanRequest {
    /**
     * 获取首页数据
     * @param data
     * @param asyncDataOptions
     */
    async getIndexData(data = {}, asyncDataOptions?: AsyncDataOptions<IIndexResponse>) {
        return useAsyncData("index", () => this.get<IIndexResponse>(`/index`, { query: data }), asyncDataOptions)
    }

    /**
     * 获取拼团列表数据
     * @param data
     * @param asyncDataOptions
     */
    async getGroupList(data: IGroupListRequest = {}, asyncDataOptions?: AsyncDataOptions<IGroupListResponse>) {
        return useAsyncData("groupList", () => this.get<IGroupListResponse>(`/group/list`, { query: data }), asyncDataOptions)
    }

    /**
     * 获取优惠券列表
     * @param data
     *  @param asyncDataOptions
     */
    async getCouponList(data = {}, asyncDataOptions?: AsyncDataOptions<ICouponListResponse>) {
        return useAsyncData("couponList", () => this.get<ICouponListResponse>(`/coupon/list`, { query: data }), asyncDataOptions)
    }
}

export default IndexModule
