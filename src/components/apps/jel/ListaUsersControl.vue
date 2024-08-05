<template>
    <div>
        <tabla-control-acceso
        :headers="tableHeaders" 
           :data="tableData"
           :limit="recordLimit"
           class="w-75"
        />
    </div>
</template>

<script setup lang="ts">
 
    import TablaControlAcceso from '../jel/TablaControlAcceso.vue'

    import { ref, onMounted } from 'vue';
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
        'Mombre',
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
   ['Juan Hernández', '', '', '', {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: 'ExpedienteView', texto: ' ' }, {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: 'ExpedienteView', texto: ' ' }],
      ['Mariana Ortíz', {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: 'ExpedienteView', texto: ' ' }, '', '', '',  {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: 'ExpedienteView', texto: ' ' }],
      ['Daniel Cazares', '' , '', {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: 'ExpedienteView', texto: ' ' }, '',  {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: 'ExpedienteView', texto: ' ' }],
      ['Daniel Cazares', '' , {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: 'ExpedienteView', texto: ' ' }, '', '',  {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: 'ExpedienteView', texto: ' ' }],
      
      // MÁS REGISTROS...
    ]);

  



</script>

<style lang="scss" scoped>

</style>