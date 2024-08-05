<template>
    <button 
   
   @click="handleClick"
    >
    <icon-base

    :iconClass="iconClass"
    />
    </button>
</template>

<script setup lang="ts">
    import IconBase from '../common/IconBase.vue';


    interface Props {
    texto: string;
    iconClass: string;
    }

// Define las propiedades y los eventos que el componente emitirá
const props = defineProps<Props>();
const emit = defineEmits<{ (event: 'open-modal', texto: string): void }>();

// Maneja el clic en el botón y emite el evento
const handleClick = () => {
  emit('open-modal', props.texto);
};

</script>
