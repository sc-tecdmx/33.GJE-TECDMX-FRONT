<template>
    <ul>
        <!--LI 1-->
        <lista-menu 
        liClass="nav-item text-start pt-3 pb-3"
        aClass="nav-link text a-none"
        iconClass="bi bi-plus-square-fill p-2 ps-0 fs-6"
        texto="Alta de aplicaciones"
        @click="altas"
        />
        <!--END LI 1-->

        <!--LI 2-->
        <lista-menu 
        liClass="nav-item text-start pb-3"
        aClass="nav-link text a-none"
        iconClass="bi bi-people-fill p-2 ps-0 fs-6"
        texto="Usuarios"
        @click="usuario"
        />
        <!--END LI 2-->

        <!--LI 3-->
        <lista-menu 
        liClass="nav-item text-start"
        aClass="nav-link text a-none"
        iconClass="bi bi-person-fill-gear p-2 ps-0 fs-6"
        texto="Asignar roles"
        @click="roles"
        />
        <!--END LI 3-->
    </ul>
</template>

<script setup lang="ts">

    import ListaMenu from '@/components/common/ListaMenu.vue';
    import T3Component from '@/components/layout/T3Component.vue';
    import { useRouter } from 'vue-router'
    const router = useRouter();

    function altas() {
    router.push({ name: 'jel-alta' });
    }
    function usuario() {
    router.push({ name: 'jel-usuarios' });
    }
    function roles() {
    router.push({ name: 'jel-permiso' });
    }

</script>

<style lang="scss" scoped>

    
    @import "@/assets/tecdmx/sass/jel/_var.scss";

    ul {
       height: 350px;
    }
    
    li {
            list-style: none;
            color: $bg-dark;
            font-size: $text-sm;
        }


</style>