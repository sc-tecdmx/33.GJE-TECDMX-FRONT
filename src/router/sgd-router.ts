
import AppLayout      from '@/layouts/te/app-layout.te.vue'
import SgdInicio      from '@/views/apps/sgd/SgdInicio.vue'
import SgdEntradaList from '@/views/apps/sgd/SgdEntradaList.vue'
import SgdSalidaList  from '@/views/apps/sgd/SgdSalidaList.vue'


export default {
    path: '/sgd',
    name: 'sgd',
    component: AppLayout,
    meta: {
        middleware: "auth",
    },
    children: [
      {
        path: "/sgd/inicio",
        name: "sgd-inicio",
        component: SgdInicio,
        meta: {
          pageTitle: "Sistema de Gestión Digital",
          breadcrumbs: ["Gestión", "Inicio"],
        },
      },
      {
        path: "/sgd/entrada/list",
        name: "sgd-entrada-list",
        component: SgdEntradaList,
        meta: {
          pageTitle: "Sistema de Gestión Digital",
          breadcrumbs: ["Gestión", "Correspondencia de entrada"],
        },
      },
      {
        path: "/sgd/salida/list",
        name: "sgd-salida-list",
        component: SgdSalidaList,
        meta: {
          pageTitle: "Sistema de Gestión Digital",
          breadcrumbs: ["Gestión", "Correspondencia de salida"],
        },
      },
    ]
};