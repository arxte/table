import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useScrollStore = defineStore('scroll', () => {
  const search = ref()
  const forPartner = ref()
  const specialEvent = ref()

  return{
    search,
    forPartner,
    specialEvent
  }
})
