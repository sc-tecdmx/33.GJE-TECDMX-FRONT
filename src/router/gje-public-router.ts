// Layout para la versión pública
// OK.

import { AsuntosInicioPublicView, AsuntosFichaPublicView } from '@/views/apps/gje'

import AppPublicGjeLayout from '@/layouts/AppPublicGjeLayout.vue'

export default {
  path: '/',
  name: 'gje-root',
  redirect: '/gje/',
  component: AppPublicGjeLayout,
  children: [
    {
      path: '/gje/',
      name: 'sge-inicio',
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
