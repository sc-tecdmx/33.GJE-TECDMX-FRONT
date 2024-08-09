<script setup>
  import { useBodyStore } from "@/stores/body-store";
  import IconHamburger    from '@/assets/svg/IconHamburger.vue'
  import BrandLogo        from '@/components/layout/cork/BrandLogo.vue'
  import Buscar           from '@/components/layout/cork/Buscar.vue'
  import Comentarios      from '@/components/layout/cork/Comentarios.vue'
  import Notificaciones   from '@/components/layout/cork/Notificaciones.vue'
  import Perfil           from '@/components/layout/cork/Perfil.vue'
import { onBeforeUnmount, onMounted, ref } from "vue";
  
  const appLiveStore = useBodyStore();
  const isMobile = ref(false);

  const checkWindowSize = () => {
        isMobile.value = window.innerWidth <= 991;
    };
  
    onMounted(() => {
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    });

    onBeforeUnmount(() => {
    window.removeEventListener('resize', checkWindowSize);
    });
</script>
<template>
  <!-- BARRA DE NAVEGACIÓN-->
  <div class="header-container fixed-top">
    <header class="header navbar navbar-expand-sm">
      <!-- Logotipo institucional. -->
      <BrandLogo />
      <!-- ./Logotipo institucional. -->

     <!-- Buscar -->
      <Buscar/>
      <!-- ./Buscar -->

      <!-- Herramientas encabezado -->
      <div class="navbar-item flex-row ms-md-auto">
        <!-- Cortina comentarios -->
       <!-- <Comentarios /> -->
        <!-- ./Comentarios -->
        <!-- Notificaciones -->
         <!-- IFR: TODO. Corrección-->
        <!-- 
         <Notificaciones 
          url="http://localhost/j/notificaciones.php"
        />
        -->
        <!-- ./Notificaciones-->
        <!-- Profile-->
        <Perfil />
        <!-- ./Profile-->

        <!-- Hamburger -->
       <ul class="navbar-item flex-row ms-md-4 ms-auto me-3" :class="{ 'd-none': !isMobile }">
        <!-- Logotipo institucional. -->
        <li class="nav-item theme-logo">
            <a
              href="javascript:void(0);"
              class="sidebarCollapse"
              data-placement="bottom"
              @click="appLiveStore.toggleSideBar( !appLiveStore.state.is_show_sidebar)"
            >
              <IconHamburger/>
            </a>
        </li>
      </ul> 
      </div>
    </header>
  </div>
</template>
