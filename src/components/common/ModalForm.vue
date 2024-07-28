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
                <button class="btn-close close" @click="closeModal">&times;</button>
            </div>
            <!--END HEADER-->

            <!--BODY-->
            <div class="modal-body fs-6">
                <form @submit.prevent="handleSubmit" class="w-100 h-auto">
                    <inpt-t-base 
                    type="file"
                    lbl="Certificado"
                    v-model="certificado"
                    @change="handleFileUpload"
                    class="form-control form-control-sm"
                    />
                    <inpt-t-base 
                    type="file"
                    lbl="Clave privada"
                    v-model="firma"
                    @change="handleFileUpload"
                    class="form-control form-control-sm"
                    />
                    <inpt-t-base 
                    type="password"
                    lbl="Contraseña de la clave privada"
                    v-model="passs"
                    class="form-control form-control-sm"
                    />
                </form>
            </div>
            <!--END BODY-->

            <!--BTN-->
            <div class="modal-footer">

                <btn-base
                titulo="Firmar"
                class="btn"
                @click="handleConfirm"
                
                />
                <btn-base
                titulo="Cerrar"
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

    const props = defineProps<{
    title: string;
    show: boolean;
    }>();

    const emit = defineEmits<{
    (e: 'confirm'): void;
    (e: 'close'): void;
    }>();

    const closeModal = () => {
    emit('close');
    };

    const handleConfirm = () => {
    emit('confirm');
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