
import InstAccesoLayout from '@/layouts/InstAccesoLayout.vue'

import { LoginView, RecuperarPassView, UsuariosControlView, AltaAppsView, AltaAppsPermisoView, ModalDefaultView, AltaAppsModalView, UserModalView, RegistroView } from "@/views/apps/acceso"





export default {
  path: '/inst/acceso',
  name: 'inst-acceso',
  component: InstAccesoLayout,
  children: [
   /* {
      path: '',
      name: 'acceso-dash',
      component: PrincipalAcceso,
      meta: { pageTitle: 'Login', breadcrumbs: ['Login'] }
    },*/
    {
      path: '',
      name: 'jel-Login',
      component: LoginView,
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
    {
      path: 'registro',
      name: 'jel-registro',
      component:  RegistroView,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Principal',
        breadcrumbs: ['Gestión Judicial Electoral', 'Principal']
      }
    },
    {
      path: 'pass',
      name: 'jel-pass',
      component:  RecuperarPassView,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Principal',
        breadcrumbs: ['Gestión Judicial Electoral', 'Principal']
      }
    },
    {
      path: 'permiso',
      name: 'jel-permiso',
      component:  AltaAppsPermisoView,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Principal',
        breadcrumbs: ['Gestión Judicial Electoral', 'Principal']
      }
    },

    {
      path: 'modal',
      name: 'jel-modal',
      component:  ModalDefaultView,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Principal',
        breadcrumbs: ['Gestión Judicial Electoral', 'Principal']
      }
    },

    {
      path: 'modalUser',
      name: 'jel-modalUser',
      component:  UserModalView,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Principal',
        breadcrumbs: ['Gestión Judicial Electoral', 'Principal']
      }
    },
    {
      path: 'modal2',
      name: 'jel-moda2',
      component:  AltaAppsModalView,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Principal',
        breadcrumbs: ['Gestión Judicial Electoral', 'Principal']
      }
    },
   
  ]
}
