import { defineStore } from "pinia";
import { ref } from "vue";
import ApiService from "@/services/ApiService";
import JwtService from "@/services/JwtService";
///--------------
import type { AxiosResponse } from "axios";
import axios from "axios";
import VueAxios from "vue-axios";

export interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
  api_token: string;
  token: string;
}

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
    //--- IFR. TODO. Falta que te mueva a otra página
  }

  function login(credentials: User) {
    return ApiService.post("login", credentials)
      .then(({ data }) => {
        console.log('ApiService.post(login)')
        console.log(data)
        setAuth(data);
      })
      .catch(({ response }) => {
        console.log('ApiService.post(error)-')
        setError(response.data.errors);
      });
  }

  function logout() {
    console.log('logout - TODO. Reenviar a index' )

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
    console.log('--verifyAuth ')
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
  //-----------------
  const getMenuUser = async(token: any) => {
    let urlMenuUser = import.meta.env.VITE_API_SEGURL + "/api/seguridad/get-menu";
    //-- http://52.206.121.172:8080/api/seguridad/get-menu
    let headers = {headers:{"Authorization": `Bearer ${token}`}};
          try {
            const response = await axios.get(urlMenuUser, headers);
            //console.log(response);
            return response;
          } catch (error) {
              console.log('Error al cargar menú:',error)
          }
  }
  const getUserInfo = async(id:any,token : any) => {
    let urlUserInfo = import.meta.env.VITE_API_SEGURL + import.meta.env.VITE_GET_USERINFO + id;
    let headers = {headers:{"Authorization": `Bearer ${token}`}};
          try {
            const response = await axios.get(urlUserInfo, headers);
            //console.log(response);
            return response.data.data;
          } catch (error) {
              console.log('Error al cargar menú:',error)
          }
  }
  //-----------------

  return {
    errors,
    user,
    isAuthenticated,
    login,
    logout,
    register,
    forgotPassword,
    verifyAuth,
    //--------
    getMenuUser,
    getUserInfo
  };
});

export default useAuthStore;