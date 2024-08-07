<template>
    <!--LAYOUT-->
    <div class="layout">

        <!--ROW-->
        <div class="row">
            <!--COL-MD-->
            <section class="col-md mt-2">
                <div  @click="$emit('cambiar-layout')" class="container mt-5 w-75 rounded shadow-sm p-2 dbtn">
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
            <section class="col-md mt-2">
                <div  @click="$emit('cambiar')" class="container mt-5 rounded w-75 shadow-sm p-2 dbtn">
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
    const router = useRouter();

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