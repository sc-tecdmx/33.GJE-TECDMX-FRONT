<!-- src/components/Login.vue -->
<template>
  <div>
    <div v-if="state.isAuthenticated">
      <div>Bienvenido, {{ state?.user.name }}</div>
      <button @click="handleLogin">Salir</button>
    </div>
    <div v-else>
      <button @click="handleLogin">Ingresar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useAuthAzure } from '@/core/composables/useAuthAzure'

const { initializeMsal, login, logout, handleRedirect, registerAuthorizationHeaderInterceptor, state } = useAuthAzure()

const handleLogin = async () => {
  await login();
}

const handleLogout = () => {
  logout();
}

const handleInitialize = async () => {
  try {
    await await initializeMsal();
    registerAuthorizationHeaderInterceptor() // Call the initialize function
  } catch (error) {
    console.log("Error de inicialización", error)
  }
}

onMounted(async () => {
  await handleInitialize();
  await handleRedirect();
})

</script>