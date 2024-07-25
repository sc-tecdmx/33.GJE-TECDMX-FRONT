<template>
    <!--VENTANA MODAL-->
    <div v-if="show" class="modal-overlay modal position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">

        <!--CONTENEDOR-->
        <div class="modal-overlay__modal-content p-3 rounded bg-white position-relative">

            <!--HEADER-->
            <div class="modal-header ">
                <h5 class="modal-title fs-6">{{ title }}</h5>
                <button class="btn-close close" @click="closeModal">&times;</button>
            </div>
            <!--END HEADER-->

            <!--BODY-->
            <div class="modal-body fs-6">
                {{ message }}
            </div>
            <!--END BODY-->

            <!--BTN-->
            <div class="modal-footer">
                <button class="btn btn-secondary" @click="closeModal">Continuar</button>
                <button class="btn btn-primary" @click="redirectToHome">Ir a Inicio</button>
            </div>
            <!--END BTN-->

        </div>
        <!--END CONTENEDOR -->

    </div>
    <!--END VENTANA MODAL-->
</template>

<script setup lang="ts">
    import { defineProps, defineEmits } from 'vue';

    const props = defineProps<{
    title: string;
    message: string;
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

    const redirectToHome = () => {
    emit('redirectToHome');
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

</style>