import { createRouter, createWebHistory } from 'vue-router'

//layout
import ExternoLayout from '../layouts/ExternoLayout.vue'
import InternoLayout from '../layouts/InternoLayout.vue'

//views
import LoginView from '../views/LoginView.vue'
import ErroView from '../views/ErroView.vue'
import VisaoGeralView from '../views/VisaoGeralView.vue'
import RegioesView from '../views/RegioesView.vue'
import EstadosView from '../views/EstadosView.vue'
import MunicipiosView from '../views/MunicipiosView.vue'
import PacientesView from '../views/PacientesView.vue'
import PessoaView from '../views/PessoaView.vue'
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
    // # REGIOES
    {
      path: '/regioes',
      component: InternoLayout,
      children: [
        { path: '', component: RegioesView },
      ],
    },    
    {
      path: '/regioes/:regiao',
      component: InternoLayout,
      children: [
        { path: '', component: EstadosView },
      ],
    }, 
    {
      path: '/regioes/:regiao/:estado',
      component: InternoLayout,
      children: [
        { path: '', component: MunicipiosView },
      ],
    }, 
    {
      path: '/regioes/:regiao/:estado/:municipio',
      component: InternoLayout,
      children: [
        { path: '', component: PacientesView },
      ],
    },   
    {
      path: '/regioes/:regiao/:estado/:municipio/:pessoa',
      component: InternoLayout,
      children: [
        { path: '', component: PessoaView },
      ],
    },  
    // ### REGIOES
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
