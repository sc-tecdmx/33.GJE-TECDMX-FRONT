<template>
   <!-- Layout TECDMX-Public [ --> <div class="full horizontal"><!-- ]-- Layout TECDMX-Public -->
        <div>
            <!--  BEGIN NAVBAR  -->
            <Header></Header>
            <!--  END NAVBAR  -->

            <!--  BEGIN MAIN CONTAINER  -->
            <div class="main-container"
                id="container" 
                :class="[themeStore.state.is_show_sidebar 
                                ?  'sidebar-closed sbar-open'
                                : '', 
                                    themeStore.state.menu_style === 'collapsible-vertical'
                                         ? 'collapsible-vertical-mobile' : '']">
                <!--  BEGIN OVERLAY  -->
                <div class="overlay"
                            :class="{ show: !themeStore.state.is_show_sidebar }" 
                            @click="themeStore.toggleSideBar( !themeStore.state.is_show_sidebar)">
                </div>
                
                <div class="search-overlay" 
                            :class="{ show: themeStore.state.is_show_search }" 
                            @click="themeStore.toggleSearch( !themeStore.state.is_show_search)"></div>
                <!-- END OVERLAY -->
                
                <!--
                    TODO. Construir el menú del TECDMX
                <Sidebar></Sidebar>
                 -->
                <!--  BEGIN CONTENT AREA  -->
                <div id="content" class="main-content">
                    <router-view />
                    <!-- BEGIN FOOTER -->
                    <Footer></Footer>
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

<script setup  lang="ts">
    
    import Header           from "./public/header-public.vue";
    import Footer           from "./public/footer-public.vue";

    import AppSettings      from "@/components/layout/app-settings.te.vue";
    import useThemeStore    from "@/stores/vista/theme-store";
    import { useMeta }      from "../../composables/use-meta";
    
    import "../../assets/tecdmx/sass/app.scss";

    const themeStore = useThemeStore();
    useMeta({ title: "Gestión Judicial Elecctoral" });

    import { useBodyStore }     from "@/stores/vista/body-store";
    const bodyStore   = useBodyStore();
    bodyStore.addBodyClassname("body-tecdmx"); /* Thema Portal TECDMX */

    
</script>
<style>
/* Sobreescribir algunos estilos básicos*/
body {
    font-family: Tahoma,Geneva,sans-serif,Arial,Helvetica,sans-serif;
}
.main-content{
    background: white;
}
</style>
