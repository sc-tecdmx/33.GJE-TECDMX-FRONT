<template>
    <!--HEADER COMPONENT-->
    <header-component 
     :data="nuevoTitulo"
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
            texto="Promociones registradas"
            />
            <!--END TÍTULO 1-->
    
            <!--LAMADA A LAYOUTS-->
            <promociones-component/>
    
        </div>
        <!--CONTAINER-->
 
     </div>
     <!--END CONTAINER LAYOUT-->
 
     <!--ESPACIADOR-->
     <espaciador-base
     :ancho="100" 
     :alto="48"
     />
     <!--END ESPACIADOR-->
 </template>
 
 <script setup lang="ts">

    import { ref, onMounted } from 'vue';
    import MenuLeft from '../../components/apps/jel/MenuLeft.vue';
    import HeaderComponent from '../../components/apps/jel/HeaderComponent.vue';
    import EspaciadorBase from '../../components/common/EspaciadorBase.vue';
    import BreadCrumbPrincipal from '../../components/apps/jel/BreadCrumbPrincipal.vue';
    import T1Component from '../../components/layout/T1Component.vue';
    import PromocionesComponent from '@/components/apps/jel/PromocionesComponent.vue';

    // DEFINIR TIPO DE DATOS
    interface ComponentData {
    liClass: string;
    rutaName: string;
    aClass: string;
    texto: string;
    iconClass: string;
    slash: string;
    spanClass: string;
    }

    const nuevoTitulo = ref<string>('Promociones registradas');
    const components = ref<ComponentData[]>([]);

    // FUNCIÓN PARA CREAR COMPONENTES BERADCRUMBS
    function loadComponents() {
    components.value = [
        { liClass: 'breadcrumb-item', rutaName: '/PanelPrincipal', aClass: 'text-primary fs-6', texto: 'Panel principal', iconClass: 'bi bi-house-door-fill col', slash: '/', spanClass: 'span' },
        { liClass: 'breadcrumb-item', rutaName: '/PromocionesComponent', aClass: 'text-primary fw-normal fs-6', texto: 'Promociones registradas', iconClass: '', slash: '', spanClass: 'span' },
        // MÁS...
    ];
    }

    // CARGAR LOS COMPOENTES AL CARGAR LA TABLA
    onMounted(() => {
    loadComponents();
    });
 </script>

