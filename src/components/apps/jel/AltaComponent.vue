<template>
    <!--FORM-->
    <form class="w-50 mt-5 mb-5 ms-2" action="">
                    
        <!--LLAMAMOS EL INPUT-->
        <lbl-base
        lbl="Ingresa la aplicación"
        />
        <!--INPUT GROUP-->
        <div class="input-group input-group-sm rounded contenedor__inpt-group ">
            <inpt-t-base
            type="text"
            class="form-control form-control-sm bg-transparent border-0"
            aria-label="Amount (to the nearest dollar)"
            placeholder=""
            />
            <!--ICON BUTTON-->
            <div class="input-group-append">
                <span
                    @click="$emit('open-modal', 'ModalControlUsuario')"
                    class="input-group-text rounded-0 border-0 contenedor__inpt-group__icon">
                    <icon-base
                    iconClass="bi bi-plus-lg"
                    />
                </span>
            </div>
            <!--END ICON BUTTON-->
        </div>
        <!--END INPUT GROUP-->

    </form>
    <!--END FORM-->
</template>

<script setup lang="ts">

    import LblBase from '@/components/formulario/LblBase.vue';
    import InptTBase from '@/components/formulario/InptTBase.vue';
    import IconBase from '@/components/common/IconBase.vue';
    import { ref} from 'vue';
    import { useRouter } from 'vue-router'
    const router = useRouter();
    const emit = defineEmits(['open-modal']);

    function openModal() {
    emit('open-modal');
    }

</script>

<style lang="scss" scoped>

@import "../../../assets/tecdmx/sass/jel/_var.scss";

.contenedor {
        background: $white;
        border: $border-width $border-style transparent;
        &__inpt-group {
            border: $border-width $border-style $border-color;
            &__icon {
                border-radius: 0px 4px 4px 0px!important;
            }
        }
       
    }

    .bi {
        font-size: $text-md;
    }

</style>