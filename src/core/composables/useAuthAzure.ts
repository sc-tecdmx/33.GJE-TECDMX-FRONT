import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { msalInstance } from '@/config/auth-azure-config'
import axios from 'axios'
import {
  type AccountInfo,
} from '@azure/msal-browser'

/// TODO. Ugly workaroud
import  usuarios  from "@/core/services/gje/autorizados.d"

export const useAuthAzure = defineStore('authAzure', () => {
  const error = ref<string | undefined>(undefined);

  const initializeMsal = async () => {
    try {
      await msalInstance.initialize() // Call the initialize function
    } catch (ex) {
      error.value = "[1] Error. Llamar initializeMsal() antes de usar MSAL API." + ex
    }
    console.log('useAuthAzure.initializeMsal');
  }


  const login = async () => {
    console.log("useAuthAzure.login")
    try {
      if (!msalInstance) {
        throw new Error('[2] MSAL no initicializado.')
      }
      await msalInstance.loginRedirect()
      state.isAuthenticated = true
      estado.value.isAuthenticated = true
      
    } catch (ex) {
      error.value = 'Error de Login: ' + ex + "."
    }
    console.log('useAuthAzure.login');
  }

  const logout = () => {
    console.log("useAuthAzure.logout")
    if (!msalInstance) {
      throw new Error('[3] MSAL no initicializado.')
    }
    msalInstance.logoutRedirect()
    state.isAuthenticated = false
    state.user = null

    estado.value.isAuthenticated = false
    estado.value.user = null
    console.log('useAuthAzure.logout');
  }

  const handleRedirect = async () => {
    console.log("useAuthAzure.Save on AuthStore")
    try {
      await msalInstance.handleRedirectPromise()
      state.isAuthenticated = msalInstance.getAllAccounts().length > 0
      state.user = msalInstance.getAllAccounts()[0]
      console.log('--| handleRedirect |--' + state.user?.username)
      const encontrado = usuarios.filter((usuario) => (usuario.correo === state.user?.username));
      console.log( encontrado )
      if (encontrado?.length> 0){
        state.perfil = encontrado[0].perfil
        state.ponencia = encontrado[0].ponencia
        state.area = encontrado[0].area
      }
      console.log( state )
      estado.value.isAuthenticated = msalInstance.getAllAccounts().length > 0
      estado.value.user = msalInstance.getAllAccounts()[0]

    } catch (ex) {
      error.value = 'Error de redirect: ' + ex + "."
    }
    console.log('useAuthAzure.handleRedirect : ' + state.isAuthenticated );
    console.log( state.user?.username );
    console.log(  estado.value.user?.username );
  }

  const getToken = async () => {
    console.log("getToken")
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
    user: null as AccountInfo | null,
    ponencia: "" as string | null,
    perfil: "" as string | null,
    area: "" as string | null,
    
  })

  const getState = () => {
    return state
  }

  const estado = ref({
    isAuthenticated: false,
    user: null as AccountInfo | null
  });
  const getIsAuthenticated = () => {
    return estado.value.isAuthenticated
  }


  return { 
    initializeMsal,
    login, 
    logout, 
    handleRedirect ,   
    getToken,
    registerAuthorizationHeaderInterceptor,
    state,
    getState,
    getIsAuthenticated
  }
})
