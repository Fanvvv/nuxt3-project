<script setup lang="ts">

</script>

<template>
    <n-card v-for="i in 3" :key="i" class="mb-5">
        <fan-skeleton bg="#e4e4e4" width="306px" height="306px" animated />
        <fan-skeleton bg="#e4e4e4" width="160px" height="24px" animated />
        <fan-skeleton bg="#e4e4e4" width="120px" height="24px" animated />
    </n-card>
</template>

<style scoped>

</style>
