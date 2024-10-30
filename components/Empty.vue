<script setup lang="ts">
defineProps({
    desc: {
        type: String,
        default: "暂无数据",
    },
})
</script>

<template>
    <n-empty :description="desc" size="large" class="py-10" />
</template>

<style scoped>

</style>
