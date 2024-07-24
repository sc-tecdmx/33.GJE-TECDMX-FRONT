import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from "@/stores/m8-auth"

import authRouter from './auth-router'
import gjePublicRouter from './gje-public-router'
import gjePrivateRouter from './gje-private-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ ...authRouter }, { ...gjePublicRouter }, { ...gjePrivateRouter }]
})

router.beforeEach((to, from, next) => {
  console.log('validar auth')
  const authStore = useAuthStore();
  authStore.verifyAuth();
  if (to.meta.middleware == "auth") {
    console.log('validar auth')
    if (authStore.isAuthenticated) {
      next();
    } else {
      next({ name: "sign-in" });
    }
  } else {
    next();
  }
});

export default router
