<script setup lang="ts">
import type { IGroupListResponse } from "~/apis/types"

const props = defineProps<{
    title: string
    data: IGroupListResponse[]
    type?: string
}>()

const { $api } = useNuxtApp()
const pdata = ref(props.data || [])

if (props.type === "group") {
    const { data } = await $api.index.getGroupList({
        page: 1,
        limit: 8,
        usable: 1,
    })
    pdata.value = data.value!.rows ?? []
}
</script>

<template>
    <div>
        <div class="flex mb-3">
            <span class="text-lg">{{ title }}</span>
            <n-button quaternary class="ml-auto">
                查看更多
            </n-button>
        </div>
        <n-grid x-gap="12" :cols="4" class="mb-6">
            <n-gi v-for="(item, index) in pdata" :key="index">
                <div>
                    <CourseList :item="item" />
                </div>
            </n-gi>
        </n-grid>
    </div>
</template>

<style scoped>

</style>
