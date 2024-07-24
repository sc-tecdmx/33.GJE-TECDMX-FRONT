<template>
       <iframe v-if="pdfUrl" :src="pdfUrl" width="100%" height="600px" frameborder="0"></iframe>
</template>

<script setup lang="ts">

import { defineProps } from 'vue';
import { TreeNode } from '@/components/ts/types';

// Define los props que el componente hijo recibirá
const props = defineProps<{
  selectedFile: TreeNode | null;
}>();

// Verifica que `props.selectedFile` esté definido antes de acceder a su URL
const pdfUrl = props.selectedFile?.url || '';
</script>

<style lang="scss" scoped>

</style>