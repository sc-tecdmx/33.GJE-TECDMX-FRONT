
import AppLayout    from '@/layouts/te/app-layout.te.vue'
import AnalisisView   from '@/views/apps/cork/Analisis.vue'
import VentasView     from '@/views/apps/cork/Ventas.vue'

export default {
    path: '/ventas-',
    name: 'ventas',
    component: AppLayout,
   /*  meta: {
        middleware: "auth",
    },*/
    children: [
        {
          path: "/ventas",
          name: "ventas",
          component: VentasView,
          meta: {
            pageTitle: "Inicio",
            breadcrumbs: ["Inicio", "Ventas"],
          },
        },
        {
            path: "/analisis",
            name: "analisis",
            component: AnalisisView,
            meta: {
              pageTitle: "Análisis",
              breadcrumbs: ["Inicio", "Análisis"],
            },
          },
    ]
};