<template>
   <!--LOGO-->
   <div class="container d-flex justify-content-center mt-5 cont">
        <div class="d-flex justify-content-center mt-5 h-auto cont__logo">
            <!--LLAMAMOS EL LOGO-->
            <logo-component
            :ancho="150"
            />
        </div>
    </div>
    <!--END LOGO-->

    
    <!--FORMULARIO LOGIN-->
    <div class="container d-flex justify-content-center cont-login mt-4">
        
        <!--LLAMAMOS LA SOMBRA-->
        <sombra-log
        ancho="400"
        alto="260"
        />

        <!--CONTENEDOR LOGIN-->
        <div class="absoluto bg-white position-absolute d-flex justify-content-center">

            <!--FORMULARIO-->
            <form class="form mt-2 mb-2 absoluto__form" action="">
                
                <!--LLAMAMOS  A LOS FORMULARIOS DEL LOGIN-->
                <transition name="slide-scale" mode="out-in">
                    <!-- CONDICIONAL LAYOUT ACTUAL -->
                    <div v-if="layoutActual === 'FormLogin'" key="FormLogin">
                        <FormLogin />
                    </div>
                    <div v-else key="FirmaLogin">
                        <FirmaLogin />
                    </div>
                </transition>
            
                <!--OPCIONES DE SESIÓN-->
                <div class="form-group mt-0 position-relative absoluto__form__opc-sesion">
                    <lista-menu 
                    liClass="li-icon text-start"
                    aClass="nav-link m-2 fs-6"
                    iconClass="bi bi-key-fill fs-4 text-dark"
                    texto="Opciones de inicio de sesión"
                    @click="cambiarLayout"
                    />
                </div>
                <!--END OPCIONES DE SESIÓN-->

            </form>
            <!--END FORMULARIO-->

        </div>
        <!--END CONTENEDOR LOGIN-->

    </div>
    <!--END FORMULARIO LOGIN-->

    <!--REGISTRO-->
    <div class="container d-flex justify-content-center cont">
        <div class="cont__opciones-login mt-3">
            
            <ul class="nav justify-content-center mt-3">
                <lista-menu 
                liClass="li-icon"
                aClass="text-dark fs-6"
                rutaName=""
                texto="Registro"
                slash="/"
                spanClass="span"
                @click="registro"
                />
                <lista-menu 
                liClass="li-icon"
                aClass="text-dark fs-6"
                rutaName=""
                texto="Recuperar contraseña"
                @click="password"
                />
            </ul>

        </div>
    </div>
    <!--END REGISTRO-->
</template>

<script setup lang="ts">
    import LogoComponent from '@/components/layout/logos/LogoComponent.vue'
    import SombraLog from '@/components/common/SombraLog.vue';
    import FormLogin from '@/components/formulario/FormLogin.vue';
    import ListaMenu from '@/components/common/ListaMenu.vue';
    import FirmaLogin from '@/components/formulario/FirmaLogin.vue';
    import { useRouter } from 'vue-router'
    const router = useRouter();
    import { ref, computed } from 'vue';
    import { markRaw } from 'vue';
    

    function registro() {
      router.push({ name: 'jel-registro' });
    }
    function password() {
      router.push({ name: 'jel-pass' });
    }
    //MAPEA LOS NOMBRES DE LOS COMPONENTES
    const layoutMap = {
    FormLogin: markRaw(FormLogin),
    FirmaLogin: markRaw(FirmaLogin),
    };

    //COMPONENTEQUE INICIA
    const layoutActual = ref<'FormLogin' | 'FirmaLogin'>('FormLogin');
    const layoutActualComponent = computed(() => layoutMap[layoutActual.value]);

    // FUNCIÓN QUE ALTERNA LOS COMPONENTES
    function cambiarLayout() {
    layoutActual.value = layoutActual.value === 'FormLogin' ? 'FirmaLogin' : 'FormLogin';
    }
</script>

<style scoped lang="scss">

    @import "../../assets/tecdmx/sass/jel/_var.scss";

    .absoluto {
            width: 450px;
            height: 262px;
            top: 207px;
            &__form {
                width: 320px;
                height: auto;
                &__opc-sesion {
                    top: -14px;
                }
            }
    }

    .slide-scale-enter-active, .slide-scale-leave-active {
    transition: transform 0.5s, opacity 0.5s;
    }
    .slide-scale-enter-from, .slide-scale-leave-to {
    transform: translateX(100%) scale(0.5);
    opacity: 0;
    }
    .slide-scale-leave-from, .slide-scale-enter-to {
    transform: translateX(0) scale(1);
    opacity: 1;
    }
</style>