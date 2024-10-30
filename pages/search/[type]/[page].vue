<script setup lang="ts">
const route = useRoute()
const title = ref(route.query.keyword as string)
// const type = ref(route.params.type)

useHead({ title })
definePageMeta({
    middleware: ["search"],
})
</script>

<template>
    <div>search page</div>
</template>

<style scoped>

</style>
