// Layout para la versión privada
import AppPublicGjeLayout from '@/layouts/AppPublicGjeLayout.vue'
import AppLayout from "@/layouts/cork/AppLayout.vue"
//import AppLayoutPublicGje   from '@/layouts/gje/app-public.gje.vue'
// TODO. Terminar de aplicar import GjeAdminLayout from "@/layouts/GjeAdminLayout.vue"
import {
  AsuntosListarView,
  AsuntosAgregarView,
  LayoutCatalogosView,
  TipoAcuerdoListView,
  TipoAcuerdoEditarView,
  TipoAcuerdoVerView,
  TematicaView,
  TematicaListView,
  TematicaFormView
} from '@/views/apps/gje'

import { compile } from 'vue'

export default {
  //---- Private Section
  path: '/gje/admin/',
  name: 'gje-admin-inicio',

 /*  component: AppPublicGjeLayout,  */
 component: AppPublicGjeLayout,  
 /*TODO. component: AppLayout, */

 
  meta: {
        middleware: "auth",
        breadcrumb: [
          { label: 'Gestión Judicial Electoral' }
        ]
  }, 
  children: [
    {
      path: '',
      name: 'sge-admin',
      component: AsuntosListarView,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Inicio',
        breadcrumb: [
          { label: 'Administración'},
          { label: 'Asuntos' }
        ]
      }
    },
    {
      path: 'listar',
      name: 'sge-admin-listar',
      component: AsuntosListarView,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Listado',
        breadcrumbs: ['Gestión Judicial Electoral', 'Listado']
      }
    },
    {
      path: '/gje/admin/editar/:id_medio',
      name: 'sge-admin-editar',
      component: AsuntosAgregarView,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Agregar',
        breadcrumb: [
          { label: 'Administración', to: 'sge-admin-listar' },
          { label: 'Editar Ficha Técnica' }
        ]
      }
    },
    {
      path: 'agregar',
      name: 'sge-admin-agregar',
      component: AsuntosAgregarView,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Agregar',
        breadcrumb: [
          { label: 'Administración', to: 'sge-admin-listar' },
          { label: 'Agregar Ficha Técnica' }
        ]
      }
    },
    /* Catálogos */
    {
      path: 'catalogos',
      name: 'sge-catalogos',
      component: LayoutCatalogosView,
      meta: {
        pageTitle: 'Gestión Judicial Electoral',
        breadcrumbs: ['Gestión Judicial Electoral', 'Catálogos']
      },
      children: [
        {
          path: 'tipo-acuerdo',
          name: 'cat-tipo-acuerdo',
          component: TipoAcuerdoListView,
          meta: {
            pageTitle: 'Gestión Judicial Electoral - Tipo Acuerdo',
            breadcrumbs: ['Gestión Judicial Electoral', 'Catálogos', 'Tipo Acuerdo']
          }
        },
        /* ---| CatTipoAcuerdo |--- */
        {
          path: 'tipo-acuerdo-agregar',
          name: 'tipo-acuerdo-agregar',
          component: TipoAcuerdoEditarView,
          meta: {
            pageTitle: 'Gestión Judicial Electoral - Tipo Acuerdo',
            breadcrumbs: ['Gestión Judicial Electoral', 'Catálogos', 'Tipo Acuerdo', 'Editar']
          }
        },

        {
          path: 'tipo-acuerdo-editar/:n_id_tipo_acuerdo',
          name: 'tipo-acuerdo-editar',
          component: TipoAcuerdoEditarView,
          meta: {
            pageTitle: 'Gestión Judicial Electoral - Tipo Acuerdo',
            breadcrumbs: ['Gestión Judicial Electoral', 'Catálogos', 'Tipo Acuerdo', 'Editar']
          }
        },
        {
          path: 'tipo-acuerdo-ver',
          name: 'tipo-acuerdo-ver',
          component: TipoAcuerdoVerView,
          meta: {
            pageTitle: 'Gestión Judicial Electoral - Tipo Acuerdo',
            breadcrumbs: ['Gestión Judicial Electoral', 'Catálogos', 'Tipo Acuerdo', 'Ver']
          }
        },
        /* ---| Temática |--- */
        {
          path: 'tematica',
          name: 'cat-tematica',
          component: TematicaView,
          meta: {
            pageTitle: 'Gestión Judicial Electoral - Tematica',
            breadcrumbs: ['Gestión Judicial Electoral', 'Catálogos', 'Temática']
          }
        }
      ]
    }    
  ]
}
