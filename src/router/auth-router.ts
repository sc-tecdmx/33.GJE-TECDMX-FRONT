import AuthLayout from '@/layouts/AuthLayoutTe.vue'

import { LoginView, LoginAzureView } from '@/views/auth'

import BorrarHomeView from '@/views/BorrarHomeView.vue'

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
    },
    /* { path: '/auth/sign-up'     , name: 'sign-up'    , component: RegistroView     , meta: { pageTitle: "Registro"     , breadcrumbs: ["Registro"]} },
       { path: '/auth/recuperar'   , name: 'recuperar'   , component: RecuperarView    , meta: { pageTitle: "Recuperar"    , breadcrumbs: ["Recuperar"]} },
       { path: '/auth/restablecer' , name: 'restablecer' , component: ReestablecerView , meta: { pageTitle: "Reestablecer" , breadcrumbs: ["Reestablecer"]} }, 
*/
    {
      path: '/borrar',
      name: 'borrar',
      component: BorrarHomeView,
      meta: {
        pageTitle: 'Borrar',
        breadcrumbs: ['Gestión Judicial Electoral', 'Seguimiento de Expedientes', 'Ficha Técnica']
      }
    }
  ]
}
