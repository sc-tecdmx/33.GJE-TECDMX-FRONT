<template>
    <div class="menu-left z-3 position-fixed">
        <!--NAV-->
        <nav class="menu-left__nav">
            <ul class="menu-left__nav__ul">

                <!--LI 1-->
                <lista-menu 
                liClass="li-mleft "
                aClass="a a-transparent fw-light"
                texto="Inicio"
                iconClass="bi bi-house-door ml d-block position-fixed bg-dark start-0 ml-gen"
                @click="inicio"
                />
                <!--END LI 1-->

                <!--LI 2-->
                <lista-menu 
                liClass="li-mleft li-m"
                aClass="a a-transparent fw-light"
                 texto="Demanda"
                iconClass="bi bi-file-earmark-plus ml1 d-block position-fixed bg-dark start-0 ml-gen"
                @click="demanda"
                />
                <!--END LI 2-->

                <!--LI 3-->
                <lista-menu 
                liClass="li-mleft li-m1"
                aClass="a a-transparent fw-light"
                texto="Notificaciones"
                iconClass="bi bi-envelope-check ml2 d-block position-fixed bg-dark start-0 ml-gen"
                @click="notificacion"
                />
                <!--END LI 3-->

                <!--LI 4-->
                <lista-menu 
                liClass="li-mleft li-m2"
                aClass="a a-transparent fw-light"
                texto="Expediente"
                iconClass="bi bi-folder2-open ml3 d-block position-fixed bg-dark start-0 ml-gen"
                @click="expediente"
                />
                <!--END LI 4-->

                <!--LI 5-->
                <lista-menu 
                liClass="li-mleft li-m3"
                aClass="a a-transparent fw-light"
                texto="Promociones"
                iconClass="bi bi-file-earmark-check ml4 d-block position-fixed bg-dark start-0 ml-gen"
                @click="promociones"
                />
                <!--END LI 5-->

                <!--LI 6-->
                <lista-menu 
                liClass="li-mleft li-m4"
                aClass="a a-transparent fw-light"
                texto="Consultas"
                rutaName="ruta"
                iconClass="bi bi-search ml5 d-block position-fixed bg-dark start-0 ml-gen"
                @click="consultas"
                />
                <!--END LI 6-->

                <!--LI 7-->
                <lista-menu 
                liClass="li-mleft li-m5"
                aClass="a a-transparent fw-light"
                texto="Ayuda"
                rutaName="ruta"
                iconClass="bi bi-question-circle ml6 d-block position-fixed bg-dark start-0 ml-gen"
                />
                <!--END LI 7-->
            </ul>
        </nav>
        <!--END NAV-->

        <!--ICONO LOGIN-->
        <div class="menu-left__container">
            <div class="menu-left__container__icon-log">
                <imagen-login
                :ancho="40" 
                :alto="40"
                />
            </div>
        </div>
        <!--END ICONO LOGIN-->
    </div>
</template>

<script setup lang="ts">

    import ImagenLogin from '@/components/common/ImagenLogin.vue';
    import ListaMenu from '../../common/ListaMenu.vue';
    import { useRouter } from 'vue-router'
    const router = useRouter();

    function demanda() {
    router.push({ name: 'jel-demanda' });
    }
    function inicio() {
    router.push({ name: 'jel-dash' });
    }
    function notificacion() {
    router.push({ name: 'jel-notificaciones' });
    }

    function expediente() {
    router.push({ name: 'jel-expediente' });
    }

    function consultas() {
    router.push({ name: 'jel-consultas' });
    }

    function promociones() {
    router.push({ name: 'jel-promociones' });
    }
</script>

<style lang="scss" scoped>

    @import "../../../assets/tecdmx/sass/jel/_var.scss";

    * {
        margin: $margin-none;
        padding: $padding-none;
    }

    .menu-left {
        width: $w-sm;
        height: 100vh;
        background: $bg-dark;
        bottom: $botton-n;
        left: $left-n;
        transition: width .5s ease-in-out .02s;
        &__nav {
            width: $w-complate;
            height: auto;
            display: flex;
            justify-content: center;
            &__ul {
                width: 70%;
            }
        }
        &__container {
            width: $w-sm;
            height: 50px;
            position: fixed;
            bottom: $botton-n;
            display: flex;
            justify-content: center;
            &__icon-log {
                width: $w-40;
                height: $w-40;
            }
        }
      
    }

    @media screen and (max-width: 567px) {
        .menu-left {
            width: 100%;
            height: 54px;
            position: fixed;
            bottom: 0px!important;
            &__nav {
                justify-content: left;
                &__ul {
                    align-items: center;
                    display: flex;
                    align-items: center;
                    justify-content: left;
                }
            }
            &__container {
                right: $rigth-n;
                bottom: -1px!important;
            }
        }

        li {
            float: left;
            margin-top: 11px!important;
            margin-left: $margin-sm;
        }
    }


   
</style>