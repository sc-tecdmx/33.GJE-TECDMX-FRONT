<template>
    <button 
    type="submit"
    >
    <icon-base
    :iconClass="iconClass"
    />  
    {{ titulo }}
    @click="{{  }}"
    </button>
</template>

<script setup lang="ts">
    import IconBase from '../common/IconBase.vue';

    
    interface Props {
    titulo: string;
    iconClass: string;
    boton: String
    }

    const props = defineProps<Props>();
</script>
