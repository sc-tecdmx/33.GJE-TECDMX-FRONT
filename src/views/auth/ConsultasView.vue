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
            texto="Consulta tus demandas"
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
     :alto="48"
     />
     <!--END ESPACIADOR-->
 </template>
 
 <script>

    import MenuLeft from '../../components/apps/jel/MenuLeft.vue'
    import HeaderComponent from '../../components/apps/jel/HeaderComponent.vue'
    import EspaciadorBase from '../../components/common/EspaciadorBase.vue'
    import BreadCrumbPrincipal from '../../components/apps/jel/BreadCrumbPrincipal.vue'
    import T1Component from '../../components/layout/T1Component.vue'
    import LayoutConsulta from '../../components/apps/jel/LayoutConsulta.vue'

     export default {
         name: 'PanelConsultas', 
         components: {
             MenuLeft,
             HeaderComponent,
             BreadCrumbPrincipal,
             T1Component,
             EspaciadorBase,
             LayoutConsulta
         },
         data() {
         return {
             nuevoTitulo: 'Consultas',
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
                   { liClass: 'breadcrumb-item', rutaName: '/PanelPrincipal', aClass: 'text-primary fs-6', texto: 'Panel principal', iconClass: 'bi bi-house-door-fill col', slash: '/', spanClass: 'span' },
                   { liClass: 'breadcrumb-item', rutaName: '/PanelConsultas', aClass: 'text-primary fw-normal fs-6', texto: 'Consulta tus demandas', iconClass: '', slash: '', spanClass: 'span' },
                   // Agregar más componentes si es necesario
                 ];
              }
         }
     }
 </script>

 <style lang="scss" scoped>

 
 </style>
 
