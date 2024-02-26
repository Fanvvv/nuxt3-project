<script setup lang="ts">
import type { ComputedRef } from "vue"
import type { ITime } from "~/composables/useCountDown"

interface Props {
    time: string | number
}
const props = withDefaults(defineProps<Props>(), {
    time: "",
})

const emit = defineEmits(["end"])

const data = useCountDown(props.time, emit) as ComputedRef<ITime>
</script>

<template>
    <div class="count-down">
        <small>{{ data.days }}</small>
        天
        <small>{{ data.hours }}</small>
        :
        <small>{{ data.minutes }}</small>
        :
        <small>{{ data.seconds }}</small>
    </div>
</template>

<style scoped>
.count-down small {
  background-color: #fff;
  border-radius: 2px;
  padding: 2px 3px;
  margin: 0 3px;
  @apply text-yellow-500
}
</style>
