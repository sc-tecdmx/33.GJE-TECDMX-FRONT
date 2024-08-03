<template>
    <div class="container-fluid">
        <h1>text</h1>
        <tabla-control-acceso 
           :headers="tableHeaders" 
           :data="tableData"
           :limit="recordLimit"
           class="w-75"
           />
           <!--END TABLE-->

    </div>
</template>

<script >


    // DEFIIR DATOS DEL HEADER DE LA TABLA
   /* const tableHeaders = ref<string[]>([
      'Usuario',
      'Administrador',
      'Ponencia',
      'secretaría',
      'Ciudadano',
      'Asignar permiso'
    ]);

    //DEFINIR LOS DATOS DE LA TABLA
    const tableData = ref<(number | string | TableDataItem)[][]>([
   ['Juan Hernández', '', '', '', {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: 'ExpedienteView', texto: ' ' }, {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: 'ExpedienteView', texto: ' ' }],
      ['Mariana Ortíz', {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: 'ExpedienteView', texto: ' ' }, '', '', '',  {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: 'ExpedienteView', texto: ' ' }],
      ['Daniel Cazares', '' , '', {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: 'ExpedienteView', texto: ' ' }, '',  {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: 'ExpedienteView', texto: ' ' }],
      ['Daniel Cazares', '' , {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: 'ExpedienteView', texto: ' ' }, '', '',  {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: 'ExpedienteView', texto: ' ' }],
      
      // MÁS REGISTROS...
    ]);
*/
  

    //import TablaControlAcceso from '@/'

</script>

<style lang="scss" scoped>

</style>