<template>
    
    <!--FOOTER-->
    <footer class="bg-white p-2 ">
        <div class="container d-flex justify-content-center align-items-center position-relative">

            <!--LOGO COMPONENT-->
            <logo-component
            :ancho="70"
            class="figure"
            />
            <div class="separador ms-2"></div>

            <parrafo-component
            parrafo="Tribunal Electoral de la Ciudad de México"
            class="fs-6 pt-1 mt-3 ms-2"
            />
        </div>
    </footer>
    <!--END FOOTER-->
</template>

<script setup lang="ts">
    import LogoComponent from '@/components/layout/logos/LogoComponent.vue';
    import ParrafoComponent from '@/components/common/ParrafoComponent.vue';
</script>

<style lang="scss" scoped>

@import "@/assets/tecdmx/sass/jel/_var.scss";
    footer {
        border-top: $border-width $border-style $border-color-sereno;
    }

    .figure {
        margin-bottom: -12px;
    }

    .separador {
        width: 2px;
        height: $h-xs;
        background: $grey-claro;
        margin-top: 9px;
    }
</style>