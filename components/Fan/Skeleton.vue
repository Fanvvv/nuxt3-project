<script setup lang="ts">
defineProps({
    bg: {
        type: String,
        default: "#efefef",
    },
    width: {
        type: String,
        default: "100px",
    },
    height: {
        type: String,
        default: "100px",
    },
    animated: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <div
        class="inline-block relative overflow-hidden align-middle animate-[fade_1s_linear_infinite_alternate]"
        :style="{ width, height }"
        :class="{ blink: animated }"
    >
        <div class="w-full h-full rounded-[2px]" :style="{ backgroundColor: bg }" />
    </div>
</template>

<style scoped>
.blink::after {
  content: "";
  background: linear-gradient(
    to left,
    rgba(255,255,255,0) 0,
    rgba(255,255,255,0.3) 50%,
    rgba(255,255,255,0)100%
  );
  @apply absolute animate-[blink_1s_ease_0s_infinite] top-0 w-1/2 h-full skew-x-[-45]
}

@keyframes blink {
  0% {
    left: -100%;
  }
  100% {
    left: 120px;
  }
}
@keyframes fade {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
</style>
