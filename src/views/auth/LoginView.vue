<script lang="ts" setup>
import { ref } from "vue";
const router = useRouter()
import { useRouter } from 'vue-router';

import { useAuthAzure } from '@/core/composables/useAuthAzure'
const { login, logout, state } = useAuthAzure()

const formStore = ref<User>({ name: '', surname: '', email: '', password: '', api_token: '' })
const submitFormulario = async () => {
  console.log('submitFormulario');
  if (authStore.login(formStore.value)) {
    console.log('Autorizado')
    router.push({ name: 'sge-admin-listar' });

  }
}
const handleLogin = async () => {
  await login()
}

const handleLogout = async () => {
  await logout()
}


</script>

<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">
            <!--    {{ isRegister ? 'Sign up' : 'Sign in' }}-->
          </h1>
          <p class="text-xs-center">
          <h3 class="encabezado">Ingresar con su correo institucional</h3>
          </p>
          <!-- <error-messages :errors="errors" /> -->

          <div>
            <!-- .\ Azure auth -->
            <div v-if="state.isAuthenticated">
              <div>Bienvenido, {{ state.user?.name }}.

              </div>
              <div>
                <h4>{{ state?.area }}</h4>
              </div>

              <button class="btn btn-lg btn-primary pull-xs-right" @click="handleLogout">Salir</button>&nbsp;
              <router-link to="/gje/admin"> Administración</router-link>
            </div>
            <div v-else>
              <button class="btn btn-lg btn-primary pull-xs-right" @click="handleLogin">Ingresar</button>
            </div>
            <!-- .\ Azure auth -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 75%;
  max-height: 80%;
  margin: auto;
  background: #FFFFFF;
  padding: 20px;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
}

.encabezado {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #002466;
}
</style>