<template>
    <div :class="[themeStore.getLayoutStyle(), themeStore.getMenuStyle()]">
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
                
                <Sidebar></Sidebar>
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

<script setup>
    import { onMounted, computed , nextTick} from "vue";
    import Header           from "./components/header-public.vue";
    import Footer           from "./components/footer-public.vue";

    import AppSettings from "./app-settings.vue";
    
    import useThemeStore    from "@/stores/vista/theme-store";
    import { useMeta }      from "../../composables/use-meta";
    
    import "../../assets/tecdmx/sass/app.scss";
    const themeStore = useThemeStore();
    useMeta({ title: "Sistema de Gestión Documental" });
    
</script>
