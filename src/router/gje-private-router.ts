// Layout para la versión privada
import AppPublicGjeLayout from '@/layouts/AppPublicGjeLayout.vue'
// import AppLayoutPublicGje   from '@/layouts/gje/app-public.gje.vue'
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

 /*  component: AppPublicGjeLayout, */
 component: AppPublicGjeLayout, 
 
  meta: {
        middleware: "auth",
  },
  children: [
    {
      path: '',
      name: 'sge-admin',
      component: AsuntosListarView,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Inicio',
        breadcrumbs: ['Gestión Judicial Electoral', 'Inicio']
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
        breadcrumbs: ['Gestión Judicial Electoral', 'Agregar']
      }
    },
    {
      path: 'agregar',
      name: 'sge-admin-agregar',
      component: AsuntosAgregarView,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Agregar',
        breadcrumbs: ['Gestión Judicial Electoral', 'Agregar']
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
        /*        {
          path: 'tematica',
          name: 'cat-tematica-form',
          component: TematicaListView,
          meta: {
            pageTitle: 'Gestión Judicial Electoral - Temática',
            breadcrumbs: ['Gestión Judicial Electoral', 'Catálogos', 'Tematica', 'Listar']
          }
        },
        {
          path: 'tematica',
          name: 'cat-tematica-form',
          component: TematicaFormView,
          meta: {
            pageTitle: 'Gestión Judicial Electoral - Temática',
            breadcrumbs: ['Gestión Judicial Electoral', 'Catálogos', 'Tematica', 'Editar']
          }
        } */
      ]
    }
    /*,
        {
      path: 'agregar-etapas',
      name: 'sge-admin-agregar-etapas',
      component: AsuntosAgregarEtapas,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Agregar',
        breadcrumbs: ['Gestión Judicial Electoral', 'Agregar']
      }
    },
    {
      path: 'editar',
      name: 'sge-admin-editar',
      component: AsuntosEditar,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Editar',
        breadcrumbs: ['Gestión Judicial Electoral', 'Editar']
      }
    } */
  ]
}
