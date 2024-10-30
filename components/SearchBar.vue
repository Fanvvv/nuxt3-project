<script setup lang="ts">
const active = ref(false)
const keyword = ref("")

function open() {
    active.value = true
    keyword.value = ""
}
const close = () => active.value = false
function handleSearch() {
    setTimeout(() => {
        close()
    }, 200)
    navigateTo({
        name: "search-type-page",
        params: {
            type: "course",
            page: 1,
        },
        query: {
            keyword: keyword.value,
        },
    })
}

function handleEnterSearch(e: KeyboardEvent) {
    if (e.key === "Enter" && keyword.value)
        handleSearch()
}
function addEnterEvent() {
    document.addEventListener("keydown", handleEnterSearch)
}
function removeEnterEvent() {
    document.removeEventListener("keydown", handleEnterSearch)
}

defineExpose({
    open,
})
</script>

<template>
    <n-drawer v-model:show="active" placement="top" :on-after-enter="addEnterEvent" :on-after-leave="removeEnterEvent">
        <div class="flex justify-center items-center h-full">
            <n-input-group class="flex justify-center items-center">
                <n-input v-model:value="keyword" :style="{ width: '500px' }" size="large" placeholder="请输入关键词进行搜索" />
                <n-button size="large" type="primary" ghost :disabled="!keyword" @click="handleSearch">
                    搜索
                </n-button>
            </n-input-group>
        </div>
    </n-drawer>
</template>

<style scoped>

</style>
