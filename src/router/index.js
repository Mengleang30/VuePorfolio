import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import Resume from '@/views/Resume.vue'
import Skill from '@/views/Skill.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/resume', name: 'Resume', component: Resume },
  { path: '/skill', name: 'Skill', component: Skill },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
