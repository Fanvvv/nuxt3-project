<script setup lang="ts">
import {
    NButton,
    NForm,
    NFormItem,
    NInput,
    createDiscreteApi,
} from "naive-ui"
import type { FormItemRule, FormValidationError } from "naive-ui"
import type { ILoginForm } from "~/apis/user"

interface Rules {
    username: FormItemRule[]
    password: FormItemRule[]
    repassword?: FormItemRule[]
}
const route = useRoute()
const type = ref("login")
const title = ref("登录")
const { $api } = useNuxtApp()
useHead({ title })

const formRef: Ref = ref(null)
const form: ILoginForm = reactive({
    username: "",
    password: "",
    repassword: "",
})

const rules = computed(() => {
    const r: Rules = {
        username: [{
            required: true,
            message: type.value === "login" ? "用户名/手机号/邮箱必填" : "用户名必填",
        }],
        password: [{
            required: true,
            message: "密码必填",
        }],
    }

    if (type.value !== "login") {
        r.repassword = [{
            required: true,
            message: "确认密码必填",
        }, {
            validator(rule, value) {
                return value === form.password
            },
            message: "两次密码输入不一致",
            trigger: ["input", "blur"],
        }]
    }

    return r
})

function changeType() {
    type.value = type.value === "login" ? "reg" : "login"
    title.value = type.value === "login" ? "登录" : "注册"
    route.meta.title = title.value
    form.username = ""
    form.password = ""
    form.repassword = ""
    formRef.value.restoreValidation()
}

const loading = ref(false)
function onSubmit() {
    formRef.value.validate(async (errors: Array<FormValidationError> | undefined) => {
        if (errors)
            return

        loading.value = true

        const { data, error } = type.value === "login" ? await $api.users.login(form) : await $api.users.register(form)
        console.log(data.value)
        loading.value = false

        if (error.value)
            return

        const { message } = createDiscreteApi(["message"])
        message.success(type.value === "login" ? "登录成功" : "注册成功")

        if (type.value === "login") {
            // 将用户登录成功返回的token存储在cookie当中，用户登录成功的标识
            const token = useCookie("token")
            // token.value = data.value.token

            // 跳转
            // navigateTo(route.query.from as string || "/", { replace: true })
        }
        else {
            // 切换回登录页
            changeType()
        }
    })
}

definePageMeta({
    layout: "login",
})
</script>

<template>
    <NForm ref="formRef" class="w-[340px]" :model="form" :rules="rules" size="large">
        <NFormItem :show-label="false" path="username">
            <NInput v-model:value="form.username" :placeholder="type === 'login' ? '用户名/手机/邮箱' : '用户名'" />
        </NFormItem>
        <NFormItem :show-label="false" path="password">
            <NInput v-model:value="form.password" placeholder="密码" type="password" />
        </NFormItem>
        <NFormItem v-if="type !== 'login'" :show-label="false" path="repassword">
            <NInput v-model:value="form.repassword" placeholder="确认密码" type="password" />
        </NFormItem>
        <div class="flex justify-between w-full mb-2">
            <NButton quaternary type="primary" size="tiny" @click="changeType">
                {{ type === 'login' ? '注册' : '登录' }}
            </NButton>
            <nuxt-link to="/forget">
                <NButton quaternary type="primary" size="tiny">
                    忘记密码？
                </NButton>
            </nuxt-link>
        </div>
        <div>
            <NButton class="w-full" type="primary" :loading="loading" @click="onSubmit">
                {{ type === 'login' ? '登 录' : '注 册' }}
            </NButton>
        </div>
        <div class="flex justify-center items-center w-full text-xs mt-5 text-gray-600">
            注册即同意
            <NButton quaternary type="primary" size="tiny">
                《服务协议》
            </NButton>
            和
            <NButton quaternary type="primary" size="tiny">
                《隐私政策》
            </NButton>
        </div>
    </NForm>
</template>

<style scoped>

</style>
