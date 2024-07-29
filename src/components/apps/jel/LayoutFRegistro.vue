<template>
    <!--CONTAINER-->
    <div>

        <!--INPUT FILE-->
        <div class="form-group mt-3">
            <inpt-t-base 
            type="file"
            lbl="Selecciona tu archivo .cer"
            v-model="cer"
            @change="handleFileUpload"
            class="form-control form-control-sm"
            />
        </div>
        <!--END INPUT FILE-->

        <!--INPUT FILE-->
        <div class="form-group mt-3">
            <inpt-t-base 
            type="file"
            lbl="Selecciona tu archivo .key"
            v-model="key"
            @change="handleFileUpload"
            class="form-control form-control-sm"
            />
        </div>
        <!--END INPUT FILE-->

        <!--INPUT-->
        <div class="form-group mt-3">
            <inpt-t-base 
            type="password"
            lbl="Ingresa la contraseña de tu clave privada"
            v-model="passKey"
            class="form-control form-control-sm"
            />
        </div>
        <!--END INPUT-->

       <!--ESPACIADOR-->
       <espaciador-base
        :ancho="100" 
        :alto="48"
        />
        <!--END ESPACIADOR-->

    </div>
    <!--END CONTAINER-->
</template>

<script setup lang="ts">

    import InptTBase from '@/components/formulario/InptTBase.vue';
    import EspaciadorBase from '@/components/common/EspaciadorBase.vue';

</script>
