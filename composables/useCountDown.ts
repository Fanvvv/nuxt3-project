import type { ComputedRef } from "vue"

export interface ITime {
    days: number | string
    hours: number | string
    minutes: number | string
    seconds: number | string
}

export function useCountDown(end_time: string | number, emit: (e: "end") => void): ComputedRef<ITime> | void {
    const timeout = ref(0)
    const Timer: Ref<ReturnType<typeof setInterval> | null> = ref(null)

    end_time = new Date(end_time).getTime()
    timeout.value = (end_time - Date.now()) / 1000

    if (timeout.value <= 0)
        return emit("end")
    close()
    Timer.value = setInterval(() => {
        timeout.value--
        if (timeout.value <= 0) {
            close()
            emit("end")
        }
    }, 1000)
    function close() {
        if (Timer.value)
            clearInterval(Timer.value)
    }

    return computed(() => formatDiffDate(timeout.value))
}

function formatDiffDate(seconds: number) {
    const time: ITime = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    }
    if (seconds) {
        time.days = Math.floor(seconds / (60 * 60 * 24))
        time.hours = Math.floor(seconds / (60 * 60)) - time.days * 24
        time.minutes = Math.floor(seconds / 60) - time.days * 24 * 60 - time.hours * 60
        time.seconds = Math.floor(seconds) - time.days * 24 * 60 * 60 - time.hours * 60 * 60 - time.minutes * 60
    }
    // 补零
    time.days = time.days.toString().padStart(2, "0")
    time.hours = time.hours.toString().padStart(2, "0")
    time.minutes = time.minutes.toString().padStart(2, "0")
    time.seconds = time.seconds.toString().padStart(2, "0")

    return time
}
