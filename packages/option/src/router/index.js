import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

router.beforeEach(to => {
  if (to.path === '/index.html') return '/'
})
export default router
