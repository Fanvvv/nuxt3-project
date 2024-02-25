<script setup lang="ts">
import type { DatumDatum } from "~/apis/types"

defineProps<{
    item: DatumDatum
}>()
</script>

<template>
    <n-card>
        <template #cover>
            <img src="" alt="">
        </template>
        <div>
            <span>{{ item.title }}</span>
        </div>
    </n-card>
</template>

<style scoped>

</style>
