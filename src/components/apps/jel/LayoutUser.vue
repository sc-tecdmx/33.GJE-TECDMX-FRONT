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
            <layout-f-registo/>
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

<script setup lang="ts">

    import LayoutUserRegistro from '@/components/apps/jel/LayoutUserRegistro.vue'
    import LayoutTerCon from './LayoutTerCon.vue';
    import LayoutRegDos from './LayoutRegDos.vue';
    import ContenedorToggle from '@/components/common/ContenedorToggle.vue';
    import LayoutReg from '@/components/apps/jel/LayoutReg.vue';
    import LayoutFRegisto from '@/components/apps/jel/LayoutFRegistro.vue'

</script>

