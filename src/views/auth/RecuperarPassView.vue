<template>
    <!--CONTAINER LAYOUT-->
    <div class="container mt-3 ps-5 pe-5">

        <div class="d-flex justify-content-between">
        <div class="d-flex align-items-end">
            <!--LLAMAMOS EL LOGO-->
            <logo-component
            :ancho="150"
            />
        </div>
        <div class="col-form d-flex justify-content-end align-items-end p-2">
            <!--H1-->
            <t-1-component 
            texto="Registro de Juicio en Línea"
            />
            <!--END H1-->
        </div>
        </div>

        <!--CONTAINER-->
        <div class="container">

        <div class="layout border rounded shadow-sm">

        <!--CONTAINER-->
        <div class="container p-4 pt-0">

            <!--FORMULARIO-->
            <form class="mt-4 pb-5">
                <layout-pass/>

            </form>
                    <!--END FORMULARIO-->

                </div>
                <!--END CONTAINER-->

            </div>
            <!--ESPACIADOR-->
            <espaciador-base
            :ancho="100" 
            :alto="48"
            />
            <!--END ESPACIADOR-->

        </div>
        <!--END CONTAINER-->

   </div>
   <!--END CONTAINER LAYOUT-->
</template>

<script>

    import T1Component from '../../components/layout/T1Component.vue'
    import LayoutPass from '../../components/apps/jel/LayoutPass.vue'
    import LogoComponent from '../../components/layout/logos/LogoComponent.vue'
   export default {
       name: 'PanelPass',
       components: {
           T1Component,
           LogoComponent,
           LayoutPass
       },
       data() {
           return {
               nuevoTitulo: 'Recuperar contraseña',
           }
       }

   }
</script>
