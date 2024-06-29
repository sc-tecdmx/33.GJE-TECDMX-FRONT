<script setup lang="ts">
    import IconBuscar       from '@/assets/svg/IconBuscar.vue'
    import  useThemeStore from "@stores/vista/theme-store";
    const themeStore = useThemeStore();
</script>
<template>
    <ul class="navbar-item flex-row ms-md-0 ms-auto">
        <li
          class="nav-item align-self-center search-animated"
          :class="{ 'show-search': themeStore.state.is_show_search }"
        >
          <form class="form-inline search-full form-inline search"
                :class="{ 'input-focused': themeStore.state.is_show_search }"
          > <div class="search-bar">
              <input
                type="text"
                class="form-control search-form-control ms-lg-auto"
                placeholder="Buscar..."
              />
            </div>
          </form>
          <IconBuscar />
        </li>
      </ul>
</template>