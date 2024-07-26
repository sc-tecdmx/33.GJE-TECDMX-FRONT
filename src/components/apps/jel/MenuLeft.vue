<template>
    <div class="menu-left">
        <!--NAV-->
        <nav class="menu-left__nav">
            <ul class="menu-left__nav__ul">

                <!--LI 1-->
                <lista-menu 
                liClass="li"
                aClass="a"
                rutaName="/"
                iconClass="bi bi-house-door ml"
                />
                <!--END LI 1-->

                <!--LI 2-->
                <lista-menu 
                liClass="li"
                aClass="a"
                rutaName="/jel/"
                iconClass="bi bi-file-earmark-plus ml"
                />
                <!--END LI 2-->

                <!--LI 3-->
                <lista-menu 
                liClass="li"
                aClass="a"
                rutaName="jel-notificaciones"
                iconClass="bi bi-envelope-check ml"
                />
                <!--END LI 3-->

                <!--LI 4-->
                <lista-menu 
                liClass="li"
                aClass="a"
                rutaName=""
                iconClass="bi bi-folder2-open ml"
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

    function exp() {
    router.push({ name: 'RegistroView' });
    }
</script>

<style lang="scss" scoped>

    * {
        margin: 0px;
        padding: 0px;
    }

    .menu-left {
        min-width: 48px;
        height: 100vh;
        background: #0a2241;
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 999;
        &__nav {
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            &__ul {
                width: 70%;
            }
        }
        &__container {
            width: 48px;
            height: 50px;
            position: fixed;
            bottom: 0px;
            display: flex;
            justify-content: center;
            &__icon-log {
                width: 40px;
                height: 40px;
            }
        }
      
    }
   
</style>