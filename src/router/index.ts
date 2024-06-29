import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore }   from "@/stores/auth/auth-store";
import { useAlertStore }  from '@/stores/vista/AlertStore';

// import publicSaRouter from "./public-sa-router";
/* import corkRouter                 from "./cork-router"; */
import gjePublicRouter     from "./gje-public-router";
import gjePrivateRouter    from "./gje-private-router";
import authRouter   from "./auth-router";


const routes = [
  /* { ...publicSaRouter }, */
  /* { ...corkRouter   }, */ 
  { ...authRouter       },
  { ...gjePublicRouter  },
  { ...gjePrivateRouter },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes,
  scrollBehavior(to) { // From metronic8
    // If the route has a hash, scroll to the section with the specified ID; otherwise, scroll to the top of the page.
    if (to.hash) {
      return {
        el: to.hash,
        top: 80,
        behavior: "smooth",
      };
    } else {
      return {
        top: 0,
        left: 0,
        behavior: "smooth",
      };
    }
  },

})

router.beforeEach((to, from, next) => {

  const authStore = useAuthStore();

  const alertStore = useAlertStore();
  alertStore.clear();
  
  
  // IFR. Metronic const configStore = useConfigStore();

  // current page view title
  document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;

  // reset config to initial state
  // IFR. Metronic configStore.resetLayoutConfig();

  // verify auth token before each page change
  // IFR . OK. Regresarolo despues 
  // authStore.verifyAuth();
  console.log(' router/index.ts/authStore.verifyAuth();')

  // before page access check if page requires authentication
  console.log('to.meta.middleware [' ,  to.meta, to.meta.middleware, ']')
  if (to.meta.middleware == "auth") {
    if (authStore.isAuthenticated) {
      next();
    } else {
      next({ name: "sign-in" });
    }
  } else {
    console.log('to.meta.middleware - sin auth [' ,  to.path, ']')
    next();
  }
});

export default router
