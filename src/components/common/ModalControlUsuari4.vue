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

                <!--FORM-->
                <form @submit.prevent="handleSubmit" class="w-100 h-auto">
                   
                    <!--INPUTS DINÁMICOS-->
                    <div v-for="input in inputs" :key="input.id" class="modal-input">

                        <inpt-t-base 
                        :type="input.type"
                        :lbl="input.label"
                        v-model="input.model"
                        class="form-control form-control-sm rounded mb-2"
                        />
                    </div>
                    <!--END INPUTS DINÁMICOS-->

                </form>
                <!--END FORM-->

            </div>
            <!--END BODY-->

            <!--BTN-->
            <div class="modal-footer">
                <btn-base
                titulo="Registrar"
                class="btn"
                type="button"
                 @click="selectLayout('DatosControl4')"
                />
                <btn-base
                titulo="Cerrar"
                type="button"
                class="btn btn-cancelar"
                @click="closeModal"
                />
            </div>
            <!--END BTN-->
        
        </div>
        <!--END CONTENEDOR -->

    </div>
    <!--END VENTANA MODAL-->
</template>

<script setup lang="ts">
    import InptTBase from '../formulario/InptTBase.vue';
    import BtnBase from '../formulario/BtnBase.vue';
    import { defineProps, defineEmits, ref } from 'vue';
    import LogoComponent from '../layout/logos/LogoComponent.vue';

    const props = defineProps<{
    title: string;
    show: boolean;
    inputs: Array<{ id: string; type: string; label: string; model: any }>;
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
    closeModal(); 
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