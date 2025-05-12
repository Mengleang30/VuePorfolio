
import { defineStore } from 'pinia'

export const useStore = defineStore('State', {
  state: () => ({
    dartMode: false,
  }),
  actions: {
    setDarkMode(){
        this.dartMode = !this.dartMode
    }
  }
})
