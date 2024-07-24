// Layout para la versión privada
import JelCiudadanoLayout from '@/layouts/JelCiudadanoLayout.vue'
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
import RegistroView from '@/views/auth/RegistroView.vue'
import DashView from '@/views/auth/DashView.vue'
import RecuperarPassView from '@/views/auth/RecuperarPassView.vue'
import DemandaView from '@/views/auth/DemandaView.vue'
import ConsultasView from '@/views/auth/ConsultasView.vue'
import ExpedienteView from '@/views/auth/ExpedienteView.vue'

import { compile } from 'vue'

export default {
  //---- Private Section
  path: '/jel/',
  name: 'jel-layout',

  component: JelCiudadanoLayout,
  /* Activarlo cuando esté el Login Nuevamente
     meta: {
        middleware: "auth",
    }, */
  children: [
    {
      path: '',
      name: 'jel-principal',
      //component: AsuntosListarView,
      component: RegistroView,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Inicio',
        breadcrumbs: ['Gestión Judicial Electoral', 'Inicio']
      }
    },
    {
      path: '',
      name: 'jel-dash',
      component: DashView,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Principal',
        breadcrumbs: ['Gestión Judicial Electoral', 'Principal']
      }
    },
    {
      path: '',
      name: 'jel-pass',
      component: RecuperarPassView,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Principal',
        breadcrumbs: ['Gestión Judicial Electoral', 'Principal']
      }
    },
    {
      path: '',
      name: 'jel-demanda',
      component: DemandaView,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Principal',
        breadcrumbs: ['Gestión Judicial Electoral', 'Principal']
      }
    },
    {
      path: '',
      name: 'jel-consultas',
      component: ConsultasView,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Principal',
        breadcrumbs: ['Gestión Judicial Electoral', 'Principal']
      }
    },
    {
      path: '',
      name: 'jel-expediente',
      component:  ExpedienteView,
      meta: {
        pageTitle: 'Sistema de Gestión Digital - Principal',
        breadcrumbs: ['Gestión Judicial Electoral', 'Principal']
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
