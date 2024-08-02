<template>
    <div class="container-fluid w-100  mt-2">

        <T3Component
        titulo3="Rol Ciudadano"
        />

        <!--TABLE-->
        <tabla-control-acceso 
        :headers="tableHeaders" 
        :data="tableData"
        :limit="recordLimit"
        class="w-75"
        />
        <!--END TABLE-->

        <!--BUTTON-->
        <!--<div class="container h-25 bg-primary mt-4 position-relative contenedor-btn">
            <btn-base
            titulo="Agregar Submódulo"
            class="btn btn-outline-primary shadow-none me-2"
            @click="$emit('open-modal', 'ModalControlAcceso3')"
            />
            <btn-base
            titulo="Agregar módulo"
            class="btn btn-outline-primary shadow-none me-4"
            @click="$emit('open-modal', 'ModalControlUsuario2')"
            />
        </div>-->

        

        <!--END BUTTON-->
    </div>
</template>

<script setup lang="ts">

    import BtnBase from '@/components/formulario/BtnBase.vue';
    import TablaControlAcceso from './TablaControlAcceso.vue';
    import T3Component from '@/components/layout/T3Component.vue';
    import BtnIcon from '@/components/formulario/BtnIcon.vue';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router'

    
    function roles() {
    router.push({ name: 'jel-rol' });
    }

    const router = useRouter();


     // DEFINIR TIPOS DE DATOS
     interface TableDataItem {
      li: string;
      icon: string;
      url: string;
      texto: string;
      boton: String;
    }

    // DEFIIR DATOS DEL HEADER DE LA TABLA
    const tableHeaders = ref<string[]>([
      'Submódulo',
      'Sección',
      'Lectura',
      'Escritura',
      'Actualizar',
      'Borrar', 
      'Público',
      'Editar'
    ]);

    //DEFINIR LOS DATOS DE LA TABLA
    const tableData = ref<(number | string | TableDataItem)[][]>([
      ['Juicio en Línea público', 'Términos', {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, '', '', '', '', {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: '/jel-modal', texto: ' ' }],
      ['Juicio en Línea público', 'Manuales', {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, '', '', '', '', {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: '/jel-rol', texto: ' ' }],
      ['Principal Juicio en línea', 'Demanda contra resoluciones', {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, '', {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: '/Modal', texto: ' ' }],
      ['Principal Juicio en línea', 'Demanda contra sentencias', {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, '', {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: '/jel-rol', texto: ' ' }],
      ['Principal Juicio en línea', 'Notificaciones', {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, '', {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: '/jel-rol', texto: ' ' }],
      ['Sisgae', 'Oficialia de Partes', {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, '', {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: '/jel-rol', texto: ' ' }],
      ['Sisgae', 'Secretaría General', {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, {li: 'li-icon', icon: 'bi bi-check2-square fs-5 text-success', url: ' ', texto: ' ' }, '', {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: '/jel-rol', texto: ' ' }],
      // MÁS REGISTROS...
    ]);

    const emit = defineEmits(['open-modal']);
    function openModal() {
    emit('open-modal');
    }

    // @click="$emit('open-modal', 'ModalControlAcceso3')"

</script>

<style lang="scss" scoped>

  .contenedor-btn {
    width: 100%;
  }

</style>