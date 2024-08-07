<template>
    <!--LAYOUT LOGIN-->
    <div class="layout">

        <div class="input-group input-group-sm mb-3 mt-4 shadow-sm inpt-group">
            <!--LLAMAMOS EL ICONO-->
            <span-form
            spanClass="input-group-text border-0 bg-transparent"
            iconClass="bi bi-person-fill fs-5"
            />
            <!--LLAMAMOS EL INPUT-->
            <inpt-t-base
            lbl=""
            class="form-control inpt bg-transparent border-0"
            placeholder="Usuario"
            />

        </div>
        <div class="input-group input-group-sm mb-1 mt-3 shadow-sm inpt-group">
            <!--LLAMAMOS EL ICONO-->
            <span-form
            spanClass="input-group-text border-0 bg-transparent"
            iconClass="bi bi-lock-fill fs-5 "
            />
            <!--LLAMAMOS EL INPUT-->
            <inpt-t-base
            lbl=""
            class="form-control inpt bg-transparent border-0"
            placeholder="Contraseña"
            />
        </div>

        <div class="form-group mt-4">
            <!--LLAMAMOS EL BOTÓN PERSONALIZADO-->
            <btn-lg
            colorFondo="#22252A"
            colorTexto="#FFFFFF"
            textBtn="LOGIN"
            ancho="100"
            alto="42"
            class="border-0 rounded fs-6"
            @click="login"
            />
        </div>
    </div>
    <!--END LAYOUT lOGIN-->
 
 
</template>

<script setup lang="ts">

    import InptTBase from '@/components/formulario/InptTBase.vue'
    import SpanForm from '@/components/common/SpanForm.vue'
    import BtnLg from '@/components/formulario/BtnLg.vue'
    import { useRouter } from 'vue-router'
    const router = useRouter();

    function login() {
      router.push({ name: 'jel-alta' });
    }
</script>

<style lang="scss" scoped>

    @import "../../assets/tecdmx/sass/jel/_var.scss";

    .inpt-group {
        background: $bg-inpt;
        background:$white;
        border: $border-width $border-style $border-color-grey;
        border-radius: $br-sm;
    }

    input::placeholder {
        color: $placeholder;
    }

    .bi {
        color: $placeholder!important;
    }
</style>