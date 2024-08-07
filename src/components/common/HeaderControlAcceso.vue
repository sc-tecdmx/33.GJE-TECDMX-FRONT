<template>
    <!--HEADER-->
    <header class="position-fixed top-0 start-0 w-100 z-1 bg-white header-ca">

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

                    <parrafo-component
                    :parrafo="parrafo"
                    class="ps-3 parrafo fw-normal pb-2 fs-6"
                    />

                    <lista-menu 
                    liClass="nav-item text-start pb-3 me-3"
                    aClass="nav-link text"
                    :iconClass="iconClass"
                    :texto="texto"
                    @click="login"
                    />

                </section>
            </div>
        </div>
    </header>
    <!--END HEADER-->

</template>

<script setup lang="ts">
    import LogoComponent from '../layout/logos/LogoComponent.vue';
    import ParrafoComponent from './ParrafoComponent.vue';
    import ListaMenu from './ListaMenu.vue';
    import { defineProps } from 'vue';
    import { useRouter } from 'vue-router'
    const router = useRouter();

    const props = defineProps<{
        iconClass: String;
        texto: String;
        parrafo: String;
    }>();

    function login() {
    router.push({ name: 'jel-Login' });
    }

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


    .bi {
        font-size: $text-md;
    }
    
    li {
        list-style: none;
        color: $bg-dark;
        font-size: $text-sm;
    }

</style>