<template>
     <iframe v-if="selectedFile" :src="selectedFile.url" width="100%" height="600px" frameborder="0" class=""></iframe>
     <iframe v-else :src="url" width="100%" height="600px" frameborder="0" class=""></iframe>
</template>

<script setup lang="ts">


const props = defineProps<{
  selectedFile: TreeNode | null,
  url: String
}>();





</script>

<style lang="scss" scoped>

</style>