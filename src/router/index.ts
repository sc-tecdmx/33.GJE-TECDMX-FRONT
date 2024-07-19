import { createRouter, createWebHistory } from 'vue-router'
import jelAuthRouter from './jel-auth-router'
import jelPublicRouter from './jel-public-router'
import jelCiudadanoRouter from './jel-ciudadano-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ ...jelAuthRouter }, { ...jelPublicRouter }, { ...jelCiudadanoRouter }]
})

export default router
