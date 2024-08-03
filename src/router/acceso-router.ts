import InstAccesoLayout from '@/layouts/InstAccesoLayout.vue'

import { PrincipalAcceso } from "@/views/apps/acceso"
import AltaAppsView from '@/views/apps/acceso/AltaAppsView.vue'
import UsuariosControlView from '@/views/auth/UsuariosControlView.vue'


export default {
  path: '/inst/acceso',
  name: 'inst-acceso',
  component: InstAccesoLayout,
  children: [
    {
      path: '',
      name: 'acceso-dash',
      component: PrincipalAcceso,
      meta: { pageTitle: 'Login', breadcrumbs: ['Login'] }
    },
    {
      path: 'alta',
      name: 'jel-alta',
      component:  AltaAppsView,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Principal',
        breadcrumbs: ['Gestión Judicial Electoral', 'Principal']
      }
    },
    {
      path: 'usuario',
      name: 'jel-usuarios',
      component:  UsuariosControlView,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Principal',
        breadcrumbs: ['Gestión Judicial Electoral', 'Principal']
      }
    },
  ]
}
