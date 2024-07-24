<script lang="ts" setup>
import { ref } from "vue";
/// import { useAsyncState } from '@vueuse/core'
import { useAuthStore } from "@/stores/m8-auth"
const authStore  = useAuthStore();
const router = useRouter()
import { useRouter } from 'vue-router';
import User from "@/core/interfaces/user.i"


const isRegister = 'Login';
const formStore  = ref<User>({ name:'', surname: '', email: '', password: '' ,api_token:'' })
const submitFormulario = async () => {
  console.log('submitFormulario');
  if ( authStore.login(formStore.value) ) {
    console.log('Autorizado')
      router.push({ name: 'sge-admin-listar' });
      
  }
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
            <h2 class="encabezado">Confirmar correo</h2>
            <!-- <router-link :to="isRegister ? '/login' : '/register'">
              {{ isRegister ? 'Have an account?' : 'Need an account?' }}
            </router-link>
            -->
          </p>
          <!-- <error-messages :errors="errors" /> -->
           
          <form @submit.prevent="submitFormulario">
            <fieldset class="form-group">
              <input
                v-model="formStore.email" required type="email" name="email" placeholder="Email @tecdmx.org.mx"
                class="form-control form-control-lg"
              >
            </fieldset>
            <!--
            <fieldset class="form-group">
              <input
                v-model="formStore.password" required name="password" type="password" placeholder="Password"
                class="form-control form-control-lg"
              >
            </fieldset>
            -->
            <button type="submit"  class="btn btn-lg btn-primary pull-xs-right">
              Ingresar
            </button>
          </form>
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