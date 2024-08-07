<template>
    <div>
        <!--  BEGIN NAVBAR  -->
        <Header></Header>
        <!--  END NAVBAR  -->

        <!--  BEGIN MAIN CONTAINER  -->
        <div
            class="main-container"
            id="container"
            :class="[themeStore.state.is_show_sidebar
        ? 'sidebar-closed sbar-open'
        : '',
      themeStore.state.menu_style === 'collapsible-vertical'
        ? 'collapsible-vertical-mobile' : '']">
            <!--  BEGIN OVERLAY  -->
            <div class="overlay" :class="[themeStore.state.is_show_sidebar
                ? 'sidebar-closed sbar-open'
                : '',
            themeStore.state.menu_style === 'collapsible-vertical'
                ? 'collapsible-vertical-mobile' : '']">
            </div>
        </div>
            <div class="search-overlay" :class="{ show: themeStore.state.is_show_search }"
            @click="themeStore.toggleSearch(!themeStore.state.is_show_search)">
        </div>
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
            <app-settings />
            <!-- END APP SETTING LAUNCHER -->
        </div>
   
</template>

<script setup>
    import Header from '@/components/layout/cork/Header.vue';
    import Sidebar from '@/components/layout/cork/Sidebar.vue';
    import Footer from '@/components/layout/cork/footer.vue';
    import appSettings from '@/components/layout/AppSettings.te.vue';
    import { useThemeStore } from '@/stores/theme-store'
    const themeStore = useThemeStore();
</script>
