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
        <sombra-formulario />

        <!--CONTENEDOR LOGIN-->
        <div class="absoluto bg-white position-absolute d-flex justify-content-center">

            <!--FORMULARIO-->
            <form class="form mt-4 mb-2" action="">
                
                <div class="input-group input-group-sm mb-3 inpt-group">
                    <!--LLAMAMOS EL ICONO-->
                    <span-form
                    spanClass="input-group-text border-0 bg-transparent"
                    iconClass="bi bi-person-fill fs-4 text-dark"
                    />
                    <!--LLAMAMOS EL INPUT-->
                    <inpt-t-base
                    lbl=""
                    class="form-control inpt bg-transparent border-0"
                    placeholder="Usuario"
                    />
              
                </div>
                <div class="input-group input-group-sm mb-1 mt-4 inpt-group">
                    <!--LLAMAMOS EL ICONO-->
                    <span-form
                    spanClass="input-group-text border-0 bg-transparent"
                    iconClass="bi bi-lock-fill fs-4 text-dark"
                    />
                    <!--LLAMAMOS EL INPUT-->
                    <inpt-t-base
                    lbl=""
                    class="form-control inpt bg-transparent border-0"
                    placeholder="Contraseña"
                    />
                </div>

                <div class="form-group mt-4">
                    <!--LLAMAMOS EL BOTÓN PERSONALIZADO-->
                    <btn-lg
                    colorFondo="#22252A"
                    colorTexto="#FFFFFF"
                    textBtn="LOGIN"
                    ancho="100"
                    alto="48"
                    class="border-0 fs-6"
                    @click="registro"
                    />
                </div>

                <!--OPCIIONES DE SESIÓN-->
                <div class="form-group mt-2 ">
                    <lista-menu 
                    liClass="li-icon text-start"
                    aClass="nav-link m-2 fs-6"
                    rutaName="/PanelPrincipal"
                    iconClass="bi bi-key-fill fs-4 text-dark"
                    texto="Iniciar sesión con firma electrónica"
                    @click="registro"
                    />
                </div>
                <!--END OPCIIONES DE SESIÓN-->

            </form>
            <!--END FORMULARIO-->

        </div>
        <!--END CONTENEDOR LOGIN-->

    </div>
    <!--END FORMULARIO LOGIN-->

    <!--OPCIONES DE SESIÓN-->
    <div class="container d-flex justify-content-center cont">
        <div class="cont__opciones-login mt-3">
            
            <ul class="nav justify-content-center mt-3">
                <lista-menu 
                liClass="li-icon"
                aClass="text-dark fs-6"
                rutaName="PanelUser"
                texto="Registro"
                slash="/"
                spanClass="span"
                @click="login"
                />
                <lista-menu 
                liClass="li-icon"
                aClass="text-dark fs-6"
                rutaName="PanelPass"
                texto="Recuperar contraseña"
                @click="password"
                />
            </ul>

        </div>
    </div>
    <!--END OPCIONES DE SESIÓN-->
</template>

<script setup lang="ts">
    import LogoComponent from '@/components/layout/logos/LogoComponent.vue'
    import SombraFormulario from '@/components/common/SombraFormulario.vue'
    import InptTBase from '@/components/formulario/InptTBase.vue'
    import SpanForm from '@/components/common/SpanForm.vue'
    import BtnLg from '@/components/formulario/BtnLg.vue'
    import ListaMenu from '@/components/common/ListaMenu.vue';
    import { useRouter } from 'vue-router'
    const router = useRouter();



    function login() {
      //        this.$router.push('/PanelPrincipal');
      router.push({ name: 'jel-principal' });
    }
    function registro() {
      router.push({ name: 'jel-dash' });
    }
    function password() {
      router.push({ name: 'jel-consultas' });
    }
</script>
<style scoped>

    .inpt-group {
        background: #E2E2E2;

    }



    .logo {
        width: 100px!important;
    }

    .absoluto {
            width: 450px;
            height: 262px;
            top: 207px;
    }

    .form {
        width: 320px;
        height: auto;
    }

    input::placeholder {
        color: #666666;
    }

    .btn-guardar {
        background: #0a2241;
    }


</style>