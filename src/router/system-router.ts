import SystemLayout  from "@/layouts/te/system-layout.te.vue";
import Error404 from '@/views/system/Error404.vue'
import Error500 from '@/views/system/Error500.vue'

export default {
    path: "/",
    component: SystemLayout,
    children: [
        {
            path: "/404",
            name: "404",
            component: Error404,
            meta: {
                pageTitle: "Error 404",
            },
        },
        {
            path: "/500",
            name: "500",
            component: Error500,
            meta: {
                pageTitle: "Error 500",
            },
        },
    ],
};
          