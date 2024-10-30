<script setup lang="ts">
const { $api, $commonOpen } = useNuxtApp()
const { data, error } = await $api.index.getIndexData({}, { lazy: true, server: false })

useHead({
    title: "首页",
    meta: [
        { name: "description", content: "练习技术的项目" },
        { name: "keywords", content: "nuxt3, vue3, vite, tailwindcss, typescript" },
    ],
})

if (process.server && error.value)
    throw new Error(error.value?.data?.data)
</script>

<template>
    <div>
        <template v-for="item in data" :key="item.type">
            <!--          轮播图 -->
            <Banner v-if="item.type === 'swiper'" :data="item.data" />
            <!--          广告 -->
            <template v-if="item.type === 'imageAd'">
                <img
                    class="h-[100px] w-full rounded mb-6 cursor-pointer"
                    :src="item.data[0].src"
                    :alt="item.data[0].course_title"
                    @click="$commonOpen(item.data[0])"
                >
            </template>
            <ImageNav v-if="item.type === 'icons'" :data="item.data" />
            <ListCard v-if="item.type === 'list'" :title="item.title" :data="item.data" />
            <ListCard v-if="item.type === 'promotion'" :title="item.title" :data="item.data" :type="item.listType" />
        </template>
    </div>
</template>

<style scoped>

</style>
