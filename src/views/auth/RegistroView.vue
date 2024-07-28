<template>
    <!--CONTAINER LAYOUT-->
    <div class="container mt-3 ps-5 pe-5">

        <!--CONTAINER-->
        <div class="container position-relative">

            <div class="d-flex justify-content-between">
                <div class="d-flex align-items-end">
                    <!--LLAMAMOS EL LOGO-->
                    <logo-component
                    :ancho="130"
                    />
                </div>
                <div class="col-form d-flex justify-content-end align-items-end p-2">
                    <!--TÍTULO 1-->
                    <t-1-component 
                    texto="Registro de juicio en línea"
                    />
                    <!--END TÍTULO 1-->
                </div>
            </div>


            <!--LLAMAMOS LA SOMBRA-->
            <sombra-formulario 
            ancho="97"
            alto="100"
            />

            <div class="layout position-absolute w-100 bg-white">

                <!--CONTAINER-->
                <div class="container p-4 pt-0">

                    <!--FORMULARIO-->
                    <form class="mt-4 pb-5">

                        <layout-user/>                  
                    
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
<script setup lang="ts">

    import T1Component from '@/components/layout/T1Component.vue';
    import LogoComponent from '@/components/layout/logos/LogoComponent.vue';
    import LayoutUser from '@/components/apps/jel/LayoutUser.vue';
    import SombraFormulario from '@/components/common/SombraFormulario.vue';

</script>

<style lang="scss" scoped>

    @import "../../assets/tecdmx/sass/jel/_var.scss";

    .layout {
        top: 75px;
        left: -8px;
    }
</style>