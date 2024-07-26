<template>
    <div class="shadow-sm rounded container-nav">
        <ul class="nav justify-content-center">

            <!--LI 1-->
            <lista-menu 
            liClass="nav-item"
            aClass="nav-link active text"
            rutaName="/PanelConsultas"
            iconClass="bi bi-search"
            texto="Consulta de información"
            />
            <!--END LI 1-->

            <!--LI 2-->
            <lista-menu 
            liClass="nav-item"
            aClass="nav-link disabled text"
            rutaName="/PanelPrincipal"
            iconClass="bi bi-megaphone-fill"
            texto="Promociones"
            />
            <!--END LI 2-->

            <!--LI 3-->
            <lista-menu 
            liClass="nav-item"
            aClass="nav-link disabled text"
            rutaName="/PanelPrincipal"
            iconClass="bi bi-bell-fill"
            texto="Notificaciones recibidas"
            />
            <!--END LI 3-->

            <!--LI 4-->
            <lista-menu 
            liClass="nav-item"
            aClass="nav-link disabled text"
            rutaName="/PanelPrincipal"
            iconClass="bi bi-check-all"
            texto="Notificaciones leídas"
            />
            <!--END LI 4-->
            
        </ul>
    </div>  
</template>

<script>

    import ListaMenu from '../../common/ListaMenu.vue'

    export default {
        name: 'MenuLayout',
        components: {
            ListaMenu,
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../assets/tecdmx/sass/jel/_var.scss";

    .container-nav {
        border: $border-width $border-style $border-color;
    }
</style>