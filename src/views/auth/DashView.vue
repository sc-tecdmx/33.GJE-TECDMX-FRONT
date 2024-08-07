<template>

    <!--HEADER COMPONENT-->
    <header-component 
    parrafo="Sistema de Juicio en Línea"
    />
    <!--END HEADER COMPONENT-->

    <!--BREADCRUMS-->
    <bread-crumb-principal
    :dynamicComponents="components"
    />
    <!--END BREADCRUMS-->

    <!--MENÚ LEFT-->
    <menu-left />
    <!--END MENÚ LEFT-->

    <!--CONTAINER LAYOUT-->
    <div class="container mt-5 pt-4 ps-5">

        <!--CONTAINER-->
        <div class="container mt-5">

              <!--TÍTULO 1-->
              <t-1-component 
              texto="Mis demandas"
              />
              <!--END TÍTULO 1-->

              <!--LAYOUT PRINCIPAL-->
              <layout-principal />
              <!--END LAYOUT PRINCIPAL-->

        </div>
        <!--CONTAINER-->

    </div>
    <!--END CONTAINER LAYOUT-->

    <!--FOOTER-->
    <footer-app/>
    <!--END FOOTER-->

</template>

<script setup lang="ts">
 
    import T1Component from '../../components/layout/T1Component.vue'
    import HeaderComponent from '../../components/apps/jel/HeaderComponent.vue'
    import BreadCrumbPrincipal from '../../components/apps/jel/BreadCrumbPrincipal.vue'
    import LayoutPrincipal from '../../components/apps/jel/LayoutPrincipal.vue'
    import MenuLeft from '../../components/apps/jel/MenuLeft.vue'
    import FooterApp from '@/components/apps/jel/FooterApp.vue'
    import { ref, onMounted } from 'vue';


    // Definir la interfaz para un componente
    interface ComponentItem {
      liClass: string;
      rutaName: string;
      aClass: string;
      texto: string;
      iconClass: string;
      slash: string;
      spanClass: string;
    }

    // Datos reactivos
    //const nuevoTitulo = ref<string>('Sistema de Juicio en Línea');
    const components = ref<ComponentItem[]>([]);

    // Función para cargar los componentes
    function loadComponents() {
      components.value = [
        {
          liClass: 'breadcrumb-item',
          rutaName: 'jel',
          aClass: 'text-primary fw-normal fs-6',
          texto: 'Panel principal',
          iconClass: 'bi bi-house-door-fill col',
          slash: '/',
          spanClass: 'span'
        },
        // Agregar más componentes si es necesario
      ];
    }

    // Llamar a loadComponents al montar el componente
    onMounted(() => {
      loadComponents();
    });
</script>
