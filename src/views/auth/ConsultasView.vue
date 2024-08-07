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
        <div class="container mt-5 ">
    
            <!--TÍTULO 1-->
            <t-1-component 
            texto="Consulta tus demandas"
            class="ms-2"
            />
            <!--END TÍTULO 1-->
    
            <!--LAMADA A LAYOUTS-->
            <layout-consulta/>
    
        </div>
        <!--CONTAINER-->
 
     </div>
     <!--END CONTAINER LAYOUT-->
 
     <!--ESPACIADOR-->
     <espaciador-base
     :ancho="100" 
     :alto="70"
     />
     <!--END ESPACIADOR-->

    <!--FOOTER-->
    <footer-app/>
    <!--END FOOTER-->
 </template>
 
 <script setup lang="ts">

    import { ref, onMounted } from 'vue';
    import MenuLeft from '../../components/apps/jel/MenuLeft.vue';
    import HeaderComponent from '../../components/apps/jel/HeaderComponent.vue';
    import EspaciadorBase from '../../components/common/EspaciadorBase.vue';
    import BreadCrumbPrincipal from '../../components/apps/jel/BreadCrumbPrincipal.vue';
    import T1Component from '../../components/layout/T1Component.vue';
    import LayoutConsulta from '../../components/apps/jel/LayoutConsulta.vue';
    import FooterApp from '@/components/apps/jel/FooterApp.vue';

    // DEFINIR EL TIPO DE DATOS
    interface ComponentData {
    liClass: string;
    rutaName: string;
    aClass: string;
    texto: string;
    iconClass: string;
    slash: string;
    spanClass: string;
    }

    // DEFINIR DATOS DEL COMPONENTE
    const components = ref<ComponentData[]>([]);

    // FUNCIÓN PARA CARGAR LOS COMPONENTES
    function loadComponents() {
    components.value = [
        { liClass: 'breadcrumb-item', rutaName: '/jel', aClass: 'text-primary fs-6', texto: 'Panel principal', iconClass: 'bi bi-house-door-fill col', slash: '/', spanClass: 'span' },
        { liClass: 'breadcrumb-item', rutaName: '/jel-consultas', aClass: 'text-primary fw-normal fs-6', texto: 'Consulta tus demandas', iconClass: '', slash: '', spanClass: 'span' },
        // MÁS...
    ];
    }

    // CRAGAR COMPONENTES EN LA TABLA
    onMounted(() => {
    loadComponents();
    });
 </script>


