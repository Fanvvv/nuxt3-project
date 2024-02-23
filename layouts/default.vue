<script setup lang="ts">
import NavBar from "~/components/NavBar.vue"
import PageFooter from "~/components/PageFooter.vue"
</script>

<template>
    <div class="bg-gray-100 flex flex-col min-h-screen min-w-[1000px]">
        <NavBar />
        <main>
            <slot />
        </main>
        <PageFooter />
    </div>
</template>

<style scoped>

</style>
