import { createRouter, createWebHistory } from 'vue-router'
import jelAuthRouter from './jel-auth-router'
import jelPublicRouter from './jel-public-router'
import jelCiudadanoRouter from './jel-ciudadano-router'
import instAccesoRouter from './acceso-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ ...jelAuthRouter },
           { ...jelPublicRouter }, 
           { ...jelCiudadanoRouter },
           {... instAccesoRouter}]
})

export default router
