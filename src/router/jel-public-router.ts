// Layout para la versión pública
// OK.

import { AsuntosInicioPublicView, AsuntosFichaPublicView } from '@/views/apps/gje'

import AppPublicGjeLayout from '@/layouts/AppPublicGjeLayout.vue'

export default {
  path: '/',
  name: 'jel-root',
  redirect: '/inicio/',
  component: AppPublicGjeLayout,
  children: [
    {
      path: '/inicio/',
      name: 'jel-inicio',
      component: AsuntosInicioPublicView,
      meta: {
        pageTitle: 'Seguimiento de Expedientes',
        breadcrumbs: ['Gestión Judicial Electoral', 'Seguimiento de Expedientes']
      }
    },
    {
      path: '/gje/ficha-tecnica/:id_medio',
      name: 'gje-ficha-tecnica',
      component: AsuntosFichaPublicView,
      meta: {
        pageTitle: 'Ficha Técnica',
        breadcrumbs: ['Gestión Judicial Electoral', 'Seguimiento de Expedientes', 'Ficha Técnica']
      }
    }
  ]
}
