<template>
  <!--begin::System Layout-->
  <div class="d-flex flex-column flex-root" id="kt_app_root">
    <router-view></router-view>
  </div>
  <!--end::System Layout-->
</template>

<script setup lang="ts">
import { defineComponent, onMounted } from "vue";
import { useBodyStore } from "@/stores/vista/body-store";

  const bodyStore   = useBodyStore();

  onMounted(async() => { 
    bodyStore.addBodyClassname("app-blank");
    bodyStore.addBodyClassname("bgi-size-cover");
    bodyStore.addBodyClassname("bgi-position-center");
    bodyStore.addBodyClassname("bgi-no-repeat");
  });

</script>
