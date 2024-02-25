<script setup lang="ts">
defineProps({
    title: String,
    data: Array,
})
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
            <n-gi v-for="item in data" :key="item.id">
                <div>test</div>
            </n-gi>
        </n-grid>
    </div>
</template>

<style scoped>

</style>
