<script setup lang="ts">
defineProps({
    value: {
        type: [String, Number],
        default: 0,
    },
    through: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <span :class="through ? 'text-gray-500 text-xs line-through' : 'text-rose-500 font-bold'">
        {{ Number.parseFloat(value) === 0 ? '免费' : `￥${value}` }}
    </span>
</template>

<style scoped>

</style>
