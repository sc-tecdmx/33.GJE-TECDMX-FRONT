<template>
    <!-- BARRA DE NAVEGACIÓN-->
    <div class="header-container fixed-top">
      <header class="header navbar navbar-expand-sm">
        <!-- Logotipo institucional. -->
        <BrandLogo />
        <!-- ./Logotipo institucional. -->
        
  
        
          <div class="navbar-item flex-row ms-md-4">
            <div class="d-flex flex-column bd-highlight">
              <h2>Sistema de Gestión Documental</h2>
              <h6>Unidad de Servicios Informáticos</h6>
            </div>
          </div>
        
       <!-- Buscar -->
        <!-- <Buscar/>-->
        <!-- ./Buscar -->
  
        <!-- Herramientas encabezado -->
        <div class="navbar-item flex-row ms-md-auto">
          <!-- Cortina comentarios -->
         <Comentarios />
          <!-- ./Comentarios -->
          <!-- Notificaciones -->
          <Notificaciones />
          <!-- ./Notificaciones-->
          <!-- Profile-->
          <Perfil />
          <!-- ./Profile-->
        </div>
      </header>
    </div>
  <!--  BEGIN NAVBAR  -->
  <div class="sub-header-container">
            <header class="header navbar navbar-expand-sm">
                <a href="javascript:void(0);" class="sidebarCollapse" data-placement="bottom" @click="themeStore.toggleSideBar( !themeStore.state.is_show_sidebar)">
                  <i class="bi bi-grid-3x3-gap-fill "></i>
                </a>
 
                <!-- Portal vue/Teleport for Breadcrumb -->
                <div id="breadcrumb" class="vue-portal-target"> 
                  <h6 class="text-gray-900 fw-bold  my-0 ms-2">
                    <!-- IFR. DEBUG Correspondencia de entrada --></h6>
                </div>
            </header>
        </div>

  </template>

<script setup lang="ts">
    import { onMounted, ref, reactive } from 'vue';
    import { useThemeStore } from "@/stores/vista/cork-theme";

    import IconHamburger    from '@/assets/svg/IconHamburger.vue'
    import BrandLogo        from '@/components/tecdmx/BrandLogo.vue'
    import Buscar           from '@/layouts/app/components/Buscar.vue'
    import Comentarios      from '@/layouts/app/components/Comentarios.vue'
    import Notificaciones   from '@/layouts/app/components/Notificaciones.vue'
    import Perfil           from '@/layouts/app/components/Perfil.vue'

    
    const themeStore  = useThemeStore();
    const isMobile = ref(false);

    const checkWindowSize = () => {
        isMobile.value = window.innerWidth <= 991;
    };

    onMounted(() => {
        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);
    });

   
</script>
