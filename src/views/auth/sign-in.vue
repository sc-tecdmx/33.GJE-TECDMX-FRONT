<template>
<div class="form auth-boxed">
    <div class="form-container outer">
        <div class="form-form">
            <div class="form-form-wrap">
                <div class="form-container">
                    <div class="form-content">
                        <h1 class="">Iniciar sesión</h1>
                        <p class="">Ingresar usuario y contraseña para continuar.</p>

                        <!--begin::Form-->
                        <VForm
                          class               = "text-start"
                          id                  = "id_signin_form"
                          @submit             = "onSubmitLogin"
                          :validation-schema  = "login"
                          :initial-values     ="{ email: 'admin@demo.com', password: 'demo' }"
                        >

                            <!--begin::Input group-->
                            <div class="field-wrapper input">
                                <!--begin::Label-->
                                <label>USUARIA(O)</label>
                                <!--end::Label-->

                                <!--begin::Input-->
                                <Field
                                  tabindex      = "1"
                                  class         = "form-control"
                                  type          = "text"
                                  name          = "email"
                                  autocomplete  = "off"
                                />
                                <!--end::Input-->
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="email" />
                                  </div>
                                </div>
                            </div>
                            <!--end::Input group-->
                        
                      <!--begin::Input group-->
<!-- +++++++++++++ -->                      
                      <!--begin::Input group-->
                        <div class="field-wrapper input mb-2">
                          <!--begin::Wrapper-->
                          <div class="d-flex justify-content-between">
                            <!--begin::Label-->
                            <label >CONTRASEÑA</label>
                            <!--end::Label-->

                            <!--begin::Link-->
                            <router-link to="/password-reset" class="forgot-pass-link">
                              ¿Olvidaste tu contraseña?
                            </router-link>
                            <!--end::Link-->
                          </div>
                          <!--end::Wrapper-->

                          <!--begin::Input-->
                          <Field
                            tabindex      = "2"
                            class         = "form-control form-control-lg form-control-solid"
                            type          = "password"
                            name          = "password"
                            autocomplete  = "off"
                          />
                          <!--end::Input-->
                          <div class="fv-plugins-message-container">
                            <div class="fv-help-block">
                              <ErrorMessage name="password" />
                            </div>
                          </div>
                        </div>
                      <!--end::Input group-->
<!-- +++++++++++++++++++++ -->                      
<!--begin::Actions-->

                    <div class="d-sm-flex justify-content-center">
                      <div class="field-wrapper row">
                        <div class="col-6">
                            <!--begin::Submit button-->
                            <button
                              tabindex  = "3"
                              type      = "submit"
                              ref       = "submitButton"
                              id        = "sign_in_submit"
                              class     = "btn btn-primary"
                            >
                              <span class="indicator-progress"> Judicial </span>
                            </button>
                            <!--end::Submit button-->

                        </div>
                        <div class="col-6">
                            <button
                              tabindex  = "3"
                              type      = "submit"
                              ref       = "submitButton"
                              id        = "kt_sign_in_submit"
                              class     = "btn btn-primary"
                            >
                              <span class="indicator-progress"> 
                                Administrativo </span>
                            </button>
                        </div>
                      </div>
                    </div>
                            
<!--end::Actions-->
                    <p class="signup-link">¿No estas registrado? 
                      <router-link to="/account/registro" class="signup-link">Crea una cuenta</router-link>
                    </p>
</VForm> 
                    </div>
                </div>  
            </div>
        </div>
    </div>
  </div>

 
</template>

<script setup lang="ts">

import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import  { useAuthStore, type User } from "@/stores/auth/auth-store"
import { useRouter } from "vue-router";

import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";

import '@/assets/tecdmx/sass/authentication/auth-boxed.scss';
    import IconFeatherUser from '@/assets/svg/IconFeatherUser.vue'
    import IconFeatherLock from '@/assets/svg/IconFeatherLock.vue'
    import IconLogoGoogle from '@/assets/svg/IconLogoGoogle.vue';
    
    const store         = useAuthStore();
    const router        = useRouter();
    const submitButton  = ref<HTMLButtonElement | null>(null);

    //Create form validation object
    const login         = Yup.object().shape({
      email: Yup.string().email().required().label("Email"),
      password: Yup.string().min(4).required().label("Password"),
    });

    const onSubmitLogin = async (values: any) => {
      console.log("--onSubmitLogin--")
      values = values as User;
      // Clear existing errors
      store.logout();

      if (submitButton.value) {
        // eslint-disable-next-line
        submitButton.value!.disabled = true;
        // Activate indicator
        submitButton.value.setAttribute("data-kt-indicator", "on");
      }

      // Send login request
      await store.login(values);
      const error = Object.values(store.errors);

      if (error.length === 0) {
        /* Swal.fire({
          text: "Autenticación confirmada!",
          icon: "Ingresar",
          buttonsStyling: false,
          confirmButtonText: "Ingresar!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semibold btn-light-primary",
          },
        }).then(() => {
          // Go to page after successfully login
          router.push({ name: "analisis" });
        }); */
        router.push({ name: "analisis" });
      } else {
        Swal.fire({
          text: error[0] as string,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Intenta de nuevo!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semibold btn-light-danger",
          },
        }).then(() => {
          store.errors = {};
        });
      }

      //Deactivate indicator
      submitButton.value?.removeAttribute("data-kt-indicator");
      // eslint-disable-next-line
        submitButton.value!.disabled = false;
    };



</script>
