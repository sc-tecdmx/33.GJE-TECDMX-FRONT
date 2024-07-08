
// src/auth.js
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "../auth-azure-config";

const msalInstance = new PublicClientApplication(msalConfig);

export const login = async () => {
  try {
    const loginResponse = await msalInstance.loginPopup(loginRequest);
    console.log("loginResponse: ", loginResponse);
    return loginResponse;
  } catch (error) {
    console.error("auth-azure.js - login" );
    console.error(error);
  }
};

export const getAccessToken = async () => {
  try {
    const account = msalInstance.getAllAccounts()[0];
    if (!account) throw new Error("No se encontraron cuentas.");
    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account
    });
    return response.accessToken;
  } catch (error) {
    if (error instanceof InteractionRequiredAuthError) {
      return msalInstance.acquireTokenPopup(loginRequest).then(response => {
        return response.accessToken;
      });
    } else {
      console.error(error);
    }
  }
};
