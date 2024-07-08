<template>
  <div v-if="authStore.isAuthenticated" class="dropdown nav-item user-profile-dropdown btn-group">
    <a href="javascript:;" id="ddluser" data-bs-toggle="dropdown" aria-expanded="false"
      class="btn dropdown-toggle btn-icon-only user nav-link">
      <img v-if="userInfo?.pathFotografia != null" :src="userInfo?.pathFotografia" alt="avatar" />
      <img v-else src="@/assets//tecdmx/images/profile_90x90.png" alt="avatar" />
    </a>
    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="ddluser">
      <li role="presentation">
        <router-link to="/account/perfil" class="dropdown-item">
          <IconFeatherUser></IconFeatherUser>
          Perfil
        </router-link>
      </li>
      <li role="presentation">
        <router-link to="/account/cambiar_contrasena" class="dropdown-item">
          <IconFeatherLock></IconFeatherLock>
          Cambio de contrase&ntilde;a
        </router-link>
      </li>
      <li role="presentation">
        <router-link to="#" class="dropdown-item">
          <IconFeatherSettings></IconFeatherSettings>
          Configuraci&oacute;n
        </router-link>
      </li>
      <li role="presentation">
        <router-link to="#" class="dropdown-item" @click="authStore.logout()">
          <IconFeatherLogout></IconFeatherLogout>
          Salir
        </router-link>
      </li>
    </ul>
  </div>
  <div v-else class="navbar-item flex-row ms-md-auto">
    <div class="d-flex justify-content-sm-end justify-content-center ms-4 me-4">
      <a class="d-flex align-items-center ms-4 " target="_blank" href="/auth/sign-in">Ingresar
        <IconFeatherArrowRight />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import useAuthStore from "@/stores/auth-store"
const authStore = useAuthStore();


import IconFeatherUser from '@/assets/svg/IconFeatherUser.vue';
// import IconFeatherInbox from '@/assets/svg/IconFeatherInbox.vue';
import IconFeatherLogout from '@/assets/svg/IconFeatherLogout.vue';
import IconFeatherLock from '@/assets/svg/IconFeatherLock.vue'
import IconFeatherSettings from '@/assets/svg/IconFeatherSettings.vue';
import IconFeatherArrowRight from '@/assets/svg/IconFeatherArrowRight.vue';

const token = authStore.user.api_token;
const userInfo = ref(null);
const user = JSON.parse(localStorage.getItem('data'));

async function obtenerUserInfo() {
  return await authStore.getUserInfo(user, token);
}
onMounted(async () => {
  userInfo.value = await obtenerUserInfo();
});
</script>