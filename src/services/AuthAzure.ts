import { ref } from 'vue';
import { myMSALObj, state } from '../auth-azure-config'

export function useAuth(){
    const isAuthenticated = ref(false);
    const login = async () => {
        try {
            if ( !myMSALObj){
                throw new Error('MSAL no inicializado')
            }
            await myMSALObj.loginRedirect();
            isAuthenticated.value = true;

            const loginResponse = await myMSALObj.loginRedirect();
            isAuthenticated.value = true;
            console.log("Login Success" , loginResponse);

        } catch (error ) {
            console.error ("Login error: ", error);
        }
    }

    const logout = () => {
        if ( !myMSALObj) {
            throw new Error ("MSAL not initialized.")
        }
        myMSALObj.loginRedirect();
        isAuthenticated.value = false;    
        console.log("Logout");
    }

    const handleRedirect = async () => {
        try {
            await myMSALObj.handleRedirectPromise();
            state.isAuthenticated = myMSALObj.getAllAccounts().length > 0
            state.user = myMSALObj.getAllAccounts()[0];

        }   catch (error ) {
            console.error (" Redirect error", error)
        }
    }

    return {isAuthenticated, login, logout, handleRedirect}
}