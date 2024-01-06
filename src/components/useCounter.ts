import { defineStore } from 'pinia'
import { ref } from 'vue'

const useCounter = defineStore('counter', () => {
  const count = ref(0)
  const plus = () => count.value++
  const minus = () => count.value--

  return { count, plus, minus }
})

export default useCounter
