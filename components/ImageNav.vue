<script setup lang="ts">
defineProps({
    data: Array,
})
</script>

<template>
    <n-grid x-gap="12" :cols="4" class="mb-6">
        <n-gi v-for="item in data" :key="item.url">
            <n-card class="cursor-pointer">
                <template #cover>
                    <img class="h-[90px]" :src="item.src" :alt="item.url">
                </template>
                <div class="w-full text-center pt-4">
                    {{ item.name }}
                </div>
            </n-card>
        </n-gi>
    </n-grid>
</template>

<style scoped>

</style>
