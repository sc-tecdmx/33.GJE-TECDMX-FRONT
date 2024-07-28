<template>
    <!--LAYOUT-->
    <div class="layout">

        <!--MENÚ LAYOUT-->
        <menu-layout />
        <!--END MENÚ LAYOUT-->

        <!--ROW-->
        <div class="row">
            <!--COL-MD-->
            <section class="col-md mt-4">
                <div @click="demanda" 
                    class="container mt-5 rounded w-75 shadow-sm p-2 dbtn">
                    <t-2-component 
                    titulo2="Presenta tu demanda"
                    class="text-start"
                    />
                    <icon-base
                    iconClass="bi bi-file-earmark-plus-fill"
                    />
                </div>
            </section>
            <!--END COL-MD-->

            <!--COL-MD-->
            <section class="col-md mt-4">
                <div @click="consulta" class="container mt-5 rounded w-75 shadow-sm p-2 dbtn">
                    <t-2-component 
                    titulo2="Consulta tu demanda"
                    />
                    <icon-base
                    iconClass="bi bi-search"
                    />
                </div>
            </section>
            <!--END COL-MD-->

        </div>
        <!--END ROW-->

    </div>
    <!--LAYOUT-->
</template>

<script setup lang="ts">

    import IconBase from '../../common/IconBase.vue';
    import T2Component from '../../layout/T2Component.vue';
    import MenuLayout from './MenuLayout.vue';
    import { useRouter } from 'vue-router'
    const router = useRouter();


    function demanda() {
      router.push({ name: 'jel-demanda' });
    }

    function consulta() {
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
        font-size: $iconMd;
    }

</style>