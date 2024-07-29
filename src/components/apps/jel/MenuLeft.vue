<template>
    <div class="menu-left z-3 position-fixed">
        <!--NAV-->
        <nav class="menu-left__nav">
            <ul class="menu-left__nav__ul">

                <!--LI 1-->
                <lista-menu 
                liClass="li"
                aClass="a"
                iconClass="bi bi-house-door ml"
                @click="inicio"
                />
                <!--END LI 1-->

                <!--LI 2-->
                <lista-menu 
                liClass="li"
                aClass="a"
                iconClass="bi bi-file-earmark-plus ml"
                @click="consultas"
                />
                <!--END LI 2-->

                <!--LI 3-->
                <lista-menu 
                liClass="li"
                aClass="a"
                iconClass="bi bi-envelope-check ml"
                @click="notificacion"
                />
                <!--END LI 3-->

                <!--LI 4-->
                <lista-menu 
                liClass="li"
                aClass="a"
                iconClass="bi bi-folder2-open ml"
                @click="expediente"
                />
                <!--END LI 4-->

                <!--LI 5-->
                <lista-menu 
                liClass="li"
                aClass="a"
                rutaName="ruta"
                iconClass="bi bi-question-circle ml"
                />
                <!--END LI 5-->
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

    function consultas() {
    router.push({ name: 'jel-consultas' });
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
        background: $bg-menu;
        bottom: $botton-n;
        left: $left-n;
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
            height: 48px;
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