import { createRouter, createWebHistory } from 'vue-router'
import authRouter from './auth-router'
import gjePublicRouter from './gje-public-router'
import gjePrivateRouter from './gje-private-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ ...authRouter }, { ...gjePublicRouter }, { ...gjePrivateRouter }]
})

export default router
