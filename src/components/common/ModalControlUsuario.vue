<template>
    <!--VENTANA MODAL-->
    <div v-if="show" class="modal-overlay modal position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">

        <!--CONTENEDOR-->
        <div class="modal-overlay__modal-content p-3 rounded bg-white position-relative">

            <!--HEADER-->
            <div class="modal-header ">
                <logo-component 
                :ancho="100" 
                :alto="48"
                :Mleft="0"
                class="me-3"
                />
                <h5 class="modal-title fs-6">{{ title }}</h5>
                <button type="button" class="btn-close close" @click="closeModal">&times;</button>
            </div>
            <!--END HEADER-->

            <!--BODY-->
            <div class="modal-body fs-6">
                <form @submit.prevent="handleSubmit" class="w-100 h-auto">
                    <inpt-t-base 
                    type="text"
                    lbl="Tipo de opción"
                    v-model="aplicacion"
                    class="form-control form-control-sm mb-2 rounded"
                    />
                    <inpt-t-base 
                    type="text"
                    lbl="Código"
                    v-model="codigo"
                    class="form-control form-control-sm mb-2 rounded"
                    />
                    <inpt-t-base 
                    type="text"
                    lbl="Nombre"
                    v-model="nombre"
                    class="form-control form-control-sm mb-2 rounded"
                    />
                    <inpt-t-base 
                    type="text"
                    lbl="Slug"
                    v-model="slug"
                    class="form-control form-control-sm rounded"
                    />
                </form>
            </div>
            <!--END BODY-->

            <!--BTN-->
            <div class="modal-footer">

                <btn-base
                titulo="Registrar"
                class="btn"
                type="button"
                 @click="selectLayout('layoutPrincipal')"
                />
                <btn-base
                titulo="Cerrar"
                type="button"
                class="btn btn-cancelar"
                @click="closeModal"
                />
            </div>

         

        </div>
        <!--END CONTENEDOR -->

    </div>
    <!--END VENTANA MODAL-->
</template>

<script setup lang="ts">
    import InptTBase from '../formulario/InptTBase.vue';
    import BtnBase from '../formulario/BtnBase.vue';
    import { defineProps, defineEmits } from 'vue';
    import LogoComponent from '../layout/logos/LogoComponent.vue';
    import { ref } from 'vue';
import LayoutPrincipal from '../apps/jel/LayoutPrincipal.vue';

    const props = defineProps<{
    title: string;
    show: boolean;
    }>();




    const handleConfirm = () => {
    emit('confirm');
    };



    const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'select-layout', layout: string): void;
}>();

const closeModal = () => {
  emit('close');
};

const selectLayout = (layout: string) => {
  emit('select-layout', layout);
  closeModal(); // Cierra el modal después de seleccionar el layout
};
</script>

<style lang="scss" scoped>

    @import "../../assets/tecdmx/sass/jel/_var.scss";

    .modal-overlay {
        background: $opacidad;
        &__modal-content {
            width: 80%;
            max-width: 500px;
        }
    }

    .btn-gurdar {
        background: $btn-guardar;
    }

    .btn-cancelar {
        background: $btn-secondary;
    }

    .btn {
        box-shadow: none;
        box-shadow: 0 .125rem .25rem rgba($black, .075);
    }
</style>