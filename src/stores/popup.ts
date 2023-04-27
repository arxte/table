import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePopupStore = defineStore('popup', () => {
  const isVisible = ref(false)
  const messageBtn = ref('Reserve a table')

  return {
    isVisible,
    messageBtn
  }
})