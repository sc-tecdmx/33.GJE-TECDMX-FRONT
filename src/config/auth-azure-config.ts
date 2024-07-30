import {
  PublicClientApplication,
  type RedirectRequest
} from '@azure/msal-browser'

/* + '/gje/admin' */
const clientId = import.meta.env.VITE_GJE_AZURE_APP_ID
const baseUrl  = import.meta.env.VITE_GJE_APP_VUE

export const msalConfig = {
  auth: {
    clientId: clientId,
    authority: 'https://login.microsoftonline.com/0a33d135-1635-4efb-8f75-e8a6973dfdb6',
    redirectUri: baseUrl + '/gje/admin'
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false
  }
}

export const graphScopes: RedirectRequest = {
  scopes: ['user.read' /* , 'openId', 'profile' */]
}

export const msalInstance = new PublicClientApplication(msalConfig)
