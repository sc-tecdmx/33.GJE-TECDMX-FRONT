<template>

    <!--HEADER-->
    <header class="position-fixed top-0 bg-white start-0 w-100 z-1 header-ca">

        <div class="container-fluid">
            <div class="d-flex">
                <section class="d-flex">
                
                    <!--LOGO COMPONENT-->
                    <logo-component
                    :ancho="100"
                    />
                    <div class="header-ca__separator ms-2"></div>

                </section>

                <section class="w-100 d-flex justify-content-between align-items-center">

                    <p class="ps-3 parrafo fw-normal pb-2 fs-6">Control de acceso</p>
                    <!--CERRAR SESIÓN-->
                    <lista-menu 
                    liClass="nav-item text-start pb-3"
                    aClass="nav-link text"
                    iconClass="bi bi-box-arrow-left"
                    texto="Cesrar sesión"
                    @click=""
                    />

                </section>
            </div>
        </div>
    </header>
    <!--END HEADER-->
</template>

<script setup lang="ts">

    import LogoComponent from '../layout/logos/LogoComponent.vue';
    import ListaMenu from './ListaMenu.vue';

</script>

<style lang="scss" scoped>

@import "../../assets/tecdmx/sass/jel/_var.scss";

.header-ca {
    height: 54px;
    border-bottom: $border-width $border-style $border-color-gris;
    &__separator {
        width: 2px;
        height: 32px;
        background: $grey-claro;
        margin-top: 9px;
    }
        }

        .parrafo {
            color: $bg-dark;
        }

        .menu {
            width: 48px;
            height: 100%;
            
        }

        ul {
            height: 400px;
        }

        .bi {
            font-size: $text-md;
        }

        li {
            list-style: none;
            color: $bg-dark;
            font-size: 14px;
        }


</style>