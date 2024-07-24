import { ref } from 'vue'
import { defineStore } from 'pinia'
import AuthService from '@/core/services/AuthService'
import JwtService from '@/core/services/JwtService'
///--------------
export interface Usuario {
  usuario: string
  nombre: string
  email: string
  password: string
  api_token: string
  token: string
}

export const useAuthStore = defineStore('auth', () => {
  const errors = ref({})
  const usuario = ref<Usuario>({} as Usuario)
  const authService = new AuthService()

  const isAuthenticated = ref(!!JwtService.getToken())

  function setAuth(authUser: Usuario) {
    isAuthenticated.value = true
    usuario.value = authUser
    errors.value = {}
    JwtService.saveToken(usuario.value.api_token)
  }

  function setError(error: any) {
    errors.value = { ...error }
  }

  function purgeAuth() {
    isAuthenticated.value = false
    usuario.value = {} as Usuario
    errors.value = []
    JwtService.destroyToken()
    //--- IFR. TODO. Falta que te mueva a otra página
  }

  function login(credentials: Usuario) {
    return authService
      .post('login', credentials)
      .then(({ data }) => {
        console.log('ApiAuthService.post(login)')
        console.log(data)
        setAuth(data)
      })
      .catch(({ response }) => {
        console.log('ApiService.post(error)-')
        setError(response.data.errors)
      })
  }

  function logout() {
    console.log('logout - TODO. Reenviar a index')

    purgeAuth()
  }

  function register(credentials: Usuario) {
    return authService
      .post('register', credentials)
      .then(({ data }) => {
        setAuth(data)
      })
      .catch(({ response }) => {
        setError(response.data.errors)
      })
  }

  function forgotPassword(email: string) {
    return authService
      .post('forgot_password', email)
      .then(() => {
        setError({})
      })
      .catch(({ response }) => {
        setError(response.data.errors)
      })
  }

  function verifyAuth() {
    console.log('--verifyAuth ')
    if (JwtService.getToken()) {
      authService.setHeader(JwtService.getToken())
      authService
        .post('verify_token', { api_token: JwtService.getToken() })
        .then(({ data }) => {
          setAuth(data)
        })
        .catch(({ response }) => {
          setError(response.data.errors)
          purgeAuth()
        })
    } else {
      purgeAuth()
    }
  }
  //-----------------
  /* const getMenuUser = async (token: any) => {
    const urlMenuUser = import.meta.env.VITE_API_SEGURL + '/api/seguridad/get-menu'
    const headers = { headers: { Authorization: `Bearer ${token}` } }
    try {
      const response = await axios.get(urlMenuUser, headers)
      //console.log(response);
      return response
    } catch (error) {
      console.log('Error al cargar menú:', error)
    }
  } */
  /* const getUserInfo = async (id: any, token: any) => {
    const urlUserInfo = import.meta.env.VITE_API_SEGURL + import.meta.env.VITE_GET_USERINFO + id
    const headers = { headers: { Authorization: `Bearer ${token}` } }
    try {
      const response = await axios.get(urlUserInfo, headers)
      //console.log(response);
      return response.data.data
    } catch (error) {
      console.log('Error al cargar menú:', error)
    }
  } */
  //-----------------

  return {
    errors,
    usuario,
    isAuthenticated,
    login,
    logout,
    register,
    forgotPassword,
    verifyAuth,
    //--------
    getMenuUser,
    getUserInfo
  }
})

export default useAuthStore
