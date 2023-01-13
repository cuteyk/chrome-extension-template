import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'panel',
      component: () => import('../views/panel.vue')
    }
  ]
})

router.beforeEach(to => {
  if (to.path === '/panel.html') return '/'
})

export default router
