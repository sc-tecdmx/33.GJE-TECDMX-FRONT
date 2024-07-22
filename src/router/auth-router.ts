import AuthLayout from '@/layouts/AuthLayoutTe.vue'

import { LoginView, LoginAzureView } from '@/views/auth'
export default {
  path: '/auth',
  name: 'auth',
  component: AuthLayout,
  children: [
    {
      path: '/auth/sign-in',
      name: 'sign-in',
      component: LoginView,
      meta: { pageTitle: 'Login', breadcrumbs: ['Login'] }
    },
    {
      path: '/auth/sign-in-azure',
      name: 'sign-in-in-azure',
      component: LoginAzureView,
      meta: { pageTitle: 'Login', breadcrumbs: ['Login'] }
    }
  ]
}
