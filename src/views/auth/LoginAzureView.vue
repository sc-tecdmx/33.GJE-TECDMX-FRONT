<!-- src/components/Login.vue -->
<template>
  <div>
    <div v-if="state.isAuthenticated">
      <div>Bienvenido, {{ state.user.name }}</div>
      <button @click="handleLogin">Salir</button>
    </div>
    <div v-else>
      <button @click="handleLogin">Ingresar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useAuth } from '@/core/services/AuthAzure'
import { myMSALObj, state } from '@/config/auth-azure-config'

const { login, logout, handleRedirect } = useAuth();

const handleLogin = async () => {
  await login();
}

const handleLogout = () => {
  logout();
}

const initialize = async () => {
  try {
    await myMSALObj.initialize();
  } catch (error) {
    console.log("Error de inicialización", error)
  }
}

onMounted(async () => {
  await initialize();
  await handleRedirect();
})

</script>