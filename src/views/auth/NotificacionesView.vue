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
        <div class="container mt-5 ps-4 pe-4">
    
            <!--TÍTULO 1-->
            <t-1-component 
            texto="Notificaciones"
            class="ms-2"
            />
            <!--END TÍTULO 1-->
            
            <!--LLAMADA A LOS LAYOUTS-->
            <component 
            :is="componentMap[layouts[layoutIndex]]" 
            @cambiar-layout="siguienteLayout"  
            @regresar-layout="layoutAnterior"
            @cambiar="segundo"
            />
    
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

    <!--FOOTER-->
    <footer-app/>
    <!--END FOOTER-->
</template>

<script setup lang="ts">

    import { ref, onMounted } from 'vue';
    import MenuLeft from '@/components/apps/jel/MenuLeft.vue';
    import BreadCrumbPrincipal from '@/components/apps/jel/BreadCrumbPrincipal.vue';
    import HeaderComponent from '@/components/apps/jel/HeaderComponent.vue';
    import T1Component from '@/components/layout/T1Component.vue';
    import EspaciadorBase from '@/components/common/EspaciadorBase.vue';
    import NotificacionComponent from '@/components/apps/jel/NotificacionComponent.vue';
    import FooterApp from '@/components/apps/jel/FooterApp.vue';
    import NotificacionLeidas from '@/components/apps/jel/NotificacionLeidas.vue';
    import NotificacionRecibida from '@/components/apps/jel/NotificacionRecibida.vue';
    
    const components = ref<any[]>([]);

    const loadComponents = () => {
    components.value = [
        { liClass: 'breadcrumb-item', rutaName: '/jel', aClass: 'text-primary text-sm tracking-wide ', texto: 'Panel principal', iconClass: 'bi bi-house-door-fill col', slash: '/', spanClass: 'span' },
        { liClass: 'breadcrumb-item', rutaName: '/jel-notificacinones', aClass: 'text-primary fw-normal text-sm tracking-wide ', texto: 'Consulta tus notificaciones', iconClass: '', slash: '', spanClass: 'span' },
        // AGGREGAR MÁS COMPONENTES
    ];
    };

    onMounted(() => {
    loadComponents();
    });

    
    // ARRAY DE COMONENTES
    const layouts = ['NotificacionComponent','NotificacionLeidas', 'NotificacionRecibida'];

    // MAPA DE COMPONENTES
    const componentMap = {
    NotificacionComponent,
    NotificacionLeidas,
    NotificacionRecibida
    };

    //FUNCIÓN PARA EL SIGUIENTE LAYOUT
    const layoutIndex = ref<number>(0);

    function siguienteLayout() {
    layoutIndex.value = (layoutIndex.value + 1) % layouts.length;
    console.log('Layout cambiado a:', layouts[layoutIndex.value]);
    }

    function segundo() {
    layoutIndex.value = (layoutIndex.value + 2) % layouts.length;
    console.log('Layout cambiado a:', layouts[layoutIndex.value]);
    }

    //FUNCIÓN PARA EL LAYOUT ANTERIOR
    function layoutAnterior() {
    if (layoutIndex.value > 0) {
        layoutIndex.value -= 1;
        console.log('Regresando al layout:', layouts[layoutIndex.value]);
    }
    }



</script>
