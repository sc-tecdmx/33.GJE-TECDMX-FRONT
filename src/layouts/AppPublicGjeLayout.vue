<template>
    <!-- Layout TECDMX-Public [ -->
    <div class="full horizontal"><!-- ]-- Layout TECDMX-Public -->
        <div>
            <!--  BEGIN NAVBAR  -->
            <Header></Header>
            <!--  END NAVBAR  -->

            <!--  BEGIN MAIN CONTAINER  -->
            <div class="main-container" id="container" :class="[themeStore.state.is_show_sidebar
                ? 'sidebar-closed sbar-open'
                : '',
            themeStore.state.menu_style === 'collapsible-vertical'
                ? 'collapsible-vertical-mobile' : '']">
                <!--  BEGIN OVERLAY  -->
                <div class="overlay" :class="{ show: !themeStore.state.is_show_sidebar }"
                    @click="themeStore.toggleSideBar(!themeStore.state.is_show_sidebar)">
                </div>

                <div class="search-overlay" :class="{ show: themeStore.state.is_show_search }"
                    @click="themeStore.toggleSearch(!themeStore.state.is_show_search)"></div>
                <!-- END OVERLAY -->

                <!--
                     TODO. Construir el menú del TECDMX
                 <Sidebar></Sidebar>
                  -->
                <!--  BEGIN CONTENT AREA  -->
                <div id="content" class="main-content">
                    <br />
                    

                    <router-view />
                    
                   
                    <!-- BEGIN FOOTER -->

                    <!-- <Footer></Footer> -->

                    <!-- END FOOTER -->
                </div>
                <!--  END CONTENT AREA  -->
                <!-- BEGIN APP SETTING LAUNCHER -->
                <app-settings />
                <!-- END APP SETTING LAUNCHER -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Header from './public-gje-layout/components/HeaderPublic.vue'
import Footer from './public-gje-layout/components/FooterPublic.vue'

import AppSettings from '@/components/layout/AppSettings.te.vue'
import { useThemeStore } from '@/stores/theme-store'
import { useBodyStore } from "@/stores/body-store";
import { useHead } from '@unhead/vue';
import "@/assets/tecdmx/sass/app.scss";

/***
 * 
 */
import { msalInstance, state } from '@/config/auth-azure-config'
import { useAuth } from '@/core/services/AuthAzureService'

const { isAuthenticated, login, logout, handleRedirect, registerAuthorizationHeaderInterceptor } = useAuth()
/*
 * 
 ***/
const themeStore = useThemeStore();
useHead({ title: "Gestión Judicial Elecctoral" });


const bodyStore = useBodyStore();
bodyStore.addBodyClassname("body-tecdmx"); /* Thema Portal TECDMX */

/***
 * 
 */
 const handleLogin = async () => {
  await login()
}
const handleLogout = () => {
  logout()
}

 const initialize = async () => {
  try {
    console.log('initialize()')
    await msalInstance.initialize()
    registerAuthorizationHeaderInterceptor() // Call the initialize function
  } catch (error) {
    console.log('Initialization error', error)
  }
}
 onMounted(async () => {
  await initialize()
  await handleRedirect()
})
/**
 * 
 ***/
</script>
<style>
/* Sobreescribir algunos estilos básicos*/
body {
    font-family: Tahoma, Geneva, sans-serif, Arial, Helvetica, sans-serif;
}

.main-content {
    background: white;
}
</style>