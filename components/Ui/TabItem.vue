<script setup lang="ts">
defineProps({
    active: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <span
        class="py-3 px-4 text-gray-700 text-sm cursor-pointer flex-shrink-0 hover:text-blue-400"
        :class="{ 'tab-item-active': active }"
    >
        <slot />
    </span>
</template>

<style scoped>
.tab-item-active {
  border-bottom: 2px solid;
  @apply text-blue-400 border-blue-400;
}
</style>
