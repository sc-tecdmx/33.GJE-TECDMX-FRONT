<template>
    <div>
        <!--  BEGIN NAVBAR  -->
        <div class="header-container fixed-top">
            <header class="header navbar navbar-expand-sm">
                <!-- Logotipo institucional. -->
                <div>
        <div v-if="state.isAuthenticated">
          <div>Bienvenido, {{ state.user.name }}</div>
          <button @click="handleLogin">Salir</button>
        </div>
        <div v-else>
          <button @click="handleLogin">Ingresar</button>
        </div>
    </div>
                <div class="navbar-item flex-row ms-md-auto">
                    <BrandLogoPortal />
                </div>
                <!-- ./Logotipo institucional. -->
                <!--  Íconos de redes sociales -->

                <div class="navbar-item flex-row ms-md-auto">
                    <div class="dark-mode d-flex align-items-center">
                     

                        <a href="https://twitter.com/tecdmx" class="social-link" target="_blank">
                            <span class="sr-only">Twitter</span>
                            <!--<em class="fab fa-twitter-square" aria-hidden="true"></em>-->
                            <img src="https://www.tecdmx.org.mx/wp-content/uploads/2023/11/x.png" alt=""
                                class="img-tw-x">
                        </a>
                        <a href="https://www.facebook.com/TECDMX/" class="social-link" target="_blank">
                            <span class="sr-only">Facebook</span><em class="fab fa-facebook-square"
                                aria-hidden="true"></em>
                        </a>
                        <a href="https://www.youtube.com/watch?v=W4IwF-0Kgow" class="social-link" target="_blank">
                            <span class="sr-only">YouTube</span><em class="fab fa-youtube-square"
                                aria-hidden="true"></em></a>
                    </div>
                    <div class="dark-mode d-flex align-items-center">
   
                        <a href="/gje/admin/" class="extras-link" target="_blank">
                            <span class="sr-only">Ingresar</span><em class="fa-solid fa-user"
                                aria-hidden="true"></em></a>
                    </div>
                    <div class="dark-mode d-flex align-items-center"></div>
                </div>
            </header>

            <!--  BEGIN TOPBAR MENU  -->
            <div class="topbar-nav header navbar" role="banner">
                <MenuTopBarSa />
            </div>
            <!--  END TOPBAR  MENU -->
        </div>
        <!--  END NAVBAR  -->


    </div>
</template>
<style scoped>
/*
    IFR. Estilos obtenidos directamente del portal del TECDMX
*/
@media(min-width:992px) {
    .horizontal .topbar-nav.header {
        height: 60px;
    }
}

.horizontal .topbar-nav.header {
    height: 60px;
}

.social-link {
    color: white;
    font-size: 30px;
    margin-right: 14px;
    text-align: center;
    text-decoration: none;
    height: 27px;
}

.extras-link {
    color: #ff0000;
    font-size: 24px;
    margin-right: 40px;
    margin-right: 10px;
    text-align: center;
    text-decoration: none;
    height: 22px;
}

.sr-only {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.img-tw-x {
    width: 27px;
    position: relative;
    top: -3px;
}
</style>
<script setup>
import { onMounted, ref, reactive } from 'vue';
import useThemeStore from "@/stores/vista/theme-store";

import AlertasNotificaciones from '@/layouts/app/components/AlertasNotificaciones.vue';
///  import Notificaciones   from '@/layouts/app/components/Notificaciones.vue'
import Perfil from '@/layouts/app/components/Perfil.vue'

import BrandLogoPortal from '@/components/tecdmx/BrandLogoPortal.vue'
import IconHamburger from '@/assets/svg/IconHamburger.vue'

import IconFeatherMenu from '@/assets/svg/IconFeatherMenu.vue';
import IconFeatherSearch from '@/assets/svg/IconFeatherSearch.vue';
import IconFeatherSun from '@/assets/svg//IconFeatherSun.vue';
import IconFeatherMoon from '@/assets/svg//IconFeatherMoon.vue';
import IconFeatherAirplay from '@/assets/svg//IconFeatherAirplay.vue';
import IconFeatherMail from '@/assets/svg//IconFeatherMail.vue';
import IconFeatherBell from '@/assets/svg//IconFeatherBell.vue';
import IconFeatherServer from '@/assets/svg//IconFeatherServer.vue';
import IconFeatherX from '@/assets/svg//IconFeatherX.vue';
import MenuTopBarSa from '@/layouts/gje/public/MenuTopBarGjePublic.vue';

/***
 *      Autenticación:
 */

 import { useAuth} from '@/services/AuthAzure.ts'
 import { myMSALObj, state } from "../../../auth-azure-config"

 /*
  * 
  ***/

const themeStore = useThemeStore();
const isMobile = ref(false);

const selectedLang = ref(null);
const countryList = ref(themeStore.state.countryList);

const checkWindowSize = () => {
    isMobile.value = window.innerWidth <= 991;
};

/* Autenticación */

const { login, logout, handleRedirect } = useAuth();

    const handleLogin = async () =>  {
      await login();
    }

const handleLogout = () => {
      logout();
    }

const initialize = async () => {
      try {
        await myMSALObj.initialize();
      }   catch (error ) {
        console.log("Error de inicialización", error)
      }
}
/* Autenticación */

onMounted( async () => {
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    toggleMode(); // IFR. DUDA
    /* Autenticaciónm*/
    await initialize();
    await handleRedirect();
    /* Autenticación */
});

/*
    onMounted(() => {
        toggleMode();
    });
*/
const toggleMode = (mode) => {
    window.$appSetting.toggleMode(mode);
};

const changeLanguage = (item) => {
    selectedLang.value = item;
};
</script>
