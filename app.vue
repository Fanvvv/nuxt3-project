<script setup>
import {
    NConfigProvider,
} from "naive-ui"
</script>

<template>
    <NConfigProvider inline-theme-disabled>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </NConfigProvider>
</template>
