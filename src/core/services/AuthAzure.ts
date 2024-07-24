import { ref } from 'vue'
import { myMSALObj, state } from '@/config/auth-azure-config'
import axios from 'axios'

export function useAuth() {
  const isAuthenticated = ref(false)
  const login = async () => {
    try {
      if (!myMSALObj) {
        throw new Error('MSAL no inicializado')
      }
      /*await myMSALObj.loginRedirect()
      isAuthenticated.value = true
*/
      const loginResponse = await myMSALObj.loginRedirect()
      isAuthenticated.value = true
      console.log('Login Success', loginResponse)
    } catch (error) {
      console.error('Login error: ', error)
    }
  }

  const logout = () => {
    if (!myMSALObj) {
      throw new Error('MSAL not initialized.')
    }
    myMSALObj.loginRedirect()
    isAuthenticated.value = false
    console.log('Logout')
  }

  const handleRedirect = async () => {
    try {
      await myMSALObj.handleRedirectPromise()
      console.log(myMSALObj.getAllAccounts())
      state.isAuthenticated = myMSALObj.getAllAccounts().length > 0
      state.user = myMSALObj.getAllAccounts()[0]
    } catch (error) {
      console.error(' Redirect error', error)
    }
  }

  const getToken = async () => {
    if (!myMSALObj) {
      throw new Error('MSAL not initialized. Call initializeMsal() before using MSAL API.')
    }
    try {
      const accounts = myMSALObj.getAllAccounts()
      if (accounts.length === 0) {
        throw new Error('No accounts found. Please login first.')
      }
      const silentRequest = {
        scopes: ['api://79f1f415-f349-4008-affd-18cbb6c54b95/Po.Read'],
        account: accounts[0]
      }
      const silentResponse = await myMSALObj.acquireTokenSilent(silentRequest)
      return silentResponse.accessToken
    } catch (error) {
      console.error('Silent token acquisition error:', error)
    }
  }

  const registerAuthorizationHeaderInterceptor = () => {
    console.log ('registerAuthorizationHeaderInterceptor --')
    axios.interceptors.request.use(async (config) => {
      const accessToken = await getToken()
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
        console.log (`Bearer ${accessToken}`)
      }
      return config
    })
  }

  return { isAuthenticated, login, logout, handleRedirect ,   getToken,
    registerAuthorizationHeaderInterceptor}
}
