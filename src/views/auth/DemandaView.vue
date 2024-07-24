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
    <div class="container mt-5">

        <!--TÍTULO 1-->
        <t-1-component 
        texto="En contra de actos, resoluciones u omisiones"
        />
        <!--END TÍTULO 1-->

    <component :is="layoutActual" @cambiarLayout="cambiarLayout"></component>
        <!--<layout-firma />-->

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

<script>


import LayoutFirma from '@/components/apps/jel/LayoutFirma.vue'
import EspaciadorBase from '@/components/common/EspaciadorBase.vue'
import BreadCrumbPrincipal from '@/components/apps/jel/BreadCrumbPrincipal.vue'

import LayoutDemanda from '../../components/apps/jel/LayoutDemanda.vue'


import LayoutPruebas from '../../components/apps/jel/LayoutPruebas.vue'
import LayoutRegDos from '../../components/apps/jel/LayoutRegDos.vue'

import LayoutResponsables from '@/components/apps/jel/LayoutResponsables.vue'
import HeaderComponent from '@/components/apps/jel/HeaderComponent.vue'

import MenuLayout from '../../components/apps/jel/MenuLayout.vue'
import T1Component from '../../components/layout/T1Component.vue'

import MenuLeft from '@/components/apps/jel/MenuLeft.vue'
import LayoutPromocion from '../../components/apps/jel/LayoutPromocion.vue'
    export default {
        name: 'DemandaView',
        components: {
            MenuLeft,
            HeaderComponent,
            BreadCrumbPrincipal,
            T1Component,
            LayoutPromocion,
            EspaciadorBase,
            LayoutDemanda,
            LayoutResponsables,
            LayoutPruebas,
            LayoutFirma,
            MenuLayout
        },
        data() {
        return {
            nuevoTitulo: 'Demandas',
            layoutActual: 'LayoutPromocion', // ESTABLECE EL LAYOUT INICIAL
            components: []
            }
        },
        created() {
                this.loadComponents();
            },
        methods: {
                cambiarLayout(layout) {
                this.layoutActual = layout;
                },
                loadComponents() {
                this.components = [
                  { liClass: 'breadcrumb-item', rutaName: '/PanelPrincipal', aClass: 'text-primary fs-6', texto: 'Panel principal', iconClass: 'bi bi-house-door-fill col', slash: '/', spanClass: 'pe-2' },
                  { liClass: 'breadcrumb-item', rutaName: '/PanelPD', aClass: 'text-primary fw-normal fs-6', texto: 'Presentar demanda', iconClass: '', slash: '', spanClass: 'span' },
                  // Agregar más componentes si es necesario
                ];
             }
        }
    }
</script>

