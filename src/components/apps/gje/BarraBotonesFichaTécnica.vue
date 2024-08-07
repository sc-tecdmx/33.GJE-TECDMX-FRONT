<template>
    <!-- .\Titulo y botón guardar   -->
    <div class="d-flex justify-end items-center bd-highlight mb-3">
        <div class="ml-2 p-1">
            <button type="button" class="btn btn-secondary" @click="$emit('onCancelar')"
                style="height: 100%; width: 110px;">Cancelar</button>
        </div>
        <div class="ml-2 p-1">
            <button :disabled="cargando" class="btn btn-secondary me-2" @click="$emit('onPrevisualizar')"
                style="height: 100%; width: 110px;">Previsualizar</button>
        </div>
        <div class="ml-2 p-1">
            <button :disabled="cargando" class="btn btn-primary me-2" @click="$emit('submitFormulario')"
                style="height: 100%; width: 110px;">
                <IconFeatherLoader v-if="guardando==true" />Guardar</button>
        </div>
        <div class="ml-2 p-1" v-if="props.n_id_medio_impugnacion !== 0">
            <button :disabled="props.cargando" class="btn btn-primary me-2" @click="$emit('onPublicar')"
                style="height: 100%; width: 110px;">Publicar</button>
        </div>
    </div>
    <!--./Titulo y botón buscar  -->
</template>
<script setup lang="ts">
import IconFeatherLoader from '@/assets/svg/IconFeatherLoader.vue';

interface Props {
    guardando: boolean,
    cargando: boolean,
    n_id_medio_impugnacion: number
}
const props = defineProps<Props>()
const emit = defineEmits<{
    (e: 'onCancelar'): void
    (e: 'onPrevisualizar'): void
    (e: 'submitFormulario'): void
    (e: 'onPublicar'): void
}>()


</script>