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
                <div class="header__section__container">
                    <h5 class="text-start fs-6 ms-5 ps-1 pb-0 fw-bold p-1 t5">Sistema de Juicio en línea</h5>
                    <t-5-component :data="data"/>
                </div>
            </section>
            <!--END SECTION-->

            <!--SECTION-->
            <section class="header__section col-sm-12 col-md-5 col-lg-6 d-flex justify-content-end">
                <div class="header__section__container-header pe-4 h-sec-two">
                    <div class="header__section__container-header__cn ">
                        <div class="input-group input-group-sm mb-0 mt-1 p-1">
                            <input type="text" class="form-control" placeholder="Buscar" aria-label="Recipient's username" aria-describedby="button-addon2">
                            <button class="btn btn-outline-light border-top border-bottom border-end " type="button" id="button-addon2"><i class="bi bi-search text-secondary"></i></button>
                        <!--  <inpt-t-base
                            lbl="prueba"
                            />-->
                        </div>
                    </div>
                </div>
            </section>
            <!--END SECTION-->

        </div>
        <!--END ROW-->

    </header>
    <!--END HEADER-->
    
</template>

<script>

    import LogoComponent from '../../layout/logos/LogoComponent.vue'
    import T5Component from '../../layout/T5Component.vue'
    export default {
        name: 'HeaderApp',
        components: {
            LogoComponent,
            T5Component,
        },
        props: {
            data: {
                titulo: String
            }
        }
    }
</script>

<style lang="scss" scoped>


    .header {
        height:48px;
        top: 0px;
        left: 0px;
        &__section {
            &__figure {
                width: 100px;
                height: 48px;
                margin-left: 48px;
            }
            &__container-header {
                width: 398px;
                height: 48px;
                display: flex;
                align-items: center;
                &__cn {
                    width: 100%;
                    height: 48px;
                    &__cont-input {
                        width: 348px;
                        height: 28px;
                    &__input {
                        width: 100%;
                        height: 30px;
                        padding: 8px;
                        background: none;
                        border: none;
                        }
                    &__input::placeholder {
                        color: #535353;
                        font-size: 13px;
                    }
                    }
                    &__button {
                        width: 50px;
                        height: 30px;
                        &__btn-header {
                            border: none;
                            background: none;
                            padding: 2px 20px 2px 10px;
                            &__bi {
                                color: #535353;
                            }
                        }
                    }
                }
            }
        }
    }

    @media  screen and (max-width: 767px) {
        .h-sec-two {
            width: 90%;
        }

        .header__section__container-header__cn {
            position: relative;
            top: -18px;
            display: none;
        }
    }

</style>