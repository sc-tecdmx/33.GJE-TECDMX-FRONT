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
        texto="Registro de juicio en línea"
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

</script>