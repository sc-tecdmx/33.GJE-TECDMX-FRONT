import { ref } from 'vue'
import { msalInstance, state } from '@/config/auth-azure-config'
import axios from 'axios'

export function useAuth() {
  
  const isAuthenticated = ref(false)

  const initialize = async () => {
    try {
      await msalInstance.initialize() // Call the initialize function
      console.log('initializado--()')
    } catch (error) {
      console.log('Error de inicializacioón (1). Llamar initializeMsal() antes de usar MSAL API.', error)
    }
  }


  const login = async () => {
    try {
      if (!msalInstance) {
        console.log('Error de inicializacioón (2). Llamar initializeMsal() antes de usar MSAL API.')
      }
      await msalInstance.loginRedirect()
      isAuthenticated.value = true
      console.log('isAuthenticated.value : ' + isAuthenticated.value)

      const loginResponse = await msalInstance.loginRedirect()

      state.isAuthenticated = true
      isAuthenticated.value = true
      console.log('state.isAuthenticated : ' + state.isAuthenticated)
      console.log('Login Exitoso: ', loginResponse)
    } catch (error) {
      console.error('Error de Login: ', error)
    }
  }

  const logout = () => {
    if (!msalInstance) {
      throw new Error('MSAL no initicializado.')
    }
    msalInstance.logoutRedirect()
    isAuthenticated.value = false

    state.isAuthenticated = false
    state.user = null

    console.log('Logout')
  }

  const handleRedirect = async () => {
    try {
      await msalInstance.handleRedirectPromise()
      console.log(msalInstance.getAllAccounts())
      state.isAuthenticated = msalInstance.getAllAccounts().length > 0
      state.user = msalInstance.getAllAccounts()[0]
      console.log('state.user: ' + state.user)
    } catch (error) {
      console.error(' Redirect error', error)
    }
  }

  const getToken = async () => {
    if (!msalInstance) {
      throw new Error('MSAL no inicializado. Llamar initializeMsal() antes de usar MSAL API.')
    }
    try {
      const accounts = msalInstance.getAllAccounts()
      if (accounts.length === 0) {
        throw new Error('No se encontraron cuentas. Por favor realizar login.')
      }
      const silentRequest = {
        scopes: ['api://79f1f415-f349-4008-affd-18cbb6c54b95/Po.Read'],
        account: accounts[0]
      }
      const silentResponse = await msalInstance.acquireTokenSilent(silentRequest)
      return silentResponse.accessToken
    } catch (error) {
      console.error('Silent token acquisition error:', error)
    }
  }

  const registerAuthorizationHeaderInterceptor = () => {
    console.log ('registerAuthorizationHeaderInterceptor --')
    axios.interceptors.request.use(async (config) => {
      const accessToken = await getToken()
      console.log('accessToken:' + accessToken)
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
        console.log (`Bearer ${accessToken}`)
      }
      return config
    })
  }

  return { 
    isAuthenticated,
    initialize,
    login, 
    logout, 
    handleRedirect ,   
    getToken,
    registerAuthorizationHeaderInterceptor
  }
}
