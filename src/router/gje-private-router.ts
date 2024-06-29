
// Layout para la versión privada
import AppLayoutPrivateGje  from '@/layouts/gje/app-private.gje.vue'
import AsuntosListar        from "@/views/apps/sge/asuntos-listar.vue"
import AsuntosAgregar       from "@/views/apps/sge/asuntos-agregar.vue"
import AsuntosEditar        from "@/views/apps/sge/asuntos-editar.vue"

export default {
  //---- Private Section
    path: '/gje/admin/',
    name: 'gje-admin-inicio',
    
    component: AppLayoutPrivateGje,
    /* Activarlo cuando esté el Login Nuevamente
     meta: {
        middleware: "auth",
    }, */
    children: [
      {
        path: "",
        name: "sge-admin",
        component: AsuntosListar,
        meta: {
          pageTitle: "Sistema de Gestión Digital - Inicio",
          breadcrumbs: ["Gestión Judicial Electoral", "Inicio"],
        },
      },
      {
        path: "listar",
        name: "sge-admin-listar",
        component: AsuntosListar,
        meta: {
          pageTitle: "Sistema de Gestión Digital - Listado",
          breadcrumbs: ["Gestión Judicial Electoral", "Listado"],
        },
      },
      {
        path: "agregar",
        name: "sge-admin-agregar",
        component: AsuntosAgregar,
        meta: {
          pageTitle: "Sistema de Gestión Digital - Agregar",
          breadcrumbs:["Gestión Judicial Electoral", "Agregar"]
        },
      },
      {
        path: "editar",
        name: "sge-admin-editar",
        component: AsuntosEditar,
        meta: {
          pageTitle: "Sistema de Gestión Digital - Editar",
          breadcrumbs:["Gestión Judicial Electoral", "Editar"]
        },
      },
    ]
};