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

              <!--H1-->
              <t-1-component 
              texto="Mis demandas"
              />
              <!--END H1-->

              <!--LAYOUT PRINCIPAL-->
              <layout-principal />
              <!--END LAYOUT PRINCIPAL-->

        </div>
        <!--CONTAINER-->

    </div>
    <!--END CONTAINER LAYOUT-->

</template>

<script>
 

    import T1Component from '../../components/layout/T1Component.vue'
    import HeaderComponent from '../../components/apps/jel/HeaderComponent.vue'
    import BreadCrumbPrincipal from '../../components/apps/jel/BreadCrumbPrincipal.vue'
    import LayoutPrincipal from '../../components/apps/jel/LayoutPrincipal.vue'
    import MenuLeft from '../../components/apps/jel/MenuLeft.vue'

    export default {
        name: 'PanelPrincipal',
        components: {
            MenuLeft,
            HeaderComponent,
            T1Component,
            LayoutPrincipal,
            BreadCrumbPrincipal
        },
        data() {
            return {
                nuevoTitulo: 'Panel principal',
                components: []
            }
        },
        created() {
            this.loadComponents();
        },
        methods: {
            loadComponents() {
                this.components = [
                  { liClass: 'breadcrumb-item', rutaName: '/', aClass: 'text-primary fw-normal', texto: 'Panel principal', iconClass: 'bi bi-house-door-fill col', slash: '/', spanClass: 'span' },
                  // Agregar más componentes si es necesario
                ];
            }
        }
    }
</script>
