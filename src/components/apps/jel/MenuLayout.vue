<template>
    <div class="shadow-sm rounded container-nav">
        <ul class="nav justify-content-center">

            <!--LI 1-->
            <lista-menu 
            liClass="nav-item"
            aClass="nav-link text text-dark"
            iconClass="bi bi-search"
            texto="Consulta de información"
            @click="consultas"
            />
            <!--END LI 1-->

            <!--LI 2-->
            <lista-menu 
            liClass="nav-item"
            aClass="nav-link text text-dark"
            iconClass="bi bi-megaphone-fill"
            texto="Promociones"
            @click="promociones"
            />
            <!--END LI 2-->

            <!--LI 3-->
            <lista-menu 
            liClass="nav-item"
            aClass="nav-link text text-dark"
            iconClass="bi bi-bell-fill"
            texto="Notificaciones recibidas"
            @click="notificacionLeida"
            />
            <!--END LI 3-->

            <!--LI 4-->
            <lista-menu 
            liClass="nav-item"
            aClass="nav-link text text-dark"
            iconClass="bi bi-check-all"
            texto="Notificaciones leídas"
            @click="notificacionrecibida"
            />
            <!--END LI 4-->
            
        </ul>
    </div>  
</template>

<script setup lang="ts">

    import ListaMenu from '../../common/ListaMenu.vue'
    import { useRouter } from 'vue-router'
    const router = useRouter();


    function consultas() {
    router.push({ name: 'jel-consultas' });
    }

    function promociones() {
    router.push({ name: 'jel-promociones' });
    }

    function notificacionLeida() {
    router.push({ name: 'jel-notificaciones' });
    }

    function notificacionrecibida() {
    router.push({ name: 'jel-notificaciones' });
    }

</script>

<style lang="scss" scoped>
    @import "../../../assets/tecdmx/sass/jel/_var.scss";

    .container-nav {
        border: $border-width $border-style $border-color;
    }
</style>