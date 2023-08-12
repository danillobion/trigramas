import { createRouter, createWebHistory } from 'vue-router'

//layout
import LoginLayout from '../layouts/LoginLayout.vue'
import TesteLayout from '../layouts/TesteLayout.vue'
//views
import TesteView from '../views/TesteView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginLayout,
      children: [
        { path: '', component: LoginView },
      ],
    },
    {
      path: '/teste',
      name: 'Teste',
      component: TesteLayout,
      children: [
        { path: '', component: TesteView },
      ],
    },
  ]
})

export default router
