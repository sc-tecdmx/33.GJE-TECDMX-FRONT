import { createRouter, createWebHistory } from 'vue-router'
import { useAuthAzure } from '@/core/composables/useAuthAzure'
import { useAuthStore } from "@/stores/m8-auth"

import authRouter from './auth-router'
import gjePublicRouter from './gje-public-router'
import gjePrivateRouter from './gje-private-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ ...authRouter }, { ...gjePublicRouter }, { ...gjePrivateRouter }],
  linkActiveClass: 'border-indigo-500',
  linkExactActiveClass: 'border-indigo-700',
})

router.beforeEach((to, from, next) => {
  const authAzure = useAuthAzure();  
  const authStore = useAuthStore();
  authStore.verifyAuth();
  if (to.meta.middleware == "auth") {
    console.log('validar auth')
    
    if (authAzure.getIsAuthenticated()) {
      next();
    } else {
      next({ name: "sign-in" });
    } 
    /* if (authStore.isAuthenticated) {
      next();
    } else {
      next({ name: "sign-in" });
    } */
  } else {
    next();
  }
});

export default router
