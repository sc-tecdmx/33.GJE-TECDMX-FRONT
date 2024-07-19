import JelAuthLayout from '@/layouts/JelAuthLayout.vue'

import { LoginView, RegistroView,  LoginAzureView } from '@/views/auth'


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
      meta: { pageTitle: 'Login', breadcrumbs: ['Registro'] }
    },

    {
      path: '/auth/sign-in-azure',
      name: 'sign-in-in-azure',
      component: LoginAzureView,
      meta: { pageTitle: 'Login', breadcrumbs: ['Login'] }
    },
  ]
}
