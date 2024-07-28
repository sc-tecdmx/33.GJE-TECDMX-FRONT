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
                texto="Notificaciones"
                />
                <!--END TÍTULO 1-->
        
                <!--LAMADA A LAYOUTS-->
                <!--<notificacion-component/>-->
                <!--<notificacion-recibida/>-->
                <!--<notificacion-leidas/>-->
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
    import MenuLeft from '@/components/apps/jel/MenuLeft.vue';
    import BreadCrumbPrincipal from '@/components/apps/jel/BreadCrumbPrincipal.vue';
    import HeaderComponent from '@/components/apps/jel/HeaderComponent.vue';
    import T1Component from '@/components/layout/T1Component.vue';
    import EspaciadorBase from '@/components/common/EspaciadorBase.vue';
    import NotificacionComponent from '@/components/apps/jel/NotificacionComponent.vue';
    import NotificacionRecibida from '@/components/apps/jel/NotificacionRecibida.vue';
    import NotificacionLeidas from '@/components/apps/jel/NotificacionLeidas.vue';
    import PromocionesComponent from '@/components/apps/jel/PromocionesComponent.vue';

    const nuevoTitulo = ref('Notificaciones');

    
    const components = ref<any[]>([]);

    const loadComponents = () => {
    components.value = [
        { liClass: 'breadcrumb-item', rutaName: '/PanelPrincipal', aClass: 'text-primary text-sm tracking-wide ', texto: 'Panel principal', iconClass: 'bi bi-house-door-fill col', slash: '/', spanClass: 'span' },
        { liClass: 'breadcrumb-item', rutaName: '/PanelConsultas', aClass: 'text-primary fw-normal text-sm tracking-wide ', texto: 'Consulta tus notificaciones', iconClass: '', slash: '', spanClass: 'span' },
        // AGGREGAR MÁS COMPONENTES
    ];
    };

    onMounted(() => {
    loadComponents();
    });

</script>
