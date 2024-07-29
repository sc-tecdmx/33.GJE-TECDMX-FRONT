<template>
    <!--LAYOUT-->
    <div class="layout">

    <!--MENÚ LAYOUT-->
        <menu-layout/>
    <!--END MENÚ LAYOUT-->

        <!--ROW-->
        <div class="row">
            <!--COL-MD-->
            <section class="col-md mt-5">
                <div @click="notificacionR" class="container mt-5 w-75 rounded shadow-sm p-2 dbtn">
                    <t-2-component 
                    titulo2="Notificaciones recibidas"
                    class="text-start"
                    />
                    <icon-base
                    iconClass="bi bi-bell-fill"
                    />
                    <p>1</p>
                </div>
            </section>
            <!--END COL-MD-->

            <!--COL-MD-->
            <section class="col-md mt-5">
                <div @click="notificacionL" class="container mt-5 rounded w-75 shadow-sm p-2 dbtn">
                    <t-2-component 
                    titulo2="Notificaciones leídas"
                    />
                    <icon-base
                    iconClass="bi bi-check-circle-fill"
                    />
                    <p>1</p>
                </div>
            </section>
            <!--END COL-MD-->

        </div>
        <!--END ROW-->

    </div>
    <!--LAYOUT-->
</template>

<script setup lang="ts">

    import { useRouter } from 'vue-router'
    import T2Component from '@/components/layout/T2Component.vue';
    import IconBase from '@/components/common/IconBase.vue';
    import MenuLayout from '@/components/apps/jel/MenuLayout.vue'

    const router = useRouter();

    function notificacionR() {
      router.push({ name: 'jel-dash' });
    }

    function notificacionL() {
      router.push({ name: 'jel-consultas' });
    }

</script>

<style lang="scss" scoped>

    @import "../../../assets/tecdmx/sass/jel/_var.scss";

    .dbtn {
        cursor: pointer;
        border: $border-width $border-style $border-color;
        &:hover {
            background: $colorHover;
        }
    }

    .bi {
        font-size: $iconLg;
    }

</style>