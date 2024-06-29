<template>
    <div>
        <!--  BEGIN NAVBAR  -->
        <Header></Header>
        <!--  END NAVBAR  -->

        <!--  BEGIN MAIN CONTAINER  -->
        <div class="main-container" id="container" :class="[themeStore.state.is_show_sidebar ? 'sidebar-closed sbar-open' : '', themeStore.state.menu_style === 'collapsible-vertical' ? 'collapsible-vertical-mobile' : '']">
            <!--  BEGIN OVERLAY  -->
            <div class="overlay" :class="{ show: !themeStore.state.is_show_sidebar }" @click="themeStore.toggleSideBar( !themeStore.state.is_show_sidebar)"></div>
            <div class="search-overlay" :class="{ show: themeStore.state.is_show_search }" @click="themeStore.toggleSearch( !themeStore.state.is_show_search)"></div>
            <!-- END OVERLAY -->

            <!--  BEGIN SIDEBAR  -->
            <Sidebar></Sidebar>

            <!--  END SIDEBAR  -->

            <!--  BEGIN CONTENT AREA  -->
            <div id="content" class="main-content">
                <router-view />

                <!-- BEGIN FOOTER -->
                <Footer></Footer>
                <!-- END FOOTER -->
            </div>
            <!--  END CONTENT AREA  -->

            <!-- BEGIN APP SETTING LAUNCHER -->
    
            <!-- END APP SETTING LAUNCHER -->
        </div>
    </div>
</template>

<script setup lang="ts">
    import Header from "./components/header.vue";
    import Sidebar from "./components/sidebar.te.vue";
    import Footer from "./components/footer.vue";
    
    import  useThemeStore from "@/stores/vista/theme-store";
    const themeStore = useThemeStore();
    
</script>./app-settings.te.vue
