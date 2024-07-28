<template>
    <div>
        <!--  BEGIN NAVBAR  -->
        <div class="header-container fixed-top">
            <header class="header navbar navbar-expand-sm">
	        <!-- Logotipo institucional. -->
	        <BrandLogo />
	        <!-- ./Logotipo institucional. -->
                <div class="d-none horizontal-menu">
                    <a href="javascript:void(0);" class="sidebarCollapse" data-placement="bottom"
                         @click="themeStore.toggleSideBar(!themeStore.state.is_show_sidebar)">
                        <IconFeatherMenu />
                    </a>
                </div>
            
                <!-- Sustituye a Buscar -->
                <div class="navbar-item flex-row ms-md-4">
                    <div class="d-flex flex-column bd-highlight">
                    <h2>Seguimiento de Asuntos Relevantes</h2>
                    <h6>Unidad de Servicios Informáticos</h6>
                    </div>
                </div>
                <!--
                    <Buscar /> 
                    <ul class="navbar-item flex-row ms-md-0 ms-auto">
                    <li class="nav-item align-self-center search-animated" :class="{ 'show-search': themeStore.state.is_show_search }">
                        <IconFeatherSearch />
                        <form class="form-inline search-full form-inline search" :class="{ 'input-focused': themeStore.state.is_show_search }">
                            <div class="search-bar">
                                <input type="text" class="form-control search-form-control ms-lg-auto" placeholder="Buscar..." />
                            </div>
                        </form>
                    </li>
                </ul> -->

   <!-- .\ Herramientas encabezado -->
                <div class="navbar-item flex-row ms-md-auto">
                    <div class="dark-mode d-flex align-items-center">
                        <a v-if="themeStore.state.dark_mode == 'light'" href="javascript:;" class="d-flex align-items-center" @click="toggleMode('dark')">
                            <IconFeatherSun />
                            <span class="ms-2">Claro</span>
                        </a>
                        <a v-if="themeStore.state.dark_mode == 'dark'" href="javascript:;" class="d-flex align-items-center" @click="toggleMode('system')">
                            <IconFeatherMoon />
                            <span class="ms-2">Oscuro</span>
                        </a>
                        <a v-if="themeStore.state.dark_mode == 'system'" href="javascript:;" class="d-flex align-items-center" @click="toggleMode('light')">
                            <IconFeatherAirplay />
                            <span class="ms-2">System</span>
                        </a>
                    </div>

                    <!-- IFR. SE QUITÓ LA SECCIÓN DE IDIOMA-->

                    <!-- IFR. .\Mensajes de EMAIL -->
                        <!-- <AlertasMail /> -->
                    <!-- IFR. ./Mensajes de EMAIL -->

                    <!-- IFR. .\Notificaciones -->
                        <AlertasNotificaciones />
                    <!-- IFR. ./Notificaciones -->
                    <Perfil />

                    
                </div>
            </header>
        </div>
        <!--  END NAVBAR  -->
        <!--  BEGIN NAVBAR  -->
        <div class="sub-header-container">
            <header class="header navbar navbar-expand-sm">
                <a href="javascript:void(0);" class="sidebarCollapse" 
                    data-placement="bottom" @click="themeStore.toggleSideBar(!themeStore.state.is_show_sidebar)">
                    <i class="bi bi-grid-3x3-gap-fill "></i>
                </a>

                <!-- Portal vue/Teleport for Breadcrumb -->
                <div id="breadcrumb" class="vue-portal-target"></div>
            </header>
        </div>
        <!--  END NAVBAR  -->
        <!--  BEGIN TOPBAR  -->
        <div class="topbar-nav header navbar" role="banner">
            <MenuTopBar />
        </div>
        <!--  END TOPBAR  -->
    </div>
</template>

<script setup>
    import { onMounted, ref, reactive } from 'vue';
    import  useThemeStore from "@/stores/theme-store";
    

        
        
        import AlertasNotificaciones from '@/components/layout/AlertasNotificaciones.vue';
      ///  import Notificaciones   from '@/layouts/app/components/Notificaciones.vue'
        import Perfil           from '@/components/layout/Perfil.vue'

        import BrandLogo        from '@/components/layout/BrandLogo.vue'
        import IconHamburger    from '@/assets/svg/IconHamburger.vue'
        
        import IconFeatherMenu from '@/assets/svg/IconFeatherMenu.vue';
        import IconFeatherSearch from '@/assets/svg/IconFeatherSearch.vue';
        import IconFeatherSun from '@/assets/svg//IconFeatherSun.vue';
        import IconFeatherMoon from '@/assets/svg//IconFeatherMoon.vue';
        import IconFeatherAirplay from '@/assets/svg//IconFeatherAirplay.vue';
        import IconFeatherMail from '@/assets/svg//IconFeatherMail.vue';
        import IconFeatherBell from '@/assets/svg//IconFeatherBell.vue';
        import IconFeatherServer    from '@/assets/svg//IconFeatherServer.vue';
        import IconFeatherX from '@/assets/svg//IconFeatherX.vue';
        import MenuTopBar from '@/components/layout/MenuTopBar.vue';
    
    const themeStore = useThemeStore();
    const isMobile = ref(false);
    
    const selectedLang = ref(null);
    const countryList = ref(themeStore.state.countryList);

    const checkWindowSize = () => {
        isMobile.value = window.innerWidth <= 991;
    };

    onMounted(() => {
        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);
        toggleMode(); // IFR. DUDA
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
