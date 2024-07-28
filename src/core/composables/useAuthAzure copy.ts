import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { msalInstance } from '@/config/auth-azure-config'
import axios from 'axios'
import {
  type AccountInfo,
} from '@azure/msal-browser'

export const useAuthAzure = () => {
  const error = ref<string | undefined>(undefined);

  const initializeMsal = async () => {
    try {
      await msalInstance.initialize() // Call the initialize function
    } catch (ex) {
      error.value = "[1] Error. Llamar initializeMsal() antes de usar MSAL API." + ex
    }
  }


  const login = async () => {
    try {
      if (!msalInstance) {
        throw new Error('[2] MSAL no initicializado.')
      }
      await msalInstance.loginRedirect()
      state.isAuthenticated = true
    } catch (ex) {
      error.value = 'Error de Login: ' + ex + "."
    }
  }

  const logout = () => {
    if (!msalInstance) {
      throw new Error('[3] MSAL no initicializado.')
    }
    msalInstance.logoutRedirect()
    state.isAuthenticated = false
    state.user = null
  }

  const handleRedirect = async () => {
    console.log("Save on AuthStore")
    try {
      await msalInstance.handleRedirectPromise()
      state.isAuthenticated = msalInstance.getAllAccounts().length > 0
      state.user = msalInstance.getAllAccounts()[0]
    } catch (ex) {
      error.value = 'Error de redirect: ' + ex + "."
    }
  }

  const getToken = async () => {
    try {
      if (!msalInstance) {
        throw new Error('[4] MSAL no initicializado.')
      }
      const accounts = msalInstance.getAllAccounts()
      if (accounts.length === 0) {
        throw new Error('No se encontraron cuentas, favor realizar login.')
      }
      const silentRequest = {
        scopes: ['api://79f1f415-f349-4008-affd-18cbb6c54b95/Po.Read'],
        account: accounts[0]
      }
      const silentResponse = await msalInstance.acquireTokenSilent(silentRequest)
      return silentResponse.accessToken
    } catch (ex) {
      error.value = 'Error de Silent token acquisition: ' + ex + "."
    }
  }

  const registerAuthorizationHeaderInterceptor = () => {
    axios.interceptors.request.use(async (config) => {
      const accessToken = await getToken()
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
        console.log (`Bearer ${accessToken}`)
        /*
        Registrar el token para la autenticación.
        */
      }
      return config
    })
  }

  const state = reactive({
    isAuthenticated: false,
    user: null as AccountInfo | null
  })

  return { 
    initializeMsal,
    login, 
    logout, 
    handleRedirect ,   
    getToken,
    registerAuthorizationHeaderInterceptor,
    state
  }
}
