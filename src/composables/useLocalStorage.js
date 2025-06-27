// src/composables/useLocalStorage.js
import { ref, watch } from 'vue'

export function useLocalStorage(key, defaultValue = []) {
    const data = ref(JSON.parse(localStorage.getItem(key)) || defaultValue)

    watch(
        data,
        (val) => {
            localStorage.setItem(key, JSON.stringify(val))
        },
        { deep: true },
    )

    return data
}
