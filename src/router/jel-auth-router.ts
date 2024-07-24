import JelAuthLayout from '@/layouts/JelAuthLayout.vue'

import { LoginView, RegistroView, DashView, RecuperarPassView, DemandaView, ConsultasView,  ExpedienteView, LoginAzureView } from '@/views/auth'


export default {
  path: '/auth',
  name: 'auth',
  component: JelAuthLayout,
  children: [
    {
      path: '',
      name: 'sign-in',
      component: LoginView,
      meta: { pageTitle: 'Login', breadcrumbs: ['Login'] }
    },
    {
      path: 'registro',
      name: 'registro',
      component: RegistroView,
      meta: { pageTitle: 'Registro', breadcrumbs: ['Registro'] }
    },
    {
      path: 'dash',
      name: 'dashboard',
      component: DashView,
      meta: { pageTitle: 'Dashboard', breadcrumbs: ['Dashboard'] }
    },
    {
      path: 'recuperar',
      name: 'recuperarPass',
      component: RecuperarPassView,
      meta: { pageTitle: 'RecuperarPass', breadcrumbs: ['Recuperar contraseña'] }
    },
    {
      path: 'demanda',
      name: 'demanda',
      component: DemandaView,
      meta: { pageTitle: 'Demanda', breadcrumbs: ['Demanda'] }
    },
    {
      path: 'consulta',
      name: 'consulta',
      component: ConsultasView,
      meta: { pageTitle: 'Consulta', breadcrumbs: ['Consulta'] }
    },
    {
      path: 'expediente',
      name: 'expediente',
      component: ExpedienteView,
      meta: { pageTitle: 'Expediente', breadcrumbs: ['Expediente'] }
    },
    {
      path: '/auth/sign-in-azure',
      name: 'sign-in-in-azure',
      component: LoginAzureView,
      meta: { pageTitle: 'Login', breadcrumbs: ['Login'] }
    },
  ]
}
