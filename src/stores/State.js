
import { defineStore } from 'pinia'

export const useStore = defineStore('State', {
  state: () => ({
    dartMode: JSON.parse(localStorage.getItem('darkMode')) || false,
  }),
  actions: {
    setDarkMode(){
        this.dartMode = !this.dartMode
        localStorage.setItem('darkMode', JSON.stringify(this.dartMode));
    }
  }
})
