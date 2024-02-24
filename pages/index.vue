<script setup lang="ts">
import { Search } from "@vicons/ionicons5"

const { $api } = useNuxtApp()
const { data, error } = await $api.index.getIndexData({}, { lazy: true, server: false })

if (process.server && error.value)
    throw new Error(error.value?.data?.data)
</script>

<template>
    <div class="h-[100px]">
        {{ data }}
        <n-icon>
            <Search />
        </n-icon>
    </div>
</template>

<style scoped>

</style>
