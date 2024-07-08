import { PublicClientApplication, type AccountInfo,type  RedirectRequest } from "@azure/msal-browser";
import { reactive } from "vue";

export const msalConfig = {
    auth: {
      clientId: "97a78863-6871-44ef-ac9f-030737c7e644", 
      authority: "https://login.microsoftonline.com/0a33d135-1635-4efb-8f75-e8a6973dfdb6",
      redirectUri: "http://localhost:4000/gje/" 
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: true
    }
  };

  export const graphScopes : RedirectRequest = {
    scopes: ['user.read', 'openId', 'profile']
  }

  export const state = reactive({
      isAuthenticated : false,
      user : null as AccountInfo | null
  });

  export const myMSALObj = new PublicClientApplication(msalConfig);