<template>
    <!--LAYOUT-->
    <div class="contenedor">

        <header-dark
        title="Recuperar contraseña"
        />
      
        <!--INPUT-->
        <div class="form-group mt-3">
            <inpt-t-base 
            type="text"
            lbl="Nombre de usurio"
            v-model="nombreUser"
            class="form-control form-control-sm"
            />
        </div>
        <!--END INPUT-->


        <!--INPUT-->
        <div class="form-group mt-1">
            <inpt-t-base 
            type="email"
            lbl="Correo Personal"
            v-model="correo"
            class="form-control form-control-sm"
            />
        </div>
        <!--END INPUT-->

        <!--BUTTONS Y VENTANA MODAL-->
        <div class="form-group mt-4">
            <btn-base
            titulo="Recuperar contraseña"
            class="btn-guardar"
            type="button"
            @click="openModal"
            />

            <btn-base
            titulo="Cancelar"
            class="btn-cancelar"
            @click="closeModal"
            />

            <ventana-modal
            :show="showModal"
            title="Restablecer contraseña"
            message="Hemos enviado un correo electrónico con las instrucciones para restablecer tu contraseña. Por favor, revisa tu bandeja de entrada y sigue las instrucciones proporcionadas. Si no encuentras el correo, verifica tu carpeta de spam o correo no deseado."
            @confirm="handleModalConfirm"
            />
        </div>
        <!--END BUTTONS Y VENTANA MODAL-->

        <!--ESPACIADOR-->
        <espaciador-base
        :ancho="100" 
        :alto="24"
        />
        <!--END ESPACIADOR-->

    </div>
    <!--END CONTAINER-->
</template>

<script setup lang="ts">

    import BtnBase from '@/components/formulario/BtnBase.vue';
    import InptTBase from '@/components/formulario/InptTBase.vue'
    import HeaderDark from '../../common/HeaderDark.vue';
    import EspaciadorBase from '@/components/common/EspaciadorBase.vue';
    import VentanaModal from '@/components/common/VentanaModal.vue';
    import { useRouter } from 'vue-router';
    import { ref,} from 'vue';

    
    //VENTANA MODAL
    const showModal = ref(false);
    const router = useRouter();

    const openModal = () => {
    showModal.value = true;
    };

    const closeModal = () => {
    showModal.value = false;
    };

    const handleModalConfirm = () => {
    console.log('Modal confirmed');
    showModal.value = false;
    };

</script>

<style lang="scss" scoped>

    @import "../../../assets/tecdmx/sass/jel/_var.scss";
    .btn-guardar {
            background: $btn-guardar;
            box-shadow: none;
        }
        .btn-cancelar {
            margin-right: $margin-sm;
            box-shadow: none;
            background: $btn-secondary;
        }

</style>