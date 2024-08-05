<template>
        <T3Component
        titulo3="Nombre de Rol: Ciudaddano"
        />

        <tabla-control-acceso
        :headers="tableHeaders" 
        :data="tableData"
        :limit="recordLimit"
        class="w-75"
        />

          <!--BUTTON-->
            <div class="container h-25  float-start mt-4 contenedor-button">
                <btn-base
                titulo="Agregar usuario"
                class="btn btn-outline-primary shadow-none"
                 @click="showModal = true"
                />
                <modal-control-usuari-4

                title="Asignar Tipo de usuario"
                :show="showModal"
                :inputs="modalInputsVentana"
                @close="handleCloseModal"
                @submit="handleSubmitModal"
    />
           </div>

           <!--END BUTTON-->
        
</template>

<script setup lang="ts">

    import TablaControlAcceso from '../jel/TablaControlAcceso.vue';
    import BtnBase from '@/components/formulario/BtnBase.vue';
    import T3Component from '@/components/layout/T3Component.vue';
    import ModalControlUsuario3 from '@/componens/common/ModalControlUsuario3.vue';

    import ModalControlUsuari4 from '@/components/common/ModalControlUsuari4.vue';
 
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
        'Nombre',
        'Administrador',
        'Ponencia',
        'Secretaría',
        'Ciudadano',
        'Actualizar',
    ]);

 
    //DEFINIR LOS DATOS DE LA TABLA
    const tableData = ref<(number | string | TableDataItem)[][]>([
      ['Juan Hernández', {icon: 'bi bi-check2-square fs-5 text-success'}, '', '', '', {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: '/inst/acceso/modalUser', texto: ' ' }],
      ['Mariana Ortíz', '', '', '', { icon: 'bi bi-check2-square fs-5 text-success' },  {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: '/inst/acceso/modalUser', texto: ' ' }],
      ['Daniel Cazares', '' , '', {icon: 'bi bi-check2-square fs-5 text-success' }, '',  {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: '/inst/acceso/modalUSer', texto: ' ' }],
      ['José Luis', '' , {icon: 'bi bi-check2-square fs-5 text-success' }, '', '',  {li: 'li-icon', icon: 'bi bi-three-dots fs-5', url: '/inst/acceso/modalUSer', texto: ' ' }],
      // MÁS REGISTROS...
    ]);

    const emit = defineEmits(['open-modal']);
    function openModal() {
    emit('open-modal');
    }


// Estado del modal
const showModal = ref(false);

// Inputs del modal
const modalInputsVentana = ref([
  { id: '1', type: 'text', label: 'Nombre', model: '' },
]);

// Manejar el cierre del modal
const handleCloseModal = () => {
  showModal.value = false;
};

// Manejar el envío del formulario del modal
const handleSubmitModal = (inputs: Array<{ id: string; type: string; label: string; model: any }>) => {
  console.log('Datos del formulario:', inputs);
  showModal.value = false; // Cierra el modal después del envío
};

</script>

<style lang="scss" scoped>

    .contenedor-button {
        width:95%;
    }

</style>