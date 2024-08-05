<template>
    <div class="container-fluid w-100  mt-5">
     
            <!--TABLE-->
           <tabla-control-acceso 
            :headers="tableHeaders" 
            :data="tableData"
            :limit="recordLimit"
            class="w-75"
           />
           <!--BUTTON-->
           <div class="container h-25 float-start mt-4 ms-5 contenedor-button">
                <btn-base
                titulo="Agregar ventana"
                class="btn btn-outline-primary shadow-none ms-5"
                @click="$emit('open-modal', 'ModalControlUsuario4')"
                />
           </div>

           <!--END BUTTON-->
    </div>
</template>

<script setup lang="ts">

    import BtnBase from '@/components/formulario/BtnBase.vue';
    import TablaControlAcceso from './TablaControlAcceso.vue';
    import TablaPrueba from '@/components/apps/jel/TablaPrueba.vue'
    import { ref } from 'vue';
    import { useRouter } from 'vue-router'
    const router = useRouter();

     // DEFINIR TIPOS DE DATOS
     interface TableDataItem {
      li: string;
      icon: string;
      url: string;
      texto: string;
    }

    // DEFIIR DATOS DEL HEADER DE LA TABLA
    const tableHeaders = ref<string[]>([
      'Apliación',
      'Módulo',
      'Submodulo',
      'Pantalla',
      'Rol'
    ]);

    //DEFINIR LOS DATOS DE LA TABLA
    const tableData = ref<(number | string | TableDataItem)[][]>([
      ['Juicio en línea', 'Juicio en línea público', 'Ciudadano', 'Términos', {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: '/inst/acceso/permiso', texto: ' ' }],
      // MÁS REGISTROS...
    ]);

    const emit = defineEmits(['open-modal']);
    function openModal() {
    emit('open-modal');
    }

</script>

<style lang="scss" scoped>

        .contenedor-button {
            width: 91%;

        }
</style>