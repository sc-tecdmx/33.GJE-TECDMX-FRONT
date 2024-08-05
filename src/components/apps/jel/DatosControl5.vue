<template>
    <div class="container-fluid w-100  mt-3">

            <T3Component
            titulo3="Roles"
            />
     
            <!--TABLE-->
           <tabla-control-acceso 
            :headers="tableHeaders" 
            :data="tableData"
            :limit="recordLimit"
            class="w-75"
           />
    </div>
</template>

<script setup lang="ts">

  
    import TablaControlAcceso from './TablaControlAcceso.vue';
    import T3Component from '@/components/layout/T3Component.vue';
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
        'Aplicación',
        'Módulo',
        'Pantalla',
        'Lectura',
        'Escritura',
        'Actualizar',
        'Borrar',
        'Público',
        ''
    ]);

    //DEFINIR LOS DATOS DE LA TABLA
    const tableData = ref<(number | string | TableDataItem)[][]>([
      ['Juicio en línea', 'Juicio en línea público', 'Térmnos', {icon: 'bi bi-check2-square fs-5 text-success'}, '', '', '', '', {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: '/inst/acceso/modal', texto: ' ' }],
      ['Juicio en línea', 'Juicio en línea público', 'Manuales', {icon: 'bi bi-check2-square fs-5 text-success'}, '', '', '', '', {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: '/inst/acceso/modal', texto: ' ' }],
      // MÁS REGISTROS...
    ]);

    const emit = defineEmits(['open-modal']);
    function openModal() {
    emit('open-modal');
    }

</script>

<style lang="scss" scoped>

</style>