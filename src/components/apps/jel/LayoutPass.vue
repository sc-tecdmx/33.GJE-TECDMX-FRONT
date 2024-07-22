<template>
    <!--LAYOUT-->
    <div class="contenedor">

        <header-dark
        title="Recuperar contraseña"
        />
      
        <!--INPUT-->
        <div class="form-group mt-3">
            <inpt-t-base 
            type="text"
            lbl="Nombre de usurio"
            v-model="nombreUser"
            class="form-control"
            />
        </div>
        <!--END INPUT-->


        <!--INPUT-->
        <div class="form-group mt-3">
            <inpt-t-base 
            type="email"
            lbl="Correo Personal"
            v-model="correo"
            class="form-control"
            />
        </div>
        <!--END INPUT-->

        <!--BUTTONS-->
        <div class="form-group mt-4">
            <btn-base
            titulo="Recuperar contraseña"
            :colorFondo="color2"
            class="btn-guardar"
            @click="$emit('cambiarLayout', 'LoginPrincipal')"
            />
        </div>
        <!--END BUTTONS-->

        <!--ESPACIADOR-->
        <espaciador-base
        :ancho="100" 
        :alto="48"
        />
        <!--END ESPACIADOR-->

    </div>
    <!--END CONTAINER-->
</template>

<script>


    import BtnBase from '@/components/formulario/BtnBase.vue';
    import InptTBase from '@/components/formulario/InptTBase.vue'
    import HeaderDark from '../../common/HeaderDark.vue';
    import EspaciadorBase from '@/components/common/EspaciadorBase.vue';

    export default {
        name: 'LayoutPass',
        components: {
            HeaderDark,
            InptTBase,
            EspaciadorBase,
            BtnBase
        },
        methods: {
          
    }
}
</script>

<style lang="scss" scoped>

.btn-guardar {
        background: #0a2241;
    }
    .btn-cancelar {
        margin-right: 16px;
        background: #7B8C90;
    }

</style>