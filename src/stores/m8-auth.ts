import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/M8ApiService";
import JwtService from "@/core/services/JwtService";
import  usuarios  from "@/core/services/gje/autorizados.d"
import type {User } from "@/core/interfaces/user.i"


export const useAuthStore = defineStore("auth", () => {
  const errors = ref({});
  const user = ref<User>({} as User);
  const isAuthenticated = ref(!!JwtService.getToken());

  function setAuth(authUser: User) {
    isAuthenticated.value = true;
    user.value = authUser;
    errors.value = {};
    JwtService.saveToken(user.value.api_token);
  }

  function setError(error: any) {
    errors.value = { ...error };
  }

  function purgeAuth() {
    isAuthenticated.value = false;
    user.value = {} as User;
    errors.value = [];
    JwtService.destroyToken();
  }

  function login(credentials: User) {
    // Buscar en los correos autorizados
    const encontrado = usuarios.filter((usuario) => (usuario.correo == credentials.email));
    if (encontrado?.length> 0){
      
      const data ={ name:encontrado[0].nombre,
                    surname: encontrado[0].correo,
                    email: encontrado[0].correo,
                    password: 'valido' ,api_token:'valido' };
                    setAuth(data);
                    console.log('encontrado')
                    console.log(encontrado)                    
                    console.log(data)                    
                    return true; 
    } else {
      return false;
    }
    

/*
    return ApiService.post("login", credentials)
      .then(({ data }) => {
        setAuth(data);
      })
      .catch(({ response }) => {
        setError(response.data.errors);
          });
          */
  }


  function loginm8(credentials: User) {
    return ApiService.post("login", credentials)
      .then(({ data }) => {
        setAuth(data);
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function logout() {
    purgeAuth();
  }

  function register(credentials: User) {
    return ApiService.post("register", credentials)
      .then(({ data }) => {
        setAuth(data);
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function forgotPassword(email: string) {
    return ApiService.post("forgot_password", email)
      .then(() => {
        setError({});
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function verifyAuth() {
    if (JwtService.getToken()) {
      //--- Dummy - Corregir 
      console.log('Validar Token');
      // setAuth(data);
    } else {
      purgeAuth();
    }
  }


  function verifyAuthX() {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.post("verify_token", { api_token: JwtService.getToken() })
        .then(({ data }) => {
          setAuth(data);
        })
        .catch(({ response }) => {
          setError(response.data.errors);
          purgeAuth();
        });
    } else {
      purgeAuth();
    }
  }

  return {
    errors,
    user,
    isAuthenticated,
    login,
    logout,
    register,
    forgotPassword,
    verifyAuth,
  };
});
