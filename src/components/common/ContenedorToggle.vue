<template>
<div class="div-container">
    <div class="bg-dark p-3 text-start rounded border-bottom text-white d-flex justify-content-between h6 div-header" @click="toggle">
      {{ title }} 
     
      <span-form 
        v-if="isOpen"
        iconClass="bi bi-chevron-up"
        />
      <span-form 
      v-else
        :iconClass="iconClass"
        />


    </div>
    <transition name="fade">
      <div v-if="isOpen" class="bg-white p-2 mt-1">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">

    import SpanForm from './SpanForm.vue';
    import { ref } from 'vue';

    interface Props {
      title: string;
      iconClass: string;
      isOpenDefault?: boolean;
    }
    
    const props = defineProps<Props>();

    const isOpen = ref<boolean>(props.isOpenDefault ?? false);

    function toggle() {
      isOpen.value = !isOpen.value;
    }
</script>

<style lang="scss" scoped>

    .div-header {
      cursor: pointer;
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity 0.5s;
    }

    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
</style>