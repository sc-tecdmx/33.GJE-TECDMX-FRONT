<template>
    <!--HEADER-->
    <header class="header bg-white position-fixed w-100 z-3">

        <!--ROW-->
        <div class="row">

            <!--SECTION-->
            <section class="header__section first-section col-sm-12 col-md-7 col-lg-6 d-flex">
                <logo-component 
                :ancho="100" 
                :alto="48"
                :Mleft="48"
                />
                <div class="header__section__separator ms-2"></div>
                <div class="header__section__container">
                    <parrafo-component
                    :parrafo="parrafo"
                    class="ps-3 parrafo fw-normal pb-2 fs-6"
                    />
                    <!--<h5 class="text-start h5 ms-3 mt-2 ps-2 pb-0 fw-bold p-1">Sistema de Juicio en línea</h5>-->
                    <!--<t-5-component :data="data"/>-->
                </div>
            </section>
            <!--END SECTION-->

            <!--SECTION-->
            <section class="header__section col-sm-12 col-md-5 col-lg-6 d-flex justify-content-end align-items-start">

                <!--CONTAINER HEADER-->
                <div class="header__section__container-header pe-4 h-sec-two w-100 ">

                   
                    <div class="header__section__container-header__cn d-flex justify-content-end align-items-start w-100">
                     
                        <!--FORM-->
                        <form class="mt-1" action="">

                            <div class="input-group input-group-sm rounded inp-group">
                                <div class="input-group-prepend">
                                <div class="input-group-text bg-transparent border-0">
                                        <icon-base
                                        iconClass="bi bi-search"
                                        />
                                    </div>
                                </div>
                                <inpt-t-base 
                                type="text"
                                lbl=""
                                v-model="buscar"
                                id="inlineFormInputGroupUsername"
                                class="form-control form-control-sm border-0"
                                placeholder="Buscar"
                                />
        
                            </div>

                        </form>
                        <!--END FORM-->
                         
                    </div>
                </div>
                <!--END CONTAINER HEADER-->

            </section>
            <!--END SECTION-->

        </div>
        <!--END ROW-->

    </header>
    <!--END HEADER-->
    
</template>

<script setup lang="ts">

    import LogoComponent from '../../layout/logos/LogoComponent.vue'
    import InptTBase from '@/components/formulario/InptTBase.vue';
    import IconBase from '@/components/common/IconBase.vue';
    import ParrafoComponent from '@/components/common/ParrafoComponent.vue';
   /* interface DataProps {
    titulo?: string;
    parrafo: string;
    }

    const props = defineProps<{ data: DataProps }>();
    */
    const props = defineProps<{
        parrafo: String;
    }>();
</script>

<style lang="scss" scoped>

    @import "../../../assets/tecdmx/sass/jel/var";

    .header {
        height: $w-sm;
        top: $w-none;
        left: $w-none;
        &__section {
            &__separator {
                width: 2px;
                height: 32px;
                background: $grey-claro;
                margin-top: 9px;
            }
            &__figure {
                width: 100px;
                height: $w-sm;
                margin-left: $w-sm;
            }
        }
    }

    .parrafo {
        color: $bg-dark;
        margin-top: 13px;
    }

    
    .inp-group {
        border: $border-width $border-style $border-color;
    }

    @media  screen and (max-width: 767px) {
        .h-sec-two {
            width: 90%;
        }

        .header__section__container-header__cn {
            position: relative;
            top: -18px;
            display: none!important;
        }
    }

</style>