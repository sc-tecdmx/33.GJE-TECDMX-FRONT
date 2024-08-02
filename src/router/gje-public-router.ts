// Layout para la versión pública
// OK.

import { AsuntosInicioPublicView, AsuntosFichaPublicView } from '@/views/apps/gje'

import AppPublicGjeLayout from '@/layouts/AppPublicGjeLayout.vue'

export default {
  path: '/',
  name: 'gje-root',
  redirect: '/gje/',
  component: AppPublicGjeLayout,
  meta: {
    breadcrumb: [
      { label: 'Gestión Judicial Electoral' }
    ]
  }, 
  children: [
    {
      path: '/gje/',
      name: 'sge-inicio',
      component: AsuntosInicioPublicView,
      meta: {
        pageTitle: 'Seguimiento de Expedientes',
        breadcrumb: [
          { label: 'Asuntos' }
        ]
      }
    },
    {
      path: '/gje/ficha-tecnica/:id_medio',
      name: 'gje-ficha-tecnica',
      component: AsuntosFichaPublicView,
      meta: {
        pageTitle: 'Ficha Técnica',
        breadcrumb: [
          { label: 'Asuntos', to:'sge-inicio' },
          { label: 'Ficha Técnica' }
        ]
      }
    }
  ]
}
