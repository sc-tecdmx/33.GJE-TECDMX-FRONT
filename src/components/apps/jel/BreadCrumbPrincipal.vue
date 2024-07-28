<template>
  <!--BREADCRUMB-->
  <div class="sub-menu position-fixed d-flex z-1 w-100">

      <!--CONTENEDOR BREADCRUMB-->
      <div class="sub-menu__container d-flex align-items-center justify-content-center ms-5">
        
        <!--NAV-->
        <nav aria-label="breadcrumb">
          
          <!--OL-->
          <ol class="breadcrumb p-2 mt-3">

              <lista-menu
              v-for="(comp, index) in dynamicComponents"
              :key="index"
              :rutaName="comp.rutaName"
              :aClass="comp.aClass"
              :texto="comp.texto"
              :iconClass="comp.iconClass"
              :slash="comp.slash"
              :spanClass="comp.spanClass"
              />

          </ol>
          <!--END OL-->

        </nav>
        <!--END NAV-->

      </div>
      <!--END CONTENEDOR BREADCRUMB-->

  </div>
  <!--END BREADCRUMB-->

</template>

<script setup lang="ts">

    import { defineProps } from 'vue'
    import ListaMenu from '@/components/common/ListaMenu.vue';

    const props = defineProps<{
      dynamicComponents: any[];
    }>()
  
</script>

<style lang="scss" scoped>

  @import "../../../assets/tecdmx/sass/jel/var";
  .sub-menu {
          height: $w-sm;
          background: $claro-1;
          top: $w-sm;
          &__container {
              width: auto;
              height: $w-sm;
          }
      }

</style>