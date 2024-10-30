<script setup lang="ts">
import { Search } from "@vicons/ionicons5"
import { type Menus, useCommonConst } from "~/composables/useCommonConst"
import SearchBar from "~/components/SearchBar.vue"

const user = useUser()
const route = useRoute()
const { menus, userOptions } = useCommonConst()

function isMenuItemActive(item: Menus) {
    if (item.match) {
        const i = item.match.findIndex((o) => {
            let res = true
            if (o.params && typeof o.params === "object")
                res = (Object.keys(o.params).findIndex(k => route.params[k] === o.params?.type)) !== -1

            return o.name === route.name && res
        })
        return i !== -1
    }
    return route.path === item.path
}

function handleOpen(path: string) {
    navigateTo(path)
}

const searchBarRef = ref<InstanceType<typeof SearchBar> | null>(null)
function openSearchBar() {
    searchBarRef.value.open()
}

// 处理下拉菜单的点击事件，用户中心和退出登录
async function handleSelect(key: string | number) {
    if (key === "logout")
        await useLogout()
}
</script>

<template>
    <div class="z-50 h-[50px] fixed top-0 left-0 right-0 w-full bg-white shadow-sm">
        <div class="container flex items-center h-[50px]">
            <n-button text class="!text-xl !font-bold">
                练手项目
            </n-button>
            <ui-menu>
                <ui-menu-item v-for="(item, index) in menus" :key="index" :active="isMenuItemActive(item)" @click="handleOpen(item.path)">
                    {{ item.name }}
                </ui-menu-item>
            </ui-menu>
            <n-button circle class="ml-auto mr-3" @click="openSearchBar">
                <template #icon>
                    <n-icon>
                        <Search />
                    </n-icon>
                </template>
            </n-button>
            <nuxt-link v-if="!user" to="/login">
                <n-button secondary strong>
                    登录
                </n-button>
            </nuxt-link>
            <n-dropdown v-else :options="userOptions" @select="handleSelect">
                <n-avatar
                    round
                    size="small"
                    class="cursor-pointer"
                    :src="user.avatar || 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'"
                />
            </n-dropdown>
        </div>
    </div>
    <div class="h-[50px] mb-6" />
    <SearchBar ref="searchBarRef" />
</template>

<style scoped>

</style>
