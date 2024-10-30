<script setup lang="ts">
defineProps({
    active: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <div
        class="px-2 py-1 mx-1 rounded cursor-pointer hover:bg-blue-50 hover:text-blue-700 active:!bg-amber-100 transition-all duration-200"
        :class="{ 'menu-item-active': active }"
    >
        <slot />
    </div>
</template>

<style scoped>
.menu-item-active {
  @apply !bg-blue-100 !text-blue-600;
}
</style>
