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
        texto="En contra de actos, resoluciones u omisiones"
        />
        <!--END TÍTULO 1-->

        <!--LLAMADA A LOS LAYOUTS-->
        <component 
        :is="componentMap[layouts[layoutIndex]]" 
        @cambiar-layout="siguienteLayout"  
        @regresar-layout="layoutAnterior"
        />
    </div>
    <!--CONTAINER-->

    </div>
    <!--END CONTAINER LAYOUT-->

    <!--ESPACIADOR-->
    <espaciador-base
    :ancho="100" 
    :alto="80"
    />
    <!--END ESPACIADOR-->

    <!--FOOTER-->
    <footer-app/>
    <!--END FOOTER-->

</template>

<script setup lang="ts">

    import LayoutFirma from '@/components/apps/jel/LayoutFirma.vue'
    import EspaciadorBase from '@/components/common/EspaciadorBase.vue'
    import BreadCrumbPrincipal from '@/components/apps/jel/BreadCrumbPrincipal.vue'
    import LayoutDemanda from '../../components/apps/jel/LayoutDemanda.vue'
    import LayoutPruebas from '../../components/apps/jel/LayoutPruebas.vue'
    import LayoutResponsables from '@/components/apps/jel/LayoutResponsables.vue'
    import HeaderComponent from '@/components/apps/jel/HeaderComponent.vue'
    import T1Component from '../../components/layout/T1Component.vue'
    import MenuLeft from '@/components/apps/jel/MenuLeft.vue'
    import FooterApp from '@/components/apps/jel/FooterApp.vue'
    import LayoutPromocion from '../../components/apps/jel/LayoutPromocion.vue'
    import { ref, onMounted } from 'vue';

    interface ComponentItem {
    liClass: string;
    rutaName: string;
    aClass: string;
    texto: string;
    iconClass?: string;
    slash?: string;
    spanClass?: string;
    }


    const components = ref<ComponentItem[]>([]);
 

    function loadComponents(): void {
    components.value = [
        { liClass: 'breadcrumb-item', rutaName: '/jel', aClass: 'text-primary fs-6', texto: 'Panel principal', iconClass: 'bi bi-house-door-fill col', slash: '/', spanClass: 'pe-2' },
        { liClass: 'breadcrumb-item', rutaName: '/jel/jel-demanda', aClass: 'text-primary fw-normal fs-6', texto: 'Presentar demanda', iconClass: '', slash: '', spanClass: 'span' },
        // MÁS..
    ];
    }

    onMounted(() => {
    loadComponents();
    });

    // ARRAY DE COMONENTES
    const layouts = ['LayoutPromocion', 'LayoutDemanda', 'LayoutResponsables', 'LayoutPruebas', 'LayoutFirma'];

    // MAPA DE COMPONENTES
    const componentMap = {
    LayoutPromocion,
    LayoutDemanda,
    LayoutResponsables,
    LayoutPruebas,
    LayoutFirma
    };

    //FUNCIÓN PARA EL SIGUIENTE LAYOUT
    const layoutIndex = ref<number>(0);

    function siguienteLayout() {
    layoutIndex.value = (layoutIndex.value + 1) % layouts.length;
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
