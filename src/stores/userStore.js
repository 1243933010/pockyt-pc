import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userStoreFnc = defineStore('userStore', () => {
  const user = ref({name:'游客'})
  const local = 'zh-ch'
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

  return { user,local }
})


