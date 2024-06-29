// Layout para la versión pública
// OK.
import AppLayoutPublicGje   from '@/layouts/gje/app-public.gje.vue'
import AsuntosPublicInicio  from '@/views/apps/sge/asuntos-public-inicio.vue'
import AsuntosPublicFicha   from '@/views/apps/sge/asuntos-public-ficha.vue'


export default {
    path: '/',
    name: 'gje-root',
    redirect: '/gje/',
    component: AppLayoutPublicGje,
    children: [
        {
          path: "/gje/",
          name: "sge-inicio",
          component: AsuntosPublicInicio,
          meta: {
            pageTitle: "Seguimiento de Expedientes",
            breadcrumbs: ["Gestión Judicial Electoral", "Seguimiento de Expedientes"],
          },
        },
        {
          path: "/gje/ficha-tecnica/:expediente",
          name: "gje-ficha-tecnica",
          component: AsuntosPublicFicha,
          meta: {
            pageTitle: "Ficha Técnica",
            breadcrumbs: ["Gestión Judicial Electoral", "Seguimiento de Expedientes", "Ficha Técnica"],
          },
        },
    ]
};