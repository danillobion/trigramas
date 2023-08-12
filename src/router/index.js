import { createRouter, createWebHistory } from 'vue-router'

//layout
import ExternoLayout from '../layouts/ExternoLayout.vue'
import InternoLayout from '../layouts/InternoLayout.vue'

//views
import LoginView from '../views/LoginView.vue'
import ErroView from '../views/ErroView.vue'
import VisaoGeralView from '../views/VisaoGeralView.vue'
import RegioesView from '../views/RegioesView.vue'
import MonitoradosView from '../views/MonitoradosView.vue'
import ConfiguracoesView from '../views/ConfiguracoesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: ExternoLayout,
      children: [
        { path: '', component: LoginView },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Erro',
      component: ExternoLayout,
      children: [
        { path: '', component: ErroView },
      ],
    },
    {
      path: '/visao-geral',
      name: 'Visão geral',
      component: InternoLayout,
      children: [
        { path: '', component: VisaoGeralView },
      ],
    },
    {
      path: '/regioes',
      name: 'Regiões',
      component: InternoLayout,
      children: [
        { path: '', component: RegioesView },
      ],
    },    
    {
      path: '/monitorados',
      name: 'Monitorados',
      component: InternoLayout,
      children: [
        { path: '', component: MonitoradosView },
      ],
    },    
    {
      path: '/configuracoes',
      name: 'Configurações',
      component: InternoLayout,
      children: [
        { path: '', component: ConfiguracoesView },
      ],
    },
  ]
})

export default router
