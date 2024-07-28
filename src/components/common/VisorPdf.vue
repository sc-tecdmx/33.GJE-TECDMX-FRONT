<template>
       <iframe v-if="pdfUrl" :src="pdfUrl" width="100%" height="600px" frameborder="0"></iframe>
</template>

<script setup lang="ts">

  import { defineProps } from 'vue';
  import { TreeNode } from '@/components/ts/types';


  const props = defineProps<{
    selectedFile: TreeNode | null;
  }>();

  const pdfUrl = props.selectedFile?.url || '';
</script>
