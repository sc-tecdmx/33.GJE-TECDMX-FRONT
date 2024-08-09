<script setup>
import { useThemeStore } from '@/stores/theme-store'
import IconBuscar       from '@/assets/svg/IconBuscar.vue'
  import { ref } from "vue";
  import  useAuthStore  from '@/stores/borrar-cork-auth.store.js';
  import axios from "axios";


  const appLiveStore = useThemeStore();
  const authStore = useAuthStore();

  const busqueda = ref('');
  // TODO. IFR Conectar al usuario
  //OK const token = authStore.state.user.token;
  const token = 'TODO.Tokem';

  const envApp = import.meta.env.VITE_ENV_APP;

  function getAuthorizationHeadersForLaravel(token) {
  if(envApp=='prod'){
    return {
      headers: {
        "bearertoken": `${token}`
      }
    };
  }else{
    return {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    };
  }
}

  const busquedaGeneral = async(token, busqueda) => {
    let urlRestPass = import.meta.env.VITE_API_LARURL + "/api/busqueda-general?query=" + busqueda;
    try {
        const response = await axios.get(urlRestPass, getAuthorizationHeadersForLaravel(token));
        console.log(response.data);
        //alert(response.data.message);
          
      } catch (error) {
          //alert('Error en la busqueda')
          console.log('Error en busqueda:',error)
      }
    }
</script>
<template>
    <ul class="navbar-item flex-row ms-md-0 ms-3"> <!--PAO-->
        <li class="nav-item align-self-center search-animated" :class="{ 'show-search': appLiveStore.state.is_show_search }">
          <form class="form-inline search-full form-inline search" :class="{ 'input-focused': appLiveStore.state.is_show_search }">
          <div class="search-bar">
              <input
                type="text"
                class="form-control search-form-control ms-lg-auto"
                placeholder="Buscar..."
                v-model="busqueda"
                @change="busquedaGeneral(token, busqueda)"
              />
            </div>
          </form>
          <IconBuscar />
        </li>
      </ul>
</template>