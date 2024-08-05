<template>
   
    <!--HEADER-->
    <header class="position-fixed top-0 start-0 w-100 header-ca">

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

    <!--BREADCRUMS-->
    <bread-crumb-principal
     :dynamicComponents="components"
     />
     <!--END BREADCRUMS-->

    <!--LAYOUT-->
    <div class="layout w-100 h-auto d-flex h-50 d-inline-block justify-content-center mt-5 pt-4">

        <!--CONTAINER-->
        <div class="container-fluid mt-5 p-0 pt-2 rounded contenedor">



            <!--ROW-->
            <div class="row">

                <!--ASIDE-->
                <div class="w-25 aisde border-end position-fixed start-0">
                    <ul class="">
                        <!--LI 1-->
                        <lista-menu 
                        liClass="nav-item text-start pt-3 pb-3"
                        aClass="nav-link text"
                        iconClass="bi bi-plus-square-fill p-2"
                        texto="Alta de aplicaciones"
                        @click=""
                        />
                        <!--END LI 1-->

                        <!--LI 2-->
                        <lista-menu 
                        liClass="nav-item text-start pb-3"
                        aClass="nav-link text"
                        iconClass="bi bi-people-fill p-2"
                        texto="Usuarios"
                        @click="usuarios"
                        />
                        <!--END LI 2-->

                        <!--LI 3-->
                        <lista-menu 
                        liClass="nav-item text-start"
                        aClass="nav-link text"
                        iconClass="bi bi-person-fill-gear p-2"
                        texto="Asignar roles"
                        @click="consultas"
                        />
                        <!--END LI 3-->
                    </ul>
                </div>
                <!--END ASIDE-->

                <!--ARTICLE-->
                <div class="w-75 article position-absolute end-0 ps-5">

                    <t-1-component 
                    texto="Asignar Roles"
                    />
                    <tabla-modal/>
                </div>
                <!--END ARTICLE-->

            </div>
            <!--END ROW-->
           
        </div>
        <!--END CONTAINER-->
    </div>
    <!--END LAYOUT-->

</template>

<script setup lang="ts">
    import LogoComponent from '@/components/layout/logos/LogoComponent.vue';
    import BreadCrumbPrincipal from '@/components/apps/jel/BreadCrumbPrincipal.vue';
    import T1Component from '@/components/layout/T1Component.vue';
    import ListaMenu from '@/components/common/ListaMenu.vue';

    import TablaModal from '@/components/apps/jel/TablaModal.vue';

    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router'



    const router = useRouter();


    function consultas() {
    router.push({ name: 'jel-consultas' });
    }

    function usuarios() {
    router.push({ name: 'jel-usuarios' });
    }

</script>

<style lang="scss" scoped>

    @import "@/assets/tecdmx/sass/jel/_var.scss";

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