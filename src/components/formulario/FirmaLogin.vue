<template>
    <!--LAYOUT LOGIN-->
    <div class="layout">

        <div class="input-group input-group-sm mt-1 shadow-sm p-0 d-flex align-items-center inpt-group ">
            <!--LLAMAMOS EL ICONO-->
            <span-form
            spanClass="input-group-text border-0 bg-transparent"
            iconClass="bi bi-patch-check-fill fs-5"
            />
            <!--LLAMAMOS EL INPUT-->
            <inpt-t-base
            lbl=""
            type="file"
            class="form-control form-control-sm border-0 inpt"
            />

        </div>
        <div class="input-group input-group-sm shadow-sm mb-1 mt-3 p-0 d-flex align-items-center inpt-group">
            <!--LLAMAMOS EL ICONO-->
            <span-form
            spanClass="input-group-text border-0 bg-transparent"
            iconClass="bi bi-key-fill fs-5"
            />
            <!--LLAMAMOS EL INPUT-->
            <inpt-t-base
            lbl=""
            type="file"
            class="form-control form-control-sm border-0 inpt"
            />
        </div>
        <div class="input-group input-group-sm shadow-sm  mb-1 mt-3 inpt-group">
            <!--LLAMAMOS EL ICONO-->
            <span-form
            spanClass="input-group-text border-0 bg-transparent"
            iconClass="bi bi-lock-fill fs-5"
            />
            <!--LLAMAMOS EL INPUT-->
            <inpt-t-base
            lbl=""
            type="password"
            class="form-control inpt bg-transparent border-0"
            placeholder="Contraseña de clave privada"
            />
        </div>

        <div class="form-group mt-3">
            <!--LLAMAMOS EL BOTÓN PERSONALIZADO-->
            <btn-lg
            colorFondo="#22252A"
            colorTexto="#FFFFFF"
            textBtn="LOGIN"
            ancho="100"
            alto="42"
            class="border-0 fs-6 rounded"
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
      router.push({ name: 'jel-dash' });
    }

    
</script>

<style lang="scss" scoped>
    .inpt-group {
        background: #E2E2E2;
        background:white;
        border: 1px solid rgba(128, 128, 128, 0.147);
        border-radius: 8px;
    }

    input::placeholder {
        color: #666666;
    }
</style>