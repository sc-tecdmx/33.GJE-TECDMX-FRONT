<template>
    <!--CONTENEDOR-->
    <div class="contenedor">

        <contenedor-toggle 
            title="Datos Personales"
            :isOpenDefault="true"
            iconClass="bi bi-chevron-down"
            >
            <layout-user-registro/>
        </contenedor-toggle>

        <contenedor-toggle 
            title="Datos de domicilio"
            :isOpenDefault="false"
            iconClass="bi bi-chevron-down"
            >
            <layout-reg/>
        </contenedor-toggle>

        <contenedor-toggle 
            title="Datos de la cuenta de Juicio en línea"
            :isOpenDefault="false"
            iconClass="bi bi-chevron-down"
            >
            <layout-reg-dos/>
        </contenedor-toggle>

        <contenedor-toggle 
            title="FIREL O EFIRMA"
            :isOpenDefault="false"
            iconClass="bi bi-chevron-down"
            >
            <layout-f-registro/>
        </contenedor-toggle>

        <contenedor-toggle 
            title="Terminos y condiciones de uso"
            :isOpenDefault="false"
            iconClass="bi bi-chevron-down"
            >
            <layout-ter-con/>
        </contenedor-toggle>

    </div>
    <!--END CONTENEDOR-->
</template>

<script>

    import LayoutUserRegistro from './LayoutUserRegistro.vue'
    import LayoutFRegistro from './LayoutFRegistro.vue';
    import LayoutTerCon from './LayoutTerCon.vue';
    import LayoutRegDos from './LayoutRegDos.vue';
    import ContenedorToggle from '@/components/common/ContenedorToggle.vue';
    import EspaciadorBase from '@/components/common/EspaciadorBase.vue';
    import LayoutReg from '@/components/apps/jel/LayoutReg.vue'
    
    export default {
        name: 'LayoutUser',
        components: {
            LayoutUserRegistro,
            LayoutRegDos,
            ContenedorToggle,
            /* EspaciadorBase, */
            LayoutFRegistro,
            LayoutTerCon
        },
        methods: {
            cambiarLayout(layout) {
                this.layoutActual = layout;
                },
        }
    }
</script>

<style lang="scss" scoped>

</style>